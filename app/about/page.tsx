import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import PhotoSlot from "../../components/PhotoSlot";

export const metadata = {
  title: "About",
  description:
    "I'm Rardo — husband, father, musician, photographer. From Siguatepeque, Honduras to Glennville, Georgia.",
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

export default function About() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">The person behind the sites</p>
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-tight">
              I&apos;m Rardo.
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.08}>
              <PhotoSlot
                ratio="4 / 5"
                subject="You — with the family, or at your desk"
              />
            </Reveal>
            <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-ink-soft">
              <Reveal delay={0.1}>
                <p>
                  <span className="font-semibold text-ink">
                    I&apos;m Gerardo Castaneda
                  </span>{" "}
                  — Rardo to most people. Husband, father of two, musician,
                  photographer. I was born in Siguatepeque, Honduras, and now
                  live in Glennville, Georgia.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  Family comes first — that&apos;s non-negotiable, and
                  it&apos;s downstream of the main thing. My bio has said it
                  for years, and I mean it:{" "}
                  <span className="font-display italic text-ink">
                    &ldquo;Loving Jesus is life&apos;s greatest
                    achievement.&rdquo;
                  </span>
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  In 2026 I started learning to build software, with AI as my
                  tutor. I learn in the open — this site, the order system I
                  built for my mother-in-law&apos;s business, a Bible study app
                  with Hebrew and Greek lexicons. Real things, for real people.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-wash">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-ink-soft">
              <Reveal>
                <p>
                  I make music and take photographs —{" "}
                  <span className="font-semibold text-ink">
                    @lvngphotography
                  </span>{" "}
                  is where the photos live. Some of my favorite shots are the
                  unplanned ones: my kids, mid-laugh, doing nothing special.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p>
                  With my friend Caleb I co-host{" "}
                  <span className="font-semibold text-ink">
                    The Life Proper
                  </span>
                  , a podcast on faith and the examined life. And I write: a
                  book manuscript called{" "}
                  <span className="font-display italic text-ink">
                    Ultimate Truth
                  </span>
                  , a thesis on modern American evangelicalism, and seminary
                  coursework in Greek and Hebrew exegesis.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  By day I lead a retail team at T-Mobile in Reidsville. The
                  rest of the time, I&apos;m building.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.08}>
              <PhotoSlot
                ratio="4 / 3"
                subject="Honduras, the studio, the family — your call"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">So far</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {road.map((r, i) => (
              <Reveal key={r.when} delay={i * 0.08}>
                <div className="border-t-2 border-ink pt-6">
                  <p className="font-tech text-xs uppercase tracking-[0.2em] text-accent">
                    {r.when}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{r.what}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-16 text-center font-display text-2xl italic sm:text-3xl">
              Fueled by Mate*.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            Work with me
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
