import { TRUST_ITEMS } from "@/lib/home-content";
import { SITE_NAME } from "@/lib/site-config";

const PILLAR_ICON_PATHS = [
  // Comprehensive Health Care, heart with pulse
  "M12 21s-7.5-4.6-9.6-9.1C.7 8.4 2.2 5 5.6 5c1.9 0 3.3 1 4.4 2.4C11.1 6 12.5 5 14.4 5 17.8 5 19.3 8.4 21.6 11.9 19.5 16.4 12 21 12 21Z",
  // Healing Stories, trending up
  "m3 17 6-6 4 4 8-8M21 7v6M15 7h6",
  // Trusted Expertise, shield check
  "M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Zm-3 10 2 2 4-4",
];

function PillarIcon({ index }: { index: number }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PILLAR_ICON_PATHS[index] ?? ""} />
    </svg>
  );
}

// Per-pillar mini SVG accent that sits inside the card as a subtle motif.
function PillarAccent({ index }: { index: number }) {
  if (index === 0) {
    // Heartbeat pulse line
    return (
      <svg
        className="h-8 w-full text-brand-cyan/60"
        viewBox="0 0 200 32"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 16 H60 L70 4 L82 28 L94 10 L104 22 L114 16 H200"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    // Ascending sparkline with dots
    return (
      <svg
        className="h-8 w-full text-brand-deep/60"
        viewBox="0 0 200 32"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 26 L40 20 L80 22 L120 12 L160 14 L200 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="20" r="2" fill="currentColor" />
        <circle cx="80" cy="22" r="2" fill="currentColor" />
        <circle cx="120" cy="12" r="2" fill="currentColor" />
        <circle cx="160" cy="14" r="2" fill="currentColor" />
        <circle cx="200" cy="4" r="2.5" fill="currentColor" />
      </svg>
    );
  }
  // Dot grid pattern
  return (
    <div
      className="h-8 w-full"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(1,36,83,0.35) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
      aria-hidden
    />
  );
}

export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient dot pattern background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(1,36,83,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full bg-brand-cyan/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-16 h-[360px] w-[360px] rounded-full bg-brand-deep/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(1,36,83,0.35)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
              Three Pillars · One Commitment
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Why patients choose{" "}
            <span className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-transparent">
              {SITE_NAME}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Everything we do rests on three foundations: expert clinical care,
            proven patient outcomes, and the trust we&apos;ve earned over
            thousands of treatments.
          </p>
        </div>

        {/* Three pillars grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20 lg:gap-7">
          {TRUST_ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-surface-border bg-white/80 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-[0_40px_80px_-30px_rgba(1,36,83,0.35)]"
            >
              {/* Top gradient bar */}
              <span
                aria-hidden
                className="block h-1 w-full bg-gradient-to-r from-brand-cyan via-brand-deep to-brand-cyan opacity-70 transition-opacity group-hover:opacity-100"
              />

              {/* Huge display number in background */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-4 select-none bg-gradient-to-br from-brand-cyan/10 to-brand-deep/[0.08] bg-clip-text font-bold leading-none text-transparent transition-all duration-500 group-hover:from-brand-cyan/25 group-hover:to-brand-deep/20"
                style={{ fontSize: "132px", letterSpacing: "-0.06em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-4 p-8 lg:p-10">
                {/* Icon chip + pillar tag */}
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-deep/20 text-brand-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    <PillarIcon index={i} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep/80">
                    Pillar {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-[22px] font-semibold leading-tight text-ink lg:text-[24px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14.5px] leading-[1.7] text-ink-soft">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="mt-3 h-px w-full bg-gradient-to-r from-surface-border via-surface-border to-transparent" />

                {/* Bottom: mini graphic */}
                <div className="flex items-end">
                  <div className="flex-1">
                    <PillarAccent index={i} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
