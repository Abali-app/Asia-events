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
      <Section eyebrow={dict.nav.about} title={dict.about.title} subtitle={dict.about.story}>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{dict.about.missionTitle}</h3>
            <p className="mt-3 text-sm text-[color:var(--muted)]">{dict.about.mission}</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{dict.about.valuesTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
              {dict.about.values.map((value) => (
                <li key={value.title}>
                  <span className="text-white">{value.title}:</span> {value.description}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section eyebrow={dict.about.teamEyebrow} title={dict.about.teamTitle}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
