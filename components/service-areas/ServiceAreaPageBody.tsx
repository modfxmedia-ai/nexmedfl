import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BUSINESS } from "@/lib/site-config";
import {
  buildCityTopicDetail,
  buildCityTopicIntro,
  getCityFaqs,
  getNearbyCities,
  getOtherTopics,
  type ServiceAreaCity,
  type ServiceAreaTopic,
} from "@/lib/service-area-content";

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-brand-cyan" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4L8.5 12l6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-7.5-11A7.5 7.5 0 0 1 19.5 10c0 6.4-7.5 11-7.5 11Z" />
      <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L8 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Shared body for every /service-areas/[city]/[topic]/ combination page.
 * The topic content (summary/benefits/faqs) is written ONCE per topic and
 * reused across cities; the genuinely city-specific content (intro
 * sentence, drive-time/route facts, local note, city FAQs, nearby-city
 * links) is what differentiates each page from its siblings.
 */
export function ServiceAreaPageBody({
  city,
  topic,
}: {
  city: ServiceAreaCity;
  topic: ServiceAreaTopic;
}) {
  const intro = buildCityTopicIntro(city, topic);
  const detail = buildCityTopicDetail(city, topic);
  const cityFaqs = getCityFaqs(city, topic);
  const nearbyCities = getNearbyCities(city.slug, 4);
  const otherTopics = getOtherTopics(topic.slug, 6);
  const directionsHref = `https://www.google.com/maps/dir/${encodeURIComponent(
    `${city.name}, FL`,
  )}/${encodeURIComponent(BUSINESS.addressDisplay)}`;

  return (
    <main>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-soft">
          <li><Link href="/" className="hover:text-brand-deep">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/service-areas/" className="hover:text-brand-deep">Areas We Serve</Link></li>
          <li aria-hidden>/</li>
          <li><Link href={`/service-areas/${city.slug}/`} className="hover:text-brand-deep">{city.name}</Link></li>
          <li aria-hidden>/</li>
          <li className="font-medium text-ink">{topic.label}</li>
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
              Serving {city.name}, FL
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {topic.label} for {city.name} Patients
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-ink-soft">{intro}</p>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-ink-soft">{detail}</p>
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
                href={BUSINESS.telephoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-6 py-3.5 text-[14px] font-semibold text-ink transition-all hover:border-brand-cyan/50 hover:bg-surface hover:text-brand-deep"
              >
                Call {BUSINESS.telephone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Getting here from [city] */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 rounded-2xl border border-surface-border bg-white p-8 shadow-[0_24px_60px_-30px_rgba(1,36,83,0.25)] sm:p-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="text-xl font-bold text-ink sm:text-2xl">
                  Getting to Us from {city.name}
                </h2>
                <p className="mt-3 text-[14px] leading-[1.75] text-ink-soft">{city.localNote}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <PinIcon />
                    <span className="text-[14px] text-ink-soft">
                      <span className="font-semibold text-ink">{BUSINESS.addressDisplay}</span>
                      {city.driveMiles > 0 && (
                        <> &mdash; approximately {city.driveMiles} miles {city.direction} of {city.name}, about a {city.driveMinutes}-minute drive via {city.route} (traffic may vary).</>
                      )}
                    </span>
                  </li>
                </ul>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep hover:text-brand-cta-hover"
                >
                  Get directions from {city.name} <ArrowIcon />
                </a>
              </div>
              <div className="flex flex-col justify-center gap-3 rounded-xl bg-surface p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                  Quick Facts
                </p>
                <p className="text-[14px] text-ink-soft">
                  <span className="font-semibold text-ink">County:</span> {city.county}
                </p>
                <p className="text-[14px] text-ink-soft">
                  <span className="font-semibold text-ink">Approx. distance:</span>{" "}
                  {city.driveMiles === 0 ? "In town" : `${city.driveMiles} miles`}
                </p>
                <p className="text-[14px] text-ink-soft">
                  <span className="font-semibold text-ink">Approx. drive time:</span>{" "}
                  {city.driveMinutes === 0 ? "N/A" : `${city.driveMinutes} minutes`}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Topic summary + benefits */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            About {topic.label}
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-ink-soft">
            {topic.summary}
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {topic.benefits.map((benefit) => (
            <Reveal key={benefit}>
              <div className="flex items-start gap-3 rounded-xl border border-surface-border bg-white p-5">
                <CheckIcon />
                <span className="text-[14px] font-medium text-ink">{benefit}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            href={topic.canonicalHref}
            className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep hover:text-brand-cta-hover"
          >
            Learn more about {topic.label} <ArrowIcon />
          </Link>
        </Reveal>

        {topic.keyConditions.length > 0 && (
          <Reveal delay={0.15} className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep">
              Conditions We Help With
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {topic.keyConditions.map((condition) => (
                <span
                  key={condition}
                  className="rounded-full border border-surface-border bg-white px-4 py-2 text-[13px] font-medium text-ink"
                >
                  {condition}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* Long-form supporting content (What to Expect, sub-conditions, etc.) */}
      {topic.richContent.length > 0 && (
        <section className="bg-bg-tinted">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {topic.kind === "condition"
                  ? `${topic.label} We Treat for ${city.name} Patients`
                  : `What to Expect from ${topic.label} in ${city.name}`}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {topic.richContent.map((block) => (
                <Reveal key={block.heading}>
                  <div className="h-full rounded-xl border border-surface-border bg-white p-6">
                    <h3 className="text-base font-bold text-ink">{block.heading}</h3>
                    <p className="mt-2.5 text-[14px] leading-[1.75] text-ink-soft">{block.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Common Questions from {city.name} Patients
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 rounded-2xl border border-surface-border bg-white px-6 sm:px-8">
            <FaqAccordion items={[...cityFaqs, ...topic.faqs]} />
          </Reveal>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Other Areas We Serve Near {city.name}
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nearbyCities.map((nearby) => (
            <Reveal key={nearby.slug}>
              <Link
                href={`/service-areas/${nearby.slug}/${topic.slug}/`}
                className="group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-[0_16px_40px_-20px_rgba(1,36,83,0.3)]"
              >
                <span className="font-semibold text-ink">{nearby.name}, FL</span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-deep">
                  {topic.label} <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other topics in this city */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              More Ways We Help {city.name} Patients
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherTopics.map((other) => (
              <Reveal key={other.slug}>
                <Link
                  href={`/service-areas/${city.slug}/${other.slug}/`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-[0_16px_40px_-20px_rgba(1,36,83,0.3)]"
                >
                  <span className="font-semibold text-ink">{other.shortLabel}</span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-deep">
                    View details <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href={`/service-areas/${city.slug}/`}
            className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep hover:text-brand-cta-hover"
          >
            View all care in {city.name} <ArrowIcon />
          </Link>
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
