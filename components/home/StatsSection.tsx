import { STATS } from "@/lib/home-content";
import { CountUp } from "./CountUp";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(119,189,197,0.12) 0%, rgba(1,36,83,0.05) 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(#77BDC5 1px, transparent 1px), linear-gradient(90deg, #77BDC5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-cyan">
            By The Numbers
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted care, measurable results
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:mt-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
