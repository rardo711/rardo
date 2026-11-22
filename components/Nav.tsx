"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

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
  const reduce = useReducedMotion();
  const [openedPath, setOpenedPath] = useState<string | null>(null);
  const open = openedPath === pathname;
  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function brandClick(e: React.MouseEvent) {
    if (pathname !== "/") return;
    e.preventDefault();
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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = () => {
      if (mq.matches) setOpenedPath(null);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function closeMenu(refocus = false) {
    setOpenedPath(null);
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
      className="site-header sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md pt-[env(safe-area-inset-top)]"
    >
      <div className="gutter mx-auto flex max-w-6xl items-center justify-between gap-4 py-4 lg:max-w-7xl">
        <Link
          href="/"
          onClick={brandClick}
          className="group flex shrink-0 items-center gap-2.5 text-ink lg:gap-3"
          aria-label="Gerardo Castaneda — home"
        >
          <Logo
            size={32}
            className="text-ink transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div className="flex flex-col">
            <span className="whitespace-nowrap font-display text-base font-semibold leading-none tracking-tight lg:text-lg">
              Gerardo Castaneda
            </span>
            <span className="mt-1 whitespace-nowrap font-tech text-[0.65rem] uppercase text-ink-mute">
              Glennville, Georgia
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center md:flex md:gap-4 lg:gap-8"
          aria-label="Primary"
        >
          {links.map((l) => {
            const active =
              (l.href === "/about" && pathname === "/about") ||
              (l.href === "/contact" && pathname === "/contact");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`u-sweep whitespace-nowrap text-[0.8125rem] font-medium transition-colors duration-300 hover:text-ink lg:text-sm ${
                  active ? "font-semibold text-ink" : "text-ink-soft"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href={primaryCtaHref}
            className="group inline-flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl bg-ink px-3.5 py-2 text-xs font-semibold text-paper shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep active:translate-y-0 lg:gap-2 lg:px-5 lg:py-2.5 lg:text-sm"
          >
            <span>Start your project</span>
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <div ref={menuRef} className="relative md:hidden">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpenedPath(pathname))}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-surface text-ink transition-colors hover:border-ink data-[open=true]:bg-wash"
            data-open={open}
          >
            <Burger open={open} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.nav
                id="site-menu"
                aria-label="Site menu"
                initial={
                  reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }
                }
                transition={{ duration: 0.28, ease: EASE }}
                className="menu-pop absolute right-0 top-[calc(100%+0.625rem)] z-[70] w-[min(21rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-surface p-2.5"
              >
                <ul className="flex flex-col gap-0.5">
                  {links.map((l, i) => {
                    const active =
                      (l.href === "/about" && pathname === "/about") ||
                      (l.href === "/contact" && pathname === "/contact");
                    return (
                      <motion.li
                        key={l.href}
                        initial={reduce ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.04 + i * 0.035,
                          ease: EASE,
                        }}
                      >
                        <Link
                          href={l.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpenedPath(null)}
                          className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-wash ${
                            active ? "bg-wash text-accent-deep" : "text-ink"
                          }`}
                        >
                          <span className="font-display text-lg font-medium tracking-tight">
                            {l.label}
                          </span>
                          <ArrowRight
                            size={15}
                            aria-hidden
                            className="text-ink-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <div className="mt-2 border-t border-line pt-2">
                  <Link
                    href={primaryCtaHref}
                    onClick={() => setOpenedPath(null)}
                    className="group flex min-h-12 w-full items-center justify-between rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
                  >
                    <span>Start your project</span>
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
