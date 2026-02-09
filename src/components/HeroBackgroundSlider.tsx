"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/brand/hero/asia-redcarpet.jpg",
  "/brand/hero/stage-v2.jpg",
];

export default function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);
  const [readyForSecond, setReadyForSecond] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReducedMotion);
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <Image
        src={images[0]}
        alt=""
        fill
        className={`hero-image hero-slide object-cover object-center ${index === 0 ? "is-active" : ""}`}
        priority
        sizes="100vw"
        onLoadingComplete={() => setReadyForSecond(true)}
      />
      {!reduceMotion && readyForSecond ? (
        <Image
          src={images[1]}
          alt=""
          fill
          className={`hero-image hero-slide object-cover object-center ${index === 1 ? "is-active" : ""}`}
          loading="lazy"
          sizes="100vw"
        />
      ) : null}
    </>
  );
}
