import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";

const work = [
  {
    n: "01",
    name: "RaeMa's Remedies",
    kind: "Client — order site",
    tags: ["One-page site", "Order form", "Self-editable"],
    description:
      "An order site for a family wellness brand. Customers browse the products and send their order straight to RaeMa's inbox — and she updates products, prices, and photos herself through a plain-language admin panel. No developer needed.",
    href: "https://raemas-remedies-castanedag2001-1468.vercel.app",
  },
  {
    n: "02",
    name: "Better Than Gold Tallow Co.",
    kind: "Client — business site",
    tags: ["One-page site", "Farm brand"],
    description:
      "A one-page site for a local tallow business, built from her real flyer, farm photos, and exact words. What she sells, her story, and a direct line to her — nothing for a customer to get lost in.",
    href: "https://rardo711.github.io/better-than-gold-tallow/",
  },
  {
    n: "03",
    name: "Theos Logos",
    kind: "Personal — web app",
    tags: ["Web app", "Hebrew & Greek tools", "Personal build"],
    description:
      "My own build: a scholarly Bible study app with Hebrew and Greek lexicons and original-language tools. Proof I can ship complex, working software — not just pages.",
    href: "https://theos-logos-official.vercel.app",
  },
];

const services = [
  {
    n: "01",
    title: "One-page business websites",
    body: "Everything a customer needs and nothing they don't: who you are, what you do, your hours, and a big button to call or message you. Fast, sharp on phones — because that's where your customers find you.",
  },
  {
    n: "02",
    title: "Ordering & contact forms",
    body: "Let customers order ahead or reach you straight from the site. Orders land in your inbox — no apps to learn, no monthly fees, nothing to maintain.",
  },
  {
    n: "03",
    title: "Sites you can update yourself",
    body: "A plain-language edit panel for your words, prices, hours, and photos. Change anything in minutes, on your own, without calling a developer.",
  },
];

const steps = [
  {
    n: "01",
    title: "We talk",
    body: "Free. You tell me about your business, I ask questions. Plain talk, no jargon, no pressure.",
  },
  {
    n: "02",
    title: "Free mockup",
    body: "I build a one-page mockup from your public info and show it to you on my phone. You see exactly what you'd get before you pay anything.",
  },
  {
    n: "03",
    title: "I build your site",
    body: "You approve the mockup, I build the real thing — one focused week, and we put it live together.",
  },
  {
    n: "04",
    title: "It's yours",
    body: "The site is yours outright. I'll show you how to update it yourself — and I'm a message away if you ever need me.",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:max-w-7xl lg:pb-28 lg:pt-36">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
              Gerardo Castaneda — Glennville, GA
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-semibold leading-[1.02] tracking-tight lg:max-w-6xl lg:text-[clamp(4rem,8vw,7rem)] lg:leading-[0.98]">
              I build websites that bring{" "}
              <em className="text-accent-deep">customers</em> through your
              door.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">
              I&apos;m Rardo. I design and build simple, fast one-page websites
              for local businesses — who you are, what you do, your hours, and
              a way to call you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-all hover:bg-accent-deep active:scale-[0.96]"
              >
                Start your project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-base font-semibold transition-all hover:bg-ink hover:text-paper active:scale-[0.96]"
              >
                See the work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6 font-tech text-[11px] uppercase tracking-[0.18em] text-ink-soft lg:mt-20">
              <span className="inline-flex items-center gap-2.5">
                <span className="pulse-dot" aria-hidden />
                Available for new projects
              </span>
              <span>One-page sites, one focused week</span>
              <span>Glennville, GA — works anywhere</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section id="services" className="scroll-mt-20 border-b border-line bg-wash">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
              <span className="text-accent">01</span>
              <span aria-hidden> · </span>What I do
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              What I offer.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              No packages with forty line items. Three things, done well —
              each one something I&apos;ve already built and shipped.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="h-full">
                <div className="group/card flex h-full flex-col bg-wash p-8 transition-transform duration-300 hover:-translate-y-1 lg:p-10">
                  <span
                    aria-hidden
                    className="h-0.5 w-8 bg-accent transition-all duration-300 group-hover/card:w-16"
                  />
                  <span className="mt-6 font-tech text-sm text-accent">{s.n}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Work ——— */}
      <section id="work" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
              <span className="text-accent">02</span>
              <span aria-hidden> · </span>Selected work
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Real sites, for real businesses.
            </h2>
          </Reveal>
          <div className="mt-16 flex flex-col gap-20 sm:gap-24 lg:mt-20">
            {work.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.name}>
                  <article className="group grid items-start gap-6 lg:grid-cols-12 lg:gap-12">
                    <span
                      aria-hidden
                      className={`select-none font-display text-[clamp(5rem,12vw,10rem)] font-semibold leading-[0.85] tracking-tight text-line transition-colors duration-500 group-hover:text-accent/40 lg:col-span-3 lg:text-[11rem] ${flip ? "lg:order-2 lg:text-right" : ""}`}
                    >
                      {p.n}
                    </span>
                    <div className={`lg:col-span-9 ${flip ? "lg:order-1" : ""}`}>
                      <p className="font-tech text-[11px] uppercase tracking-[0.2em] text-accent">
                        {p.kind}
                      </p>
                      <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-deep sm:text-5xl lg:text-6xl">
                        {p.name}
                      </h3>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-line px-3 py-1 font-tech text-[11px] uppercase tracking-[0.14em] text-ink-soft"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
                        {p.description}
                      </p>
                      <Link
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${p.name} (opens in a new tab)`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-deep"
                      >
                        Visit the site
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— Process ——— */}
      <section id="process" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
              <span className="text-accent">03</span>
              <span aria-hidden> · </span>How it works
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              How it goes.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="border-t-2 border-ink pt-6 transition-colors duration-300 hover:border-accent">
                  <span className="font-tech text-sm text-ink-soft">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— About teaser ——— */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">The short version</p>
              <p className="mt-6 max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl lg:max-w-3xl lg:text-4xl">
                Husband, father, musician, photographer. From Siguatepeque,
                Honduras to Glennville, Georgia — building with AI, studying
                Scripture, writing it all down.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/about"
                className="group inline-flex shrink-0 items-center gap-2 border border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper"
              >
                More about me
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Contact / CTA band ——— */}
      <section className="bg-coal text-paper">
        <div className="mx-auto max-w-6xl overflow-hidden px-5 py-24 sm:px-8 sm:py-36 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-paper/60">
              Contact
            </p>
          </Reveal>
          <Parallax offset={50}>
            <h2 className="mt-8 font-display text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.98] tracking-tight lg:text-[clamp(4rem,9vw,8rem)]">
              Let&apos;s build yours.
            </h2>
          </Parallax>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
              Tell me about your business — what you do, who it&apos;s for,
              and what you wish your website did. I&apos;ll get back to you within a day.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-paper px-7 py-3.5 text-base font-semibold text-ink transition-all hover:bg-accent hover:text-paper active:scale-[0.96]"
              >
                Start your project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="https://x.com/gerardocasta711"
                target="_blank"
                rel="noreferrer"
                aria-label="Message me on X (opens in a new tab)"
                className="group inline-flex items-center gap-2 border border-paper/40 px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                Message me on X
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
            <p className="mt-8 font-tech text-[11px] uppercase tracking-[0.18em] text-paper/40">
              @gerardocasta711 — DMs open
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
