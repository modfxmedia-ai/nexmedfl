import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LeadFormEmbed } from "@/components/LeadFormEmbed";
import { BUSINESS, SERVICE_CATEGORIES } from "@/lib/site-config";
import {
  APPOINTMENT_PAGE_CONTENT,
  APPOINTMENT_EXPECT_STEPS,
  APPOINTMENT_PREP_CHECKLIST,
} from "@/lib/contact-content";

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4.5 5L19 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-3-6-4 3Z" />
    </svg>
  );
}

// Flatten the header mega-menu's service catalogue into a single list of
// { label, href } chips for the "Conditions & Services We Treat" section.
const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((category) => category.items);

/**
 * /appointment-request/ page body, conversion-focused: what to expect at
 * a first visit, how to prepare, conditions/services covered, and the
 * LeadConnector booking form.
 */
export function AppointmentRequestPageBody() {
  const content = APPOINTMENT_PAGE_CONTENT;

  return (
    <main>
      {/* Hero */}
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
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(1,36,83,0.35)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
              {content.eyebrow}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {content.heading}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {content.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#book"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-all hover:scale-[1.03]"
            >
              Request Your Appointment
            </a>
            <Link
              href={BUSINESS.telephoneHref}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40"
            >
              <PhoneIcon />
              {BUSINESS.telephone}
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
            First Visit
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            What to Expect at Your First Visit
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {APPOINTMENT_EXPECT_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-surface-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_24px_60px_-38px_rgba(1,36,83,0.3)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How to prepare + conditions we treat */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="h-full rounded-2xl border border-surface-border bg-white p-7">
                <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  How to Prepare for Your Appointment
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {APPOINTMENT_PREP_CHECKLIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.7] text-ink-soft">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-surface-border bg-white p-7">
                <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Conditions & Services We Treat
                </h2>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                  Not sure which service fits your symptoms? Request your
                  appointment and our team will help point you in the right
                  direction.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {ALL_SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-full border border-surface-border bg-bg-tinted px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-brand-cyan/40 hover:text-brand-deep"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits + form */}
      <section id="book" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <ul className="space-y-5">
              {content.benefits.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 0.08}>
                  <li className="flex gap-3.5 rounded-2xl border border-surface-border bg-white p-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                      <CheckIcon />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.7] text-ink-soft">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-[0_24px_60px_-38px_rgba(1,36,83,0.3)] sm:p-6">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {content.formHeading}
              </h2>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                {content.formIntro}
              </p>
              <div className="mt-6">
                <LeadFormEmbed title={content.formHeading} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
