import Link from "next/link";
import { BUSINESS } from "@/lib/site-config";

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceEquipment {
  heading: string;
  description: string;
  features: string[];
}

export interface ServicePageBodyProps {
  /** Mega-menu category this page belongs to, shown as a small eyebrow label. */
  eyebrow: string;
  /** H1 */
  heading: string;
  /** Hero paragraph. */
  intro: string;
  benefits: ServiceBenefit[];
  equipment: ServiceEquipment;
  /** Conditions Treated list — plain labels, optionally cross-linked from /conditions-we-treat/. */
  conditions: string[];
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4L8.5 12l6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-6 w-6 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6Z" />
    </svg>
  );
}

/**
 * Shared body layout (hero / benefits / equipment callout / conditions
 * treated / closing CTA) reused across every new equipment- and
 * program-driven service page, styled with the site's brand tokens.
 */
export function ServicePageBody({
  eyebrow,
  heading,
  intro,
  benefits,
  equipment,
  conditions,
}: ServicePageBodyProps) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            {heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {intro}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/appointment-request/"
              className="rounded-full bg-brand-deep px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cta-hover active:bg-brand-cta-active"
            >
              Book Appointment
            </Link>
            <a
              href={BUSINESS.telephoneHref}
              className="rounded-full border border-surface-border bg-white px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Call {BUSINESS.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-ink">Why Patients Choose This Treatment</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-surface-border bg-white p-6"
            >
              <CheckIcon />
              <h3 className="mt-3 text-base font-semibold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment / technology callout */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
              <BoltIcon />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {equipment.heading}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
                {equipment.description}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {equipment.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold text-ink">Conditions Treated</h2>
          <Link
            href="/conditions-we-treat/"
            className="text-sm font-semibold text-brand hover:underline"
          >
            View all conditions we treat →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {conditions.map((condition) => (
            <span
              key={condition}
              className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {condition}
            </span>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-surface-border bg-bg-tinted">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink">
            Ready to get started?
          </h2>
          <p className="max-w-xl text-sm text-ink-soft">
            Schedule a consultation with the NexMed team in Ormond Beach, FL
            and find out if this treatment is right for you.
          </p>
          <Link
            href="/appointment-request/"
            className="rounded-full bg-brand-deep px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cta-hover active:bg-brand-cta-active"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
