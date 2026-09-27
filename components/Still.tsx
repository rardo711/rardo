"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Quiet scroll-parallax frame for portraits. */
export default function Still({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-2.5%", "2.5%"]);

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden"
      initial={reduce ? false : { clipPath: "inset(5% 5% 5% 5%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.35, ease: EASE }}
    >
      <motion.div
        style={reduce ? undefined : { y, scale: 1.06 }}
        className="origin-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
