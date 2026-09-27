"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Selected work" },
  { href: "/#process", label: "How it works" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function brandClick(e: React.MouseEvent) {
    if (pathname !== "/") return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open ]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:max-w-7xl">
        <Link
          href="/"
          onClick={brandClick}
          className="flex items-center gap-2.5"
          aria-label="Gerardo Castaneda — home"
        >
          <Logo size={38} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Gerardo Castaneda
          </span>
        </Link>
        <div ref={menuRef} className="relative">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          {open && (
            <nav
              aria-label="Site menu"
              className="menu-panel absolute right-0 top-[calc(100%+0.75rem)] w-64 border border-line bg-paper shadow-[0_16px_40px_rgba(34,26,19,0.12)]"
            >
              <ul className="flex flex-col py-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-wash hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line p-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between bg-ink px-5 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-accent-deep"
                >
                  Start your project
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
