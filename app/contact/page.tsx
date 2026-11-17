import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Project Brief & Free Mockup",
  ogTitle: "Project Brief & Free Mockup · Gerardo Castaneda",
  description:
    "Select your build scope and send a direct note to Gerardo Castaneda in Glennville, Georgia. Receive a working phone mockup before you pay a dime.",
});

const protocolSummary = [
  {
    n: "STAGE 01",
    window: "Within 24 Hours",
    title: "Plain-Language Reply",
    body: "I read every inquiry personally in Glennville and reply within one business day with honest answers — even if a simpler tool is a better fit for you.",
  },
  {
    n: "STAGE 02",
    window: "Days 2–3 · $0 Cost",
    title: "Free Working Mockup",
    body: "I build a functional one-page preview from your real business info and send it to your phone. You see the actual page before any invoice exists.",
  },
  {
    n: "STAGE 03",
    window: "Days 4–7 · Flat Fee",
    title: "One-Week Build & Handover",
    body: "Once you approve the mockup and flat fee, we launch on your domain within a week and walk through your self-edit controls together.",
  },
];

const quickPresets = [
  {
    code: "01",
    scope: "One-Page Business Website",
    title: "One-Page Business Site",
    detail: "Hours, address, story & mobile tap-to-call",
  },
  {
    code: "02",
    scope: "Ordering & Contact Form System",
    title: "Direct Ordering Ledger",
    detail: "Customer orders routed straight to your inbox ($0/mo fee)",
  },
  {
    code: "03",
    scope: "Self-Editable Website + Admin Panel",
    title: "Self-Editable Owner Panel",
    detail: "Change prices, stock & photos yourself in 2 minutes",
  },
];

export default function Contact() {
  return (
    <section className="border-b border-line bg-paper">
      {/* Top Architectural Dossier Bar */}
      <div className="border-b border-line bg-wash/70">
        <div className="gutter mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 py-2.5 font-tech text-[0.6875rem] uppercase text-ink-soft lg:max-w-7xl">
          <span>Dispatch Desk · Glennville, Tattnall County, Georgia</span>
          <span>Direct Email: gerardoj2001@outlook.com · SLA: &lt; 24 Hours</span>
        </div>
      </div>

      <div className="gutter mx-auto max-w-6xl pb-20 pt-12 sm:pt-16 lg:max-w-7xl">
        <Reveal eager>
          <p className="font-tech text-eyebrow font-semibold uppercase text-accent-deep">
            Commission &amp; Consultation Brief
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-h1 font-semibold text-ink">
            Request your{" "}
            <em className="font-normal italic text-accent-deep">free mockup</em>{" "}
            and flat-fee quote.
          </h1>
          <p className="mt-5 max-w-2xl text-lead text-ink-soft">
            Pick an architecture below or click any preset card to load a tailored prompt into the ledger. No sales call required to get a working preview.
          </p>
        </Reveal>

        {/* Quick Preset Triggers wired to [data-inquire-product] */}
        <Reveal eager delay={0.05}>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {quickPresets.map((p) => (
              <button
                key={p.code}
                type="button"
                data-inquire-product={p.scope}
                className="group flex flex-col justify-between rounded-[2px] border border-line-strong bg-surface p-4 text-left transition-colors hover:border-ink hover:bg-wash"
              >
                <div className="flex w-full items-center justify-between font-tech text-xs uppercase">
                  <span className="font-bold text-accent-deep">
                    PRESET {p.code}
                  </span>
                  <span className="text-ink-mute group-hover:text-ink">
                    Load Scope ↓
                  </span>
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-ink">
                  {p.title}
                </p>
                <p className="mt-1 text-xs text-ink-soft">{p.detail}</p>
              </button>
            ))}
          </div>
        </Reveal>

        <div
          id="inquire"
          className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-7">
            <Reveal eager delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal eager delay={0.12}>
              <div className="rounded-[2px] border border-ink bg-surface p-6 sm:p-7">
                <p className="font-tech text-xs font-semibold uppercase text-accent-deep">
                  Execution Ledger · What Happens Next
                </p>
                <ol className="mt-5 divide-y divide-line border-t border-line">
                  {protocolSummary.map((s) => (
                    <li key={s.n} className="py-4 first:pt-4 last:pb-0">
                      <div className="flex items-center justify-between font-tech text-xs uppercase">
                        <span className="font-bold text-accent-deep">{s.n}</span>
                        <span className="tabular-nums text-ink-mute">
                          {s.window}
                        </span>
                      </div>
                      <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                        {s.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ol>

                <dl className="mt-6 divide-y divide-line border-t border-line pt-4 text-xs">
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="font-tech uppercase text-ink-mute">
                      Service Area
                    </dt>
                    <dd className="font-medium text-ink">
                      Glennville, Tattnall County &amp; Remote US
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="font-tech uppercase text-ink-mute">
                      Languages Spoken
                    </dt>
                    <dd className="font-medium text-ink">
                      English &amp; Español (Native)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <dt className="font-tech uppercase text-ink-mute">
                      Ownership Model
                    </dt>
                    <dd className="font-medium text-ink">
                      100% Client Owned · $0 Retainer
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
