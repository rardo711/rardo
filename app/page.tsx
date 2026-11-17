import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import WorkShowcase, { type WorkPiece } from "../components/WorkShowcase";
import ContactForm from "../components/ContactForm";
import {
  DiagramOnePage,
  DiagramOrderLedger,
  DiagramSelfEditable,
} from "../components/ServiceDiagrams";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Gerardo Castaneda (Rardo) designs and builds flat-fee one-page websites, direct inbox ordering systems, and self-editable sites for small businesses in Glennville, Georgia.",
  ogDescription:
    "Flat-fee one-page websites, direct ordering systems, and self-editable sites for small businesses.",
});

const services = [
  {
    n: "01",
    tag: "CORE PRESENCE",
    title: "One-Page Business Websites",
    inquireScope: "One-Page Business Website",
    Diagram: DiagramOnePage,
    body: "Everything a local customer checks before driving over or calling: what you sell, your current hours, your street address, and a prominent tap-to-call bar built for phones.",
    specs: [
      { k: "Turnaround", v: "7 Days (1 Week)" },
      { k: "Primary Viewport", v: "Mobile-First + Desktop" },
      { k: "Ongoing Retainer", v: "$0 / Month" },
      { k: "Best Suited For", v: "Shops, Trades & Local Services" },
    ],
  },
  {
    n: "02",
    tag: "DIRECT COMMERCE",
    title: "Ordering & Contact Systems",
    inquireScope: "Ordering & Contact Form System",
    Diagram: DiagramOrderLedger,
    body: "Customers browse your current product list, pick quantities or service needs, and send their order straight to your email inbox — without marketplace commissions or app logins.",
    specs: [
      { k: "Order Routing", v: "Direct to Owner Inbox" },
      { k: "Platform Commission", v: "0% Transaction Cut" },
      { k: "Spam Protection", v: "Built-In Honeypot & Validation" },
      { k: "Best Suited For", v: "Farms, Bakeries & Makers" },
    ],
  },
  {
    n: "03",
    tag: "OWNER AUTONOMY",
    title: "Self-Editable Owner Panels",
    inquireScope: "Self-Editable Website + Admin Panel",
    Diagram: DiagramSelfEditable,
    body: "A plain-language control panel built specifically for your site. Update seasonal items, prices, shop hours, and photos from your phone in two minutes without calling a developer.",
    specs: [
      { k: "Edit Interface", v: "Plain-Language Fields" },
      { k: "Controllable Data", v: "Prices, Stock, Hours & Photos" },
      { k: "Training Included", v: "1-on-1 Walkthrough at Handover" },
      { k: "Best Suited For", v: "Changing Menus & Small-Batch Goods" },
    ],
  },
];

const work: WorkPiece[] = [
  {
    id: "raemas",
    index: "01",
    name: "RaeMa’s Remedies",
    kind: "Client Build · Direct Order Site",
    category: "commerce",
    location: "Tattnall County, Georgia",
    description:
      "A bespoke storefront and order ledger for Rachael Harrelson’s family tallow and herbal remedies business. Customers assemble their order and dispatch it straight to RaeMa’s inbox, while she updates batches, prices, and product photography herself through a custom plain-language admin panel.",
    href: "https://raemas-remedies.vercel.app",
    domainLabel: "raemas-remedies.vercel.app",
    image: "/work/raemas.webp",
    imageAlt:
      "RaeMa's Remedies homepage featuring the headline Made by hand, the old way.",
    inquireProduct: "Site Inspired by RaeMa's Remedies",
    specs: [
      { label: "Client & Sector", value: "RaeMa’s Remedies · Small-Batch Wellness" },
      { label: "County / Origin", value: "Tattnall County, GA" },
      { label: "Deliverable Scope", value: "Storefront + Order Ledger + Admin Panel" },
      { label: "Owner Autonomy", value: "100% Self-Editable Catalog & Pricing" },
      { label: "Monthly Platform Fee", value: "$0 / Month" },
    ],
  },
  {
    id: "tallow",
    index: "02",
    name: "Better Than Gold Tallow Co.",
    kind: "Client Build · Farm Brand Site",
    category: "brand",
    location: "Southeast Georgia",
    description:
      "A fast, editorial one-page storefront for a Southeast Georgia family farm crafting suet tallow balms and scrubs. Built directly from her printed market flyer, real pasture photography, and own words — giving market shoppers a clear catalog and direct line to order.",
    href: "https://better-than-gold-tallow.vercel.app",
    domainLabel: "better-than-gold-tallow.vercel.app",
    image: "/work/tallow.webp",
    imageAlt:
      "Better Than Gold Tallow Co. homepage over a golden pasture at sunrise.",
    inquireProduct: "Site Inspired by Better Than Gold Tallow Co.",
    specs: [
      { label: "Client & Sector", value: "Better Than Gold · Family Farm Skincare" },
      { label: "Region", value: "Southeast Georgia" },
      { label: "Deliverable Scope", value: "One-Page Brand Story + Product Ledger" },
      { label: "Source Material", value: "Print Flyer + Original Farm Photography" },
      { label: "Build Turnaround", value: "7 Days (Mockup to Launch)" },
    ],
  },
  {
    id: "theos-logos",
    index: "03",
    name: "Theos Logos",
    kind: "Personal Build · Web Application",
    category: "software",
    location: "Glennville, Georgia",
    description:
      "A full-stack biblical study environment and interlinear scripture reader built for seminary exegesis. Features integrated Strong’s Greek and Hebrew lexicons, grammatical morphology parsing, and cross-referenced concordance lookups in a distraction-free archival layout.",
    href: "https://theos-logos-official.vercel.app",
    domainLabel: "theos-logos-official.vercel.app",
    imageAlt:
      "Theos Logos web application showing Greek and Hebrew interlinear scripture and Strong's lexicon inspector.",
    inquireProduct: "Software / Custom Web Application",
    specs: [
      { label: "Classification", value: "In-House Software · Theological Tooling" },
      { label: "Data Architecture", value: "Greek & Hebrew Lexicons + Interlinear Text" },
      { label: "Interface Pattern", value: "Split-Pane Manuscript & Concordance Reader" },
      { label: "Performance", value: "Instant Client-Side Lexical Lookup" },
      { label: "Status", value: "Live Public Web Application" },
    ],
  },
];

const steps = [
  {
    n: "01",
    window: "DAY 01",
    title: "Plain-Talk Conversation",
    deliverable: "15-Minute Scope Note",
    body: "You tell me what your business sells, who walks through your door, and what you need the page to do. No technical jargon and no sales pitch.",
  },
  {
    n: "02",
    window: "DAYS 02–03",
    title: "Free Working Mockup",
    deliverable: "Live Preview on Your Phone",
    body: "I build a working one-page mockup using your real business name, photos, and words. You inspect the actual page before you ever commit or pay a dollar.",
  },
  {
    n: "03",
    window: "DAYS 04–06",
    title: "Focused Production Build",
    deliverable: "Forms, Speed & SEO Wired",
    body: "Once you approve the mockup and flat fee, I wire the ordering/contact forms, mobile layout, local search metadata, and owner edit panel.",
  },
  {
    n: "04",
    window: "DAY 07",
    title: "Launch & Owner Handover",
    deliverable: "100% Ownership + Walkthrough",
    body: "We put the site live on your domain together. I show you how to update your own prices and hours in minutes — and I stay a text or email away.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ——— 01 · Service Capabilities (Structured Spec Cards) ——— */}
      <section
        id="services"
        className="border-b border-line bg-wash section-y"
      >
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line-strong pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">01</span> · Capabilities &amp; Specifications
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Three focused builds, engineered for small-town utility.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                No bloated retainer packages with forty line items. Every offering below is a concrete architecture I have already built and shipped into production.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => {
              const Diagram = s.Diagram;
              return (
                <Reveal key={s.n} delay={i * 0.05} className="h-full">
                  <article className="flex h-full flex-col justify-between rounded-[2px] border border-ink bg-surface">
                    <div>
                      {/* Card Metadata Header */}
                      <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3 font-tech text-xs uppercase">
                        <span className="font-bold text-accent-deep">
                          NO. {s.n}
                        </span>
                        <span className="font-semibold text-ink-soft">
                          {s.tag}
                        </span>
                      </div>

                      {/* Custom Architectural SVG Diagram */}
                      <div className="border-b border-line bg-wash/50 p-4">
                        <Diagram />
                      </div>

                      {/* Editorial Description */}
                      <div className="p-6 pb-4">
                        <h3 className="font-display text-h3 font-semibold text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {s.body}
                        </p>
                      </div>
                    </div>

                    {/* Structured Key-Value Specification Rows + Direct Scope CTA */}
                    <div className="px-6 pb-6">
                      <dl className="divide-y divide-line border-y border-line text-xs">
                        {s.specs.map((row) => (
                          <div
                            key={row.k}
                            className="flex items-baseline justify-between gap-3 py-2"
                          >
                            <dt className="font-tech uppercase text-ink-mute">
                              {row.k}
                            </dt>
                            <dd className="text-right font-semibold tabular-nums text-ink">
                              {row.v}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <a
                        href="#inquire"
                        data-inquire-product={s.inquireScope}
                        className="group mt-5 inline-flex min-h-11 w-full items-center justify-between rounded-[2px] border border-ink bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
                      >
                        <span>Inquire About No. {s.n}</span>
                        <ArrowRight
                          size={15}
                          aria-hidden
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— 02 · Unified, Filterable Shipped Work Ledger ——— */}
      <section id="work" className="border-b border-line bg-paper section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">02</span> · Production Index
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Shipped websites &amp; software in active use.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                Filter by category below or inspect any live deployment. Clicking &ldquo;Inquire About Similar Build&rdquo; pre-loads that architecture into the project brief form below.
              </p>
            </div>
          </Reveal>

          <WorkShowcase items={work} />
        </div>
      </section>

      {/* ——— 03 · Four-Stage Execution Protocol ——— */}
      <section id="process" className="border-b border-line bg-wash section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line-strong pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">03</span> · Execution Protocol
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  From first conversation to live domain in seven days.
                </h2>
              </div>
              <div className="rounded-[2px] border border-ink bg-surface px-4 py-3 font-tech text-xs uppercase text-ink">
                Commercial Guarantee:{" "}
                <strong className="text-accent-deep">
                  $0 Mockup Before Any Invoice
                </strong>
              </div>
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                delay={i * 0.05}
                className="flex flex-col justify-between bg-surface p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-3 font-tech text-xs uppercase">
                    <span className="font-bold text-accent-deep">
                      STAGE {s.n}
                    </span>
                    <span className="tabular-nums text-ink-mute">
                      {s.window}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-h3 font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
                <div className="mt-6 border-t border-line pt-3 font-tech text-[0.6875rem] uppercase text-ink">
                  <span className="text-ink-mute">Deliverable: </span>
                  <span className="font-semibold">{s.deliverable}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Studio Dossier Bridge to /about ——— */}
      <section className="border-b border-line bg-paper py-16 sm:py-20">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <div className="grid items-center gap-8 rounded-[2px] border border-ink bg-surface p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-tech text-xs font-semibold uppercase text-accent-deep">
                Builder Dossier · Glennville &amp; Reidsville, Georgia
              </p>
              <h2 className="mt-3 font-display text-quote font-semibold text-ink">
                Built by a neighbor you can actually call — not an anonymous agency ticket queue.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                Read the full studio dossier, my treatise on why small-town businesses shouldn&apos;t pay monthly rent for their own website, and the complete directory of my software, photography, and writing.
              </p>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <Link
                href="/about"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[2px] border border-ink bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper sm:w-auto"
              >
                <span>Read Dossier &amp; Treatise</span>
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 04 · Exposed High-Intent Project Inquiry Ledger ——— */}
      <section
        id="inquire"
        data-cta-end=""
        className="border-b border-line bg-wash section-y"
      >
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left 5 Cols: Commercial Terms & Direct Specifications */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">04</span> · Commission &amp; Dispatch
                </p>
                <h2 className="mt-4 font-display text-h2 font-semibold text-ink">
                  Start with a free working mockup.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  Select a build scope in the ledger or click &ldquo;Inquire&rdquo; on any card above. I&apos;ll reply within one business day and put together a live preview on my phone before you spend a dollar.
                </p>

                <dl className="mt-8 divide-y divide-line-strong border-y border-line-strong text-sm">
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="font-tech text-xs uppercase text-ink-mute">
                      Upfront Cost
                    </dt>
                    <dd className="font-semibold tabular-nums text-ink">
                      $0.00 (Free Working Mockup)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="font-tech text-xs uppercase text-ink-mute">
                      Build Pricing
                    </dt>
                    <dd className="font-semibold text-ink">
                      Flat Fee Named Before Start
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="font-tech text-xs uppercase text-ink-mute">
                      Turnaround Window
                    </dt>
                    <dd className="font-semibold tabular-nums text-ink">
                      7 Days (One Focused Week)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="font-tech text-xs uppercase text-ink-mute">
                      Direct Station
                    </dt>
                    <dd className="font-semibold text-ink">
                      Glennville, GA · Replies &lt; 24h
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 rounded-[2px] border border-line-strong bg-surface p-5">
                  <p className="font-tech text-xs font-semibold uppercase text-accent-deep">
                    Prefer Direct Email or X?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Write straight to{" "}
                    <a
                      href="mailto:gerardoj2001@outlook.com"
                      className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    >
                      gerardoj2001@outlook.com
                    </a>{" "}
                    or send a DM to{" "}
                    <a
                      href="https://x.com/gerardocasta711"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    >
                      @gerardocasta711
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    .
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Cols: Exposed Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
