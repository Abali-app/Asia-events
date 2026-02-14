import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

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
  const introBlock =
    locale === "ar"
      ? {
          title: "إطار الدمج التجاري",
          text: "تقوم أزيا بهيكلة اتفاقيات الشراكة عبر جدول إنتاجها السنوي.",
        }
      : {
          title: "Commercial Integration Overview",
          text: "Azia structures partnership agreements across its annual production calendar.",
        };

  return (
    <div>
      <Section
        as="h1"
        eyebrow={dict.nav.partnerships}
        title={dict.partnerships.title}
        subtitle={dict.partnerships.subtitle}
      >
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.partnerships.bullets.map((item) => (
            <li key={item} className="divider-top pt-4">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <Link
            href={`/${locale}/partnerships?context=company_profile#contact-form`}
            className="btn-outline rounded-sm border border-[color:var(--border)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
          >
            {dict.partnerships.profileCta}
          </Link>
        </div>
      </Section>

      <Section title={introBlock.title} subtitle={introBlock.text} />

      <Section title={dict.partnerships.frameworkTitle}>
        <div className="flex flex-wrap gap-3 text-sm text-[color:var(--text-soft)]">
          {dict.partnerships.frameworkSteps.map((step) => (
            <span
              key={step}
              className="rounded-full border border-[color:var(--border)] px-4 py-1"
            >
              {step}
            </span>
          ))}
        </div>
      </Section>

      <Section title={dict.partnerships.formatsTitle}>
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {dict.partnerships.formats.map((item) => (
            <li key={item} className="divider-top pt-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact-form" title={dict.partnerships.ctaTitle} subtitle={dict.partnerships.ctaSubtitle}>
        <div className="divider-top pt-6">
          <ContactForm labels={dict.form} locale={locale} source="partnerships" />
        </div>
      </Section>
    </div>
  );
}
