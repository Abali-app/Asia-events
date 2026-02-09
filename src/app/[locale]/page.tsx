import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import HeroParallax from "@/components/HeroParallax";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import SponsorWallVideo from "@/components/SponsorWallVideo";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return {};
  }
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    pathname: `/${locale}`,
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: dict.metadata.home.title,
    url: `https://asiaeventsgroup.live/${locale}`,
    inLanguage: locale,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section id="hero" className="relative min-h-[90vh] overflow-hidden">
        <div id="hero-bg" className="absolute inset-0">
          <HeroBackgroundSlider />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.22),_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 hero-sweep" />
          <div className="pointer-events-none absolute inset-0 hero-noise" />
        </div>
        <HeroParallax />
        <div className="relative mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 pb-12 pt-6 text-center text-white sm:gap-10 sm:px-6 sm:pb-0 sm:pt-0 lg:px-8">
          <div className="absolute inset-0 mx-auto h-[68%] w-[90%] max-w-[42rem] rounded-[48px] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.65)_0%,_rgba(0,0,0,0.4)_50%,_transparent_75%)] sm:h-[62%]" />
          <div className="relative flex w-full max-w-[36ch] flex-col items-center gap-4">
            {dict.home.hero.brandLine ? (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                <span className="hero-line delay-1">{dict.home.hero.brandLine}</span>
              </p>
            ) : null}
            <h1 className="hero-title text-balance text-white text-[clamp(2.2rem,3.6vw,3.4rem)] font-semibold leading-tight">
              <span className="hero-line delay-2">{dict.home.hero.headline}</span>
            </h1>
            <p className="type-subhead text-measure text-white/85">
              <span className="hero-line delay-3">{dict.home.hero.subheadline}</span>
            </p>
            <Link
              href={`/${locale}/partnerships`}
              className="btn-primary rounded-sm bg-[color:var(--accent)] px-12 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
            >
              {dict.home.hero.primaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Section
        id="model"
        eyebrow={dict.home.ourModel.eyebrow}
        title={dict.home.ourModel.title}
        subtitle={dict.home.ourModel.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {dict.home.ourModel.items.map((item) => (
            <article key={item.title} className="divider-top pt-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-shell">
        <Reveal>
          <div className="container-shell flex w-full flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)]">
              {dict.home.dueDiligence.title}
            </p>
            <div className="flex flex-wrap gap-3">
              {dict.home.dueDiligence.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] px-4 py-1 text-xs text-[color:var(--text-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Section id="standards" title={dict.home.standards.title}>
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.home.standards.bullets.map((item) => (
            <li key={item} className="divider-top pt-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <section className="relative h-[60vh] overflow-hidden sm:h-[70vh]">
        <Image
          src="/brand/hero/stage-v2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex max-w-3xl flex-col items-center gap-4 text-white">
              <p className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                {dict.home.cinematic.line}
              </p>
              {dict.home.cinematic.lines?.length ? (
                <div className="text-base font-semibold text-white/90 sm:text-lg">
                  {dict.home.cinematic.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
              {dict.home.cinematic.cta ? (
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  {dict.home.cinematic.cta}
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        id="sponsor-presence"
        title={dict.home.sponsorPresence.title}
        subtitle={dict.home.sponsorPresence.description}
      >
        <SponsorWallVideo poster="/brand/hero/abstract-stage-light.jpg" />
      </Section>

      <Section
        id="partnerships"
        eyebrow={dict.home.sponsors.eyebrow}
        title={dict.home.sponsors.title}
        subtitle={dict.home.sponsors.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {dict.home.sponsors.items.map((item) => (
            <article key={item.title} className="divider-top pt-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="pt-8">
          <Link
            href={`/${locale}/contact#contact-form`}
            className="btn-primary rounded-md bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)]"
          >
            {dict.home.sponsors.cta}
          </Link>
        </div>
      </Section>

      <Section
        id="atmosphere"
        eyebrow={dict.home.atmosphere.title}
        title={dict.home.atmosphere.title}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/brand/hero/crowd.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/brand/hero/stage-v2.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
        </div>
      </Section>

      <section className="section-shell">
        <Reveal>
          <div className="container-shell flex w-full max-w-4xl flex-col items-center gap-5 text-center">
            <p className="text-2xl font-semibold text-[color:var(--text)] sm:text-3xl">
              {dict.home.stayTuned.title}
            </p>
            <div className="text-base font-semibold text-[color:var(--text)] sm:text-lg">
              <p>{dict.home.stayTuned.lines[0]}</p>
              <p>{dict.home.stayTuned.lines[1]}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              {dict.home.stayTuned.cta}
            </p>
          </div>
        </Reveal>
      </section>

      <Section eyebrow={dict.home.faq.eyebrow} title={dict.home.faq.title} subtitle={dict.home.faq.subtitle}>
        <div className="grid gap-8 lg:grid-cols-2">
          {dict.home.faq.items.map((item) => (
            <div key={item.q} className="divider-top pt-6">
              <p className="text-base font-semibold text-[color:var(--text)]">{item.q}</p>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {dict.home.microTeaser ? (
        <div className="py-6 text-center text-sm font-semibold text-[color:var(--text-soft)]">
          {dict.home.microTeaser}
        </div>
      ) : null}

    </div>
  );
}









