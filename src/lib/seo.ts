import type { Metadata } from "next";
import type { Locale } from "./i18n";

const defaultSiteUrl = "https://azia.events";

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
  const defaultLocale: Locale = "ar";
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  const normalizedPath = pathWithoutLocale.startsWith("/") ? pathWithoutLocale : `/${pathWithoutLocale}`;
  const canonicalPath = pathWithoutLocale ? `/${locale}${normalizedPath}` : `/${locale}`;
  const canonical = `${siteUrl}${canonicalPath}`;
  const buildLocaleUrl = (targetLocale: Locale) =>
    `${siteUrl}${pathWithoutLocale ? `/${targetLocale}${normalizedPath}` : `/${targetLocale}`}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: buildLocaleUrl("en"),
        ar: buildLocaleUrl("ar"),
        "x-default": buildLocaleUrl(defaultLocale),
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
