"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SponsorWallVideoProps = {
  poster: string;
};

export default function SponsorWallVideo({ poster }: SponsorWallVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

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
      <div className="relative aspect-[4/5] w-full bg-[color:var(--surface)]/80 sm:aspect-video">
        {shouldLoad && !reduceMotion ? (
          <video
            className="h-full w-full object-cover object-center"
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label="Sponsor wall"
          >
            <source src="/brand/video/sponsor-wall.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={poster}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 100vw, 100vw"
          />
        )}
      </div>
    </div>
  );
}
