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
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(200,167,106,0.25),_transparent_65%)]" />
            <div className="relative flex items-center justify-center rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] px-10 py-12 shadow-[0_20px_60px_rgba(11,27,43,0.12)] sm:px-14 sm:py-16">
              <Image
                src="/brand/logo.png"
                alt={`${dict.siteName} logo`}
                width={520}
                height={160}
                className="h-16 w-auto sm:h-20 md:h-24"
                priority
              />
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
            {dict.siteName}
          </p>
          <h1 className="text-balance text-4xl font-semibold text-[color:var(--text)] sm:text-5xl">
            {dict.home.hero.headline}
          </h1>
          <p className="text-lg text-[color:var(--text-soft)]">{dict.home.hero.subheadline}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:bg-[color:var(--accent-strong)]"
            >
              {dict.home.hero.primaryCta}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="rounded-full border border-[color:var(--border)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              {dict.home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Section
        id="services"
        eyebrow={dict.home.servicesPreview.eyebrow}
        title={dict.home.servicesPreview.title}
        subtitle={dict.home.servicesPreview.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.home.servicesPreview.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="pt-6">
          <Link
            href={`/${locale}/services`}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]"
          >
            {dict.common.exploreServices}
          </Link>
        </div>
      </Section>

      <Section id="process" eyebrow={dict.home.process.eyebrow} title={dict.home.process.title}>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.home.process.steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cta" align="center" title={dict.home.cta.title} subtitle={dict.home.cta.subtitle}>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:bg-[color:var(--accent-strong)]"
          >
            {dict.home.cta.primaryCta}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-[color:var(--border)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            {dict.home.cta.secondaryCta}
          </Link>
        </div>
      </Section>
    </div>
  );
}
