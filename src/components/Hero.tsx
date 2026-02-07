type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  dir?: "ltr" | "rtl";
};

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  dir = "ltr",
}: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      dir={dir}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)] via-[color:var(--accent)] to-[color:var(--ink)]" />
      
      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold-strong)_0%,transparent_60%)] opacity-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        
        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg md:text-xl">
          {subheadline}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onPrimaryClick}
            className="group relative overflow-hidden rounded-sm bg-[color:var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--gold-strong)] hover:shadow-[0_0_30px_rgba(211,181,111,0.3)]"
          >
            <span className="relative z-10">{primaryCta}</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          <button
            onClick={onSecondaryClick}
            className="group rounded-sm border border-[color:var(--gold)]/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--gold)] transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
          >
            {secondaryCta}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[color:var(--muted)]">
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-[color:var(--gold)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
