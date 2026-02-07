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
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              {dict.siteName}
            </p>
            <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl">
              {dict.home.hero.headline}
            </h1>
            <p className="text-lg text-[color:var(--muted)]">{dict.home.hero.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[color:var(--gold-strong)]"
              >
                {dict.home.hero.primaryCta}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                {dict.home.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(211,181,111,0.3),_transparent_65%)]" />
            <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--accent)] shadow-2xl sm:h-96">
              <Image
                src="/portfolio/portfolio-1.svg"
                alt="Event production detail"
                fill
                className="object-cover opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="capabilities"
        eyebrow={dict.home.capabilities.eyebrow}
        title={dict.home.capabilities.title}
        subtitle={dict.home.capabilities.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.home.capabilities.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="standards"
        eyebrow={dict.home.standards.eyebrow}
        title={dict.home.standards.title}
        subtitle={dict.home.standards.subtitle}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {dict.home.standards.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow={dict.home.process.eyebrow} title={dict.home.process.title}>
        <ol className="grid gap-6 lg:grid-cols-4">
          {dict.home.process.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
                {`${index + 1}`.padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="packages"
        eyebrow={dict.home.packages.eyebrow}
        title={dict.home.packages.title}
        subtitle={dict.home.packages.subtitle}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.home.packages.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-white/80 marker:text-[color:var(--gold)]">
                {item.includes.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cta" align="center" title={dict.home.cta.title} subtitle={dict.home.cta.subtitle}>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[color:var(--gold-strong)]"
          >
            {dict.home.cta.primaryCta}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
          >
            {dict.home.cta.secondaryCta}
          </Link>
        </div>
      </Section>
    </div>
  );
}
