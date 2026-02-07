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
      <div className="sticky top-0 z-50">
        <div className="border-b border-[color:var(--border)]/60 bg-[color:var(--bg)]/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-2 text-xs font-semibold text-[color:var(--text)] sm:py-2.5 sm:text-sm">
            {dict.announcement}
          </div>
        </div>
        <Navbar locale={locale} dict={dict} />
      </div>
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
