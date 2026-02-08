"use client";

import { useEffect, useState } from "react";

type AnnouncementBarProps = {
  message: string;
};

export default function AnnouncementBar({ message }: AnnouncementBarProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setHidden(window.scrollY > 12);
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

  return (
    <div className={`announcement-bar ${hidden ? "is-hidden" : ""}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-2 text-xs font-semibold text-[color:var(--text)] sm:py-2.5 sm:text-sm">
        {message}
      </div>
    </div>
  );
}
