"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** A warm hairline rule that draws smoothly across a row of steps as it enters view. */
export default function InkRule({ from = "lg" }: { from?: "md" | "lg" }) {
  const reduce = useReducedMotion();
  const vis = from === "md" ? "hidden md:block" : "hidden lg:block";
  if (reduce) {
    return (
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-px bg-line-strong ${vis}`}
      />
    );
  }
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-accent/60 ${vis}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.25, ease: EASE }}
    />
  );
}
