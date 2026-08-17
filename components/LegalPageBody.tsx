import { Reveal } from "@/components/Reveal";
import type { LegalPageContent } from "@/lib/legal-content";

/**
 * Shared renderer for simple text-heavy legal pages (Privacy Policy,
 * Terms & Conditions). Keeps typography plain and readable rather than
 * reusing the marketing-page hero treatment.
 */
export function LegalPageBody({ content }: { content: LegalPageContent }) {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {content.heading}
          </h1>
          <p className="mt-3 text-sm text-ink-muted">
            Last updated: {content.lastUpdated}
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            {content.intro}
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {content.sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.3)}>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-[1.75] text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.list ? (
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-[1.75] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
