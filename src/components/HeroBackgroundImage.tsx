"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const mobileQuery = "(max-width: 767px)";

export default function HeroBackgroundImage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(mobileQuery);
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return (
      <Image
        src="/brand/hero/Abstract Stage Light.jpg"
        alt=""
        fill
        className="hero-image object-cover object-top"
        priority
        sizes="100vw"
      />
    );
  }

  return (
    <Image
      src="/brand/hero/Pre-Show Power.jpg"
      alt=""
      fill
      className="hero-image object-cover object-center"
      priority
      sizes="100vw"
    />
  );
}
