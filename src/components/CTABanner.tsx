type CTABannerProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  dir?: "ltr" | "rtl";
};

export default function CTABanner({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  dir = "ltr",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" dir={dir}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-[color:var(--gold)]/30 bg-gradient-to-br from-[color:var(--gold)]/10 via-transparent to-[color:var(--gold)]/5 p-12 sm:p-16 lg:p-20">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold-strong)_0%,transparent_70%)] opacity-20" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg md:text-xl">
              {subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onPrimaryClick}
                className="group relative overflow-hidden rounded-sm bg-[color:var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--gold-strong)] hover:shadow-[0_0_30px_rgba(211,181,111,0.4)]"
              >
                <span className="relative z-10">{primaryCta}</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>

              <button
                onClick={onSecondaryClick}
                className="group rounded-sm border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white/10"
              >
                {secondaryCta}
              </button>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-[color:var(--gold)]/30" />
          <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-[color:var(--gold)]/30" />
        </div>
      </div>
    </section>
  );
}
