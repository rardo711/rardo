"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

function Word({
  children,
  progress,
  from,
  to,
}: {
  children: string;
  progress: MotionValue<number>;
  from: number;
  to: number;
}) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [from, to]);
  if (reduce) return <span className="inline">{children} </span>;
  return (
    <motion.span style={{ y }} className="inline-block pr-[0.28em]">
      {children}
    </motion.span>
  );
}

export default function CtaTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-56, 64]);
  const words = [
    { text: "Let's", from: 18, to: -10 },
    { text: "build", from: 32, to: -22 },
    { text: "yours.", from: 46, to: -34 },
  ];

  return (
    <div ref={ref} className="relative mt-8">
      {!reduce && (
        <motion.p
          aria-hidden
          style={{ x }}
          className="stroke-paper pointer-events-none absolute -left-[0.04em] -top-[0.42em] select-none font-display text-[clamp(5.5rem,20vw,15rem)] font-semibold leading-none"
        >
          build
        </motion.p>
      )}
      <h2
        aria-label="Let's build yours."
        className="relative font-display text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.98] tracking-tight lg:text-[clamp(4rem,9vw,8rem)]"
      >
        <span aria-hidden>
          {words.map((w) => (
            <Word key={w.text} progress={scrollYProgress} from={w.from} to={w.to}>
              {w.text}
            </Word>
          ))}
        </span>
      </h2>
    </div>
  );
}
