"use client";

import { useEffect } from "react";

/** Nothing stays hidden longer than this, whatever the observer does. */
const SAFETY_MS = 2000;

/**
 * Mounted once, site-wide. Adds `js` to <html> — which is what tells the
 * stylesheet it is safe to hide un-revealed content — then flips
 * [data-revealed] as elements scroll in.
 *
 * Two guarantees, both deliberate, because the audit found the previous
 * implementation could leave whole sections blank:
 *
 * 1. Nothing is hidden until this component runs. A page whose JavaScript
 *    fails, is blocked, or never arrives renders every section normally.
 * 2. A safety timer reveals everything after two seconds regardless of what
 *    the observer reports. If IntersectionObserver misbehaves in some browser
 *    we have not tested, the worst case is a missing animation, never missing
 *    content.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;

    // Under reduced motion there is nothing to reveal, so the class that
    // enables hiding is never added.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("js");

    const reveal = (el: Element) => el.setAttribute("data-revealed", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
    );

    const observe = () => {
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));
    };
    observe();

    // Client-side navigation brings new nodes with it.
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    const safety = window.setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach(reveal);
    }, SAFETY_MS);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
      root.classList.remove("js");
    };
  }, []);

  return null;
}
