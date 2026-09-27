import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Gerardo Castaneda
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
