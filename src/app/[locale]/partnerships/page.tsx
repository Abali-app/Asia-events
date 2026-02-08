import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
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
    pathname: `/${locale}/partnerships`,
    title: dict.partnerships.title,
    description: dict.partnerships.subtitle,
  });
}

export default async function PartnershipsPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section
        eyebrow={dict.nav.partnerships}
        title={dict.partnerships.title}
        subtitle={dict.partnerships.subtitle}
      >
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.partnerships.bullets.map((item) => (
            <li key={item} className="border-t border-[color:var(--border)] pt-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact-form" title={dict.partnerships.ctaTitle} subtitle={dict.partnerships.ctaSubtitle}>
        <div className="border-t border-[color:var(--border)] pt-6">
          <ContactForm labels={dict.form} />
        </div>
      </Section>
    </div>
  );
}
