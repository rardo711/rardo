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
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="-mb-[0.09em] block overflow-hidden pb-[0.09em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Underline() {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span
        aria-hidden
        className="absolute bottom-[0.06em] left-0 h-[0.07em] w-full bg-accent"
      />
    );
  }
  return (
    <motion.span
      aria-hidden
      className="absolute bottom-[0.06em] left-0 h-[0.07em] w-full origin-left bg-accent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1.05, duration: 0.75, ease: EASE }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const glowX = useSpring(useTransform(px, [-0.5, 0.5], [-36, 42]), {
    stiffness: 40,
    damping: 18,
  });
  const glowY = useSpring(useTransform(py, [-0.5, 0.5], [-24, 32]), {
    stiffness: 40,
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
        animate={reduce ? undefined : { scale: [1, 1.16, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {!reduce && (
        <>
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute -right-20 top-6 hidden h-[28rem] w-[28rem] text-accent/70 lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              strokeDasharray="26 88"
            />
          </motion.svg>
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute -right-8 top-16 hidden h-[22rem] w-[22rem] text-ink/25 lg:block"
            animate={{ rotate: -360 }}
            transition={{ duration: 76, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
              strokeDasharray="2 10"
            />
          </motion.svg>
        </>
      )}

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:max-w-7xl lg:pb-28 lg:pt-36"
      >
        <Reveal>
          <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
            Gerardo Castaneda — Glennville, GA
          </p>
        </Reveal>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-semibold leading-[1.02] tracking-tight lg:max-w-6xl lg:text-[clamp(4rem,8vw,7rem)] lg:leading-[0.98]">
          <Line delay={0.12}>I build websites</Line>
          <Line delay={0.24}>
            that bring{" "}
            <em className="relative inline-block text-accent-deep">
              customers
              <Underline />
            </em>
          </Line>
          <Line delay={0.36}>through your door.</Line>
        </h1>
        <Reveal delay={0.48}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">
            I'm Rardo. I design and build simple, fast one-page websites
            for local businesses — who you are, what you do, your hours, and a
            way to call you.
          </p>
        </Reveal>
        <Reveal delay={0.58}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-all hover:bg-accent-deep active:scale-[0.96]"
              >
                Start your project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-base font-semibold transition-all hover:bg-ink hover:text-paper active:scale-[0.96]"
              >
                See the work
              </Link>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={0.68}>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-tech text-[11px] uppercase tracking-[0.18em] text-ink-soft lg:mt-20">
            <span>One-page sites, one focused week</span>
            <span>Glennville, GA — works anywhere</span>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
