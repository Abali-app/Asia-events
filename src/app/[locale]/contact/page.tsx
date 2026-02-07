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
    pathname: `/${locale}/contact`,
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section
        id="contact-form"
        eyebrow={dict.nav.contact}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-t border-[color:var(--border)] pt-6">
            <ContactForm labels={dict.form} />
          </div>
          <aside className="border-t border-[color:var(--border)] pt-6">
            <h3 className="text-lg font-semibold text-[color:var(--text)]">{dict.contact.detailsTitle}</h3>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--text-soft)]">
              {dict.contact.details.map((detail) => (
                <li key={detail.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-base text-[color:var(--text)]">{detail.value}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </div>
  );
}
