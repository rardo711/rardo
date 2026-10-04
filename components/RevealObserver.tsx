"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Marks [data-reveal] elements as .is-in once they scroll into view. */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    document
      .querySelectorAll("[data-reveal]:not(.is-in)")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
