type Step = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  eyebrow: string;
  title: string;
  steps: Step[];
  dir?: "ltr" | "rtl";
};

export default function ProcessTimeline({
  eyebrow,
  title,
  steps,
  dir = "ltr",
}: ProcessTimelineProps) {
  return (
    <section className="relative py-20 sm:py-28" dir={dir}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)]/50 to-transparent sm:block lg:left-1/2 lg:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-end" : "lg:text-start"}`}>
                    <div
                      className={`group inline-block rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-all duration-300 hover:border-[color:var(--gold)]/40 hover:bg-white/[0.05] ${
                        dir === "rtl" 
                          ? (isEven ? "lg:ms-auto" : "lg:me-auto")
                          : (isEven ? "lg:ml-auto" : "lg:mr-auto")
                      }`}
                    >
                      <h3 className="mb-3 text-2xl font-medium tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                        {step.description}
                      </p>
                      
                      {/* Hover Accent */}
                      <div className={`absolute bottom-0 h-[2px] w-0 bg-gradient-to-r from-[color:var(--gold)] to-transparent transition-all duration-500 group-hover:w-full ${
                        isEven ? "left-0" : "right-0"
                      }`} />
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-0 top-0 sm:relative sm:left-auto sm:top-auto lg:flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--ink)] text-2xl font-light text-[color:var(--gold)] shadow-[0_0_20px_rgba(211,181,111,0.2)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
