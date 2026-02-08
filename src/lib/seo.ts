import type { Metadata } from "next";
import type { Locale } from "./i18n";

const defaultSiteUrl = "https://asiaeventsgroup.live";

export function buildMetadata({
  locale,
  pathname,
  title,
  description,
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  const canonical = `${siteUrl}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}${pathname.replace(`/${locale}`, "/en")}`,
        ar: `${siteUrl}${pathname.replace(`/${locale}`, "/ar")}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Asia Events Group",
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og/og.jpg",
          width: 1200,
          height: 630,
          alt: "Asia Events Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/og.jpg"],
    },
  };
}
