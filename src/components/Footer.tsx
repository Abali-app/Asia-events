import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const base = `/${dict.locale}`;
  const executiveLine =
    dict.locale === "ar"
      ? "??? ????? ???????? ?????? ?? ??? ??????? ??????."
      : "Partnership discussions handled directly by senior management.";
  const locationLine =
    dict.locale === "ar" ? "???? ???????? ??????? ???????" : "Dubai, United Arab Emirates";

  return (
    <footer className="divider-top bg-[color:var(--bg)]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 py-12 text-start md:grid-cols-3 md:gap-8">
          <div className="space-y-4">
            <Link href={base} className="inline-flex items-center">
              <Image
                src="/brand/logo.png"
                alt={`${dict.siteName} logo`}
                width={300}
                height={88}
                className="h-24 w-auto"
                sizes="(min-width: 1024px) 256px, 192px"
              />
              <span className="sr-only">{dict.siteName}</span>
            </Link>
            <p className="text-sm text-[color:var(--text-soft)]">{dict.footer.summary}</p>
          </div>

          <div className="space-y-3 text-sm text-[color:var(--text-soft)]">
            <Link href={`${base}/privacy`} className="block hover:text-[color:var(--text)]">
              {dict.legal.privacy.title}
            </Link>
            <Link href={`${base}/terms`} className="block hover:text-[color:var(--text)]">
              {dict.legal.terms.title}
            </Link>
            <button
              type="button"
              aria-disabled="true"
              className="cursor-default rounded-full border border-[color:var(--border)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--text-soft)] opacity-70"
            >
              {dict.footer.privateAccess}
            </button>
          </div>

          <div className="space-y-3 text-sm text-[color:var(--text-soft)]">
            <p className="text-[color:var(--text)]">{dict.footer.socialTitle}</p>
            <div className="flex flex-wrap items-center gap-4">
              {dict.footer.socials.map((social, index) => {
                const iconSrc =
                  index === 0
                    ? "/brand/social/logo-ig-png-42760.png"
                    : index === 1
                      ? "/brand/social/youtube-logo-png-31792-v2.png"
                      : "/brand/social/tik-tok-logo-33079.png";

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center opacity-80 hover:opacity-100"
                    aria-label={`${dict.siteName} ${social.label}`}
                  >
                    <Image
                      src={iconSrc}
                      alt={social.label}
                      width={24}
                      height={24}
                      className="h-5 w-auto sm:h-6"
                      sizes="24px"
                    />
                  </a>
                );
              })}
            </div>
            <div className="pt-2 text-sm text-[color:var(--text)]">
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                {dict.footer.emailLabel}
              </span>
              <div className="mt-2">{dict.footer.emailValue}</div>
              <div className="mt-2 text-xs text-[color:var(--text-soft)]">{executiveLine}</div>
              <div className="mt-1 text-xs text-[color:var(--text-soft)]">{locationLine}</div>
            </div>
          </div>
        </div>

        <div className="divider-top py-5 text-center text-xs text-[color:var(--text-soft)]">
          <div>{dict.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
