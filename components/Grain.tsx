"use client";

import { useEffect, useRef } from "react";

/** Full-viewport film grain. Animated only on fine pointers. */
export default function Grain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const w = 160;
    const h = 160;
    canvas.width = w;
    canvas.height = h;

    const paint = () => {
      const img = ctx.createImageData(w, h);
      const data = img.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = v;
        data[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };

    paint();
    if (reduce || coarse) return;

    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden || t - last < 120) return;
      last = t;
      paint();
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] h-full w-full opacity-[0.13] mix-blend-overlay"
    />
  );
}
