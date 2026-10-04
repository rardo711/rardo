"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Selected work" },
  { href: "/#process", label: "How it works" },
  { href: "/about", label: "About" },
];

/** Three lines that spring into an X (CSS transitions, no JS animation). */
function Burger({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="burger" data-open={open || undefined}>
      <span className="burger-line" />
      <span className="burger-line" />
      <span className="burger-line" />
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function brandClick(e: React.MouseEvent) {
    if (pathname !== "/") return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  // Hide on scroll down, reveal on scroll up. One passive listener, work
  // batched into a single rAF, and the result written straight to the DOM
  // (no React state, so scrolling never re-renders the header). 8px
  // hysteresis so tiny movements and iOS rubber-banding don't flicker it.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let last = window.scrollY;
    let hidden = false;
    let frame = 0;
    function set(next: boolean) {
      if (next === hidden) return;
      hidden = next;
      header!.dataset.hidden = String(next);
    }
    function update() {
      frame = 0;
      const y = window.scrollY;
      // During an anchor jump the header stays put so the target isn't
      // left under an empty band.
      if (document.documentElement.hasAttribute("data-anchor-scroll")) {
        set(false);
        last = y;
        return;
      }
      if (y <= 0) {
        set(false);
      } else if (Math.abs(y - last) > 8) {
        set(!openRef.current && y > last && y > 140);
      } else {
        return;
      }
      last = y;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

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

  function closeMenu(refocus = false) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(false);
    } else {
      setClosing(true);
      window.setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 160);
    }
    if (refocus) buttonRef.current?.focus({ preventScroll: true });
  }

  // Dropdown behaviour: Escape and outside tap close it. The page is never
  // locked or made inert, so nothing shifts or bounces underneath.
  useEffect(() => {
    openRef.current = open;
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu(true);
    }
    function onPointer(e: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
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
          <div ref={menuRef} className="relative lg:hidden">
            <button
              ref={buttonRef}
              type="button"
              onClick={() => (open && !closing ? closeMenu() : setOpen(true))}
              aria-expanded={open && !closing}
              aria-controls="site-menu"
              aria-label={open && !closing ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-field text-ink transition-colors hover:border-ink"
            >
              <Burger open={open && !closing} />
            </button>
            {open && (
              <nav
                id="site-menu"
                aria-label="Site menu"
                data-closing={closing || undefined}
                className="menu-pop absolute right-0 top-[calc(100%+0.625rem)] z-[70] w-[min(21rem,calc(100vw-2.5rem))] border border-ink bg-paper"
              >
                <ul>
                  {links.map((l, i) => {
                    const active = l.href === "/about" && pathname === "/about";
                    return (
                      <li
                        key={l.href}
                        className="menu-item border-b border-line"
                        style={{ "--i": i } as React.CSSProperties}
                      >
                        <Link
                          href={l.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={`group flex items-baseline gap-4 px-5 py-4 transition-colors hover:bg-wash ${
                            active ? "text-accent-deep" : "text-ink"
                          }`}
                        >
                          <span className="font-tech text-[0.7rem] tracking-widest text-ink-soft">
                            0{i + 1}
                          </span>
                          <span className="font-display text-xl font-semibold tracking-tight">
                            {l.label}
                          </span>
                          <ArrowRight
                            size={16}
                            aria-hidden
                            className="ml-auto self-center text-ink-soft transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="menu-item p-4" style={{ "--i": links.length } as React.CSSProperties}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group flex min-h-12 w-full items-center justify-between bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
                  >
                    Start your project
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

    </>
  );
}
