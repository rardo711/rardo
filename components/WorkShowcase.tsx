import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
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
  outcome?: string;
  description: string;
  href: string;
  domainLabel: string;
  image?: string;
  imageAlt: string;
  inquireProduct: string;
  specs: WorkSpecRow[];
};

export default function WorkShowcase({ items }: { items: WorkPiece[] }) {
  return (
    <div className="mt-12 divide-y divide-line border-t border-line">
      {items.map((piece, idx) => {
        const flip = idx % 2 === 1;
        return (
          <article
            key={piece.id}
            id={`work-${piece.id}`}
            className="scroll-mt-24 py-12 first:pt-10 last:pb-0 lg:py-16"
          >
            <Reveal>
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Media Column (7 cols) framed in tactile gallery mat */}
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="editorial-mat rounded-2xl p-2.5 sm:p-3">
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
                    <div className="mt-2.5 flex items-center justify-between gap-3 px-1.5 font-tech text-[0.6875rem] tracking-[0.06em] text-ink-mute">
                      <span className="truncate">{piece.domainLabel}</span>
                      <span className="shrink-0 uppercase">
                        {piece.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story & Specifications Column (5 cols) breathing openly on paper */}
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-tech text-xs uppercase text-ink-mute">
                    <span className="font-display text-sm italic text-accent-deep">
                      {piece.index}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{piece.kind}</span>
                  </div>

                  <h3 className="mt-3 font-display text-[clamp(1.65rem,1.2rem+1.8vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
                    {piece.name}
                  </h3>

                  {piece.outcome && (
                    <p className="mt-4 border-l-2 border-accent pl-3.5 font-display text-sm italic text-ink">
                      {piece.outcome}
                    </p>
                  )}

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
                      <span>I want something like this</span>
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
                      className="group/visit inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-wash"
                    >
                      <span>Visit site</span>
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
            </Reveal>
          </article>
        );
      })}
    </div>
  );
}
