import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  CAREER_INTRO,
  CAREER_ROLE_CATEGORIES,
  CAREER_BENEFITS,
} from "@/lib/career-content";
import { BUSINESS } from "@/lib/site-config";

/**
 * /career-opportunities/ page body. Evergreen "we're always accepting
 * applications" content rather than specific job postings.
 */
export function CareerOpportunitiesPageBody() {
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

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              {CAREER_INTRO.eyebrow}
            </p>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {CAREER_INTRO.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {CAREER_INTRO.intro}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-10 text-xl font-semibold tracking-tight text-ink">
              Roles We Typically Hire For
            </h2>
            <div className="mt-4 space-y-5">
              {CAREER_ROLE_CATEGORIES.map((role) => (
                <div key={role.title}>
                  <p className="text-[15px] font-semibold text-ink">{role.title}</p>
                  <p className="text-[15px] leading-[1.75] text-ink-soft">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-10 text-xl font-semibold tracking-tight text-ink">
              Why Work With Us
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {CAREER_BENEFITS.map((benefit) => (
                <li key={benefit} className="text-[15px] leading-[1.75] text-ink-soft">
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-surface-border bg-surface p-6">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                How to Apply
              </h2>
              <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">
                Send your resume and a short note about your experience to{" "}
                <a
                  href={BUSINESS.emailHref}
                  className="font-semibold text-brand-deep underline"
                >
                  {BUSINESS.email}
                </a>{" "}
                or call us at{" "}
                <a href={BUSINESS.telephoneHref} className="font-semibold text-brand-deep underline">
                  {BUSINESS.telephone}
                </a>
                . We review every inquiry and will reach out if there&apos;s a fit,
                now or in the future.
              </p>
              <Link
                href="/contact-us/"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-all hover:scale-[1.03]"
              >
                Contact Our Office
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
