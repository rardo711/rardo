"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Reveal from "./Reveal";

/** One headline line. Rises out of a clip mask using CSS only (globals.css),
 *  so the text is in the server HTML and animates before JS loads. */
function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="-mb-[0.09em] block overflow-hidden pb-[0.09em]">
      <span
        className="hero-line block"
        style={{ "--d": `${0.05 + i * 0.09}s` } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -32]);

  // The glow drifts slowly toward the pointer (mouse only, large screens).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const glowX = useSpring(useTransform(px, [-0.5, 0.5], [-36, 42]), {
    stiffness: 25,
    damping: 18,
  });
  const glowY = useSpring(useTransform(py, [-0.5, 0.5], [-24, 32]), {
    stiffness: 25,
    damping: 18,
  });

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden border-b border-line"
    >
      <motion.div
        aria-hidden
        className="hero-glow"
        style={reduce ? undefined : { x: glowX, y: glowY }}
      />

      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="gutter relative mx-auto max-w-6xl pb-16 pt-20 sm:pb-24 sm:pt-28 lg:max-w-7xl lg:pb-28 lg:pt-36 short-landscape:pb-10 short-landscape:pt-10"
      >
        <Reveal eager>
          <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
            Gerardo Castaneda — Glennville, GA
          </p>
        </Reveal>
        <h1 className="mt-8 max-w-4xl font-display text-display font-semibold lg:max-w-6xl">
          <Line i={0}>I build websites</Line>
          <Line i={1}>
            that bring{" "}
            <em className="relative inline-block text-accent-deep">
              customers
              <span
                aria-hidden
                className="hero-underline absolute bottom-[0.06em] left-0 h-[0.07em] w-full bg-accent"
              />
            </em>
          </Line>
          <Line i={2}>through your door.</Line>
        </h1>
        <Reveal eager delay={0.1}>
          <p className="mt-8 max-w-xl text-lead text-ink-soft">
            I'm Rardo. I design and build simple, fast one-page websites
            for local businesses — who you are, what you do, your hours, and a
            way to call you.
          </p>
        </Reveal>
        <Reveal eager delay={0.14}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-transparent bg-ink px-7 py-3 text-base font-semibold text-paper transition-all hover:bg-accent-deep active:scale-[0.97] sm:w-auto"
            >
              Start your project
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ink px-7 py-3 text-base font-semibold transition-all hover:bg-ink hover:text-paper active:scale-[0.97] sm:w-auto"
            >
              See the work
            </Link>
          </div>
        </Reveal>
        <Reveal eager delay={0.14}>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-tech text-eyebrow uppercase text-ink-soft lg:mt-20">
            <span>One-page sites, one focused week</span>
            <span>Glennville, GA — works anywhere</span>
          </div>
        </Reveal>
      </motion.div>
      {/* The sticky CTA bar appears once this marker has scrolled past. */}
      <div id="hero-end" aria-hidden className="absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
