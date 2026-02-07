type Social = {
  label: string;
  href: string;
};

type ContactDetail = {
  label: string;
  value: string;
};

type QuickLink = {
  label: string;
  href: string;
};

type FooterComponentProps = {
  siteName: string;
  summary: string;
  contactTitle: string;
  contactDetails: ContactDetail[];
  socialTitle: string;
  socials: Social[];
  quickLinksTitle: string;
  quickLinks: QuickLink[];
  copyright: string;
  dir?: "ltr" | "rtl";
};

export default function FooterComponent({
  siteName,
  summary,
  contactTitle,
  contactDetails,
  socialTitle,
  socials,
  quickLinksTitle,
  quickLinks,
  copyright,
  dir = "ltr",
}: FooterComponentProps) {
  return (
    <footer className="relative border-t border-white/10 bg-[color:var(--ink)]" dir={dir}>
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">
              {siteName}
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              {summary}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              {quickLinksTitle}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--gold)]"
                  >
                    <span className="h-[1px] w-0 bg-[color:var(--gold)] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              {contactTitle}
            </h4>
            <ul className="space-y-3">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {detail.label}
                  </span>
                  <span className="text-sm text-[color:var(--muted)]">
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              {socialTitle}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--gold)]"
                  aria-label={social.label}
                >
                  {social.label === "Instagram" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  {social.label === "LinkedIn" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social.label === "YouTube" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  )}
                  {social.label === "Twitter" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Newsletter Signup (Optional) */}
            <div className="pt-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
                Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-sm border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-[color:var(--gold)] focus:outline-none focus:ring-1 focus:ring-[color:var(--gold)]"
                />
                <button className="rounded-sm bg-[color:var(--gold)] px-4 py-2 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--gold-strong)]">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[color:var(--muted)] sm:flex-row">
            <p>{copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-[color:var(--gold)]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[color:var(--gold)]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-50" />
    </footer>
  );
}
