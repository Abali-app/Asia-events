import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const base = `/${dict.locale}`;

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Link href={base} className="inline-flex items-center">
            <Image
              src="/brand/logo.png"
              alt={`${dict.siteName} logo`}
              width={150}
              height={44}
              className="h-9 w-auto"
            />
            <span className="sr-only">{dict.siteName}</span>
          </Link>
          <p className="text-sm text-[color:var(--text-soft)]">{dict.footer.summary}</p>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--text-soft)]">
          <p className="text-[color:var(--text)]">{dict.contact.detailsTitle}</p>
          <ul className="space-y-2">
            {dict.contact.details.map((item) => (
              <li key={item.label} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                  {item.label}
                </span>
                <span className="text-[color:var(--text)]">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--text-soft)]">
          <p className="text-[color:var(--text)]">{dict.footer.socialTitle}</p>
          <div className="flex flex-wrap gap-3">
            {dict.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-[color:var(--text-soft)] sm:px-6 lg:px-8">
          {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
