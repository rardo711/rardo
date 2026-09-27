"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A single rule that draws across a row of steps. */
export default function InkRule({ from = "lg" }: { from?: "md" | "lg" }) {
  const reduce = useReducedMotion();
  const vis = from === "md" ? "hidden md:block" : "hidden lg:block";
  if (reduce) {
    return (
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-0.5 bg-accent ${vis}`}
      />
    );
  }
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left bg-accent ${vis}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.35, ease: EASE }}
    />
  );
}
