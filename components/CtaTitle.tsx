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
  if (reduce) return <span className="inline">{children}</span>;
  return (
    <motion.span style={{ y }} className="inline-block">
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
  const x = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const words = [
    { text: "Let's", from: 9, to: -5 },
    { text: "build", from: 16, to: -11 },
    { text: "yours.", from: 23, to: -17 },
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
      <h2 className="relative font-display text-[clamp(2.75rem,1.087rem+7.391vw,7rem)] font-semibold leading-[1] tracking-tight">
        {words.map((w, i) => (
          <span key={w.text}>
            <Word progress={scrollYProgress} from={w.from} to={w.to}>
              {w.text}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
    </div>
  );
}
