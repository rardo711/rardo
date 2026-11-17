"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCta() {
  const pathname = usePathname();
  const eligible = pathname === "/" || pathname === "/about";
  const [pastStart, setPastStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setPastStart(false);
    setAtEnd(false);
  }

  useEffect(() => {
    if (!eligible) return;

    const sentinel =
      document.getElementById("hero-end") ??
      document.getElementById("cta-start");
    let cleanupStart = () => {};
    if (sentinel) {
      const io = new IntersectionObserver(([e]) => {
        setPastStart(!e.isIntersecting && e.boundingClientRect.bottom < 0);
      });
      io.observe(sentinel);
      cleanupStart = () => io.disconnect();
    }

    const ends = new Set<Element>();
    const endIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) ends.add(e.target);
        else ends.delete(e.target);
      }
      setAtEnd(ends.size > 0);
    });
    document
      .querySelectorAll("[data-cta-end]")
      .forEach((el) => endIo.observe(el));

    return () => {
      cleanupStart();
      endIo.disconnect();
    };
  }, [eligible, pathname]);

  if (!eligible) return null;
  const show = pastStart && !atEnd;
  const targetHref = pathname === "/" ? "#inquire" : "/contact";

  return (
    <>
      <div
        id="cta-start"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
      />
      <div
        data-sticky-cta=""
        data-visible={show}
        aria-hidden={!show}
        inert={!show}
        className="sticky-cta"
      >
        <Link
          href={targetHref}
          className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 text-base font-semibold text-paper shadow-sm transition-colors hover:bg-accent-deep"
        >
          <span>Start with a free mockup</span>
          <ArrowRight
            size={17}
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </>
  );
}
