"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { num: "01", href: "/#services", label: "Capabilities" },
  { num: "02", href: "/#work", label: "Shipped Work" },
  { num: "03", href: "/#process", label: "Protocol" },
  { num: "04", href: "/about", label: "About & Treatise" },
  { num: "05", href: "/contact", label: "Contact" },
];

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

  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function closeMenu(refocus = false) {
    setOpen(false);
    if (refocus) buttonRef.current?.focus({ preventScroll: true });
  }

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

  const primaryCtaHref = pathname === "/" ? "#inquire" : "/contact";

  return (
    <header
      ref={headerRef}
      className="site-header sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xs pt-[env(safe-area-inset-top)]"
    >
      <div className="gutter mx-auto flex max-w-6xl items-center justify-between py-3.5 lg:max-w-7xl">
        <Link
          href="/"
          onClick={brandClick}
          className="group flex items-center gap-3 text-ink"
          aria-label="Gerardo Castaneda — home"
        >
          <Logo size={32} className="text-ink transition-colors group-hover:text-accent-deep" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold leading-none tracking-tight">
              Gerardo Castaneda
            </span>
            <span className="mt-1 font-tech text-[0.6875rem] uppercase tracking-widest text-ink-soft">
              Glennville, GA · Web Studio
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active =
              (l.href === "/about" && pathname === "/about") ||
              (l.href === "/contact" && pathname === "/contact");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`u-sweep inline-flex items-baseline gap-1.5 text-sm font-medium transition-colors hover:text-ink ${
                  active ? "font-semibold text-ink" : "text-ink-soft"
                }`}
              >
                <span className="font-tech text-xs text-accent-deep">{l.num}</span>
                <span>{l.label}</span>
              </Link>
            );
          })}
          <Link
            href={primaryCtaHref}
            className="group inline-flex items-center gap-2 rounded-[2px] border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
          >
            Request Free Mockup
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <div ref={menuRef} className="relative lg:hidden">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-ink bg-surface text-ink transition-colors hover:bg-wash data-[open=true]:bg-wash"
            data-open={open}
          >
            <Burger open={open} />
          </button>

          {open && (
            <nav
              id="site-menu"
              aria-label="Site menu"
              className="menu-pop absolute right-0 top-[calc(100%+0.5rem)] z-[70] w-[min(22rem,calc(100vw-2.5rem))] rounded-[2px] border border-ink bg-surface p-0"
            >
              <div className="border-b border-line bg-wash px-4 py-2.5 font-tech text-[0.6875rem] uppercase text-ink-soft">
                Directory · Glennville, GA
              </div>
              <ul className="divide-y divide-line">
                {links.map((l) => {
                  const active =
                    (l.href === "/about" && pathname === "/about") ||
                    (l.href === "/contact" && pathname === "/contact");
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-wash ${
                          active ? "bg-wash text-accent-deep" : "text-ink"
                        }`}
                      >
                        <span className="font-tech text-xs font-semibold text-accent-deep">
                          {l.num}
                        </span>
                        <span className="font-display text-lg font-semibold tracking-tight">
                          {l.label}
                        </span>
                        <ArrowRight
                          size={15}
                          aria-hidden
                          className="ml-auto text-ink-soft transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-ink bg-paper p-3">
                <Link
                  href={primaryCtaHref}
                  onClick={() => setOpen(false)}
                  className="group flex min-h-11 w-full items-center justify-between rounded-[2px] bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
                >
                  <span>Request Free Mockup</span>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
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
