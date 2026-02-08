"use client";

import Image from "next/image";

type HeaderStripProps = {
  src: string;
  alt?: string;
};

export default function HeaderStrip({ src, alt = "" }: HeaderStripProps) {
  return (
    <div className="relative h-[150px] w-full overflow-hidden sm:h-[200px]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}
