import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const base = `/${dict.locale}`;

  return (
    <footer className="border-t border-white/10 bg-[color:var(--ink)]">
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
          <p className="text-sm text-[color:var(--muted)]">{dict.footer.summary}</p>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--muted)]">
          <p className="text-white">{dict.contact.detailsTitle}</p>
          <ul className="space-y-2">
            {dict.contact.details.map((item) => (
              <li key={item.label} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--muted)]">
          <p className="text-white">{dict.footer.socialTitle}</p>
          <div className="flex flex-wrap gap-3">
            {dict.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-[color:var(--muted)] sm:px-6 lg:px-8">
          {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
