"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type PortfolioItem = {
  title: string;
  type: string;
};

type PortfolioGridProps = {
  filters: ReadonlyArray<{ label: string; value: string }>;
  items: ReadonlyArray<PortfolioItem>;
};

export default function PortfolioGrid({ filters, items }: PortfolioGridProps) {
  const [active, setActive] = useState(filters[0]);

  const filteredItems = useMemo(() => {
    if (active.value === "All") return items;
    return items.filter((item) => item.type === active.value);
  }, [active, filters, items]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              active.value === filter.value
                ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-black"
                : "border-white/20 text-[color:var(--muted)] hover:border-[color:var(--gold)] hover:text-white"
            }`}
            aria-pressed={active.value === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`/portfolio/portfolio-${(index % 6) + 1}.svg`}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{item.type}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
