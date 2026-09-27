"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type WorkPiece = {
  name: string;
  kind: string;
  tags: string[];
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

function useDesktopMotion() {
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return Boolean(wide && !reduce);
}

function Shot({
  piece,
  flip,
}: {
  piece: WorkPiece;
  flip: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const desktop = useDesktopMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(30);
  const shine = useMotionTemplate`radial-gradient(380px circle at ${shineX}% ${shineY}%, rgba(250,246,236,0.34), transparent 46%)`;

  function onMove(e: React.MouseEvent) {
    if (!desktop) return;
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 7);
    rx.set(-py * 5);
    shineX.set(((e.clientX - r.left) / r.width) * 100);
    shineY.set(((e.clientY - r.top) / r.height) * 100);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={frame}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        desktop
          ? { rotateX: rx, rotateY: ry, transformPerspective: 1100 }
          : undefined
      }
      className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
    >
      <div className="work-reveal relative overflow-hidden border border-line bg-wash">
        <Link
          href={piece.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${piece.name} (opens in a new tab)`}
          className="group/shot relative block"
        >
          <motion.div style={desktop ? { y, scale: 1.08 } : undefined}>
            <Image
                src={piece.image}
                alt={piece.imageAlt}
                width={1440}
                height={1000}
                className="aspect-[3/2] w-full object-cover object-top"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
          </motion.div>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/shot:opacity-100"
            style={{ background: shine }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-3 opacity-0 transition-opacity duration-500 group-hover/shot:opacity-100"
          >
            <i className="absolute left-0 top-0 h-4 w-4 border-l border-t border-paper" />
            <i className="absolute right-0 top-0 h-4 w-4 border-r border-t border-paper" />
            <i className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-paper" />
            <i className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-paper" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function WorkShowcase({ items }: { items: WorkPiece[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
      {items.map((piece, i) => (
        <motion.article
          key={piece.name}
          className="work-card group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          <Shot piece={piece} flip={i % 2 === 1} />
          <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <p className="font-tech text-[11px] uppercase tracking-[0.2em] text-accent">
              {piece.kind}
            </p>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-deep sm:text-5xl">
              {piece.name}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {piece.tags.map((t) => (
                <span
                  key={t}
                  className="border border-line px-3 py-1 font-tech text-[11px] uppercase tracking-[0.14em] text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 leading-relaxed text-ink-soft">{piece.description}</p>
            <Link
              href={piece.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-deep"
            >
              Visit the site
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
