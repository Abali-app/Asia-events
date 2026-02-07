"use client";

import { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

type TestimonialsCarouselProps = {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
  dir?: "ltr" | "rtl";
};

export default function TestimonialsCarousel({
  eyebrow,
  title,
  testimonials,
  dir = "ltr",
}: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      const scrollDirection = dir === "rtl" 
        ? (direction === "left" ? scrollAmount : -scrollAmount)
        : (direction === "left" ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollBy({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[85%] snap-center sm:min-w-[70%] lg:min-w-[45%]"
              >
                <div className="group relative h-full rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-all duration-300 hover:border-[color:var(--gold)]/40 hover:bg-white/[0.05] sm:p-10">
                  {/* Quote Icon */}
                  <div className="mb-6 text-[color:var(--gold)]/30">
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-lg leading-relaxed text-white sm:text-xl">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-6">
                    <p className="mb-1 font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[color:var(--gold)] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-white/20 p-3 text-white transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={dir === "rtl" ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-white/20 p-3 text-white transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={dir === "rtl" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
