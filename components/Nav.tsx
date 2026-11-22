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
  const isHome = pathname === "/";
  const reduce = useReducedMotion();
  const [openedPath, setOpenedPath] = useState<string | null>(null);
  const [heroScrollState, setHeroScrollState] = useState<{
    path: string;
    past: boolean;
  }>({ path: "/", past: false });

  const open = openedPath === pathname;
  const overHero =
    isHome && !(heroScrollState.path === pathname && heroScrollState.past);

  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function brandClick(e: React.MouseEvent) {
    if (!isHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("hero-end");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const past = !entry.isIntersecting;
        setHeroScrollState((prev) =>
          prev.path === pathname && prev.past === past
            ? prev
            : { path: pathname, past },
        );
      },
      { rootMargin: "-76px 0px 0px 0px", threshold: 0 },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [isHome, pathname]);

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

  return (
    <header
      ref={headerRef}
      data-surface={overHero ? "dark" : undefined}
      className={`site-header z-50 border-b pt-[env(safe-area-inset-top)] ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        overHero
          ? "border-transparent bg-transparent text-paper"
          : "border-line/80 bg-paper/88 text-ink backdrop-blur-md"
      }`}
    >
      <div className="gutter mx-auto flex max-w-6xl items-center justify-between gap-4 py-4 sm:py-5 lg:max-w-7xl">
        <Link
          href="/"
          onClick={brandClick}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Gerardo Castaneda · home"
        >
          <Logo
            size={30}
            className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span
            aria-hidden={overHero || undefined}
            className={`whitespace-nowrap font-display text-base font-semibold leading-none tracking-tight transition-opacity duration-300 lg:text-lg ${
              overHero ? "pointer-events-none select-none opacity-0" : "opacity-100"
            }`}
          >
            Gerardo Castaneda
          </span>
        </Link>

        <nav
          className="hidden items-center md:flex md:gap-6 lg:gap-8"
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
                className={`u-sweep whitespace-nowrap font-tech text-[0.72rem] uppercase transition-colors duration-300 ${
                  overHero
                    ? "font-medium text-paper/80 hover:text-paper"
                    : active
                      ? "font-semibold text-ink"
                      : "font-medium text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div ref={menuRef} className="relative md:hidden">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpenedPath(pathname))}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[2px] border transition-colors ${
              overHero
                ? "border-paper/25 bg-transparent text-paper hover:border-paper/60 data-[open=true]:bg-paper/10"
                : "border-line-strong bg-surface text-ink hover:border-ink data-[open=true]:bg-wash"
            }`}
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
                className="menu-pop absolute right-0 top-[calc(100%+0.625rem)] z-[70] w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-surface p-2.5 text-ink"
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
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
