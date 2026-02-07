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
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.16),_transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(transparent 0, rgba(11, 27, 43, 0.03) 1px, transparent 2px)",
            backgroundSize: "100% 6px",
          }}
        />
        <div className="absolute inset-0 flex items-start justify-center pt-10 sm:pt-16">
          <Image
            src="/brand/logo.png"
            alt=""
            fill
            className="object-contain opacity-[0.035]"
            priority
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 text-center sm:gap-14 sm:px-6 lg:px-8">
          <Image
            src="/brand/logo.png"
            alt={`${dict.siteName} logo`}
            width={2600}
            height={820}
            className="h-[21rem] w-auto sm:h-[24rem] md:h-[28rem]"
            priority
          />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--text)]">
            {dict.home.hero.brandLine}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.15] text-[color:var(--text)] sm:text-5xl md:text-6xl">
            {dict.home.hero.headline.includes("—") ? (
              <>
                <span className="block">{dict.home.hero.headline.split("—")[0]?.trim()} —</span>
                <span className="block text-[color:var(--text)]/70">
                  {dict.home.hero.headline.split("—")[1]?.trim()}
                </span>
              </>
            ) : (
              <span className="block whitespace-pre-line">{dict.home.hero.headline}</span>
            )}
          </h1>
          <p className="text-xl font-semibold leading-relaxed text-[color:var(--text)] sm:text-2xl">
            <span className="block whitespace-pre-line">{dict.home.hero.subheadline}</span>
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-[color:var(--text-soft)] sm:text-lg">
            {dict.home.hero.supporting}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="rounded-sm bg-[color:var(--accent)] px-14 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/90"
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
