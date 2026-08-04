import Image from "next/image";
import Link from "next/link";
import { HERO, HOW_IT_WORKS, HOW_IT_WORKS_STEPS } from "@/lib/home-content";

const STEP_ICON_PATHS = [
  // Step 1: calendar with a checkmark — booking
  "M8 2v3M16 2v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM9 14l2 2 4-4",
  // Step 2: stethoscope-ish — consultation
  "M6 3v4a4 4 0 0 0 8 0V3M10 15a4 4 0 0 0 8 0v-3M18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  // Step 3: document with lines — plan
  "M6 3h9l3 3v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 12h6M9 16h6M9 8h3",
  // Step 4: rising path — transformation
  "M5 15l4-4 3 3 6-6M13 8h6v6",
];

function StepIcon({ index }: { index: number }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={STEP_ICON_PATHS[index] ?? ""} />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Background image */}
      <Image
        src={HERO.backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />

      {/* Multi-layer overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,14,22,0.85) 0%, rgba(27,30,36,0.75) 40%, rgba(11,14,22,0.9) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(34,199,240,0.22) 0%, rgba(34,199,240,0) 60%)",
        }}
      />
      {/* Faint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(#22c7f0 1px, transparent 1px), linear-gradient(90deg, #22c7f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-cyan/15 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-16 h-[360px] w-[360px] rounded-full bg-brand-deep/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/[0.06] px-3 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
              {HOW_IT_WORKS.eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {HOW_IT_WORKS.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            {HOW_IT_WORKS.intro}
          </p>
        </div>

        {/* Horizontal 4-step flow */}
        <div className="relative mt-14 lg:mt-20">
          {/* Connecting dashed line — behind cards, desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-[62px] hidden lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(34,199,240,0.5) 50%, transparent 50%)",
              backgroundSize: "12px 1px",
              backgroundRepeat: "repeat-x",
              height: "1px",
            }}
          />

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-brand-cyan/30 hover:bg-white/[0.07] lg:p-7">
                  {/* Huge translucent display number in background */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-0 select-none bg-gradient-to-br from-white/10 to-white/[0.03] bg-clip-text font-bold leading-none text-transparent transition-all group-hover:from-brand-cyan/25 group-hover:to-brand-deep/15"
                    style={{
                      fontSize: "112px",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon + step label */}
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/25 to-brand-deep/25 text-brand-cyan ring-1 ring-inset ring-white/10">
                      <StepIcon index={i} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan/80">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 text-[19px] font-semibold leading-snug text-white lg:text-[20px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 flex-1 text-[13.5px] leading-[1.7] text-white/65">
                    {step.description}
                  </p>

                  {/* Bottom gradient divider */}
                  <span
                    aria-hidden
                    className="relative mt-5 block h-px w-full bg-gradient-to-r from-brand-cyan/40 via-brand-deep/20 to-transparent"
                  />
                </article>

                {/* Connector dot on the dashed line (desktop) */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-[62px] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan ring-4 ring-ink lg:block"
                  style={{ boxShadow: "0 0 20px rgba(34,199,240,0.6)" }}
                />
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center lg:mt-20">
          <p className="text-sm text-white/60">Ready to take the first step?</p>
          <Link
            href={HOW_IT_WORKS.ctaHref}
            className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-8 py-3.5 text-sm font-semibold text-white shadow-[0_16px_44px_-10px_rgba(34,199,240,0.55)] transition-all hover:scale-[1.03]"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
            />
            <span className="relative">{HOW_IT_WORKS.ctaLabel}</span>
            <svg
              className="relative h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6h8m0 0L6 2m4 4L6 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
