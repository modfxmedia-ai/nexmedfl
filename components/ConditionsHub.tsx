import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ConditionCard } from "@/components/conditions/ConditionCard";
import { ConditionsHubNav } from "@/components/conditions/ConditionsHubNav";
import { slugifyCondition, type ConditionCategory } from "@/lib/conditions-content";
import { SECTION_SLUG_BY_LABEL } from "@/lib/condition-pages-content";

// Solid category icon paths — duplicated from
// components/home/ConditionsTeaser.tsx and
// components/conditions/ConditionCategoryPage.tsx (small, presentational
// SVG data; not worth a shared import for one path map).
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

function CategoryIcon({ label }: { label: string }) {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={CATEGORY_ICON_PATHS[label] ?? ""} />
    </svg>
  );
}

/** "/conditions/spine/" -> "spine" — used as the section id the sticky
 *  category nav scrolls/scrollspies to. */
function categorySlug(path: string): string {
  return path.replace(/^\/conditions\//, "").replace(/\/$/, "");
}

/**
 * /conditions-we-treat/ hub page body — organizes every condition Ormond
 * Spine & Nerve Center treats into the same 8 categories used by the nav
 * mega-menu, each with a short SEO description and a link straight to
 * the matching /conditions/[category]/#anchor page for the full write-up
 * plus booking CTA.
 */
export function ConditionsHub({
  intro,
  categories,
}: {
  intro: { eyebrow: string; heading: string; intro: string };
  categories: ConditionCategory[];
}) {
  const navItems = categories.map((category) => ({
    slug: categorySlug(category.path),
    label: category.label,
  }));

  return (
    <main>
      {/* Hero / intro */}
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
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              {intro.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {intro.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {intro.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky category jump-nav */}
      <ConditionsHubNav items={navItems} />

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-16 lg:gap-20">
          {categories.map((category) => (
            <section
              key={category.label}
              id={categorySlug(category.path)}
              className="scroll-mt-40"
            >
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white shadow-[0_12px_30px_-10px_rgba(20,121,232,0.5)]">
                    <CategoryIcon label={category.label} />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
                    {category.label}
                  </h2>
                </div>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <Reveal key={item.label} delay={i * 0.05} y={16}>
                    <ConditionCard
                      href={`${category.path}#${SECTION_SLUG_BY_LABEL[item.label] ?? slugifyCondition(item.label)}`}
                      id={slugifyCondition(item.label)}
                      label={item.label}
                      description={item.description}
                    />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-surface-border bg-bg-tinted">
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
              Not sure where to start?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-xl text-sm text-ink-soft sm:text-base">
              Request an appointment and our Ormond Beach team will help
              match you with the right treatment plan for your condition.
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

