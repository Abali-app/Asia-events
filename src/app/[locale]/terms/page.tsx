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
    pathname: `/${locale}/terms`,
    title: dict.legal.terms.title,
    description: dict.legal.terms.subtitle,
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section title={dict.legal.terms.title} subtitle={dict.legal.terms.subtitle}>
        <div className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.legal.terms.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>
    </div>
  );
}
