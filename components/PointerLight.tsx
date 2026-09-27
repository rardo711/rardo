"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** A warm pool of light that lags the pointer. Desktop only. */
export default function PointerLight() {
  const [on, setOn] = useState(false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const opacity = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 70, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 70, damping: 22, mass: 0.6 });
  const so = useSpring(opacity, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setOn(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };
    const leave = (e: MouseEvent) => {
      if (!e.relatedTarget) opacity.set(0);
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseout", leave);
    };
  }, [opacity, x, y]);

  if (!on) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[30] hidden h-[34rem] w-[34rem] rounded-full mix-blend-soft-light md:block"
      style={{
        left: sx,
        top: sy,
        opacity: so,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(232, 168, 96, 0.55) 0%, rgba(168, 77, 29, 0.18) 42%, transparent 70%)",
      }}
    />
  );
}
