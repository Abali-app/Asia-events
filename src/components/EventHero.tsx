import Image from "next/image";

type EventHeroProps = {
  eventName: string;
  venue: string;
  city: string;
  date: string;
  heroImage: string;
  ticketUrl: string;
  ticketLabel: string;
};

export default function EventHero({
  eventName,
  venue,
  city,
  date,
  heroImage,
  ticketUrl,
  ticketLabel,
}: EventHeroProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src={heroImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h1 className="text-balance text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-tight">
          {eventName}
        </h1>
        <p className="text-sm uppercase tracking-[0.25em] text-white/80">{venue}</p>
        <p className="text-sm uppercase tracking-[0.25em] text-white/80">{city}</p>
        <p className="text-sm uppercase tracking-[0.25em] text-white/80">{date}</p>
        <a
          href={ticketUrl}
          className="btn-primary rounded-sm bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
        >
          {ticketLabel}
        </a>
      </div>
    </section>
  );
}