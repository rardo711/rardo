import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const studioLinks = [
  { num: "01", href: "/#services", label: "Service Capabilities" },
  { num: "02", href: "/#work", label: "Shipped Client Ledger" },
  { num: "03", href: "/#process", label: "Four-Stage Protocol" },
  { num: "04", href: "/#inquire", label: "Request a Free Mockup" },
  { num: "05", href: "/about", label: "About, Dossier & Treatise" },
  { num: "06", href: "/contact", label: "Standalone Project Brief" },
];

const shippedIndex = [
  {
    label: "RaeMa's Remedies",
    meta: "Order System · Tattnall County",
    href: "https://raemas-remedies.vercel.app",
  },
  {
    label: "Better Than Gold Tallow Co.",
    meta: "Farm Brand · Southeast GA",
    href: "https://better-than-gold-tallow.vercel.app",
  },
  {
    label: "Theos Logos",
    meta: "Greek & Hebrew Lexicon App",
    href: "https://theos-logos-official.vercel.app",
  },
  {
    label: "The Life Proper Podcast",
    meta: "Co-host · Spotify",
    href: "https://open.spotify.com/show/2rxl4jrLFaQ2SYb75NGDYj",
  },
  {
    label: "@lvngphotography",
    meta: "Portrait & Family Archive",
    href: "https://www.instagram.com/lvngphotography/",
  },
  {
    label: "GitHub (@rardo711)",
    meta: "Open Source & Repositories",
    href: "https://github.com/rardo711",
  },
];

export default function Footer() {
  return (
    <footer
      data-surface="dark"
      data-cta-end=""
      className="border-t border-line bg-coal text-paper"
    >
      <div className="gutter mx-auto max-w-6xl py-16 sm:py-20 lg:max-w-7xl">
        {/* Top 4-Column Architectural Directory */}
        <div className="grid gap-12 border-b border-paper/15 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Identity & Direct Dispatch */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo size={36} className="text-paper" />
              <div>
                <p className="font-display text-2xl font-semibold leading-none tracking-tight">
                  Gerardo Castaneda
                </p>
                <p className="mt-1 font-tech text-[0.6875rem] uppercase text-paper/65">
                  Rardo · Independent Web Studio
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/75">
              Bespoke one-page websites, direct inbox ordering ledgers, and
              self-editable owner panels for small businesses in Glennville,
              Tattnall County, and across Southeast Georgia.
            </p>
            <div className="mt-6 flex flex-col gap-2 border-t border-paper/15 pt-5 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-tech text-xs uppercase text-paper/60">Email</span>
                <a
                  href="mailto:gerardoj2001@outlook.com"
                  className="font-medium text-paper underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  gerardoj2001@outlook.com
                </a>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-tech text-xs uppercase text-paper/60">Direct X</span>
                <a
                  href="https://x.com/gerardocasta711"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:text-accent"
                >
                  @gerardocasta711
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-tech text-xs uppercase text-paper/60">Response</span>
                <span className="tabular-nums text-paper/85">Within 24 Hours (Mon–Sat)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Site Index & Capabilities */}
          <div className="lg:col-span-3 lg:pl-4">
            <p className="font-tech text-eyebrow font-semibold uppercase text-paper/60">
              01 · Site Directory
            </p>
            <nav aria-label="Footer directory" className="mt-5">
              <ul className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
                {studioLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between py-2.5 text-sm text-paper/80 transition-colors hover:text-paper"
                    >
                      <span className="u-sweep">{l.label}</span>
                      <span className="font-tech text-xs text-accent">{l.num}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Shipped Client & Software Index */}
          <div className="lg:col-span-3">
            <p className="font-tech text-eyebrow font-semibold uppercase text-paper/60">
              02 · Shipped Works &amp; Channels
            </p>
            <ul className="mt-5 flex flex-col divide-y divide-paper/10 border-y border-paper/10">
              {shippedIndex.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-2 py-2.5 text-sm text-paper/85 transition-colors hover:text-paper"
                  >
                    <div>
                      <span className="font-medium group-hover:underline">
                        {item.label}
                      </span>
                      <span className="block font-tech text-[0.6875rem] uppercase text-paper/55">
                        {item.meta}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="shrink-0 text-paper/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Colophon & Commercial Terms */}
          <div className="lg:col-span-2">
            <p className="font-tech text-eyebrow font-semibold uppercase text-paper/60">
              03 · Colophon
            </p>
            <dl className="mt-5 flex flex-col gap-3.5 text-xs text-paper/75">
              <div className="border-t border-paper/10 pt-3">
                <dt className="font-tech uppercase text-paper/50">Station</dt>
                <dd className="mt-1 font-medium text-paper/90">
                  Glennville &amp; Reidsville, Tattnall County, GA
                </dd>
                <dd className="mt-0.5 font-tech text-[0.6875rem] tabular-nums text-paper/60">
                  31.9407° N, 81.9296° W
                </dd>
              </div>
              <div className="border-t border-paper/10 pt-3">
                <dt className="font-tech uppercase text-paper/50">Commercial Terms</dt>
                <dd className="mt-1 leading-relaxed text-paper/85">
                  $0 working mockup prior to commitment. Flat-fee build in 7 days. $0 monthly developer retainer.
                </dd>
              </div>
              <div className="border-t border-paper/10 pt-3">
                <dt className="font-tech uppercase text-paper/50">Typography</dt>
                <dd className="mt-1 text-paper/85">
                  Fraunces &amp; Public Sans (Tabular Numerals)
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom Provenance Bar */}
        <div className="mt-8 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-tech text-xs uppercase text-paper/65">
            © 2026 Gerardo Castaneda · Built in Glennville, Georgia · Soli Deo Gloria
          </p>
          <p className="font-tech text-xs uppercase text-paper/55">
            Edition 2026.11 · All client sites 100% owner-held
          </p>
        </div>
      </div>
    </footer>
  );
}
