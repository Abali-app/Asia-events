import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const base = `/${dict.locale}`;
  const instagramUrl = dict.footer.socials[0]?.href || "#";
  const executiveLine =
    dict.locale === "ar"
      ? "تتم إدارة الشراكات مباشرة من قبل الإدارة العليا."
      : "Partnership discussions handled directly by senior management.";

  return (
    <footer className="relative mt-16 bg-[#081423] text-[#d9dee5]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#0f2740] via-[#c8a76a] to-transparent" />

      <div className="container-shell grid w-full gap-10 pb-12 pt-20 text-start md:grid-cols-3">
        <div className="space-y-3 text-sm">
          <Link href={base} className="inline-flex text-2xl font-semibold tracking-[0.18em] text-white">
            AZIA
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-[#b8c0ca]">Live Entertainment</p>
          <p className="text-sm text-[#9fa9b6]">Dubai, United Arab Emirates</p>
        </div>

        <div className="space-y-3 text-sm text-[#c4ccd6]">
          <p>Production &amp; Promotion</p>
          <p>Live Music Concerts</p>
          <p>Strategic Partnerships</p>
        </div>

        <div className="space-y-4 text-sm">
          <a
            href="mailto:partnerships@azia.events"
            className="inline-flex text-[#d9dee5] transition-colors duration-200 hover:text-white"
          >
            partnerships@azia.events
          </a>
          <a
            href={instagramUrl}
            className="inline-flex items-center gap-2 text-[#b8c0ca] transition-colors duration-200 hover:text-[#d9dee5]"
            aria-label={`${dict.siteName} Instagram`}
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.6 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
            </svg>
            <span>Instagram</span>
          </a>
          <button
            type="button"
            aria-disabled="true"
            className="cursor-default rounded-full border border-[#33485f] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#9ba6b4]"
          >
            {dict.footer.privateAccess}
          </button>
        </div>
      </div>

      <div className="divider-top border-white/10">
        <div className="container-shell flex flex-col gap-4 pb-8 pt-6 text-sm text-[#a8b1bd]">
          <p className="text-xs tracking-[0.04em] text-[#b8c0ca]">{executiveLine}</p>
          <div className="flex flex-col gap-1 text-xs text-[#8f9aa8] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Azia Live Entertainment</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
