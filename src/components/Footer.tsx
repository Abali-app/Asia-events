import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const base = `/${dict.locale}`;

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Link href={base} className="inline-flex items-center">
            <Image
              src="/brand/logo.png"
              alt={`${dict.siteName} logo`}
              width={300}
              height={88}
              className="h-16 w-auto"
              sizes="(min-width: 1024px) 160px, 128px"
            />
            <span className="sr-only">{dict.siteName}</span>
          </Link>
          <p className="text-sm text-[color:var(--text-soft)]">{dict.footer.summary}</p>
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
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>{dict.footer.copyright}</div>
          <div className="flex flex-wrap gap-4">
            <Link href={`${base}/privacy`} className="hover:text-[color:var(--text)]">
              {dict.legal.privacy.title}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-[color:var(--text)]">
              {dict.legal.terms.title}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
