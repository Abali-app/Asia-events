import Image from "next/image";

type EventHeroProps = {
  locale: "en" | "ar";
  eventName: string;
  venue: string;
  city: string;
  date: string;
  heroImage: string;
  ticketUrl: string;
  ticketLabel: string;
};

export default function EventHero({
  locale,
  eventName,
  venue,
  city,
  date,
  heroImage,
  ticketUrl,
  ticketLabel,
}: EventHeroProps) {
  const presenterLabel = locale === "ar" ? "تقدم أزيا" : "AZIA PRESENTS";
  const locationLine = locale === "ar" ? city : `${venue} · ${city}`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={heroImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">{presenterLabel}</p>
        <h1 className="text-balance text-[clamp(2.4rem,6vw,5.6rem)] font-semibold leading-[1.02]">
          {eventName}
        </h1>
        <p className="text-sm uppercase tracking-[0.25em] text-white/85">{locationLine}</p>
        <p className="text-sm uppercase tracking-[0.25em] text-white/85">{date}</p>
        <a
          href={ticketUrl}
          className="btn-primary mt-3 rounded-sm bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
        >
          {ticketLabel}
        </a>
      </div>
    </section>
  );
}
