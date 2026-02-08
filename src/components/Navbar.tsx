"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const base = `/${locale}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/partnerships`, label: dict.nav.partnerships },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`border-b transition-colors ${
        scrolled
          ? "border-[color:var(--border)]/50 bg-white/70 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={base} className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt={`${dict.siteName} logo`}
            width={320}
            height={96}
            className="h-16 w-auto sm:h-20"
            sizes="(min-width: 1024px) 160px, 128px"
          />
          <span className="sr-only">{dict.siteName}</span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-base text-[color:var(--text-soft)] lg:flex"
          aria-label="Primary"
        >
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link transition hover:text-[color:var(--text)] ${
                  active ? "is-active text-[color:var(--text)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={dict.common.languageSwitchLabel} />
        </div>
      </div>
      <div className="divider-top lg:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 text-xs text-[color:var(--text-soft)] sm:px-6 lg:px-8">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link transition hover:text-[color:var(--text)] ${
                  active ? "is-active text-[color:var(--text)]" : ""
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
