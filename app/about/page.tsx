import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import InkRule from "../../components/InkRule";
import { pageMetadata } from "@/lib/seo";
import { pageDates, siteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  ogTitle: "About · Gerardo Castaneda",
  description:
    "I'm Rardo — husband, father of two, musician, photographer, and web builder. From Siguatepeque, Honduras to Glennville, Georgia.",
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

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: `${siteUrl}/about`,
  name: "About Gerardo Castaneda",
  dateModified: pageDates["/about"],
  mainEntity: { "@id": `${siteUrl}/#person` },
};

const studioNotes = [
  { label: "Name", value: "Gerardo Castaneda (“Rardo”)" },
  { label: "Born & raised", value: "Siguatepeque, Comayagua, Honduras" },
  { label: "Home today", value: "Glennville, Tattnall County, Georgia" },
  { label: "Family", value: "Husband to Olivia · Father of two" },
  { label: "Day work", value: "Retail team lead · T-Mobile (Reidsville)" },
  { label: "Study", value: "Seminary coursework in Greek & Hebrew" },
  { label: "Fuel", value: "Loose-leaf Yerba Mate*" },
];

const convictions = [
  {
    num: "I",
    title: "Plain words over marketing fog",
    body: "When a neighbor in Tattnall County looks up a farm stand, a shop, or a family business, they aren’t looking for agency buzzwords. They want to see what you make, when your doors are open, and how to reach you. Every site I build starts with your real words and real photos.",
  },
  {
    num: "II",
    title: "Ownership, not monthly rent",
    body: "Small businesses shouldn’t be locked into a $150/month retainer just to update a price or holiday hour. I charge a single flat fee named upfront, build a plain-language edit panel when your inventory changes often, and hand you the keys outright.",
  },
  {
    num: "III",
    title: "Built for the phone in your hand",
    body: "Most local customers look you up on a phone in a parking lot or on the porch. Every page I ship is light, fast on county cell service, and puts your call button or order form right where a thumb can reach it.",
  },
];

const frames = [
  {
    src: "/photos/family-walk.webp",
    alt: "Gerardo, Olivia, and their two children walking across a lawn, holding hands.",
    caption: "Family first",
    note: "Walking the yard together in Glennville",
  },
  {
    src: "/photos/with-daughter.webp",
    alt: "Gerardo sitting on the grass, holding his daughter.",
    caption: "The unplanned ones",
    note: "Mid-laugh, ordinary afternoons",
  },
  {
    src: "/photos/wedding.webp",
    alt: "Gerardo and Olivia on their wedding day, foreheads touching under a floral arch.",
    caption: "Our day",
    note: "Where our Georgia household began",
  },
];

const worksIndex = [
  {
    kind: "Client Order Site",
    title: "RaeMa’s Remedies",
    meta: "Tattnall County, GA",
    summary:
      "Family tallow & herbal remedy storefront with direct-to-inbox ordering and a plain-language edit panel.",
    href: "https://raemas-remedies.vercel.app",
    linkLabel: "Visit site",
    external: true,
    inquireScope: "Site Inspired by RaeMa's Remedies",
  },
  {
    kind: "Client Brand Site",
    title: "Better Than Gold Tallow Co.",
    meta: "Southeast Georgia",
    summary:
      "One-page farm storefront built from her real market flyer, pasture photography, and spoken story.",
    href: "https://better-than-gold-tallow.vercel.app",
    linkLabel: "Visit site",
    external: true,
    inquireScope: "Site Inspired by Better Than Gold Tallow Co.",
  },
  {
    kind: "Personal Software",
    title: "Theos Logos",
    meta: "Web Application",
    summary:
      "A Bible study app I built for myself with an interlinear reader and Strong’s Hebrew and Greek lexicons.",
    href: "https://theoslogos.vercel.app",
    linkLabel: "Open app",
    external: true,
    inquireScope: "Software / Custom Web Application",
  },
  {
    kind: "Podcast",
    title: "The Life Proper",
    meta: "Spotify · Co-hosted with Caleb",
    summary:
      "Conversations with my friend Caleb on faith, fatherhood, Scripture, and the examined life.",
    href: "https://open.spotify.com/show/2rxl4jrLFaQ2SYb75NGDYj",
    linkLabel: "Listen on Spotify",
    external: true,
  },
  {
    kind: "Photography",
    title: "@lvngphotography",
    meta: "Portrait & Family Archive",
    summary:
      "Where my photographs live — portraits, family frames, and the unplanned moments in between.",
    href: "https://www.instagram.com/lvngphotography/",
    linkLabel: "View on Instagram",
    external: true,
  },
  {
    kind: "Writing & Exegesis",
    title: "Ultimate Truth & Seminary Studies",
    meta: "Book Manuscript & Thesis",
    summary:
      "A book manuscript called Ultimate Truth, a thesis on modern American evangelicalism, and coursework in Greek and Hebrew exegesis.",
    href: "/contact?scope=Software+%2F+Custom+Web+Application",
    linkLabel: "Say hello",
    external: false,
  },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ——— Part 1: Essay & Portrait ——— */}
      <section className="border-b border-line bg-paper">
        <div className="gutter mx-auto max-w-6xl pb-16 pt-12 sm:pb-20 sm:pt-16 lg:max-w-7xl lg:pb-24 lg:pt-20">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal eager>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  The person behind the sites
                </p>
                <h1 className="mt-5 font-display text-h1 font-semibold text-ink">
                  I’m{" "}
                  <em className="font-normal italic text-accent-deep">Rardo.</em>
                </h1>
              </Reveal>

              <div className="mt-8 flex max-w-[62ch] flex-col gap-5 text-body text-ink-soft">
                <Reveal eager delay={0.06}>
                  <p>
                    <strong className="font-semibold text-ink">
                      I&apos;m Gerardo Castaneda
                    </strong>{" "}
                    — Rardo to most people. Husband, father of two, musician,
                    and photographer. I was born and raised in{" "}
                    <strong className="font-semibold text-ink">
                      Siguatepeque, Honduras
                    </strong>
                    , a small city in the mountains of Comayagua — the food, the
                    people, all of it still home — before putting down roots
                    with my wife Olivia in{" "}
                    <strong className="font-semibold text-ink">
                      Glennville, Georgia
                    </strong>
                    .
                  </p>
                </Reveal>
                <Reveal eager delay={0.1}>
                  <p>
                    Family comes first — that&apos;s non-negotiable, and it sits
                    downstream of the main thing. I&apos;ve discovered, by
                    God&apos;s grace and goodness, that{" "}
                    <em className="font-display text-lg italic text-ink">
                      living for the glory of God is life&apos;s purpose.
                    </em>
                  </p>
                </Reveal>
                <Reveal eager delay={0.14}>
                  <p>
                    By day I lead a retail team at T-Mobile in neighboring
                    Reidsville, helping people sort out technology in plain talk.
                    In 2026 I started learning to build software with AI as my
                    tutor — shipping real websites and tools in the open for real
                    businesses and neighbors.
                  </p>
                </Reveal>
              </div>

              {/* Open Hairline "At a Glance" Ledger */}
              <Reveal eager delay={0.18}>
                <div className="mt-10 border-t border-line-strong pt-6">
                  <p className="font-tech text-xs font-medium uppercase text-accent-deep">
                    At a glance
                  </p>
                  <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
                    {studioNotes.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col justify-between gap-1 py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
                      >
                        <dt className="shrink-0 text-ink-mute">{row.label}</dt>
                        <dd className="font-medium tabular-nums text-ink sm:text-right">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3.5 font-display text-xs italic text-ink-soft">
                    *Steeped hot in a traditional gourd during early-morning
                    Greek reading and late-night builds.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal eager delay={0.1} className="lg:col-span-5">
              <figure className="editorial-mat rounded-2xl p-2.5 sm:p-3">
                <div className="overflow-hidden rounded-xl bg-wash">
                  <Image
                    src="/photos/gerardo-olivia.webp"
                    alt="Gerardo and Olivia, in black and white, standing under the trees."
                    width={1000}
                    height={1500}
                    preload
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    data-bw=""
                    className="photo-warm aspect-[3/4] w-full object-cover object-[center_18%] transition-transform duration-700 ease-out hover:scale-[1.015]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between px-1 text-xs text-ink-soft">
                  <span className="font-display text-sm italic text-ink">
                    Gerardo &amp; Olivia
                  </span>
                  <span className="font-tech text-[0.6875rem] uppercase text-ink-mute">
                    Glennville, GA
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Part 2: Family & Life Frames ——— */}
      <section className="border-b border-line bg-wash/60 section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  The life the words are about
                </p>
                <h2 className="mt-4 font-display text-h2 font-semibold text-ink">
                  Home first, always.
                </h2>
              </div>
              <a
                href="https://www.instagram.com/lvngphotography/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                <span className="u-sweep">More on @lvngphotography</span>
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {frames.map((f, i) => (
              <Reveal key={f.src} delay={i * 0.07}>
                <figure className="editorial-mat rounded-2xl p-2.5 sm:p-3">
                  <div className="overflow-hidden rounded-xl bg-wash">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={1000}
                      height={1500}
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="photo-warm aspect-[3/4] w-full object-cover object-[center_20%] transition-transform duration-700 ease-out hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 px-1">
                    <p className="font-display text-base font-semibold text-ink">
                      {f.caption}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft">{f.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Part 3: Three Convictions Behind the Work ——— */}
      <section className="border-b border-line bg-paper section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  Why I build this way
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Small-town businesses don’t need agency bloat.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Honest craft, direct ownership, and pages tested on the same phones your neighbors keep in their pockets.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <InkRule from="md" />
            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
              {convictions.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.num}
                  delay={i * 0.06}
                  className="relative border-t border-line-strong pt-6 md:border-t-0 md:pt-8"
                >
                  <span
                    aria-hidden
                    className="hidden md:block absolute -top-[3.5px] left-0 h-2 w-2 rounded-full border-[1.5px] border-accent bg-paper"
                  />
                  <span className="font-display text-2xl italic text-accent-deep">
                    {c.num}.
                  </span>
                  <h3 className="mt-4 font-display text-h3 font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— Part 4: Unified Index of Projects, Podcast & Writing ——— */}
      <section className="border-b border-line bg-wash/60 section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                  In the open
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Everything I’m building{" "}
                  <span className="amp-clean">&amp;</span> writing.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                Client websites, personal study software, photography, our podcast, and ongoing theological writing — gathered in one place.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {worksIndex.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.04}
                className="grid gap-4 py-6 transition-colors hover:bg-surface/65 sm:px-4 md:grid-cols-12 md:items-baseline"
              >
                <div className="md:col-span-3">
                  <p className="font-tech text-xs font-medium uppercase text-accent-deep">
                    {item.kind}
                  </p>
                  <p className="mt-1 text-xs text-ink-mute">{item.meta}</p>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-display text-h3 font-semibold text-ink">
                    {renderCleanAmp(item.title)}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 md:col-span-3 md:flex-col md:items-end md:gap-y-2 md:pt-0">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent-deep md:min-h-0 md:py-0.5"
                    >
                      <span className="u-sweep">{item.linkLabel}</span>
                      <span className="sr-only">
                        {" "}
                        — {item.title} (opens in a new tab)
                      </span>
                      <ArrowUpRight
                        size={15}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent-deep md:min-h-0 md:py-0.5"
                    >
                      <span className="u-sweep">{item.linkLabel}</span>
                      <ArrowRight
                        size={15}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}

                  {item.inquireScope && (
                    <Link
                      href={`/contact?scope=${encodeURIComponent(item.inquireScope)}`}
                      className="group inline-flex min-h-11 items-center gap-1 text-xs font-medium text-ink-soft transition-colors hover:text-ink md:min-h-0 md:py-0.5"
                    >
                      <span className="u-sweep">Similar build</span>
                      <ArrowRight
                        size={13}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Bottom Navigation Bar ——— */}
      <section data-cta-end="" className="bg-paper">
        <div className="gutter mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-4 py-14 sm:flex-row sm:items-center lg:max-w-7xl">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center gap-2 font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft
              size={18}
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep sm:w-auto"
          >
            <span>Work with me</span>
            <ArrowRight
              size={17}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
