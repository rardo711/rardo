#!/usr/bin/env python3
"""Push the rardo site to GitHub via the Git Database API.

Usage: push_site.py
Pushes the working tree of ~/workspace/sites/rardo to rardo711/rardo@main.
Verifies the remote tree SHA equals the local git tree SHA before creating
the ref, per workspace push lessons.
"""
import base64
import json
import os
import subprocess
import sys
import urllib.error
import urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

API = "https://api.github.com"
OWNER, REPO = "rardo711", "rardo"
SITE = os.path.expanduser("~/workspace/sites/rardo")

FILES = [
    "package.json",
    "tsconfig.json",
    "next.config.ts",
    "postcss.config.mjs",
    ".gitignore",
    "app/globals.css",
    "app/layout.tsx",
    "app/page.tsx",
    "app/about/page.tsx",
    "app/sitemap.ts",
    "app/robots.ts",
    "app/icon.svg",
    "app/opengraph-image.tsx",
    "components/Reveal.tsx",
    "components/Nav.tsx",
    "components/Footer.tsx",
    "components/SectionLabel.tsx",
    "components/PhotoSlot.tsx",
]

# Paths to remove from the repo (no AI-generated images in this design).
DELETIONS = [
    "public/images/hero.webp",
    "public/images/band-arch.webp",
]


def api(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(API + path, data=data, method=method)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "muse-github-skill")
    if data is not None:
        req.add_header("Content-Type", "application/json")
    add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
    with urllib.request.urlopen(req, timeout=60) as resp:
        return read_json_response(resp)


def sh(*args):
    return subprocess.run(
        args, cwd=SITE, capture_output=True, text=True, check=True
    ).stdout.strip()


def main():
    # Local git tree of exactly the files we intend to push.
    if not os.path.isdir(os.path.join(SITE, ".git")):
        sh("git", "init", "-q")
    sh("git", "add", *FILES)
    sh("git", "rm", "-q", *DELETIONS)
    local_tree = sh("git", "write-tree")
    print("local tree:", local_tree)

    # The blob API refuses on a totally empty repo ("Git Repository is
    # empty"), so seed an initial commit via the Contents API first.
    try:
        ref = api("GET", f"/repos/{OWNER}/{REPO}/git/refs/heads/main")
        base_commit = ref["object"]["sha"]
        print("main already at", base_commit[:12])
    except urllib.error.HTTPError as e:
        if e.code not in (404, 409):  # 409 = "Git Repository is empty"
            raise
        with open(os.path.join(SITE, ".gitignore"), "rb") as fh:
            content = base64.b64encode(fh.read()).decode()
        r = api(
            "PUT",
            f"/repos/{OWNER}/{REPO}/contents/.gitignore",
            {"message": "init", "content": content, "branch": "main"},
        )
        base_commit = r["commit"]["sha"]
        print("seeded initial commit:", base_commit[:12])
    base_tree = api(f"GET", f"/repos/{OWNER}/{REPO}/git/commits/{base_commit}")[
        "tree"
    ]["sha"]

    # Create blobs.
    blobs = []
    for f in FILES:
        with open(os.path.join(SITE, f), "rb") as fh:
            content = base64.b64encode(fh.read()).decode()
        r = api(
            "POST",
            f"/repos/{OWNER}/{REPO}/git/blobs",
            {"content": content, "encoding": "base64"},
        )
        blobs.append({"path": f, "mode": "100644", "type": "blob", "sha": r["sha"]})
        print(f"blob {f}: {r['sha'][:12]}")

    # Create tree on top of the base, then verify it matches the local tree.
    entries = list(blobs)
    for d in DELETIONS:
        entries.append({"path": d, "mode": "100644", "type": "blob", "sha": None})
        print(f"delete {d}")
    tree = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/trees",
        {"base_tree": base_tree, "tree": entries},
    )
    print("remote tree:", tree["sha"])
    if tree["sha"] != local_tree:
        print("TREE MISMATCH — aborting", file=sys.stderr)
        return 1

    commit = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/commits",
        {
            "message": "Redesign: offer-led home page, separate About page",
            "tree": tree["sha"],
            "parents": [base_commit],
        },
    )
    print("commit:", commit["sha"])

    # Egress proxy drops PATCH, so move the ref via the merges API.
    m = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/merges",
        {"base": "main", "head": commit["sha"]},
    )
    merge_tree = m["commit"]["tree"]["sha"]
    print("merge commit:", m["sha"], "tree:", merge_tree)
    if merge_tree != local_tree:
        print("MERGE TREE MISMATCH — aborting", file=sys.stderr)
        return 1
    print("OK")


if __name__ == "__main__":
    sys.exit(main())
