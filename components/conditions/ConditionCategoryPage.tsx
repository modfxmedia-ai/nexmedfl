import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ConditionJumpNav } from "@/components/conditions/ConditionJumpNav";
import type { ConditionPageContent } from "@/lib/condition-pages-content";

// Solid category icon paths — duplicated from components/home/ConditionsTeaser.tsx
// (small, presentational SVG data; not worth a shared import for one path map).
const CATEGORY_ICON_PATHS: Record<string, string> = {
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

function CategoryIcon({ iconKey }: { iconKey: string }) {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={CATEGORY_ICON_PATHS[iconKey] ?? ""} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
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

/**
 * Shared body for every /conditions/[category]/ page: hero, sticky
 * jump-nav + per-condition sections, and a closing "Explore More
 * Conditions" grid linking to the other 7 category pages.
 */
export function ConditionCategoryPage({
  page,
  otherPages,
}: {
  page: ConditionPageContent;
  otherPages: ConditionPageContent[];
}) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 65% 0%, rgba(34,199,240,0.16) 0%, rgba(26,134,247,0.05) 40%, rgba(255,255,255,0) 80%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center justify-center gap-1.5 text-[13px] text-ink-muted">
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/conditions-we-treat/" className="transition-colors hover:text-brand">
                Conditions
              </Link>
              <span aria-hidden>/</span>
              <span className="text-ink-soft">{page.navLabel}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.04}>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white shadow-[0_14px_36px_-10px_rgba(20,121,232,0.55)]">
              <CategoryIcon iconKey={page.iconKey} />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {page.heroHeading}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {page.heroIntro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Jump-nav (mobile pills, shown just under hero) */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:hidden lg:px-8">
        <ConditionJumpNav items={page.sections.map((s) => ({ slug: s.slug, label: s.label }))} />
      </div>

      {/* Sections + sticky sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div className="hidden lg:block">
            <ConditionJumpNav items={page.sections.map((s) => ({ slug: s.slug, label: s.label }))} />
          </div>

          <div className="flex flex-col gap-14 lg:gap-16">
            {page.sections.map((section, i) => (
              <Reveal key={section.slug} delay={Math.min(i * 0.04, 0.16)}>
                <section id={section.slug} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
                    {section.label}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-soft">
                    {section.description}
                  </p>
                  {section.crossLink && (
                    <Link
                      href={section.crossLink.href}
                      className="group mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-deep"
                    >
                      {section.crossLink.label}
                      <ArrowIcon />
                    </Link>
                  )}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href="/appointment-request/"
                      className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(20,121,232,0.55)] transition-shadow hover:shadow-[0_18px_46px_-10px_rgba(34,199,240,0.55)]"
                    >
                      Book a Consultation
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
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
                    </Link>
                    <Link
                      href={section.serviceHref}
                      className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink-soft transition-colors hover:text-brand"
                    >
                      Learn about {section.serviceLabel}
                      <ArrowIcon />
                    </Link>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Explore More Conditions */}
      <section className="border-t border-surface-border bg-bg-tinted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Explore More Conditions
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherPages.map((other, i) => (
              <Reveal key={other.slug} delay={Math.min(i * 0.04, 0.2)} y={16}>
                <Link
                  href={other.path}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-surface-border bg-white p-5 shadow-[0_16px_40px_-32px_rgba(20,121,232,0.35)] transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_22px_50px_-28px_rgba(20,121,232,0.4)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-deep/15 text-brand-deep transition-all group-hover:from-brand-cyan/30 group-hover:to-brand-deep/30">
                    <span className="h-5 w-5">
                      <CategoryIcon iconKey={other.iconKey} />
                    </span>
                  </span>
                  <h3 className="text-[15px] font-semibold leading-snug text-ink">
                    {other.navLabel}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-deep">
                    View conditions
                    <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-surface-border bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(34,199,240,0.14) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
              Ready to feel better?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-xl text-sm text-ink-soft sm:text-base">
              Request an appointment and our Ormond Beach team will build a
              personalized plan around your {page.navLabel.toLowerCase()} symptoms.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href="/appointment-request/"
              className="mt-1 inline-flex items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(20,121,232,0.55)] transition-transform hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
