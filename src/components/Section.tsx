import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function Section({ id, eyebrow, title, subtitle, align = "left", children }: SectionProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-3 ${alignClasses}`}>
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="section-title text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-3xl text-base text-[color:var(--text-soft)]">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
