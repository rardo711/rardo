import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Start your project",
  ogTitle: "Start your project · Gerardo Castaneda",
  description:
    "Tell me about your business and what you want your website to do. I'll reply within a day with next steps for your free mockup.",
});

const nextSteps = [
  {
    n: "01",
    title: "You write",
    body: "Two minutes, plain words. Tell me what you do, who it’s for, and what you wish your website did.",
  },
  {
    n: "02",
    title: "I reply within a day",
    body: "I read every note personally in Glennville and write back honestly — even if a simpler setup is a better fit.",
  },
  {
    n: "03",
    title: "Free phone mockup",
    body: "I build a working preview from your real business info so you can see exactly what you’d get before paying a dime.",
  },
];

export default function Contact() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="gutter mx-auto max-w-6xl pb-16 pt-12 sm:pb-20 sm:pt-16 lg:max-w-7xl lg:pb-24 lg:pt-20">
        <Reveal eager>
          <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">
            Start your project
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-h1 font-semibold text-ink">
            Tell me about your business.
          </h1>
          <p className="mt-5 max-w-[60ch] text-lead text-ink-soft">
            What you do, who it&apos;s for, and what you wish your website did.
            That&apos;s all I need to put together your free mockup.
          </p>
        </Reveal>

        <div
          id="inquire"
          className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-7">
            <Reveal eager delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal eager delay={0.1}>
              <div className="border-t border-line-strong pt-7 lg:border-t-0 lg:border-l lg:border-line lg:pl-10 lg:pt-1">
                <p className="font-tech text-eyebrow font-medium uppercase text-accent-deep">
                  What happens next
                </p>
                <ol className="mt-5 divide-y divide-line border-t border-line">
                  {nextSteps.map((s) => (
                    <li key={s.n} className="py-5 last:pb-0">
                      <span className="font-display text-lg italic text-accent-deep">
                        {s.n}
                      </span>
                      <p className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
                        {s.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ol>

                <dl className="mt-7 divide-y divide-line border-y border-line text-xs">
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="shrink-0 text-ink-mute">Pricing</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Starts at $250 flat
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="shrink-0 text-ink-mute">Ownership</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      100% yours · $0/mo retainer
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="shrink-0 text-ink-mute">Based in</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      Glennville, GA · Works anywhere
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="shrink-0 text-ink-mute">Languages</dt>
                    <dd className="text-right font-medium tabular-nums text-ink">
                      English &amp; Español
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
