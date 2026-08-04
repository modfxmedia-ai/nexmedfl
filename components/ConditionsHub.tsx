import Link from "next/link";

export interface ConditionLink {
  label: string;
  href: string;
}

export interface ConditionCategory {
  label: string;
  items: ConditionLink[];
}

/**
 * /conditions-we-treat/ hub page body — organizes every condition NexMed
 * treats into sub-categories, each condition linking to its relevant
 * service page.
 */
export function ConditionsHub({
  categories,
}: {
  categories: ConditionCategory[];
}) {
  return (
    <main>
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Conditions We Treat
          </p>
          <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Find the Right Treatment for Your Condition
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Browse conditions by category to find the NexMed service best
            suited to help you feel better, move better, and live better.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="rounded-2xl border border-surface-border bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-ink">
                {category.label}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-bg-tinted">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink">
            Not sure where to start?
          </h2>
          <p className="max-w-xl text-sm text-ink-soft">
            Request an appointment and our team will help match you with the
            right treatment plan for your condition.
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
