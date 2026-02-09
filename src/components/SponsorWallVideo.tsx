"use client";

import { useEffect, useRef, useState } from "react";
export default function SponsorWallVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReducedMotion);

    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
      <div className="relative aspect-[4/5] w-full bg-[color:var(--surface)]/80 bg-[url('/brand/hero/abstract-stage-light.jpg')] bg-cover bg-center sm:aspect-video">
        {shouldLoad && !reduceMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label="Sponsor wall"
            onCanPlay={() => setIsReady(true)}
            onPlaying={() => setIsReady(true)}
          >
            <source src="/brand/video/sponsor-wall.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
}
