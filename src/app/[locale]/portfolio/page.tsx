import Section from "@/components/Section";
import PortfolioGrid from "@/components/PortfolioGrid";
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
    pathname: `/${locale}/portfolio`,
    title: dict.metadata.portfolio.title,
    description: dict.metadata.portfolio.description,
  });
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);

  return (
    <div>
      <Section
        eyebrow={dict.nav.portfolio}
        title={dict.portfolioPage.title}
        subtitle={dict.portfolioPage.subtitle}
      >
        <PortfolioGrid filters={dict.portfolioPage.filters} items={dict.portfolioPage.items} />
      </Section>
    </div>
  );
}
