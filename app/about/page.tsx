import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import Still from "../../components/Still";
import InkRule from "../../components/InkRule";
import { pageMetadata } from "@/lib/seo";
import { pageDates, siteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  ogTitle: "About · Gerardo Castaneda",
  description:
    "I'm Rardo — husband, father, musician, photographer. From Siguatepeque, Honduras to Glennville, Georgia.",
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

const road = [
  {
    when: "Siguatepeque, Honduras",
    what: "Born and raised in a small city in the mountains of Comayagua — the food, the people, all of it still home.",
  },
  {
    when: "Georgia",
    what: "Married Olivia, became a father of two, and put down roots in Glennville. Family first — that's non-negotiable.",
  },
  {
    when: "2026",
    what: "Started learning to build software, with AI as my tutor. Every site I ship is real, for real people — and I'm just getting started.",
  },
];

const frames = [
  {
    src: "/photos/family-walk.webp",
    alt: "Gerardo, Olivia, and their two children walking across a lawn, holding hands.",
    caption: "Family first",
  },
  {
    src: "/photos/with-daughter.webp",
    alt: "Gerardo sitting on the grass, holding his daughter.",
    caption: "The unplanned ones",
  },
  {
    src: "/photos/wedding.webp",
    alt: "Gerardo and Olivia on their wedding day, foreheads touching under a floral arch.",
    caption: "Our day",
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
      <section className="border-b border-line">
        <div className="gutter mx-auto grid max-w-6xl items-end gap-12 pb-16 pt-20 sm:pt-28 lg:max-w-7xl lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="lg:col-span-6">
            <Reveal eager>
              <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
                The person behind the sites
              </p>
              <h1 className="mt-8 font-display text-h1 font-semibold">
                I'm Rardo.
              </h1>
            </Reveal>
            <div className="mt-10 flex max-w-[62ch] flex-col gap-6 text-body text-ink-soft">
              <Reveal eager delay={0.08}>
                <p>
                  <span className="font-semibold text-ink">
                    I'm Gerardo Castaneda
                  </span>{" "}
                  — Rardo to most people. Husband, father of two, musician,
                  photographer. I was born in Siguatepeque, Honduras, and now
                  live in Glennville, Georgia.
                </p>
              </Reveal>
              <Reveal eager delay={0.12}>
                <p>
                  Family comes first — that's non-negotiable, and it's
                  downstream of the main thing. I've discovered, by God's grace
                  and goodness, that{" "}
                  <span className="font-display italic text-ink">
                    living for the glory of God is life's purpose.
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal eager delay={0.1} className="lg:col-span-6">
            <figure>
              <Still>
                <Image
                  src="/photos/gerardo-olivia.webp"
                  alt="Gerardo and Olivia, in black and white, standing under the trees."
                  width={1000}
                  height={1500}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  data-bw=""
                  className="photo-warm aspect-[3/4] w-full object-cover object-[center_18%]"
                />
              </Still>
              <figcaption className="mt-3 font-tech text-eyebrow uppercase text-ink-soft">
                Gerardo and Olivia
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-wash">
        <div className="gutter mx-auto max-w-6xl py-16 sm:py-20 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              The life the words are about
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-5">
            {frames.map((f, i) => (
              <Reveal key={f.src} delay={i * 0.08}>
                <figure>
                  <Still>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={1000}
                      height={1500}
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="photo-warm aspect-[3/4] w-full object-cover object-[center_20%]"
                    />
                  </Still>
                  <figcaption className="mt-3 font-tech text-eyebrow uppercase text-ink-soft">
                    {f.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="gutter mx-auto max-w-6xl py-20 sm:py-24 lg:max-w-7xl">
          <div className="flex max-w-[62ch] flex-col gap-6 text-body text-ink-soft">
            <Reveal>
              <p>
                In 2026 I started learning to build software, with AI as my
                tutor. I learn in the open — this site, the order system I
                built for my mother-in-law's business, and{" "}
                <Link
                  href="https://theos-logos-official.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                >
                  Theos Logos
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
                , a Bible study app with Hebrew and Greek lexicons. Real
                things, for real people. The client sites are on the home
                page. Theos Logos is the one I built for myself.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                I make music and take photographs —{" "}
                <a
                  href="https://www.instagram.com/lvngphotography/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                >
                  @lvngphotography
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRight size={16} aria-hidden />
                </a>{" "}
                is where the photos live. Some of my favorite shots are the
                unplanned ones: my kids, mid-laugh, doing nothing special.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                With my friend Caleb I co-host{" "}
                <a
                  href="https://open.spotify.com/show/2rxl4jrLFaQ2SYb75NGDYj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                >
                  The Life Proper
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRight size={16} aria-hidden />
                </a>
                , a podcast on faith and the examined life. And I write: a
                book manuscript called{" "}
                <span className="font-display italic text-ink">
                  Ultimate Truth
                </span>
                , a thesis on modern American evangelicalism, and seminary
                coursework in Greek and Hebrew exegesis.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                By day I lead a retail team at T-Mobile in Reidsville. The
                rest of the time, I'm building.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-wash">
        <div className="gutter mx-auto max-w-6xl py-20 sm:py-24 lg:max-w-7xl">
          <Reveal>
            <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
              So far
            </p>
          </Reveal>
          <div className="relative mt-12">
            <InkRule from="md" />
            <div className="grid gap-10 md:grid-cols-3">
              {road.map((r, i) => (
                <Reveal key={r.when} delay={i * 0.08}>
                  <div className="border-t-2 border-ink pt-6 md:border-transparent">
                    <p className="font-tech text-eyebrow uppercase text-accent-deep">
                      {r.when}
                    </p>
                    <p className="mt-4 leading-relaxed text-ink-soft">{r.what}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-16 text-center font-display text-quote italic">
              Fueled by Mate*.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-cta-end="">
        <div className="gutter mx-auto flex max-w-6xl flex-col items-stretch gap-4 py-16 sm:flex-row sm:items-center sm:justify-between lg:max-w-7xl">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center gap-2 font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft
              size={18}
              aria-hidden
              className="transition-transform group-hover:-translate-x-1"
            />
            Back home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-transparent bg-ink px-6 py-3 font-semibold text-paper transition-all hover:bg-accent-deep active:scale-[0.97] sm:w-auto"
          >
            Work with me
            <ArrowRight
              size={18}
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
