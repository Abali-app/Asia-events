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
    pathname: `/${locale}/about`,
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section as="h1" eyebrow={dict.nav.about} title={dict.about.title} subtitle={dict.about.story}>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="border-t border-[color:var(--border)] pt-6">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">{dict.about.missionTitle}</h3>
            <p className="mt-3 text-sm text-[color:var(--text-soft)]">{dict.about.mission}</p>
          </div>
          <div className="border-t border-[color:var(--border)] pt-6">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">{dict.about.valuesTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-soft)]">
              {dict.about.values.map((value) => (
                <li key={value.title}>
                  <span className="text-[color:var(--text)]">{value.title}:</span> {value.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[color:var(--border)] pt-6">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">{dict.about.approachTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--text-soft)]">
              {dict.about.approach.map((item) => (
                <li key={item.title}>
                  <span className="text-[color:var(--text)]">{item.title}:</span> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
