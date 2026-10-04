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

/** Page regions that must not be reachable while the sheet is open. */
const BEHIND = "main, footer, .site-header, [data-sticky-cta]";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  function brandClick(e: React.MouseEvent) {
    if (pathname !== "/") return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  // Hide on scroll down, reveal on scroll up. 8px hysteresis so tiny
  // movements (and iOS overscroll bounce) don't flicker the header.
  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      if (y <= 0) {
        setHidden(false);
      } else if (Math.abs(y - last) > 8) {
        setHidden(!open && y > last && y > 140);
      } else {
        return;
      }
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Close on navigation (adjust state during render, not in an effect).
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  // Close when the viewport grows to the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Modal behaviour: lock scroll, make the page inert, trap Tab, handle Esc,
  // move focus in, and put it back on the toggle when the sheet closes.
  useEffect(() => {
    if (!open) {
      if (wasOpen.current) buttonRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    document.documentElement.classList.add("menu-open");
    const behind = Array.from(document.querySelectorAll<HTMLElement>(BEHIND));
    behind.forEach((el) => el.setAttribute("inert", ""));
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;
      const f = sheetRef.current.querySelectorAll<HTMLElement>("a[href], button");
      if (f.length === 0) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
      behind.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  return (
    <>
      <header
        data-hidden={hidden}
        className="site-header sticky top-0 z-50 border-b border-line bg-paper pt-[env(safe-area-inset-top)]"
      >
        <div className="gutter mx-auto flex max-w-6xl items-center justify-between py-4 lg:max-w-7xl">
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
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => {
              const active = l.href === "/about" && pathname === "/about";
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`u-sweep text-sm font-medium transition-colors hover:text-ink ${
                    active ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-transparent bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
            >
              Start your project
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </nav>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center border border-field text-ink transition-colors hover:border-ink lg:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </header>

      {open && (
        <div
          id="site-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="menu-sheet fixed inset-0 z-[70] flex flex-col bg-paper lg:hidden"
        >
          <div className="gutter flex items-center justify-between pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <span className="flex items-center gap-2.5">
              <Logo size={38} />
              <span className="font-display text-lg font-semibold tracking-tight">
                Gerardo Castaneda
              </span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-field text-ink transition-colors hover:border-ink"
            >
              <X size={20} aria-hidden />
            </button>
          </div>
          <nav
            aria-label="Site menu"
            className="gutter flex-1 overflow-y-auto border-t border-line"
          >
            <ul className="flex flex-col">
              {links.map((l) => {
                const active = l.href === "/about" && pathname === "/about";
                return (
                  <li key={l.href} className="border-b border-line">
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-14 items-center justify-between py-3 font-display text-[clamp(1.75rem,1.3rem+1.8vw,2.25rem)] font-semibold tracking-tight ${
                        active ? "text-accent-deep" : "text-ink"
                      }`}
                    >
                      {l.label}
                      <ArrowRight size={20} aria-hidden className="text-ink-soft" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="gutter pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group flex min-h-14 w-full items-center justify-between border border-transparent bg-ink px-6 text-base font-semibold text-paper transition-colors hover:bg-accent-deep"
            >
              Start your project
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
