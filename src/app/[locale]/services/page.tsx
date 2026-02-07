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
    pathname: `/${locale}/services`,
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section
        eyebrow={dict.nav.services}
        title={dict.servicesPage.title}
        subtitle={dict.servicesPage.subtitle}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.servicesPage.categories.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{service.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
