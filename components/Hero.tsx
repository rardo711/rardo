"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const specimens = [
  {
    id: "raemas",
    plate: "SPECIMEN 01 / 02",
    name: "RaeMa’s Remedies",
    category: "Direct Order System + Self-Editable Admin",
    location: "Tattnall County, Georgia",
    url: "https://raemas-remedies.vercel.app",
    urlLabel: "raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage showing handcrafted tallow skincare and herbal remedies with direct ordering.",
    inquireScope: "Site Inspired by RaeMa's Remedies",
    specs: [
      { k: "Client", v: "Rachael Harrelson (Family Wellness)" },
      { k: "Architecture", v: "One-Page Storefront + Inbox Order Ledger" },
      { k: "Owner Control", v: "Plain-language price, stock & photo editor" },
      { k: "Ongoing Fees", v: "$0/mo platform cut · 100% client owned" },
    ],
  },
  {
    id: "tallow",
    plate: "SPECIMEN 02 / 02",
    name: "Better Than Gold Tallow Co.",
    category: "One-Page Farm Brand & Product Ledger",
    location: "Southeast Georgia",
    url: "https://better-than-gold-tallow.vercel.app",
    urlLabel: "better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage over a golden pasture at sunrise in Southeast Georgia.",
    inquireScope: "Site Inspired by Better Than Gold Tallow Co.",
    specs: [
      { k: "Client", v: "Family Suet Tallow & Skincare Farm" },
      { k: "Source Material", v: "Built directly from print flyer & farm photos" },
      { k: "Architecture", v: "Mobile-first catalog + direct customer contact" },
      { k: "Turnaround", v: "7 days from free mockup to live launch" },
    ],
  },
] as const;

const heroSpecs = [
  {
    num: "01",
    label: "Proof First",
    value: "$0 Mockup",
    detail: "See your working page on a phone before paying a dime.",
  },
  {
    num: "02",
    label: "Turnaround",
    value: "7 Days",
    detail: "One focused week from mockup approval to live launch.",
  },
  {
    num: "03",
    label: "Pricing Model",
    value: "Flat Fee",
    detail: "Named upfront before work begins. Zero monthly retainer.",
  },
  {
    num: "04",
    label: "Ownership",
    value: "100% Yours",
    detail: "Edit your own hours, prices, and photos anytime.",
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = specimens[activeIdx];

  return (
    <section className="relative border-b border-line bg-paper">
      {/* Top Architectural Dossier Bar */}
      <div className="border-b border-line bg-wash/70">
        <div className="gutter mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 py-2.5 font-tech text-[0.6875rem] uppercase text-ink-soft lg:max-w-7xl">
          <span>Dossier No. 2026-GC · Independent Web Studio</span>
          <span className="hidden sm:inline">
            Glennville, Tattnall County, GA · 31.9407° N, 81.9296° W
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent-deep">
            <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
            Booking 1-Week Builds
          </span>
        </div>
      </div>

      <div className="gutter mx-auto max-w-6xl pb-14 pt-10 sm:pb-20 sm:pt-14 lg:max-w-7xl lg:pb-24 lg:pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (7 cols): Editorial Headline + Value Proposition */}
          <div className="lg:col-span-7 lg:pr-4">
            <p className="font-tech text-eyebrow font-semibold uppercase text-accent-deep">
              Gerardo Castaneda (&ldquo;Rardo&rdquo;) · Glennville, Georgia
            </p>
            <h1 className="mt-5 font-display text-display font-semibold text-ink">
              Plain-spoken websites that bring local{" "}
              <em className="font-normal italic text-accent-deep">customers</em>{" "}
              through your door.
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-ink-soft">
              Most small-town businesses don&apos;t need a ten-page agency
              brochure or a $150/month subscription. They need one fast,
              dependable page built for a customer&apos;s phone: what you sell,
              your current hours, where to find you, and a direct way to order
              or call.
            </p>

            {/* Primary & Secondary Conversion Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#inquire"
                data-inquire-product="One-Page Business Website"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] border border-ink bg-ink px-6 py-3 text-base font-semibold text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep sm:w-auto"
              >
                Commission a Free Mockup
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="#work"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[2px] border border-ink bg-surface px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-wash sm:w-auto"
              >
                Inspect Shipped Ledger (03)
              </Link>
            </div>

            {/* Concrete 4-Column Specification Grid */}
            <dl className="mt-12 grid grid-cols-2 gap-px border border-line-strong bg-line-strong sm:grid-cols-4">
              {heroSpecs.map((spec) => (
                <div
                  key={spec.num}
                  className="flex flex-col justify-between bg-surface p-4"
                >
                  <div>
                    <dt className="flex items-center justify-between font-tech text-[0.6875rem] uppercase text-ink-mute">
                      <span>{spec.label}</span>
                      <span className="text-accent-deep">{spec.num}</span>
                    </dt>
                    <dd className="mt-2 font-display text-2xl font-semibold tracking-tight tabular-nums text-ink">
                      {spec.value}
                    </dd>
                  </div>
                  <p className="mt-2 text-xs leading-snug text-ink-soft">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column (5 cols): Live Shipped Client Specimen Dossier */}
          <div className="lg:col-span-5">
            <div className="rounded-[2px] border border-ink bg-surface">
              {/* Specimen Switcher Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-wash px-4 py-2.5">
                <span className="font-tech text-[0.6875rem] font-semibold uppercase text-ink">
                  {active.plate} · Shipped Proof
                </span>
                <div
                  role="tablist"
                  aria-label="Select live client specimen"
                  className="flex items-center gap-1"
                >
                  {specimens.map((s, idx) => {
                    const isSelected = idx === activeIdx;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveIdx(idx)}
                        className={`rounded-[2px] border px-2.5 py-1 font-tech text-[0.6875rem] font-semibold uppercase transition-colors ${
                          isSelected
                            ? "border-ink bg-ink text-paper"
                            : "border-line-strong bg-paper text-ink-soft hover:border-ink hover:text-ink"
                        }`}
                      >
                        0{idx + 1} · {idx === 0 ? "RaeMa’s" : "Tallow Co."}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Screenshot Frame */}
              <div className="relative border-b border-line bg-paper p-3">
                <div className="overflow-hidden border border-line">
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    width={1440}
                    height={1000}
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="aspect-[3/2] w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Specimen Metadata & Key-Value Specs */}
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-tech text-[0.6875rem] font-semibold uppercase text-accent-deep">
                      {active.category}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
                      {active.name}
                    </h2>
                  </div>
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 font-tech text-xs font-semibold uppercase text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep"
                  >
                    Live Site
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </div>

                <dl className="mt-4 divide-y divide-line border-y border-line text-xs">
                  {active.specs.map((row) => (
                    <div
                      key={row.k}
                      className="flex items-baseline justify-between gap-4 py-2"
                    >
                      <dt className="font-tech uppercase text-ink-mute">
                        {row.k}
                      </dt>
                      <dd className="text-right font-medium text-ink">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="#inquire"
                    data-inquire-product={active.inquireScope}
                    className="group inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[2px] border border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
                  >
                    Request a Build Like {active.name}
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-end"
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />
    </section>
  );
}
