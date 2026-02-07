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
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              {dict.siteName}
            </p>
            <h1 className="text-balance text-4xl font-semibold text-[color:var(--text)] sm:text-5xl">
              {dict.home.hero.headline}
            </h1>
            <p className="text-lg text-[color:var(--text-soft)]">{dict.home.hero.subheadline}</p>
            <div className="flex flex-wrap gap-4">
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
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.22),_transparent_60%)]" />
            <div className="relative h-72 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_20px_60px_rgba(11,27,43,0.12)] sm:h-96">
              <div className="flex h-full flex-col justify-center gap-5 p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  {dict.home.hero.card.eyebrow}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--text)]">
                  {dict.home.hero.card.title}
                </h2>
                <ul className="space-y-3 text-sm text-[color:var(--text-soft)]">
                  {dict.home.hero.card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
