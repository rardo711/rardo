"use client";

import { useEffect } from "react";

/**
 * Smooth scrolling for in-page anchors only.
 *
 * Wheel, touch, keyboard, find-in-page and scroll restoration stay fully
 * native and instant. When a link to a place on the current page is
 * activated, <html data-anchor-scroll> switches CSS scroll-behavior to
 * smooth just for that jump (globals.css) and is cleared when the scroll
 * ends. Reduced-motion visitors never get the smooth rule.
 */
export default function AnchorScroll() {
  useEffect(() => {
    let timer = 0;
    const root = document.documentElement;

    function clear() {
      window.clearTimeout(timer);
      root.removeAttribute("data-anchor-scroll");
      window.removeEventListener("scrollend", clear);
    }

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const url = new URL((a as HTMLAnchorElement).href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      if (!url.hash || url.hash === "#") return;
      if ((a as HTMLAnchorElement).target === "_blank") return;
      root.setAttribute("data-anchor-scroll", "");
      window.addEventListener("scrollend", clear);
      window.clearTimeout(timer);
      // Fallback for browsers without `scrollend`, and for jumps that
      // don't move the page at all.
      timer = window.setTimeout(clear, 1500);
    }

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clear();
    };
  }, []);

  return null;
}
