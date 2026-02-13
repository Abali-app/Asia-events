import type { ReactNode } from "react";
import { fontArabic, fontLatin } from "@/lib/fonts";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://azia.events"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://azia.events/#organization",
    name: "Asia Events Group",
    url: "https://azia.events",
    logo: "https://azia.events/brand/logo.png",
    description:
      "Asia Events Group is a professional entertainment company specializing in the production and promotion of large-scale live music concerts across the Arab world.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "partnerships",
        email: "leads@azia.events",
        availableLanguage: ["en", "ar"],
      },
    ],
    inLanguage: ["en", "ar"],
    sameAs: ["https://www.instagram.com/asia_events_group?igsh=MTBzcHExNTUzcDI1YQ=="],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Asia Events Group",
    url: "https://azia.events",
    inLanguage: ["en", "ar"],
    publisher: { "@id": "https://azia.events/#organization" },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${fontArabic.variable} ${fontLatin.variable}`}>
        <ScrollProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
