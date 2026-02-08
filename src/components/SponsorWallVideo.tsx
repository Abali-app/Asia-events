"use client";

import { useEffect, useRef, useState } from "react";

type SponsorWallVideoProps = {
  poster: string;
};

export default function SponsorWallVideo({ poster }: SponsorWallVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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
      <div className="aspect-video w-full bg-[color:var(--surface)]/80">
        <video
          className="h-full w-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          autoPlay={shouldLoad}
          preload="none"
          aria-label="Sponsor wall"
        >
          {shouldLoad ? <source src="/brand/video/sponsor-wall.mp4" type="video/mp4" /> : null}
        </video>
      </div>
    </div>
  );
}
