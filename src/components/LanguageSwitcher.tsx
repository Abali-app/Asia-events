"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ar" : "en";
  const targetPath = pathname ? pathname.replace(/^\/(en|ar)/, `/${targetLocale}`) : `/${targetLocale}`;

  return (
    <Link
      href={targetPath}
      className="rounded-full border border-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)] transition hover:bg-[color:var(--accent)] hover:text-[color:var(--text)]"
      aria-label={label}
    >
      {targetLocale === "ar" ? "العربية" : "English"}
    </Link>
  );
}
