import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-coal text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Gerardo Castaneda
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-paper/60">
              I build websites for small businesses — from Glennville, Georgia,
              for whoever needs one.
            </p>
            <Link
              href="https://x.com/gerardocasta711"
              target="_blank"
              rel="noreferrer"
              aria-label="Gerardo on X (opens in a new tab)"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-paper/80 underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-paper"
            >
              @gerardocasta711
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="mailto:gerardoj2001@outlook.com"
              className="mt-3 block text-sm text-paper/60 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper"
            >
              gerardoj2001@outlook.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="u-sweep text-sm font-medium text-paper/60 transition-colors hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-14 border-t border-paper/15 pt-6">
          <p className="font-tech text-[11px] uppercase tracking-[0.18em] text-paper/40">
            © 2026 Gerardo Castaneda
          </p>
        </div>
      </div>
    </footer>
  );
}
