import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const projects = [
  {
    name: "Theos Logos",
    description:
      "A scholarly Bible study web app. Hebrew and Greek lexicons, original-language tools, no fluff.",
    href: "https://theos-logos-official.vercel.app",
  },
  {
    name: "RaeMa's Remedies",
    description:
      "An order site for my mother-in-law's wellness brand. She edits it herself — I just built the door.",
    href: "https://raemas-remedies.vercel.app",
  },
  {
    name: "Better Than Gold Tallow Co.",
    description:
      "A site for a friend's tallow business, built from her flyer and her farm photos.",
    href: "https://better-than-gold-tallow.vercel.app",
  },
];

const writing = [
  {
    name: "\u201CUltimate Truth\u201D",
    description: "A book manuscript. In progress.",
  },
  {
    name: "A thesis on modern American evangelicalism",
    description: "Where it went wrong, documented with footnotes.",
  },
  {
    name: "Seminary coursework",
    description:
      "Greek and Hebrew exegesis at SEPE — currently working through Colossians.",
  },
];

const road = [
  {
    place: "Honduras",
    text: "Where I'm from. I miss the food most of all — then everything.",
  },
  {
    place: "Glennville, Georgia",
    text: "Home now. Husband, father of two. Family first, always.",
  },
  {
    place: "T-Mobile, Reidsville",
    text: "Retail Associate Manager. I lead the team at our store.",
  },
  {
    place: "2026",
    text: "Started building software with AI — and shipped real sites for real people.",
  },
];

const soundtrack = [
  "Jon Guerra",
  "Twenty One Pilots",
  "Chon",
  "Delta Sleep",
  "Hippo Campus",
  "\u2026and Jon Guerra again",
];

const marqueeWords = [
  "Faith",
  "Family",
  "Building",
  "Writing",
  "Terer\u00E9",
  "Glennville, GA",
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-display text-sm italic text-accent">{index}</span>
      <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Gerardo Castaneda
          </a>
          <nav className="flex items-center gap-5 text-sm text-ink-soft">
            <a href="#building" className="hidden hover:text-ink sm:inline">
              Building
            </a>
            <a href="#writing" className="hidden hover:text-ink sm:inline">
              Writing
            </a>
            <a href="#road" className="hidden hover:text-ink md:inline">
              The road
            </a>
            <a
              href="https://x.com/gerardocasta711"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-ink hover:text-accent"
            >
              X <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pb-14 pt-20 md:pb-20 md:pt-28">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink-soft">
              Christian &middot; Husband &middot; Father
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              I build things, study <em className="text-accent">Scripture</em>,
              and write.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              I&rsquo;m Gerardo &mdash; Rardo to most people. I lead the retail
              team at a T-Mobile store in Reidsville, Georgia. The rest of
              the time I&rsquo;m learning to build software with AI, studying
              the Bible in Hebrew and Greek, and writing down what I find.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#building"
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
              >
                What I&rsquo;m building{" "}
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://x.com/gerardocasta711"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Follow me on X <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </section>

        {/* Hero artwork */}
        <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
          <Reveal>
            <figure>
              <Image
                src="/images/hero.webp"
                alt="An open ancient book whose Hebrew letterforms flow into copper circuit traces and geometric shapes"
                width={1920}
                height={1080}
                priority
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-sm italic text-ink-soft">
                Ancient words, new tools.
              </figcaption>
            </figure>
          </Reveal>
        </section>

        {/* Marquee */}
        <div
          aria-hidden
          className="overflow-hidden border-y border-accent-deep bg-accent py-3"
        >
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="font-display text-lg italic text-paper"
              >
                {w}
                <span className="ml-8 not-italic text-paper/60">&middot;</span>
              </span>
            ))}
          </div>
        </div>

        {/* Building */}
        <section
          id="building"
          className="mx-auto max-w-3xl scroll-mt-24 px-6 py-14 md:py-20"
        >
          <Reveal>
            <SectionHeading index="01" title="Building" />
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Side projects with AI, when the week allows. I&rsquo;m learning
              software development from zero &mdash; in the open, with AI as
              tutor.
            </p>
          </Reveal>
          <div className="mt-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 border-t border-line py-6 last:border-b"
                >
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                      {p.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section
          id="writing"
          className="mx-auto max-w-3xl scroll-mt-24 px-6 py-14 md:py-20"
        >
          <Reveal>
            <SectionHeading index="02" title="Writing" />
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Theology with the footnotes showing. Manuscripts in progress
              &mdash; the drafts are where the work is.
            </p>
          </Reveal>
          <div className="mt-8">
            {writing.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.06}>
                <div className="border-t border-line py-6 last:border-b">
                  <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                    {w.name}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Arch band */}
        <section aria-hidden className="py-6 md:py-10">
          <Reveal>
            <Image
              src="/images/band-arch.webp"
              alt=""
              width={1920}
              height={640}
              className="h-auto w-full"
            />
          </Reveal>
        </section>

        {/* The road */}
        <section
          id="road"
          className="mx-auto max-w-3xl scroll-mt-24 px-6 py-14 md:py-20"
        >
          <Reveal>
            <SectionHeading index="03" title="The road so far" />
          </Reveal>
          <ol className="mt-8">
            {road.map((r, i) => (
              <Reveal key={r.place} delay={i * 0.06}>
                <li className="flex gap-6 border-t border-line py-6 last:border-b">
                  <span
                    aria-hidden
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                  />
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                      {r.place}
                    </h3>
                    <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                      {r.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* The Life Proper */}
        <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Reveal>
            <SectionHeading index="04" title="The Life Proper" />
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              A podcast with my friend Caleb. Faith, culture, and the examined
              life.
            </p>
          </Reveal>
        </section>

        {/* Soundtrack */}
        <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Reveal>
            <SectionHeading index="05" title="On repeat" />
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              The soundtrack behind all of it. No skips.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {soundtrack.map((s) => (
                <li
                  key={s}
                  className="border border-line bg-wash px-4 py-2 font-display text-lg italic"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Elsewhere */}
        <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Reveal>
            <SectionHeading index="06" title="Elsewhere" />
            <a
              href="https://x.com/gerardocasta711"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex items-start justify-between gap-6 border-t border-b border-line py-6"
            >
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                  X &mdash; @gerardocasta711
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-ink-soft">
                  Where I think out loud about building, faith, and fatherhood.
                </p>
              </div>
              <ArrowUpRight
                className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden
              />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Gerardo Castaneda &middot; Glennville, GA</p>
          <p>
            Built by hand, with AI.{" "}
            <span className="italic">Fueled by terer&eacute;.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
