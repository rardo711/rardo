import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Start your project",
  description:
    "Tell me about your business and what you want your website to do. I'll reply within a day.",
};

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
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <p className="font-tech text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">Contact</p>
          <h1 className="mt-8 max-w-3xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
            Tell me about your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            What you do, who it&apos;s for, and what you wish your website did.
            That&apos;s all I need to start.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
          <div>
            <Reveal delay={0.12}>
              <p className="font-tech text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                What happens next
              </p>
              <ol className="mt-6 flex flex-col">
                {next.map((s) => (
                  <li key={s.n} className="border-t border-line py-5 last:border-b">
                    <p className="font-tech text-xs text-accent">{s.n}</p>
                    <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {s.title}
                    </p>
                    <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 border border-line bg-wash px-6 py-5 font-display text-xl italic">
                One flat price: $250. Half up front, half when it&apos;s live.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
