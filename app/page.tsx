import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import WorkShowcase, { type WorkPiece } from "../components/WorkShowcase";
import InkRule from "../components/InkRule";
import CtaTitle from "../components/CtaTitle";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  description:
    "I'm Rardo. I design and build simple, fast one-page websites for local businesses — who you are, what you do, your hours, and a way to call you.",
  ogDescription: "Simple, fast one-page websites for local businesses.",
});

const work: WorkPiece[] = [
  {
    name: "RaeMa's Remedies",
    kind: "Client — order site",
    tags: ["One-page site", "Order form", "Self-editable"],
    outcome:
      "Eliminated messy manual direct messages by funneling custom orders directly to the owner's inbox.",
    description:
      "An order site for a family wellness brand. Customers browse the products and send their order straight to RaeMa's inbox — and she updates products, prices, and photos herself through a plain-language admin panel. No developer needed.",
    href: "https://raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage, with the line Made by hand, the old way.",
  },
  {
    name: "Better Than Gold Tallow Co.",
    kind: "Client — business site",
    tags: ["One-page site", "Farm brand"],
    outcome:
      "Transformed a physical market flyer into an online storefront for handmade beef tallow goods.",
    description:
      "A one-page site for a local tallow business, built from her real flyer, farm photos, and exact words. What she sells, her story, and a direct line to her — nothing for a customer to get lost in.",
    href: "https://better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage, over a gold field at sunrise.",
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

const faqs = [
  {
    q: "Are there ongoing monthly fees?",
    a: "No monthly retainers or hosting bills from me. Your site runs on fast modern cloud infrastructure with zero baseline server cost.",
  },
  {
    q: "Can I use my existing domain?",
    a: "Yes. I will configure your domain (GoDaddy, Google, Namecheap, etc.) at launch at no additional charge.",
  },
  {
    q: "How do I update prices or hours?",
    a: "For sites requiring frequent updates, I provide a clean, phone-friendly management screen so you can edit text and photos in seconds.",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <Hero />

      {/* ——— Services ——— */}
      <section
        id="services"
        className="cv-auto [--cis:79rem] md:[--cis:62rem] lg:[--cis:55.5rem] border-b border-line bg-wash"
      >
        <div className="mx-auto max-w-6xl gutter section-y lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              <span className="text-accent">01</span>
              <span aria-hidden> · </span>What I do
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-h2 font-semibold">
              Three things, done well.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              No packages with forty line items. Each one something I've already built and shipped.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} className="h-full md:last:col-span-2 lg:last:col-span-1">
                <div className="group/card flex h-full flex-col bg-wash p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-8 lg:p-10">
                  <span
                    aria-hidden
                    className="h-0.5 w-8 bg-accent transition-all duration-300 group-hover/card:w-16"
                  />
                  <span className="mt-6 font-tech text-sm text-accent-deep">{s.n}</span>
                  <h3 className="mt-4 font-display text-h3 font-semibold">
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
      <section
        id="work"
        className="cv-auto [--cis:105rem] md:[--cis:124rem] lg:[--cis:95.5rem] border-b border-line"
      >
        <div className="mx-auto max-w-6xl gutter section-y lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              <span className="text-accent">02</span>
              <span aria-hidden> · </span>Selected work
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-h2 font-semibold">
              Real sites, for real businesses.
            </h2>
          </Reveal>
          <WorkShowcase items={work} />
        </div>
      </section>

      {/* ——— Process ——— */}
      <section
        id="process"
        className="cv-auto [--cis:79rem] md:[--cis:57rem] lg:[--cis:48rem] border-b border-line"
      >
        <div className="mx-auto max-w-6xl gutter section-y lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              <span className="text-accent">03</span>
              <span aria-hidden> · </span>How it works
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-h2 font-semibold">
              How it goes.
            </h2>
          </Reveal>
          <div className="relative mt-14">
            <InkRule />
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.n}
                  delay={i * 0.06}
                  className="group/step border-t-2 border-ink pt-6 transition-colors duration-300 hover:border-accent lg:border-transparent lg:hover:border-transparent"
                >
                  <span className="font-tech text-sm text-ink-soft transition-colors duration-300 group-hover/step:text-accent-deep">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-h3 font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.12}>
            <div className="mt-16 flex flex-col gap-3">
              <p className="max-w-2xl font-display text-quote">
                The mockup is free. Builds typically start at $500 flat — named before I start.
              </p>
              <p className="font-tech text-eyebrow uppercase text-ink-soft">
                No hourly creep · No required monthly subscriptions · 100% owned by you
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Common Questions ——— */}
      <section className="cv-auto [--cis:30rem] border-b border-line bg-wash">
        <div className="gutter mx-auto max-w-6xl section-y lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              <span className="text-accent">04</span>
              <span aria-hidden> · </span>Common questions
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-h2 font-semibold">
              Straight answers.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col border border-line bg-paper p-6 sm:p-8">
                  <h3 className="font-display text-h3 font-semibold text-ink">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-body leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— About teaser ——— */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl gutter py-20 sm:py-24 lg:max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">The short version</p>
              <p className="mt-6 max-w-xl font-display text-quote lg:max-w-3xl">
                Husband, father, musician, photographer. From Siguatepeque,
                Honduras to Glennville, Georgia — building with AI, studying
                Scripture, writing it all down.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/about"
                className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 border border-ink px-6 py-3 font-semibold sm:w-auto transition-colors hover:bg-ink hover:text-paper"
              >
                More about me
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Contact / CTA band ——— */}
      <section
        data-surface="dark"
        data-cta-end=""
        className="cv-auto [--cis:40.5rem] lg:[--cis:45rem] bg-coal text-paper"
      >
        <div className="mx-auto max-w-6xl gutter overflow-clip py-24 sm:py-36 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-paper/70">
              Contact
            </p>
          </Reveal>
          <CtaTitle />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lead text-paper/70">
              Tell me about your business — what you do, who it&apos;s for,
              and what you wish your website did. I&apos;ll get back to you within a day.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-transparent bg-paper px-7 py-3 text-base font-semibold text-ink transition-all hover:bg-accent hover:text-paper active:scale-[0.97] sm:w-auto"
              >
                Start your project
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="https://x.com/gerardocasta711"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-paper/60 px-7 py-3 text-base font-semibold text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink sm:w-auto"
              >
                Message me on X
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
            <p className="mt-8 font-tech text-eyebrow uppercase text-paper/70">
              @gerardocasta711 — DMs open
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
