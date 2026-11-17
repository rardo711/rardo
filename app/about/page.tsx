import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import { pageMetadata } from "@/lib/seo";
import { pageDates, siteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About, Dossier & Treatise",
  ogTitle: "About · Gerardo Castaneda",
  description:
    "Editorial dossier, domain treatise, and complete directory of works by Gerardo Castaneda (Rardo) — from Siguatepeque, Honduras to Glennville, Georgia.",
});

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: `${siteUrl}/about`,
  name: "About Gerardo Castaneda",
  dateModified: pageDates["/about"],
  mainEntity: { "@id": `${siteUrl}/#person` },
};

const dossierSpecs = [
  { label: "Full Name", value: "Gerardo Castaneda (“Rardo”)" },
  { label: "Birthplace", value: "Siguatepeque, Comayagua, Honduras" },
  { label: "Home Station", value: "Glennville, Tattnall County, Georgia" },
  { label: "Coordinates", value: "31.9407° N, 81.9296° W" },
  { label: "Family", value: "Husband to Olivia · Father of Two" },
  { label: "Day Leadership", value: "Retail Team Lead · T-Mobile (Reidsville, GA)" },
  { label: "Scholarship", value: "Seminary Exegesis (Biblical Greek & Hebrew)" },
  { label: "Studio Fuel", value: "Loose-Leaf Yerba Mate (Gourd & Bombilla)*" },
];

const treatisePillars = [
  {
    num: "THESIS I",
    title: "Plain Words Over Agency Fog",
    body: "When a neighbor in Tattnall County searches for a farm stand, a mechanic, or a family remedy maker, they aren’t looking for animated marketing slogans. They want to know what you make, what it costs, when your doors are open, and how to reach you. Every site I build begins with your real words and real photographs.",
  },
  {
    num: "THESIS II",
    title: "Deeds of Ownership, Not Monthly Rent",
    body: "Small business owners are routinely locked into $150/month agency retainers just to change a phone number or holiday hour. I charge a single flat fee named upfront, build a plain-language edit panel when your inventory moves fast, and hand you the keys outright.",
  },
  {
    num: "THESIS III",
    title: "Engineered for the Phone in the Truck",
    body: "Local customers rarely browse from a studio monitor. They look you up on a phone in a parking lot or on a porch with spotty county cell service. That is why every page is built without heavy script bloat — loading almost instantly and placing your call or order action right under their thumb.",
  },
];

const plates = [
  {
    plate: "PLATE 02",
    src: "/photos/family-walk.webp",
    alt: "Gerardo, Olivia, and their two children walking across a lawn, holding hands.",
    caption: "Family First — Glennville, GA",
    note: "Everything in the studio sits downstream of home.",
  },
  {
    plate: "PLATE 03",
    src: "/photos/with-daughter.webp",
    alt: "Gerardo sitting on the grass, holding his daughter.",
    caption: "The Unplanned Frames",
    note: "Mid-laugh, ordinary afternoons in the yard.",
  },
  {
    plate: "PLATE 04",
    src: "/photos/wedding.webp",
    alt: "Gerardo and Olivia on their wedding day, foreheads touching under a floral arch.",
    caption: "Covenant & Roots",
    note: "Where our Georgia household began.",
  },
];

const worksDirectory = [
  {
    code: "DIR-01",
    domain: "Client Commerce",
    title: "RaeMa’s Remedies",
    location: "Tattnall County, GA",
    summary:
      "Family tallow & herbal remedy storefront with direct-to-inbox ordering and a self-editable owner admin panel.",
    href: "https://raemas-remedies.vercel.app",
    linkLabel: "Inspect Live Site",
    external: true,
    inquireScope: "Site Inspired by RaeMa's Remedies",
  },
  {
    code: "DIR-02",
    domain: "Client Brand",
    title: "Better Than Gold Tallow Co.",
    location: "Southeast Georgia",
    summary:
      "One-page farm brand and product catalog built directly from her market flyer, farm photography, and spoken story.",
    href: "https://better-than-gold-tallow.vercel.app",
    linkLabel: "Inspect Live Site",
    external: true,
    inquireScope: "Site Inspired by Better Than Gold Tallow Co.",
  },
  {
    code: "DIR-03",
    domain: "Software & Lexicon",
    title: "Theos Logos",
    location: "Web Application",
    summary:
      "Biblical study web application featuring interlinear scripture, Strong’s Greek and Hebrew lexicons, and morphological parsing.",
    href: "https://theos-logos-official.vercel.app",
    linkLabel: "Launch Web App",
    external: true,
    inquireScope: "Software / Custom Web Application",
  },
  {
    code: "DIR-04",
    domain: "Broadcast & Dialogue",
    title: "The Life Proper Podcast",
    location: "Spotify · Co-Hosted with Caleb",
    summary:
      "Long-form conversations on Christian conviction, fatherhood, scripture, and the examined life.",
    href: "https://open.spotify.com/show/2rxl4jrLFaQ2SYb75NGDYj",
    linkLabel: "Listen on Spotify",
    external: true,
  },
  {
    code: "DIR-05",
    domain: "Visual Archive",
    title: "LVNG Photography",
    location: "Glennville & Southeast GA",
    summary:
      "Portraits, family documentary frames, and unscripted moments captured in natural light.",
    href: "https://www.instagram.com/lvngphotography/",
    linkLabel: "@lvngphotography",
    external: true,
  },
  {
    code: "DIR-06",
    domain: "Manuscript & Exegesis",
    title: "Ultimate Truth & Seminary Thesis",
    location: "In Progress · Greek & Hebrew",
    summary:
      "Book manuscript (Ultimate Truth), academic thesis on modern American evangelicalism, and seminary coursework in biblical languages.",
    href: "/contact?scope=Custom+Web+Project",
    linkLabel: "Request Reading Note",
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

      {/* ——— Part 01: Editorial Profile & Specification Dossier ——— */}
      <section className="border-b border-line bg-paper">
        <div className="border-b border-line bg-wash/70">
          <div className="gutter mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 py-2.5 font-tech text-[0.6875rem] uppercase text-ink-soft lg:max-w-7xl">
            <span>Biographical Dossier · Monograph 01</span>
            <span>Siguatepeque, Comayagua, HN → Glennville, Tattnall County, GA</span>
          </div>
        </div>

        <div className="gutter mx-auto max-w-6xl pb-16 pt-12 sm:pt-16 lg:max-w-7xl lg:pb-24">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left 7 Cols: Narrative Essay + Specification Dossier */}
            <div className="lg:col-span-7">
              <Reveal eager>
                <p className="font-tech text-eyebrow font-semibold uppercase text-accent-deep">
                  01 · The Builder Behind the Ledger
                </p>
                <h1 className="mt-4 font-display text-h1 font-semibold text-ink">
                  Gerardo Castaneda —{" "}
                  <em className="font-normal italic text-accent-deep">Rardo</em>{" "}
                  to neighbors.
                </h1>
              </Reveal>

              <div className="mt-8 flex max-w-[64ch] flex-col gap-5 text-body text-ink-soft">
                <Reveal eager delay={0.05}>
                  <p>
                    I was born and raised in{" "}
                    <strong className="font-semibold text-ink">
                      Siguatepeque, Honduras
                    </strong>{" "}
                    — a mountain city set between Tegucigalpa and San Pedro Sula
                    in the department of Comayagua. Growing up there taught me to
                    value direct speech, lasting craft, and knowing the people
                    you buy from by name.
                  </p>
                </Reveal>
                <Reveal eager delay={0.08}>
                  <p>
                    Today my roots are in{" "}
                    <strong className="font-semibold text-ink">
                      Glennville, Georgia
                    </strong>
                    , where my wife Olivia and I are raising our two children.
                    Family is non-negotiable, and it sits downstream of the
                    anchor of our household: I have discovered, by God&apos;s
                    grace and goodness, that{" "}
                    <em className="font-display text-lg italic text-ink">
                      living for the glory of God is life&apos;s purpose.
                    </em>
                  </p>
                </Reveal>
                <Reveal eager delay={0.1}>
                  <p>
                    By day I lead a retail team at T-Mobile in neighboring
                    Reidsville, spending every week helping people untangle
                    technology in plain language. In 2026 I began building
                    production software and small-business websites in the open
                    — pairing modern AI tooling with disciplined human editing so
                    local shops and makers can own fast, dependable software
                    without agency overhead.
                  </p>
                </Reveal>
              </div>

              {/* Biographical Specification Dossier */}
              <Reveal eager delay={0.12}>
                <div className="mt-10 rounded-[2px] border border-ink bg-surface">
                  <div className="flex items-center justify-between border-b border-line bg-wash px-5 py-3 font-tech text-xs font-semibold uppercase text-ink">
                    <span>Specification Dossier · Record #GC-711</span>
                    <span className="text-accent-deep">Verified 2026</span>
                  </div>
                  <dl className="divide-y divide-line px-5 text-sm">
                    {dossierSpecs.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                      >
                        <dt className="font-tech text-xs uppercase text-ink-mute">
                          {row.label}
                        </dt>
                        <dd className="font-medium tabular-nums text-ink sm:text-right">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="border-t border-line bg-paper px-5 py-3 text-xs text-ink-soft">
                    <span className="font-tech font-semibold uppercase text-accent-deep">
                      *Footnote on Yerba Mate:{" "}
                    </span>
                    Steeped hot in a traditional calabash gourd during early-morning
                    Greek exegesis and late-night code builds.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right 5 Cols: Archival Portrait Plate 01 */}
            <Reveal eager delay={0.08} className="lg:col-span-5">
              <figure className="rounded-[2px] border border-ink bg-surface p-4">
                <div className="mb-3 flex items-center justify-between font-tech text-[0.6875rem] uppercase text-ink-soft">
                  <span className="font-semibold text-accent-deep">PLATE 01</span>
                  <span>ARCHIVE · TATTNALL COUNTY, GA</span>
                </div>
                <div className="overflow-hidden border border-line bg-wash">
                  <Image
                    src="/photos/gerardo-olivia.webp"
                    alt="Gerardo and Olivia, in black and white, standing under the trees."
                    width={1000}
                    height={1500}
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    data-bw=""
                    className="photo-warm aspect-[3/4] w-full object-cover object-[center_18%]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between border-t border-line pt-3 font-tech text-xs uppercase text-ink">
                  <span>Gerardo &amp; Olivia Castaneda</span>
                  <span className="text-ink-mute">Monochrome Still</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— Part 02: Domain Treatise ——— */}
      <section className="border-b border-line bg-wash section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line-strong pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">02</span> · Studio Treatise
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Why small-town businesses don&apos;t need agency bloat.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                Three architectural principles that govern every storefront, order form, and owner panel shipped from this studio.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px border border-ink bg-ink lg:grid-cols-3">
            {treatisePillars.map((pillar, i) => (
              <Reveal
                key={pillar.num}
                delay={i * 0.05}
                className="flex flex-col justify-between bg-surface p-7 sm:p-8"
              >
                <div>
                  <p className="font-tech text-xs font-bold uppercase text-accent-deep">
                    {pillar.num}
                  </p>
                  <h3 className="mt-4 font-display text-h3 font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                </div>
                <div className="mt-8 border-t border-line pt-3 font-tech text-[0.6875rem] uppercase text-ink-mute">
                  Standard Practice · Glennville Studio
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Part 03: Archival Photographic Plates (Plates 02–04) ——— */}
      <section className="border-b border-line bg-paper section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 border-b border-line pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">03</span> · Documentary Plates
                </p>
                <h2 className="mt-4 font-display text-h2 font-semibold text-ink">
                  The household behind the work.
                </h2>
              </div>
              <a
                href="https://www.instagram.com/lvngphotography/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-tech text-xs font-semibold uppercase text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep"
              >
                <span>Full Archive: @lvngphotography</span>
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {plates.map((f, i) => (
              <Reveal key={f.src} delay={i * 0.05}>
                <figure className="flex h-full flex-col justify-between rounded-[2px] border border-ink bg-surface p-3.5">
                  <div>
                    <div className="mb-2.5 flex items-center justify-between font-tech text-[0.6875rem] uppercase text-ink-mute">
                      <span className="font-bold text-accent-deep">{f.plate}</span>
                      <span>35MM / DIGITAL STILL</span>
                    </div>
                    <div className="overflow-hidden border border-line bg-wash">
                      <Image
                        src={f.src}
                        alt={f.alt}
                        width={1000}
                        height={1500}
                        sizes="(min-width: 640px) 30vw, 100vw"
                        className="photo-warm aspect-[3/4] w-full object-cover object-[center_20%]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 border-t border-line pt-3">
                    <p className="font-tech text-xs font-semibold uppercase text-ink">
                      {f.caption}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">{f.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Part 04: Unified Directory of Works, Software & Scholarship ——— */}
      <section className="border-b border-line bg-wash section-y">
        <div className="gutter mx-auto max-w-6xl lg:max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line-strong pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-tech text-eyebrow font-semibold uppercase text-ink-soft">
                  <span className="text-accent-deep">04</span> · Complete Works &amp; Field Ledger
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-h2 font-semibold text-ink">
                  Unified directory of builds, broadcast, and writing.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                Every active client system, personal software application, podcast, and manuscript in one scannable index.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 divide-y divide-line border border-ink bg-surface">
            {worksDirectory.map((item) => (
              <div
                key={item.code}
                className="grid items-center gap-4 p-5 sm:p-6 lg:grid-cols-12 lg:gap-6"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 font-tech text-xs uppercase">
                    <span className="font-bold text-accent-deep">{item.code}</span>
                    <span aria-hidden className="text-line-strong">
                      ·
                    </span>
                    <span className="font-semibold text-ink-soft">
                      {item.domain}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-tech text-[0.6875rem] uppercase text-ink-mute">
                    {item.location}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:col-span-3 lg:justify-end">
                  {item.inquireScope && (
                    <Link
                      href={`/contact?scope=${encodeURIComponent(item.inquireScope)}`}
                      className="inline-flex min-h-10 items-center justify-center rounded-[2px] border border-ink bg-ink px-3.5 py-2 font-tech text-[0.6875rem] font-semibold uppercase text-paper transition-colors hover:bg-accent-deep"
                    >
                      Inquire Similar
                    </Link>
                  )}
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[2px] border border-ink bg-paper px-3.5 py-2 font-tech text-[0.6875rem] font-semibold uppercase text-ink transition-colors hover:bg-wash"
                    >
                      <span>{item.linkLabel}</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                      <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[2px] border border-ink bg-paper px-3.5 py-2 font-tech text-[0.6875rem] font-semibold uppercase text-ink transition-colors hover:bg-wash"
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowRight size={13} aria-hidden />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Bottom Conversion Bar ——— */}
      <section data-cta-end="" className="bg-paper">
        <div className="gutter mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-4 py-12 sm:flex-row sm:items-center lg:max-w-7xl">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center gap-2 font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft
              size={18}
              aria-hidden
              className="transition-transform group-hover:-translate-x-1"
            />
            Return to Studio Index
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-ink bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-wash"
            >
              Inspect Shipped Client Sites
            </Link>
            <Link
              href="/contact?scope=One-Page+Business+Website"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-ink bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
            >
              Commission a Free Mockup
              <ArrowRight
                size={17}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
