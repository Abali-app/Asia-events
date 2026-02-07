import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
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

  return (
    <div>
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/hero/asia-redcarpet.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.22),_transparent_60%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center gap-10 px-4 pb-12 pt-6 text-center text-white sm:gap-12 sm:px-6 sm:pb-0 sm:pt-0 lg:px-8">
          <div className="absolute inset-0 mx-auto h-[70%] w-[88%] max-w-3xl rounded-[48px] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.35)_45%,_transparent_70%)] sm:h-[65%]" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            {dict.home.hero.brandLine}
          </p>
          <h1 className="relative max-w-[16ch] text-balance text-4xl font-semibold leading-[1.25] text-white sm:text-5xl md:text-6xl">
            {dict.home.hero.headline.includes("—") ? (
              <>
                <span className="block">{dict.home.hero.headline.split("—")[0]?.trim()} —</span>
                <span className="block text-white/70">
                  {dict.home.hero.headline.split("—")[1]?.trim()}
                </span>
              </>
            ) : (
              <span className="block whitespace-pre-line">{dict.home.hero.headline}</span>
            )}
          </h1>
          <p className="relative max-w-[44ch] text-xl font-semibold leading-relaxed text-white/90 sm:text-2xl">
            <span className="block whitespace-pre-line">{dict.home.hero.subheadline}</span>
          </p>
          <p className="relative max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            {dict.home.hero.supporting}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="relative rounded-sm bg-[color:var(--accent)] px-16 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/90"
          >
            {dict.home.hero.primaryCta}
          </Link>
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
            <article key={item.title} className="border-t border-[color:var(--border)] pt-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative h-[60vh] overflow-hidden sm:h-[70vh]">
        <Image src="/brand/hero/stage.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <p className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            {dict.home.cinematic.line}
          </p>
        </div>
      </section>

      <Section
        id="sponsors"
        eyebrow={dict.home.sponsors.eyebrow}
        title={dict.home.sponsors.title}
        subtitle={dict.home.sponsors.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {dict.home.sponsors.items.map((item) => (
            <article key={item.title} className="border-t border-[color:var(--border)] pt-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="pt-8">
          <Link
            href={`/${locale}/contact#contact-form`}
            className="rounded-md bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/90"
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
              <Image src="/brand/hero/crowd.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image src="/brand/hero/stage.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
        </div>
      </Section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
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
      </section>

      <Section eyebrow={dict.home.faq.eyebrow} title={dict.home.faq.title} subtitle={dict.home.faq.subtitle}>
        <div className="grid gap-8 lg:grid-cols-2">
          {dict.home.faq.items.map((item) => (
            <div key={item.q} className="border-t border-[color:var(--border)] pt-6">
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







