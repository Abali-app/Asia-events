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
    pathname: `/${locale}/privacy`,
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.subtitle,
  });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section as="h1" title={dict.legal.privacy.title} subtitle={dict.legal.privacy.subtitle}>
        <div className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.legal.privacy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>
    </div>
  );
}
