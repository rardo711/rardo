import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import WorkShowcase, { type WorkPiece } from "../components/WorkShowcase";
import ContactForm from "../components/ContactForm";
import InkRule from "../components/InkRule";
import {
  DiagramOnePage,
  DiagramOrderLedger,
  DiagramSelfEditable,
} from "../components/ServiceDiagrams";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  description:
    "I'm Rardo. I design and build simple, fast one-page websites, direct ordering forms, and update-it-yourself sites for local businesses in Glennville, Georgia and beyond.",
  ogDescription:
    "Simple, fast one-page websites and ordering systems for local businesses.",
});

function renderCleanAmp(text: string) {
  if (!text.includes("&")) return text;
  const parts = text.split("&");
  return parts.map((part, idx) => (
    <Fragment key={idx}>
      {part}
      {idx < parts.length - 1 && <span className="amp-clean">&amp;</span>}
    </Fragment>
  ));
}

const services = [
  {
    n: "01",
    subtitle: "For local shops & services",
    title: "One-page websites",
    inquireScope: "One-Page Business Website",
    Diagram: DiagramOnePage,
    body: "Everything a customer checks before driving over or calling: who you are, what you do, your current hours, and a clear button to call or message you. Built to feel effortless on a phone.",
    specs: [
      { k: "Turnaround", v: "One focused week" },
      { k: "Designed for", v: "Phones first & desktop" },
      { k: "Monthly fee", v: "$0 / month" },
    ],
  },
  {
    n: "02",
    subtitle: "For makers, farms & bakeries",
    title: "Ordering & contact forms",
    inquireScope: "Ordering & Contact Form System",
    Diagram: DiagramOrderLedger,
    body: "Let customers browse your goods, pick quantities, and send their order straight to your email inbox — no marketplace commissions, no apps to learn, and nothing complicated to maintain.",
    specs: [
      { k: "Order delivery", v: "Straight to your inbox" },
      { k: "Platform cut", v: "0% commission" },
      { k: "Setup", v: "Tailored to your items" },
    ],
  },
  {
    n: "03",
    subtitle: "For changing menus & batches",
    title: "Sites you update yourself",
    inquireScope: "Self-Editable Website + Admin Panel",
    Diagram: DiagramSelfEditable,
    body: "A plain-language edit panel built right into your site. Change prices, mark batches in or out of stock, update holiday hours, and swap photos from your phone in two minutes.",
    specs: [
      { k: "Edit from", v: "Your phone or computer" },
      { k: "What you control", v: "Prices, stock, hours & photos" },
      { k: "Handover", v: "1-on-1 walkthrough included" },
    ],
  },
];

const work: WorkPiece[] = [
  {
    id: "raemas",
    index: "01",
    name: "RaeMa’s Remedies",
    kind: "Client — Order Site & Admin",
    category: "commerce",
    location: "Tattnall County, Georgia",
    outcome:
      "Replaced back-and-forth DMs with a self-editable catalog and direct-to-inbox orders.",
    description:
      "An order site for Rachael Harrelson’s family wellness brand. Customers browse handcrafted remedies and send their order straight to RaeMa’s inbox — while she updates products, batch prices, and photos herself through a plain-language admin panel.",
    href: "https://raemas-remedies.vercel.app",
    domainLabel: "raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage, with the line Made by hand, the old way.",
    inquireProduct: "Site Inspired by RaeMa's Remedies",
    specs: [
      { label: "Client", value: "Rachael Harrelson · Tattnall County, GA" },
      { label: "What we built", value: "One-page catalog, order form & edit panel" },
      { label: "Owner control", value: "Self-editable products, prices & photos" },
      { label: "Monthly fees", value: "$0 / month · Owned outright" },
    ],
  },
  {
    id: "tallow",
    index: "02",
    name: "Better Than Gold Tallow Co.",
    kind: "Client — Farm Brand Site",
    category: "brand",
    location: "Southeast Georgia",
    outcome:
      "Turned a printed farmers-market flyer and pasture photos into a clean one-page storefront.",
    description:
      "A warm one-page site for a Southeast Georgia tallow business, crafted directly from her real market flyer, pasture photography, and spoken words. What she makes, her story, and a direct line to order — nothing for a customer to get lost in.",
    href: "https://better-than-gold-tallow.vercel.app",
    domainLabel: "better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage, over a gold field at sunrise.",
    inquireProduct: "Site Inspired by Better Than Gold Tallow Co.",
    specs: [
      { label: "Client", value: "Better Than Gold · Southeast Georgia" },
      { label: "What we built", value: "Brand story, product showcase & contact" },
      { label: "Built from", value: "Her print flyer & original farm photos" },
      { label: "Turnaround", value: "One focused week from free mockup" },
    ],
  },
  {
    id: "theos-logos",
    index: "03",
    name: "Theos Logos",
    kind: "Personal Software — Study App",
    category: "software",
    location: "Glennville, Georgia",
    outcome:
      "Built a fast, distraction-free Greek & Hebrew study room for daily seminary exegesis.",
    description:
      "A biblical study web application I built for my own seminary coursework and daily reading. Pairs an interlinear scripture reader with Strong’s Greek and Hebrew lexicons, root parsing, and concordance lookups in a quiet, distraction-free reading room.",
    href: "https://theoslogos.vercel.app",
    domainLabel: "theoslogos.vercel.app",
    imageAlt:
      "Theos Logos web application showing Greek and Hebrew interlinear scripture and Strong's lexicon panel.",
    inquireProduct: "Software / Custom Web Application",
    specs: [
      { label: "Kind", value: "In-house web application" },
      { label: "Features", value: "Greek & Hebrew lexicons + interlinear text" },
      { label: "Design", value: "Split-pane manuscript & concordance reader" },
      { label: "Status", value: "Live public web app" },
    ],
  },
];

const steps = [
  {
    n: "01",
    timing: "First conversation",
    title: "We talk",
    body: "Free and unhurried. You tell me about your business and what you wish your website did. Plain talk, no jargon, no pressure.",
  },
  {
    n: "02",
    timing: "Days 2 – 3",
    title: "Free mockup",
    body: "I build a working one-page mockup using your real business info and show it to you on my phone. You see exactly what you’d get before paying anything.",
  },
  {
    n: "03",
    timing: "One focused week",
    title: "I build your site",
    body: "Once you love the mockup and approve the flat fee, I build the real thing — mobile layout, forms, and edit panel — and we put it live together.",
  },
  {
    n: "04",
    timing: "From day one",
    title: "It’s yours",
    body: "The site belongs to you outright with zero monthly retainers. I’ll show you how to update it yourself, and I’m always a message away.",
  },
];

const faqs: { q: string; a: string; lang?: string }[] = [
  {
    q: "What does a site cost?",
    a: "Builds start at $250 flat, named upfront after you see your free working mockup. No hourly billing and no surprise add-ons.",
  },
  {
    q: "Are there monthly fees?",
    a: "No developer retainers or platform commissions from me. Your site runs on modern cloud hosting with $0 baseline monthly cost.",
  },
  {
    q: "Do I keep my domain & updates?",
    a: "100% yours. I connect your existing domain (GoDaddy, Namecheap, Squarespace, etc.) at no extra charge, and can include a simple edit panel for your phone.",
  },
  {
    q: "¿Hablas español?",
    a: "Sí — nací y crecí en Siguatepeque, Honduras. Podemos hablar, planear y construir tu sitio completamente en español o en ambos idiomas.",
    lang: "es",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ——— 01 · Services ——— */}
      <section
        id="services"
        className="border-b border-line bg-wash/60 section-y"
      >
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  <span className="text-accent-deep">01</span> · What I do
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Three things, done with care.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                No confusing agency packages with forty line items. Each offering is something I&apos;ve already built and shipped for real people.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Diagram = s.Diagram;
              const isThird = i === 2;
              return (
                <Reveal
                  key={s.n}
                  delay={i * 0.06}
                  className={`h-full ${isThird ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <article
                    className={`card-editorial card-editorial-hover flex h-full flex-col rounded-2xl p-5 sm:p-6 ${
                      isThird
                        ? "md:grid md:grid-cols-12 md:items-center md:gap-8 lg:flex lg:flex-col lg:items-stretch lg:gap-0"
                        : ""
                    }`}
                  >
                    <div className={isThird ? "md:col-span-6 lg:w-full" : undefined}>
                      <div className="flex items-baseline justify-between gap-2 pb-4">
                        <span className="font-display text-lg italic text-accent-deep">
                          {s.n}
                        </span>
                        <span className="font-tech text-[0.6875rem] uppercase text-ink-mute">
                          {s.subtitle}
                        </span>
                      </div>

                      <div className="overflow-hidden rounded-xl border border-line/80">
                        <Diagram />
                      </div>
                    </div>

                    <div
                      className={`flex flex-1 flex-col justify-between ${
                        isThird ? "md:col-span-6 lg:w-full" : ""
                      }`}
                    >
                      <div>
                        <h3
                          className={`mt-6 font-display text-h3 font-semibold text-ink ${
                            isThird ? "md:mt-0 lg:mt-6" : ""
                          }`}
                        >
                          {renderCleanAmp(s.title)}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {s.body}
                        </p>
                      </div>

                      <div className="mt-6 pt-2">
                        <dl className="divide-y divide-line/80 border-y border-line/80 text-xs">
                          {s.specs.map((row) => (
                            <div
                              key={row.k}
                              className="flex items-baseline justify-between gap-4 py-2.5"
                            >
                              <dt className="shrink-0 text-ink-mute">{row.k}</dt>
                              <dd className="text-right font-medium tabular-nums text-ink">
                                {row.v}
                              </dd>
                            </div>
                          ))}
                        </dl>

                        <a
                          href="#inquire"
                          data-inquire-product={s.inquireScope}
                          className="group mt-5 inline-flex min-h-11 w-full items-center justify-between rounded-xl bg-wash px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-300 hover:bg-ink hover:text-paper"
                        >
                          <span>Ask about {s.title.toLowerCase()}</span>
                          <ArrowRight
                            size={15}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— 02 · Selected Work ——— */}
      <section id="work" className="border-b border-line bg-paper section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  <span className="text-accent-deep">02</span> · Selected work
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Real sites, built for real people.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Explore live client storefronts and personal software below. See something that fits your business? Click &ldquo;Build something similar&rdquo; to pre-fill your project note.
              </p>
            </div>
          </Reveal>

          <WorkShowcase items={work} />
        </div>
      </section>

      {/* ——— 03 · How It Works ——— */}
      <section
        id="process"
        className="border-b border-line bg-wash/55 section-y"
      >
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  <span className="text-accent-deep">03</span> · How it works
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Simple from the first hello.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Four clear steps from our first conversation to your live domain — see a working mockup on a phone before paying anything.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <InkRule />
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.n}
                  delay={i * 0.06}
                  className="group/step relative border-t border-line-strong pt-6 lg:border-t-0 lg:pt-8"
                >
                  <span
                    aria-hidden
                    className="hidden lg:block absolute -top-[3.5px] left-0 h-2 w-2 rounded-full border-[1.5px] border-accent bg-paper"
                  />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-2xl italic text-accent-deep">
                      {s.n}
                    </span>
                    <span className="font-tech text-[0.6875rem] uppercase text-ink-mute">
                      {s.timing}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-h3 font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.14}>
            <div className="mt-16 border-t border-line-strong pt-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl border-l-2 border-accent pl-5 sm:pl-6">
                  <p className="font-display text-quote text-ink">
                    &ldquo;The mockup is free. Builds start at $250 flat — named
                    before I start.&rdquo;
                  </p>
                  <p className="mt-3 font-tech text-xs uppercase text-ink-mute">
                    No hourly creep · $0 monthly retainers · 100% owned by you
                  </p>
                </div>
                <a
                  href="#inquire"
                  data-inquire-product="One-Page Business Website"
                  className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep sm:w-fit"
                >
                  <span>Request your mockup</span>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— 04 · Straight Answers (Open Editorial FAQ) ——— */}
      <section id="faq" className="border-b border-line bg-paper section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  <span className="text-accent-deep">04</span> · Common questions
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Straight answers.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                What business owners usually ask before requesting a free mockup — answered plainly up front.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-line-strong md:grid-cols-2">
            {faqs.map((item, i) => (
              <Reveal
                key={item.q}
                delay={i * 0.05}
                className="border-b border-line py-7 sm:py-8"
              >
                <div lang={item.lang}>
                  <h3 className="font-display text-h3 font-semibold text-ink">
                    {renderCleanAmp(item.q)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— About Teaser ——— */}
      <section className="border-b border-line bg-wash/45 py-16 sm:py-20 lg:py-24">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                The person behind the sites
              </p>
              <p className="mt-5 max-w-3xl font-display text-quote text-ink">
                Husband, father of two, musician, photographer. From the
                mountain town of Siguatepeque, Honduras to Glennville, Georgia —
                building for neighbors, studying Scripture, and writing it all
                down.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/about"
                className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2.5 rounded-xl border border-line-strong bg-surface px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-wash sm:w-auto"
              >
                <span>Read my story &amp; notes</span>
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— 05 · Start Your Project (On-Page Inquiry Form) ——— */}
      <section
        id="inquire"
        data-cta-end=""
        className="border-b border-line bg-paper section-y"
      >
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  <span className="text-accent-deep">05</span> · Start your project
                </p>
                <h2 className="mt-4 font-display text-h2 font-semibold text-ink">
                  Let’s build{" "}
                  <em className="font-normal italic text-accent-deep">yours.</em>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  Tell me a little about your business — what you do, who it&apos;s
                  for, and what you wish your website did. I&apos;ll reply within a
                  day and put together a free mockup so you can see it on your
                  phone first.
                </p>

                <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">First step</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Free working phone mockup ($0)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Pricing</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Starts at $250 flat (named upfront)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Build time</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      One focused week
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Reply time</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Within 24 hours from Glennville, GA
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Languages</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      English &amp; Español
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
