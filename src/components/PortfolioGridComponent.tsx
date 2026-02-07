type PortfolioItem = {
  title: string;
  type: string;
  image?: string;
};

type PortfolioGridComponentProps = {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  dir?: "ltr" | "rtl";
};

export default function PortfolioGridComponent({
  title,
  subtitle,
  items,
  dir = "ltr",
}: PortfolioGridComponentProps) {
  return (
    <section className="relative py-20 sm:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Masonry Grid using CSS Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px]">
          {items.map((item, index) => {
            // Create varied heights for masonry effect
            const heights = ["row-span-1", "row-span-2", "row-span-1", "row-span-2", "row-span-1", "row-span-2"];
            const heightClass = heights[index % heights.length];

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-sm ${heightClass}`}
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)] via-[color:var(--ink-soft)] to-[color:var(--ink)] transition-transform duration-700 group-hover:scale-110" />
                
                {/* Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="mb-2 inline-block rounded-full border border-[color:var(--gold)]/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* View Project Link */}
                  <div className="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--gold)]">
                      View Project
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={dir === "rtl" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[color:var(--gold)]/20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
