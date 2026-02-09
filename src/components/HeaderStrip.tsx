"use client";

import Image from "next/image";

type HeaderStripProps = {
  src: string;
  alt?: string;
};

export default function HeaderStrip({ src, alt = "" }: HeaderStripProps) {
  return (
    <div className="relative h-[160px] w-full overflow-hidden sm:h-[220px] md:h-[320px] lg:h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top md:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}
