import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { fontArabic, fontLatin } from "@/lib/fonts";
import LocaleBodyAttributes from "@/components/LocaleBodyAttributes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const isArabic = locale === "ar";

  return (
    <div
      lang={isArabic ? "ar" : "en"}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? "font-ar" : "font-en"} ${
        isArabic ? fontArabic.className : fontLatin.className
      } flex min-h-screen flex-col`}
    >
      <LocaleBodyAttributes locale={locale} />
      <Navbar locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
