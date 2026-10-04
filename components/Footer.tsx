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
    <footer data-surface="dark" data-cta-end="" className="bg-coal text-paper">
      <div className="gutter mx-auto max-w-6xl py-16 sm:py-20 lg:max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[clamp(2.25rem,1.4rem+3.6vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
              Gerardo Castaneda
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-paper/70">
              I build websites for small businesses — from Glennville, Georgia,
              for whoever needs one.
            </p>
            <Link
              href="https://x.com/gerardocasta711"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-paper/80 underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-paper"
            >
              @gerardocasta711
              <span className="sr-only"> on X (opens in a new tab)</span>
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="mailto:gerardoj2001@outlook.com"
              className="mt-1 flex min-h-11 items-center text-sm text-paper/70 underline decoration-paper/30 underline-offset-4 [overflow-wrap:anywhere] transition-colors hover:text-paper"
            >
              gerardoj2001@outlook.com
            </a>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-paper/70 transition-colors hover:text-paper"
              >
                <span className="u-sweep">{l.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-14 border-t border-paper/15 pt-6 pb-[env(safe-area-inset-bottom)]">
          <p className="font-tech text-eyebrow uppercase text-paper/70">
            © 2026 Gerardo Castaneda
          </p>
        </div>
      </div>
    </footer>
  );
}
