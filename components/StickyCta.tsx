"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * A bottom call-to-action bar for phones and tablets.
 * Shows only after the hero (home) or a short scroll (about), and steps
 * aside when the page's own final CTA / footer is on screen.
 * Hidden on desktop and in short landscape via CSS (globals.css).
 */
export default function StickyCta() {
  const pathname = usePathname();
  const eligible = pathname === "/" || pathname === "/about";
  const [pastStart, setPastStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  // Reset when the route changes (adjust state during render, not in an effect).
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setPastStart(false);
    setAtEnd(false);
  }

  useEffect(() => {
    if (!eligible) return;

    // Past the start: the hero itself on home, or a
    // marker 600px down the page elsewhere. IntersectionObserver in both
    // cases, so no scroll handler runs.
    const sentinel =
      document.getElementById("hero-end") ??
      document.getElementById("cta-start");
    let cleanupStart = () => {};
    if (sentinel) {
      const io = new IntersectionObserver(([e]) => {
        setPastStart(!e.isIntersecting && e.boundingClientRect.bottom < 0);
      });
      io.observe(sentinel);
      cleanupStart = () => io.disconnect();
    }

    // Step aside when a final CTA / the footer is visible.
    const ends = new Set<Element>();
    const endIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) ends.add(e.target);
        else ends.delete(e.target);
      }
      setAtEnd(ends.size > 0);
    });
    document
      .querySelectorAll("[data-cta-end]")
      .forEach((el) => endIo.observe(el));

    return () => {
      cleanupStart();
      endIo.disconnect();
    };
  }, [eligible, pathname]);

  if (!eligible) return null;
  const show = pastStart && !atEnd;

  return (
    <>
      {/* Marker for pages without a hero: the bar appears once it's passed. */}
      <div
        id="cta-start"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
      />
      <div
        data-sticky-cta=""
        data-visible={show}
        aria-hidden={!show}
        inert={!show}
        className="sticky-cta"
      >
        <Link
          href="/contact"
          className="group flex min-h-12 w-full items-center justify-center gap-2 border border-transparent bg-ink px-6 text-base font-semibold text-paper transition-colors hover:bg-accent-deep active:scale-[0.98]"
        >
          Start your project
          <ArrowRight
            size={18}
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </>
  );
}
