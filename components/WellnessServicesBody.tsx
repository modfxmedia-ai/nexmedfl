import Link from "next/link";

export interface WellnessOffering {
  title: string;
  description: string;
  href: string;
}

export interface WellnessGroup {
  label: string;
  offerings: WellnessOffering[];
}

/**
 * /wellness-services/ page body — a lifestyle-focused overview tying
 * together NexMed's existing wellness/hormone-health services with the
 * newer recovery therapies, without duplicating any single service page's
 * content.
 */
export function WellnessServicesBody({ groups }: { groups: WellnessGroup[] }) {
  return (
    <main>
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Wellness Services
          </p>
          <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Whole-Person Wellness Care in Ormond Beach, FL
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            NexMed brings together hormone health, weight management, and
            advanced recovery therapies into one personalized wellness plan
            built around how you want to feel.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/appointment-request/"
              className="rounded-full bg-brand-deep px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cta-hover active:bg-brand-cta-active"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.label}>
              <h2 className="text-2xl font-semibold text-ink">
                {group.label}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.offerings.map((offering) => (
                  <Link
                    key={offering.href}
                    href={offering.href}
                    className="group rounded-2xl border border-surface-border bg-white p-6 transition-colors hover:border-brand"
                  >
                    <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-brand">
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {offering.description}
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold text-brand">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-bg-tinted">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink">
            Ready to build your wellness plan?
          </h2>
          <p className="max-w-xl text-sm text-ink-soft">
            Schedule a consultation and our team will help you choose the
            right combination of services for your goals.
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
