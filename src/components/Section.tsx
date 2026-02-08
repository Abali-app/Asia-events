import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  children?: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  children,
}: SectionProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-start items-start";
  const HeadingTag = as;

  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-3 ${alignClasses}`}>
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              {eyebrow}
            </span>
          ) : null}
          <HeadingTag className="section-title type-h2 text-[color:var(--text)]">
            {title}
          </HeadingTag>
          {subtitle ? (
            <p className="type-body text-measure text-[color:var(--text-soft)]">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
