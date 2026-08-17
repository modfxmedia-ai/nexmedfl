import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SERVICES_GRID } from "@/lib/home-content";
import { getServiceContent } from "@/lib/service-content";



function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L8 3m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpineGlyph() {
  return (
    <svg
      className="h-10 w-10 text-white/70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path
        d="M12 2v20M8 5h8M7 9h10M8 13h8M7 17h10M9 21h6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * /services/ hub page body, SEO intro overview followed by a card grid
 * linking to each of the 8 individual service pages. Reuses the same
 * SERVICES_GRID data that powers the homepage services showcase, plus
 * each service's hero photo from SERVICE_CONTENT for visual consistency.
 */
export function ServicesHub() {
  return (
    <main>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 65% 0%, rgba(119,189,197,0.16) 0%, rgba(23,132,152,0.05) 40%, rgba(255,255,255,0) 80%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              Our Services
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Medical &amp; Wellness Services in Ormond Beach, FL
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Ormond Spine &amp; Nerve Center offers a full range of
              non-surgical treatments for patients throughout Ormond Beach
              and Volusia County, from hands-on chiropractic care and
              spinal or knee decompression to advanced neuropathy,
              shockwave, laser, and compression therapy. Every plan starts
              with a thorough evaluation so your care is built around your
              specific condition, not a one-size-fits-all protocol.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_GRID.map((service, i) => {
            const content = getServiceContent(service.href);
            return (
              <Reveal key={service.href} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-[0_20px_50px_-32px_rgba(1,36,83,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(1,36,83,0.45)]"
                >
                  <div className="relative h-40 w-full shrink-0 overflow-hidden bg-gradient-to-br from-ink to-brand-deep">
                    {content.heroImage ? (
                      <Image
                        src={content.heroImage}
                        alt={service.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <SpineGlyph />
                      </div>
                    )}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-deep backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-6">
                    <h2 className="text-[19px] font-semibold leading-snug text-ink">
                      {service.name}
                    </h2>
                    <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                      {content.intro}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
                      Learn more
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-surface-border bg-bg-tinted">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(119,189,197,0.14) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
              Not sure which treatment is right for you?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-xl text-sm text-ink-soft sm:text-base">
              Request an appointment and our Ormond Beach team will help
              match you with the right service for your condition and
              goals.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href="/appointment-request/"
              className="mt-1 inline-flex items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(1,36,83,0.55)] transition-transform hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
