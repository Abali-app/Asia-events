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

  return (
    <section id={id} className="section-shell">
      <Reveal>
        <div className="container-shell flex w-full flex-col gap-6">
          <div className={`flex flex-col gap-3 ${alignClasses}`}>
            {eyebrow ? (
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
                <span className="reveal-line">{eyebrow}</span>
              </span>
            ) : null}
            <HeadingTag className="section-title type-h2 text-[color:var(--text)]">
              <span className="reveal-line">{title}</span>
            </HeadingTag>
            {subtitle ? (
              <p className="type-body text-measure text-[color:var(--text-soft)]">{subtitle}</p>
            ) : null}
          </div>
          {children}
        </div>
      </Reveal>
    </section>
  );
}
