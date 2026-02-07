"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

type LocaleBodyAttributesProps = {
  locale: Locale;
};

export default function LocaleBodyAttributes({ locale }: LocaleBodyAttributesProps) {
  useEffect(() => {
    const isArabic = locale === "ar";
    const html = document.documentElement;
    const body = document.body;

    html.lang = isArabic ? "ar" : "en";
    html.dir = isArabic ? "rtl" : "ltr";

    body.classList.remove("font-ar", "font-en");
    body.classList.add(isArabic ? "font-ar" : "font-en");

    return () => {
      body.classList.remove(isArabic ? "font-ar" : "font-en");
    };
  }, [locale]);

  return null;
}
