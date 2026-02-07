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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.2),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/brand/logo.png"
            alt={`${dict.siteName} logo`}
            width={720}
            height={220}
            className="h-20 w-auto sm:h-24 md:h-28"
            priority
          />
          <h1 className="text-balance text-4xl font-semibold text-[color:var(--text)] sm:text-5xl md:text-6xl">
            {dict.home.hero.headline}
          </h1>
          <p className="max-w-3xl text-lg text-[color:var(--text-soft)] sm:text-xl">
            {dict.home.hero.subheadline}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-[color:var(--accent)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)] transition hover:bg-[color:var(--accent-strong)]"
          >
            {dict.home.hero.primaryCta}
          </Link>
        </div>
      </section>

      <Section
        id="services"
        eyebrow={dict.home.servicesPreview.eyebrow}
        title={dict.home.servicesPreview.title}
        subtitle={dict.home.servicesPreview.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {dict.home.servicesPreview.items.map((item) => (
            <article key={item.title} className="border-t border-[color:var(--border)] pt-6">
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

    </div>
  );
}
