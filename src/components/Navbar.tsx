"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const base = `/${locale}`;

  const items = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={base} className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt={`${dict.siteName} logo`}
            width={160}
            height={48}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span className="sr-only">{dict.siteName}</span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-[color:var(--text-soft)] lg:flex"
          aria-label="Primary"
        >
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[color:var(--text)] ${
                  active ? "text-[color:var(--text)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={`${base}/contact`}
            className="hidden rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:bg-[color:var(--accent-strong)] md:inline-flex"
          >
            {dict.common.ctaPrimary}
          </Link>
          <LanguageSwitcher locale={locale} label={dict.common.languageSwitchLabel} />
        </div>
      </div>
      <div className="border-t border-[color:var(--border)] lg:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 text-xs text-[color:var(--text-soft)] sm:px-6 lg:px-8">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[color:var(--text)] ${
                  active ? "text-[color:var(--text)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
