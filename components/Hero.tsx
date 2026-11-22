"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const specimens = [
  {
    id: "raemas",
    shortLabel: "RaeMa’s Remedies",
    name: "RaeMa’s Remedies",
    category: "Order Site & Edit Screen",
    location: "Tattnall County, GA",
    url: "https://raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage showing handcrafted tallow skincare and herbal remedies with direct ordering.",
    summary:
      "Instead of taking orders over DMs, customers pick what they want on the site and the order lands straight in her email.",
  },
  {
    id: "tallow",
    shortLabel: "Better Than Gold",
    name: "Better Than Gold Tallow Co.",
    category: "One-Page Site",
    location: "Southeast Georgia",
    url: "https://better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage over a golden pasture at sunrise in Southeast Georgia.",
    summary:
      "Built straight from her market flyer and farm photos — what she makes, her story, and an easy way to order.",
  },
] as const;

const studioPromises = [
  {
    value: "Free mockup",
    detail: "See a working draft on your phone before you pay anything",
  },
  {
    value: "One flat fee",
    detail: "Told upfront, with no monthly bills from me",
  },
  {
    value: "About a week",
    detail: "Built and online without dragging it out",
  },
  {
    value: "100% yours",
    detail: "Update hours & items yourself · Hablo español",
  },
];

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="-mb-[0.2em] block overflow-hidden pb-[0.2em]">
      <span
        className="hero-line block"
        style={{ "--d": `${0.02 + i * 0.06}s` } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduce = useReducedMotion();
  const active = specimens[activeIdx];

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      {/* Subtle Natural Porch Glow ambient daylight & sky mist */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(202,160,107,0.16)_0%,transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(121,144,170,0.08)_0%,transparent_68%)]"
      />

      <div className="gutter relative mx-auto max-w-6xl pb-16 pt-12 sm:pb-20 sm:pt-16 lg:max-w-7xl lg:pb-24 lg:pt-20 short-landscape:pb-12 short-landscape:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (7 cols): Expressive Editorial Headline & Story */}
          <div className="lg:col-span-7 lg:pr-4">
            <Reveal eager>
              <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                Gerardo Castaneda · Glennville, Georgia
              </p>
            </Reveal>

            <h1 className="mt-5 font-display text-display font-semibold text-ink">
              <Line i={0}>Websites that</Line>
              <Line i={1}>
                bring local{" "}
                <em className="relative inline-block font-normal italic text-accent-deep">
                  customers
                  <span
                    aria-hidden
                    className="hero-underline absolute -bottom-[0.04em] left-0 h-[0.055em] w-full rounded-full bg-accent/85"
                  />
                </em>
              </Line>
              <Line i={2}>through your door.</Line>
            </h1>

            <Reveal eager delay={0.1}>
              <p className="mt-7 max-w-xl text-lead text-ink-soft">
                I&apos;m Rardo. I build simple, fast websites for local
                businesses — one-page sites, order forms that go straight to
                your email, and pages you can update yourself from your phone.
                Who you are, what you sell, when you&apos;re open, and how to
                reach you.
              </p>
            </Reveal>

            <Reveal eager delay={0.14}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#inquire"
                  data-inquire-product="One-Page Business Website"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-ink px-7 py-3.5 text-base font-semibold text-paper shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep active:translate-y-0 sm:w-auto"
                >
                  <span>Start with a free mockup</span>
                  <ArrowRight
                    size={17}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <Link
                  href="#work"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-7 py-3.5 text-base font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-wash sm:w-auto"
                >
                  See my work
                </Link>
              </div>
            </Reveal>

            {/* Open, breathable studio promises */}
            <Reveal eager delay={0.18}>
              <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
                {studioPromises.map((item) => (
                  <div key={item.value} className="flex flex-col">
                    <dt className="font-display text-lg font-semibold leading-snug tracking-tight tabular-nums text-ink xl:text-[1.1875rem]">
                      {item.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Focused Live Proof Preview Card */}
          <Reveal eager delay={0.12} className="lg:col-span-5">
            <div className="card-editorial rounded-2xl p-4 sm:p-5">
              {/* Segmented Switcher with Sliding Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5">
                <span className="font-tech text-[0.7rem] font-medium uppercase text-ink-mute">
                  Recent Work
                </span>
                <LayoutGroup id="hero-specimens">
                  <div
                    role="tablist"
                    aria-label="Preview recent client websites"
                    className="inline-flex rounded-xl border border-line bg-wash/80 p-1"
                  >
                    {specimens.map((s, idx) => {
                      const isSelected = idx === activeIdx;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          role="tab"
                          id={`hero-tab-${s.id}`}
                          aria-selected={isSelected}
                          aria-controls={`hero-panel-${s.id}`}
                          onClick={() => setActiveIdx(idx)}
                          className={`relative z-10 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                            isSelected
                              ? "text-ink"
                              : "text-ink-soft hover:text-ink"
                          }`}
                        >
                          {isSelected && (
                            <motion.span
                              layoutId="hero-specimen-pill"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                              }}
                              className="absolute inset-0 -z-10 rounded-lg bg-surface shadow-xs"
                            />
                          )}
                          {s.shortLabel}
                        </button>
                      );
                    })}
                  </div>
                </LayoutGroup>
              </div>

              {/* Live Proof Preview Body */}
              <div
                role="tabpanel"
                id={`hero-panel-${active.id}`}
                aria-labelledby={`hero-tab-${active.id}`}
              >
                <motion.div
                  key={active.id}
                  initial={reduce ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: EASE }}
                >
                  {/* Screenshot with gentle hover scale */}
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${active.name} (opens in a new tab)`}
                    className="group/shot relative block overflow-hidden rounded-xl border border-line bg-wash"
                  >
                    <Image
                      src={active.image}
                      alt={active.imageAlt}
                      width={1440}
                      height={1000}
                      preload
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="aspect-[3/2] w-full object-cover object-top transition-transform duration-700 ease-out group-hover/shot:scale-[1.025]"
                    />
                  </a>

                  <div className="mt-4 pt-1">
                    <p className="font-tech text-[0.6875rem] font-medium uppercase text-accent-deep">
                      {active.category} · {active.location}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-semibold leading-tight tracking-tight text-ink sm:text-[1.375rem]">
                      {active.name}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      {active.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-line/80 pt-4">
                      <a
                        href={`#work-${active.id}`}
                        className="group/details inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-wash px-4 py-2.5 text-xs font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                      >
                        <span>More about this</span>
                        <ArrowDown
                          size={14}
                          aria-hidden
                          className="transition-transform duration-300 group-hover/details:translate-y-0.5"
                        />
                      </a>
                      <a
                        href={active.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/visit inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-line-strong bg-paper/70 px-4 py-2.5 text-xs font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-wash"
                      >
                        <span>Visit site</span>
                        <span className="sr-only">
                          {" "}
                          for {active.name} (opens in a new tab)
                        </span>
                        <ArrowUpRight
                          size={14}
                          aria-hidden
                          className="transition-transform duration-300 group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>
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
