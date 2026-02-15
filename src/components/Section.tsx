import type { ReactNode } from "react";
import Reveal from "./Reveal";

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
  const editorialLabel = eyebrow ?? title;

  return (
    <section id={id} className="section-shell">
      <Reveal>
        <div className="container-shell flex w-full flex-col gap-8">
          <div className={`flex flex-col gap-4 ${alignClasses}`}>
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[color:var(--accent)]/85">
              <span className="reveal-line">{`— ${editorialLabel}`}</span>
            </span>
            <HeadingTag className="section-title type-h2 text-[color:var(--text)]">
              <span className="reveal-line">{title}</span>
            </HeadingTag>
            {subtitle ? (
              <p className="section-copy type-body text-measure text-[color:var(--text-soft)]">{subtitle}</p>
            ) : null}
          </div>
          {children}
        </div>
      </Reveal>
    </section>
  );
}
