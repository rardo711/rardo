"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
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

const EASE = [0.16, 1, 0.3, 1] as const;

const filterTabs: { id: WorkCategory; hash: string; label: string; count: number }[] = [
  { id: "all", hash: "#work-all", label: "All Work", count: 3 },
  { id: "commerce", hash: "#work-commerce", label: "Order Sites", count: 1 },
  { id: "brand", hash: "#work-brand", label: "Farm & Local Brands", count: 1 },
  { id: "software", hash: "#work-software", label: "Web Apps", count: 1 },
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
  const reduce = useReducedMotion();

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
    <div className="mt-12">
      {/* Fluid Segmented Filter Bar with Sliding Highlight */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <LayoutGroup id="work-filter-tabs">
          <div
            role="tablist"
            aria-label="Filter shipped work by category"
            className="inline-flex w-fit max-w-full flex-wrap gap-1 rounded-xl border border-line bg-wash/80 p-1"
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
                  className={`relative z-10 inline-flex min-h-9 items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="work-filter-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 -z-10 rounded-lg bg-surface shadow-xs"
                    />
                  )}
                  <span>{tab.label}</span>
                  <span
                    className={`tabular-nums text-[0.7rem] ${
                      active ? "text-accent-deep" : "text-ink-mute"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <p className="shrink-0 whitespace-nowrap font-tech text-xs uppercase text-ink-mute">
          Showing {visibleItems.length} of {items.length} shipped projects
        </p>
      </div>

      {/* Magazine-Style Project Spreads */}
      <div
        id="work-ledger-panel"
        role="tabpanel"
        aria-live="polite"
        className="relative mt-10 flex flex-col gap-12 lg:gap-16"
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((piece, idx) => {
            const flip = idx % 2 === 1;
            return (
              <motion.article
                layout
                key={piece.id}
                id={`work-${piece.id}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="card-editorial rounded-2xl p-5 sm:p-8 lg:p-10"
              >
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Media Column (7 cols) */}
                  <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <a
                      href={piece.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live site for ${piece.name} (opens in a new tab)`}
                      className="group/shot relative block overflow-hidden rounded-xl border border-line bg-wash"
                    >
                      {piece.image ? (
                        <Image
                          src={piece.image}
                          alt={piece.imageAlt}
                          width={1440}
                          height={1000}
                          className="aspect-[3/2] w-full object-cover object-top transition-transform duration-700 ease-out group-hover/shot:scale-[1.02]"
                          sizes="(min-width: 1024px) 55vw, 100vw"
                        />
                      ) : (
                        <div className="transition-transform duration-700 ease-out group-hover/shot:scale-[1.015]">
                          <TheosLogosPlate />
                        </div>
                      )}
                    </a>
                  </div>

                  {/* Story & Specifications Column (5 cols) */}
                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2.5 font-tech text-xs uppercase text-ink-mute">
                      <span className="font-display text-sm italic text-accent-deep">
                        {piece.index}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{piece.kind}</span>
                    </div>

                    <h3 className="mt-3 font-display text-[clamp(1.65rem,1.2rem+1.8vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                      {piece.name}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-ink-soft">
                      {piece.description}
                    </p>

                    {/* Clean Editorial Specification Rows */}
                    <dl className="mt-6 divide-y divide-line/80 border-y border-line/80 text-xs sm:text-sm">
                      {piece.specs.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-baseline justify-between gap-4 py-2.5"
                        >
                          <dt className="shrink-0 text-ink-mute">{row.label}</dt>
                          <dd className="text-right font-medium tabular-nums text-ink">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href="#inquire"
                        data-inquire-product={piece.inquireProduct}
                        className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep active:translate-y-0"
                      >
                        <span>Build something similar</span>
                        <ArrowRight
                          size={16}
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                      <a
                        href={piece.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/visit inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-line-strong bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-wash"
                      >
                        <span>Visit live site</span>
                        <span className="sr-only">
                          {" "}
                          for {piece.name} (opens in a new tab)
                        </span>
                        <ArrowUpRight
                          size={16}
                          aria-hidden
                          className="transition-transform duration-300 group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
