import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BUSINESS } from "@/lib/site-config";
import { SERVICE_AREA_CITIES } from "@/lib/service-area-content";

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L8 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

/**
 * Body for /service-areas/, the "Areas We Serve" hub linking to each
 * city's overview page. Deliberately lists the real, geographically
 * sensible service area of a single-location Ormond Beach clinic
 * (roughly a 35-minute radius) rather than an inflated national list.
 */
export function AreasWeServeHub() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(119,189,197,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              Areas We Serve
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Chiropractic & Pain Relief Care Across Volusia &amp; Flagler Counties
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-ink-soft">
              Ormond Spine &amp; Nerve Center is located at {BUSINESS.addressDisplay} and
              welcomes patients from Ormond Beach and the surrounding Volusia and Flagler
              County communities below, most within a comfortable 10 to 35 minute drive.
              Don&apos;t see your town listed? Call us, we may still be able to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREA_CITIES.map((city) => (
            <Reveal key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}/`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-surface-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_24px_60px_-30px_rgba(1,36,83,0.35)]"
              >
                <div className="flex items-start gap-3">
                  <PinIcon />
                  <div>
                    <h2 className="text-base font-semibold text-ink">{city.name}, FL</h2>
                    <p className="mt-1 text-[13px] text-ink-soft">{city.county}</p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] text-ink-soft">
                  {city.driveMiles === 0
                    ? "Home of our Ormond Beach office"
                    : `~${city.driveMiles} mi / ${city.driveMinutes} min ${city.direction}`}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-deep">
                  View care in {city.name} <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-brand-deep to-ink px-8 py-14 text-center sm:px-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not Sure If We Serve Your Area?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-white/70">
              Give us a call, our team can confirm whether Ormond Spine &amp; Nerve Center
              is a good fit for your commute and help you schedule your first visit.
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
