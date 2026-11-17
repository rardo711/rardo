"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TheosLogosPlate } from "./ServiceDiagrams";

export type WorkCategory = "all" | "commerce" | "brand" | "software";

export type WorkSpecRow = {
  label: string;
  value: string;
};

export type WorkPiece = {
  id: string;
  index: string;
  name: string;
  kind: string;
  category: Exclude<WorkCategory, "all">;
  location: string;
  description: string;
  href: string;
  domainLabel: string;
  image?: string;
  imageAlt: string;
  inquireProduct: string;
  specs: WorkSpecRow[];
};

const filterTabs: { id: WorkCategory; hash: string; label: string; count: string }[] = [
  { id: "all", hash: "#work-all", label: "All Shipped Builds", count: "03" },
  { id: "commerce", hash: "#work-commerce", label: "Order Systems", count: "01" },
  { id: "brand", hash: "#work-brand", label: "Farm & Local Brands", count: "01" },
  { id: "software", hash: "#work-software", label: "Web Applications", count: "01" },
];

function hashToCategory(hash: string): WorkCategory | null {
  const clean = hash.replace(/^#/, "").toLowerCase();
  if (clean === "work-all") return "all";
  if (clean === "work-commerce") return "commerce";
  if (clean === "work-brand") return "brand";
  if (clean === "work-software") return "software";
  return null;
}

export default function WorkShowcase({ items }: { items: WorkPiece[] }) {
  const [activeFilter, setActiveFilter] = useState<WorkCategory>("all");

  // Sync filter state with URL hash (#work-all, #work-commerce, #work-brand, #work-software)
  useEffect(() => {
    function syncFromHash() {
      const matched = hashToCategory(window.location.hash);
      if (matched) {
        setActiveFilter(matched);
      }
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function selectFilter(cat: WorkCategory, hash: string) {
    setActiveFilter(cat);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", hash);
    }
  }

  const visibleItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="mt-10">
      {/* Instant Accessible Filter Bar with URL Hash Sync */}
      <div className="flex flex-col gap-4 border-y border-line bg-wash p-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          aria-label="Filter shipped work by category"
          className="flex flex-wrap gap-2"
        >
          {filterTabs.map((tab) => {
            const active = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active}
                aria-controls="work-ledger-panel"
                onClick={() => selectFilter(tab.id, tab.hash)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-[2px] border px-3.5 py-1.5 font-tech text-xs font-semibold uppercase transition-colors ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line-strong bg-surface text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`tabular-nums ${
                    active ? "text-accent" : "text-ink-mute"
                  }`}
                >
                  [{tab.count}]
                </span>
              </button>
            );
          })}
        </div>
        <p className="font-tech text-xs uppercase tabular-nums text-ink-soft">
          Showing {visibleItems.length} of {items.length} Production Builds
        </p>
      </div>

      {/* Unified Production Ledger */}
      <div
        id="work-ledger-panel"
        role="tabpanel"
        aria-live="polite"
        className="mt-8 flex flex-col gap-12 lg:gap-16"
      >
        {visibleItems.map((piece) => (
          <article
            key={piece.id}
            id={`work-${piece.id}`}
            className="rounded-[2px] border border-ink bg-surface"
          >
            {/* Structured Metadata Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-wash px-5 py-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-tech text-xs font-bold uppercase text-accent-deep">
                  NO. {piece.index}
                </span>
                <span aria-hidden className="text-line-strong">
                  |
                </span>
                <span className="font-tech text-xs font-semibold uppercase text-ink">
                  {piece.kind}
                </span>
                <span aria-hidden className="hidden text-line-strong sm:inline">
                  |
                </span>
                <span className="hidden font-tech text-xs uppercase text-ink-soft sm:inline">
                  {piece.location}
                </span>
              </div>
              <a
                href={piece.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-tech text-xs font-semibold uppercase text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-deep"
              >
                <span>{piece.domainLabel}</span>
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>

            {/* Asymmetric 12-Col Specimen Body */}
            <div className="grid items-stretch lg:grid-cols-12">
              {/* Left 7 Cols: Media Specimen */}
              <div className="border-b border-line bg-paper p-4 sm:p-6 lg:col-span-7 lg:border-b-0 lg:border-r">
                <a
                  href={piece.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Inspect live site for ${piece.name} (opens in a new tab)`}
                  className="group/shot relative block overflow-hidden border border-line bg-wash"
                >
                  {piece.image ? (
                    <Image
                      src={piece.image}
                      alt={piece.imageAlt}
                      width={1440}
                      height={1000}
                      className="aspect-[3/2] w-full object-cover object-top transition-transform duration-300 ease-out group-hover/shot:scale-[1.01]"
                      sizes="(min-width: 1024px) 55vw, 100vw"
                    />
                  ) : (
                    <TheosLogosPlate />
                  )}
                </a>
              </div>

              {/* Right 5 Cols: Editorial Brief + Structured Key-Value Specifications */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
                    {piece.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {piece.description}
                  </p>

                  {/* Structured Key-Value Specification Rows (Replaces floating pill tags) */}
                  <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
                    {piece.specs.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4 py-2.5"
                      >
                        <dt className="font-tech text-xs uppercase text-ink-mute">
                          {row.label}
                        </dt>
                        <dd className="text-right font-medium tabular-nums text-ink">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Dual Conversion & Inspection Action Bar */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#inquire"
                    data-inquire-product={piece.inquireProduct}
                    className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-[2px] border border-ink bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
                  >
                    <span>Inquire About Similar Build</span>
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-[2px] border border-ink bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-wash"
                  >
                    <span>Visit Live</span>
                    <span className="sr-only"> {piece.name} (opens in a new tab)</span>
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
