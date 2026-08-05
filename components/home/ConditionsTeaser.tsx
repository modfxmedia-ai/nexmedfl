import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CONDITION_CATEGORIES } from "@/lib/site-config";

// Solid (filled) icon per condition category — bolder and more legible
// against the dark background than the outline icons used in the header
// mega-menu.
const CONDITION_ICONS: Record<string, string> = {
  Spine:
    "M9 2h6v3H9V2Zm-1 4.5h8v3H8v-3ZM9 11h6v3H9v-3Zm-1 4.5h8v3H8v-3ZM9 20h6v2H9v-2Z",
  "Knee & Joint":
    "M4 4a3 3 0 0 1 4.2 4.2l7.6 7.6A3 3 0 1 1 20 20a3 3 0 0 1-4.2-4.2L8.2 8.2A3 3 0 0 1 4 4Z",
  "Neuropathy & Nerve": "M13 2 3 14h6l-2 8 11-14h-6l1-6Z",
  "Joint & Extremity":
    "M8 2a1.5 1.5 0 0 1 3 0v7h1V3.5a1.5 1.5 0 0 1 3 0V10h1V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a7 7 0 0 1-6.32-4.03L2.4 12.8a1.4 1.4 0 0 1 2.14-1.8L6 13V2Z",
  "Muscle & Soft Tissue":
    "M4 14c0-4.4 2.2-8.7 6.6-9.8 3.3-.9 6.6.6 7.7 3.3.7 1.8.3 3.4-.6 4.7A5.4 5.4 0 0 1 20 17v1a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z",
  "Circulatory & Recovery":
    "M12 21s-7-6-9.3-10.1C.8 7.7 2 4 5.6 4c2 0 3.4 1.1 4.4 2.5C11 5.1 12.4 4 14.4 4 18 4 19.2 7.7 21.3 10.9 19 15 12 21 12 21Z",
  Headaches:
    "M12 2a8 8 0 0 0-8 8c0 3 1.4 5.2 3 6.6V19a2 2 0 0 0 2 2h1.25v-2.25h1.5V21H13a2 2 0 0 0 2-2v-1.4c1.8-1.6 3-3.8 3-6.6a8 8 0 0 0-6-7.75V2.3A8.1 8.1 0 0 0 12 2Z",
  Wellness:
    "M12 2c-4 4-4 9-4 9s5 0 9-4c1-3-2-6-5-5Zm-4 20c0-6 4-10 10-11-1 6-5 10-11 11Z",
};

function ConditionIcon({ label }: { label: string }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={CONDITION_ICONS[label] ?? ""} />
    </svg>
  );
}

export function ConditionsTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background photo + dark brand overlay */}
      <Image
        src="/images/chiropractic-care.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/92 to-brand-deep/85"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-cyan/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-deep/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.5)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                Conditions We Treat
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Relief for a Wide Range of Conditions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              From spine and knee pain to nerve, joint, muscle, and circulatory
              conditions, our team builds a personalized plan around what
              you&rsquo;re experiencing.
            </p>
          </Reveal>
        </div>

        {/* Category grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {CONDITION_CATEGORIES.map((category, i) => (
            <Reveal key={category.label} delay={0.06 + (i % 4) * 0.06} y={20}>
              <Link
                href={category.href ?? "/conditions-we-treat/"}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-brand-cyan/50 hover:bg-white/[0.1] hover:shadow-[0_28px_64px_-24px_rgba(34,199,240,0.35)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-deep/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-cyan/10 group-hover:to-brand-deep/10 group-hover:opacity-100"
                />
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white shadow-[0_12px_30px_-10px_rgba(20,121,232,0.6)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <ConditionIcon label={category.label} />
                </span>
                <h3 className="relative mt-4 text-lg font-semibold leading-snug text-white">
                  {category.label}
                </h3>
                <p className="relative mt-2.5 text-[13.5px] leading-[1.7] text-white/65">
                  {category.items.length} condition
                  {category.items.length === 1 ? "" : "s"} we treat, including{" "}
                  {category.items[0]?.label.toLowerCase()}.
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6h8m0 0L6 2m4 4L6 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2} className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="/conditions-we-treat/"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(20,121,232,0.55)] transition-all hover:scale-[1.03]"
          >
            See all conditions we treat
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
