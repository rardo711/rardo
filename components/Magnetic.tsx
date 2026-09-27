"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

/**
 * Subtle magnetic pull on hover (fine pointers only).
 * The wrapper trails the cursor a few pixels, then springs back.
 */
export default function Magnetic({
  children,
  strength = 0.22,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
