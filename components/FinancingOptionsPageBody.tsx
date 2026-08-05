import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FINANCING_INTRO, FINANCING_FAQS } from "@/lib/financing-content";

const RELATED_LINKS = [
  {
    label: "Payment Plans",
    description: "Prefer to pay directly with our office instead? See how in-office plans work.",
    href: "/payment-plans/",
  },
  {
    label: "No Surprises Act",
    description: "Learn about your billing protections and good faith estimates.",
    href: "/no-suprises-act/",
  },
  {
    label: "Contact Us",
    description: "Have a billing question? Our team is happy to help.",
    href: "/contact-us/",
  },
];

/**
 * /financing-options/ page body — plain-language FAQ content about
 * third-party financing, distinct from the in-office payment plan
 * content on /payment-plans/. Styled with the site's brand tokens.
 */
export function FinancingOptionsPageBody() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(34,199,240,0.1) 0%, transparent 55%)",
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
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(20,121,232,0.35)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
              {FINANCING_INTRO.eyebrow}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {FINANCING_INTRO.heading}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {FINANCING_INTRO.intro}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/appointment-request/"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(20,121,232,0.55)] transition-all hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Financing Questions, Answered
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 rounded-2xl border border-surface-border bg-white px-6 sm:px-8">
          <FaqAccordion items={FINANCING_FAQS} />
        </Reveal>
      </section>

      {/* Related info */}
      <section className="bg-bg-tinted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Related Information
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {RELATED_LINKS.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.08}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-surface-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_24px_60px_-30px_rgba(20,121,232,0.35)]"
                >
                  <span
                    aria-hidden
                    className="h-px w-8 bg-gradient-to-r from-brand-cyan to-brand-deep transition-all group-hover:w-12"
                  />
                  <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                    {link.label}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                    {link.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
