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
    body: "Everything someone looks up before they call or drive over: what you do, when you’re open, where to find you, and a button to reach you. Made for phones first, since that’s how most folks look you up.",
    specs: [
      { k: "Timeline", v: "About a week" },
      { k: "Made for", v: "Phones first, desktop too" },
      { k: "Monthly fee", v: "None" },
    ],
  },
  {
    n: "02",
    subtitle: "For makers, farms & bakeries",
    title: "Ordering & contact forms",
    inquireScope: "Ordering & Contact Form System",
    Diagram: DiagramOrderLedger,
    body: "Customers pick what they want right on your page and hit send — the order lands straight in your email. No middleman taking a cut, and no extra apps to learn.",
    specs: [
      { k: "Where orders go", v: "Straight to your email" },
      { k: "Middleman cut", v: "None" },
      { k: "Setup", v: "Built around what you sell" },
    ],
  },
  {
    n: "03",
    subtitle: "For changing menus & batches",
    title: "Sites you update yourself",
    inquireScope: "Self-Editable Website + Admin Panel",
    Diagram: DiagramSelfEditable,
    body: "Need to change holiday hours, swap a photo, or mark something sold out? I build a simple screen right into your site so you can update it yourself from your phone in a couple minutes.",
    specs: [
      { k: "Works on", v: "Your phone or computer" },
      { k: "You control", v: "Hours, items, stock & photos" },
      { k: "Handover", v: "I’ll walk you through it" },
    ],
  },
];

const work: WorkPiece[] = [
  {
    id: "raemas",
    index: "01",
    name: "RaeMa’s Remedies",
    kind: "Client · Order site",
    category: "commerce",
    location: "Tattnall County, Georgia",
    outcome:
      "No more juggling orders in DMs — everything goes straight to her email.",
    description:
      "Rachael makes tallow skincare and herbal remedies here in Tattnall County. Neighbors can look through what she has and place an order in a minute, and whenever a new batch is ready, she updates the page herself.",
    href: "https://raemas-remedies.vercel.app",
    domainLabel: "raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage, with the line Made by hand, the old way.",
    inquireProduct: "Site Inspired by RaeMa's Remedies",
    specs: [
      { label: "Client", value: "Rachael Harrelson · Tattnall County, GA" },
      { label: "What I built", value: "One-page catalog, order form & edit screen" },
      { label: "Owner updates", value: "Items, stock & photos from her phone" },
      { label: "Monthly fees", value: "None · Owned outright" },
    ],
  },
  {
    id: "tallow",
    index: "02",
    name: "Better Than Gold Tallow Co.",
    kind: "Client · One-page site",
    category: "brand",
    location: "Southeast Georgia",
    outcome:
      "Built straight from her market flyer and farm photos in about a week.",
    description:
      "A simple one-page site for a tallow maker in Southeast Georgia. No invented marketing talk — just her own words, her farm photos, and a straight path to order.",
    href: "https://better-than-gold-tallow.vercel.app",
    domainLabel: "better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage, over a gold field at sunrise.",
    inquireProduct: "Site Inspired by Better Than Gold Tallow Co.",
    specs: [
      { label: "Client", value: "Better Than Gold · Southeast Georgia" },
      { label: "What I built", value: "Her story, products & direct contact" },
      { label: "Built from", value: "Her market flyer & farm photos" },
      { label: "Timeline", value: "About a week from free mockup" },
    ],
  },
  {
    id: "theos-logos",
    index: "03",
    name: "Theos Logos",
    kind: "Personal project · Study app",
    category: "software",
    location: "Glennville, Georgia",
    outcome:
      "A quiet Greek & Hebrew Bible study tool I made for my own reading.",
    description:
      "Built for my seminary classes and daily study. It puts the Greek and Hebrew text right next to Strong’s definitions and word lookups, without ads or clutter in the way.",
    href: "https://theoslogos.vercel.app",
    domainLabel: "theoslogos.vercel.app",
    imageAlt:
      "Theos Logos web application showing Greek and Hebrew interlinear scripture and Strong's lexicon panel.",
    inquireProduct: "Software / Custom Web Application",
    specs: [
      { label: "Kind", value: "Personal web app" },
      { label: "Includes", value: "Greek & Hebrew text + Strong’s lookups" },
      { label: "Layout", value: "Side-by-side reader & word study" },
      { label: "Status", value: "Free to use online" },
    ],
  },
];

const steps = [
  {
    n: "01",
    timing: "First step",
    title: "We talk",
    body: "You tell me what your business does and what you want your site to help with. Plain talk, no sales pitch.",
  },
  {
    n: "02",
    timing: "A few days later",
    title: "Free mockup",
    body: "I put together a working draft with your real info and show it to you on a phone. If it’s not what you want, you walk away owing nothing.",
  },
  {
    n: "03",
    timing: "About a week",
    title: "I build it",
    body: "Once the draft feels right and we agree on the flat fee, I finish the full site — mobile layout, forms, and whatever edit tools you need — and we put it online together.",
  },
  {
    n: "04",
    timing: "For good",
    title: "It’s yours",
    body: "The site belongs to you, with no monthly bills from me. I’ll show you how to update it yourself, and if you ever need a hand later, just text or email me.",
  },
];

const faqs: { q: string; a: string; lang?: string }[] = [
  {
    q: "How do you charge?",
    a: "One flat fee, and I tell you what it is after you see your free mockup. No hourly meter running and no surprise add-ons.",
  },
  {
    q: "Are there monthly fees?",
    a: "Not from me. Small-business sites like these run on free, reliable hosting — the only yearly cost you’ll have is your own domain name (like yourshop.com).",
  },
  {
    q: "Can I keep my domain & update things myself?",
    a: "Yes, it’s all yours. If you already own a domain on GoDaddy or Namecheap, I’ll connect it for free. And if your hours or items change often, I’ll add a simple screen so you can update them from your phone.",
  },
  {
    q: "¿Hablas español?",
    a: "Sí — nací y crecí en Siguatepeque, Honduras. Podemos hablar y hacer tu página completamente en español, en inglés, o en los dos idiomas.",
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
                  Three things I build.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                No bloated packages full of stuff you don&apos;t need. Just the
                three things small businesses around here actually ask for.
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
                  Real sites, for real people.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Two local businesses and a study app I built for myself. Click
                any of them to look around.
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
                  <span className="text-accent-deep">03</span> · The process
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  How it works.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Four simple steps. You see a working version of your site on a
                phone before you spend anything.
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
                    &ldquo;The mockup is free. The build is one flat fee — told
                    to you before I start.&rdquo;
                  </p>
                  <p className="mt-3 font-tech text-xs uppercase text-ink-mute">
                    No surprise bills · No monthly fees · 100% yours
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
                A few things people usually ask before we get started.
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
                <span>More about me</span>
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
                      Free mockup on your phone
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">How I charge</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      One flat fee, told upfront
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Timeline</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      About a week
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="shrink-0 text-ink-mute">Reply</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Within a day, from Glennville
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
