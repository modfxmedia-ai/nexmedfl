import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TEAM_INTRO, TEAM_MEMBERS, DOCTOR_TIMELINE, CARE_APPROACH } from "@/lib/team-content";

const doctor = TEAM_MEMBERS[0];

/**
 * /meet-our-team/ page body, hero intro, Dr. Herbert's full profile,
 * an "Our Approach to Care" pillars section, an education/training
 * timeline, and a closing appointment CTA.
 */
export function TeamPageBody() {
  return (
    <main>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(119,189,197,0.1) 0%, transparent 55%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-brand-cyan/15 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-deep/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(1,36,83,0.35)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
                {TEAM_INTRO.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {TEAM_INTRO.heading}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {TEAM_INTRO.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Doctor profile */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 rounded-[28px] border border-surface-border bg-white p-6 shadow-[0_28px_64px_-38px_rgba(1,36,83,0.3)] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            {doctor.image ? (
              <span className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl ring-2 ring-brand-cyan/30 lg:max-w-none">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(min-width: 1024px) 380px, 280px"
                  className="object-cover"
                  priority
                />
              </span>
            ) : null}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {doctor.name}
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-brand-deep">
                {doctor.title}
                {doctor.credentials ? `, ${doctor.credentials}` : ""}
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-ink-soft">{doctor.bio}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/appointment-request/"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_36px_-10px_rgba(1,36,83,0.55)] transition-all hover:scale-[1.03]"
                >
                  Book with {doctor.name.split(",")[0]}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Our Approach to Care */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
                Our Philosophy
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Our Approach to Care
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARE_APPROACH.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training timeline */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              Credentials
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Education &amp; Training
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6">
          {DOCTOR_TIMELINE.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex gap-5 rounded-2xl border border-surface-border bg-white p-6">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  {i < DOCTOR_TIMELINE.length - 1 ? (
                    <span className="mt-1 w-px flex-1 bg-surface-border" />
                  ) : null}
                </div>
                <div className="pb-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-deep">
                    {step.year}
                  </p>
                  <h3 className="mt-1 text-[15px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Meet Our Team in Person
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Schedule a visit and experience the personalized, hometown care
            our Ormond Beach, FL patients count on.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/appointment-request/"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-all hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
