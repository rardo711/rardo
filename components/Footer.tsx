import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const studioLinks = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Selected work" },
  { href: "/#process", label: "How it works" },
  { href: "/#inquire", label: "Free mockup" },
  { href: "/about", label: "About & story" },
  { href: "/contact", label: "Contact" },
];

const shippedIndex = [
  {
    label: "RaeMa’s Remedies",
    meta: "Order site · Tattnall County",
    href: "https://raemas-remedies.vercel.app",
  },
  {
    label: "Better Than Gold Tallow Co.",
    meta: "Farm brand · Southeast GA",
    href: "https://better-than-gold-tallow.vercel.app",
  },
  {
    label: "Theos Logos",
    meta: "Greek & Hebrew study app",
    href: "https://theos-logos-official.vercel.app",
  },
  {
    label: "The Life Proper",
    meta: "Podcast on Spotify",
    href: "https://open.spotify.com/show/2rxl4jrLFaQ2SYb75NGDYj",
  },
  {
    label: "@lvngphotography",
    meta: "Portrait & family archive",
    href: "https://www.instagram.com/lvngphotography/",
  },
  {
    label: "GitHub (@rardo711)",
    meta: "Code & repositories",
    href: "https://github.com/rardo711",
  },
];

export default function Footer() {
  return (
    <footer
      data-surface="dark"
      data-cta-end=""
      className="bg-coal text-paper"
    >
      <div className="gutter mx-auto max-w-6xl py-16 sm:py-20 lg:max-w-7xl lg:py-24">
        <div className="grid gap-12 border-b border-paper/15 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Warm Studio Signature */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <Logo size={38} className="text-paper" />
              <div>
                <p className="font-display text-2xl font-semibold leading-none tracking-tight">
                  Gerardo Castaneda
                </p>
                <p className="mt-1 font-tech text-[0.6875rem] uppercase text-paper/70">
                  Glennville, Georgia
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/80">
              Simple, fast one-page websites, direct ordering forms, and
              update-it-yourself pages for local businesses — built in one
              focused week for a flat fee.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href="mailto:gerardoj2001@outlook.com"
                className="font-medium text-paper underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
              >
                gerardoj2001@outlook.com
              </a>
              <a
                href="https://x.com/gerardocasta711"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-medium text-paper/85 transition-colors hover:text-paper"
              >
                <span className="u-sweep">@gerardocasta711</span>
                <span className="sr-only"> on X (opens in a new tab)</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <p className="font-tech text-eyebrow font-medium uppercase text-paper/70">
              Pages
            </p>
            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="flex flex-col gap-2.5">
                {studioLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block text-sm text-paper/85 transition-colors hover:text-paper"
                    >
                      <span className="u-sweep">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Shipped Sites & Projects */}
          <div className="lg:col-span-3">
            <p className="font-tech text-eyebrow font-medium uppercase text-paper/70">
              Work &amp; Projects
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {shippedIndex.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
                  >
                    <span className="min-w-0">
                      <span className="u-sweep font-medium">{item.label}</span>
                      <span className="mt-0.5 block text-xs text-paper/65">
                        {item.meta}
                      </span>
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="mt-1 shrink-0 text-paper/65 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Colophon */}
          <div className="lg:col-span-2">
            <p className="font-tech text-eyebrow font-medium uppercase text-paper/70">
              Colophon
            </p>
            <dl className="mt-5 flex flex-col gap-4 text-xs leading-relaxed text-paper/75">
              <div>
                <dt className="text-paper/65">Home base</dt>
                <dd className="mt-0.5 text-paper/90">
                  Glennville &amp; Tattnall County, GA
                </dd>
              </div>
              <div>
                <dt className="text-paper/65">The promise</dt>
                <dd className="mt-0.5 text-paper/90">
                  Free mockup first. Flat fee named before I start. Yours outright.
                </dd>
              </div>
              <div>
                <dt className="text-paper/65">Typeset in</dt>
                <dd className="mt-0.5 text-paper/90">
                  Fraunces &amp; Public Sans
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 pb-[env(safe-area-inset-bottom)] text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gerardo Castaneda · Glennville, Georgia</p>
          <p className="font-display italic text-paper/80">Soli Deo Gloria</p>
        </div>
      </div>
    </footer>
  );
}
