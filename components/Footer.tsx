import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-tech text-xs uppercase tracking-[0.18em] text-ink-soft">
            Glennville, GA — {new Date().getFullYear()}
          </p>
          <p className="mt-2 font-display text-2xl font-semibold tracking-tight">
            Gerardo Castaneda
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="https://x.com/gerardocasta711"
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            X
          </Link>
          <Link
            href="/about"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 font-tech text-[11px] uppercase tracking-[0.18em] text-ink-soft sm:px-8">
          Built by hand, with AI
        </p>
      </div>
    </footer>
  );
}
