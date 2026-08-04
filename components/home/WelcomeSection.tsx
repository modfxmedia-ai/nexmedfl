import { WELCOME, WELCOME_PROGRAMS } from "@/lib/home-content";

export function WelcomeSection() {
  return (
    <section className="bg-bg-tinted">
      <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
            {WELCOME.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {WELCOME.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            {WELCOME.intro}
          </p>
        </div>

        {/* Specialty programs grid */}
        <div className="mt-16 lg:mt-20">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
            {WELCOME.programsLeadIn}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {WELCOME_PROGRAMS.map((program, i) => (
              <article
                key={program.name}
                className="group relative flex flex-col rounded-2xl border border-surface-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_24px_60px_-30px_rgba(20,121,232,0.35)] lg:p-7"
              >
                <span className="text-sm font-bold text-brand-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="mt-2 h-px w-8 bg-gradient-to-r from-brand-cyan to-brand-deep transition-all group-hover:w-12"
                />
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                  {program.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing paragraphs */}
        <div className="mx-auto mt-16 max-w-3xl text-center lg:mt-20">
          {WELCOME.closing.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-relaxed text-ink-soft first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
