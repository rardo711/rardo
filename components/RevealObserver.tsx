"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Marks [data-reveal] elements as .is-in the first time they scroll into
 * view, then stops watching them (one-shot).
 *
 * - IntersectionObserver, so nothing runs per scroll event.
 * - Elements the visitor has already scrolled past (fast scroll, anchor
 *   jump, restored scroll position) are marked at once, so they are never
 *   left invisible above the fold and never animate off-screen.
 * - The bottom margin is small: content starts to rise just as it enters,
 *   which avoids a visible "pop" on fast scrolls without revealing things
 *   far below the fold.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const above = e.boundingClientRect.bottom <= 0;
          if (e.isIntersecting || above) {
            const el = e.target as HTMLElement;
            if (above) el.style.transition = "none";
            el.classList.add("is-in");
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
    document
      .querySelectorAll("[data-reveal]:not(.is-in)")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
