import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Start your project",
  ogTitle: "Start your project · Gerardo Castaneda",
  description:
    "Tell me about your business and what you want your website to do. I'll reply within a day.",
});

const next = [
  {
    n: "01",
    title: "You write",
    body: "Two minutes, plain words. What you do, who it's for.",
  },
  {
    n: "02",
    title: "I reply",
    body: "Within a day — honestly, even if I'm not the right fit.",
  },
  {
    n: "03",
    title: "Free mockup",
    body: "You see exactly what you'd get before you pay anything.",
  },
];

export default function Contact() {
  return (
    <section className="border-b border-line">
      <div className="gutter mx-auto max-w-6xl pb-20 pt-20 sm:pt-28 lg:max-w-7xl">
        <Reveal eager>
          <p className="font-tech text-eyebrow font-medium uppercase text-ink-soft">Contact</p>
          <h1 className="mt-8 max-w-3xl font-display text-h1 font-semibold">
            Tell me about your business.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lead text-ink-soft">
            What you do, who it&apos;s for, and what you wish your website did.
            That&apos;s all I need to start.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal eager delay={0.08}>
            <ContactForm />
          </Reveal>
          <div>
            <Reveal eager delay={0.12}>
              <p className="font-tech text-eyebrow uppercase text-ink-soft">
                What happens next
              </p>
              <ol className="mt-6 flex flex-col">
                {next.map((s) => (
                  <li key={s.n} className="border-t border-line py-5 last:border-b">
                    <p className="font-tech text-eyebrow text-accent-deep">{s.n}</p>
                    <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {s.title}
                    </p>
                    <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
