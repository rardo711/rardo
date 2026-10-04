import type { ElementType, ReactNode } from "react";

/**
 * Gentle rise-and-fade. Pure CSS (see globals.css) — a Server Component.
 *
 * - default: hidden only when JS is on (html.js), revealed by RevealObserver
 *   when it scrolls into view.
 * - eager: for content that is on screen at load. A short CSS-only entrance
 *   that never waits for hydration, so it can't delay LCP.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  eager = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  eager?: boolean;
}) {
  const style = { "--d": `${Math.min(delay, 0.24)}s` } as React.CSSProperties;
  if (eager) {
    return (
      <Tag className={`reveal-now ${className}`.trim()} style={style}>
        {children}
      </Tag>
    );
  }
  return (
    <Tag data-reveal="" className={className || undefined} style={style}>
      {children}
    </Tag>
  );
}
