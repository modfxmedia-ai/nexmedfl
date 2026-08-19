import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BUSINESS } from "@/lib/site-config";
import {
  SERVICE_AREA_TOPICS,
  getCityFaqs,
  getNearbyCities,
  type ServiceAreaCity,
} from "@/lib/service-area-content";

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L8 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Shared body for every /service-areas/[city]/ overview page: a general
 * landing page for that city linking out to every service/condition
 * combination page plus nearby-city cross-links.
 */
export function CityOverviewPageBody({ city }: { city: ServiceAreaCity }) {
  const services = SERVICE_AREA_TOPICS.filter((t) => t.kind === "service");
  const conditions = SERVICE_AREA_TOPICS.filter((t) => t.kind === "condition");
  const genericFaqs = [
    ...getCityFaqs(city, SERVICE_AREA_TOPICS[0]),
    {
      question: `What services and conditions do you treat for ${city.name} patients?`,
      answer: `We offer ${services.length} non-surgical services, including ${services
        .slice(0, 3)
        .map((s) => s.shortLabel)
        .join(", ")}, and treat ${conditions.length} condition categories such as ${conditions
        .slice(0, 3)
        .map((c) => c.shortLabel)
        .join(", ")}, for patients throughout ${city.name} and ${city.county}.`,
    },
  ];
  const nearbyCities = getNearbyCities(city.slug, 4);
  const directionsHref = `https://www.google.com/maps/dir/${encodeURIComponent(
    `${city.name}, FL`,
  )}/${encodeURIComponent(BUSINESS.addressDisplay)}`;

  return (
    <main>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-soft">
          <li><Link href="/" className="hover:text-brand-deep">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/service-areas/" className="hover:text-brand-deep">Areas We Serve</Link></li>
          <li aria-hidden>/</li>
          <li className="font-medium text-ink">{city.name}</li>
        </ol>
      </nav>

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
        <div className="relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              Areas We Serve
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Chiropractic & Pain Relief Care for {city.name}, FL
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-ink-soft">
              {city.localNote}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-ink-soft">
              Our team offers {services.length} non-surgical services and treats {conditions.length} condition
              categories for patients throughout {city.name} and the greater {city.county} area, from same-day car
              accident evaluations to ongoing chiropractic and joint care.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="/appointment-request/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-shadow hover:shadow-[0_22px_52px_-8px_rgba(119,189,197,0.55)]"
              >
                Book Appointment
              </Link>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-6 py-3.5 text-[14px] font-semibold text-ink transition-all hover:border-brand-cyan/50 hover:bg-surface hover:text-brand-deep"
              >
                Get Directions from {city.name}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services in this city */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Services for {city.name} Patients
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((topic) => (
            <Reveal key={topic.slug}>
              <Link
                href={`/service-areas/${city.slug}/${topic.slug}/`}
                className="group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-[0_16px_40px_-20px_rgba(1,36,83,0.3)]"
              >
                <div>
                  <span className="font-semibold text-ink">{topic.label}</span>
                  <p className="mt-2 text-[13px] leading-[1.6] text-ink-soft">{topic.summary}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-deep">
                  View details for {city.name} <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Conditions in this city */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Conditions We Treat for {city.name} Patients
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((topic) => (
              <Reveal key={topic.slug}>
                <Link
                  href={`/service-areas/${city.slug}/${topic.slug}/`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-[0_16px_40px_-20px_rgba(1,36,83,0.3)]"
                >
                  <div>
                    <span className="font-semibold text-ink">{topic.label}</span>
                    <p className="mt-2 text-[13px] leading-[1.6] text-ink-soft">{topic.summary}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-deep">
                    View details for {city.name} <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 rounded-2xl border border-surface-border bg-white px-6 sm:px-8">
          <FaqAccordion items={genericFaqs} />
        </Reveal>
      </section>

      {/* Nearby areas */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Other Areas We Serve Near {city.name}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyCities.map((nearby) => (
              <Reveal key={nearby.slug}>
                <Link
                  href={`/service-areas/${nearby.slug}/`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-[0_16px_40px_-20px_rgba(1,36,83,0.3)]"
                >
                  <span className="font-semibold text-ink">{nearby.name}, FL</span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-deep">
                    View care <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-brand-deep to-ink px-8 py-14 text-center sm:px-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Get Started, {city.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-white/70">
              Request an appointment at Ormond Spine & Nerve Center and take the first step toward lasting relief.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/appointment-request/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-brand-deep shadow-sm transition-transform hover:scale-[1.03]"
              >
                Book Appointment
              </Link>
              <a
                href={BUSINESS.telephoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call {BUSINESS.telephone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
