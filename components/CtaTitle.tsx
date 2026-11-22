/**
 * Closing headline. The word drift and the outlined "build" are scroll-linked
 * in CSS (see .cta-* in globals.css): no JS runs while scrolling, and without
 * scroll-timeline support the type simply sits still.
 */
const words = [
  { text: "Let's", from: 9, to: -5 },
  { text: "build", from: 16, to: -11 },
  { text: "yours.", from: 23, to: -17 },
];

export default function CtaTitle() {
  return (
    <div className="cta-scope relative mt-8">
      <p
        aria-hidden
        className="cta-ghost stroke-paper pointer-events-none absolute -left-[0.04em] -top-[0.42em] select-none font-display text-[clamp(5.5rem,20vw,15rem)] font-semibold leading-none"
      >
        build
      </p>
      <h2 className="relative font-display text-[clamp(2.75rem,1.087rem+7.391vw,7rem)] font-semibold leading-[1] tracking-tight">
        {words.map((w, i) => (
          <span key={w.text}>
            <span
              className="cta-word inline-block"
              style={
                { "--from": w.from, "--to": w.to } as React.CSSProperties
              }
            >
              {w.text}
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
    </div>
  );
}
