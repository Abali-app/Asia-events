"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.getElementById("hero-bg");
    if (!target || prefersReducedMotion) {
      if (target) {
        target.style.setProperty("--hero-parallax-y", "0px");
      }
      return;
    }

    let ticking = false;
    const maxShift = 18;
    const factor = 0.08;

    const update = () => {
      const shift = Math.min(window.scrollY * factor, maxShift);
      target.style.setProperty("--hero-parallax-y", `${shift}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
