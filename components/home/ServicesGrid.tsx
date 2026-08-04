"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { SERVICES_GRID, SERVICES_INTRO } from "@/lib/home-content";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

export function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES_GRID[activeIndex];

  return (
    <section id="services" className="relative overflow-hidden bg-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-cyan/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-16 h-[380px] w-[380px] rounded-full bg-brand-deep/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(20,121,232,0.35)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
              {SERVICES_INTRO.eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {SERVICES_INTRO.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {SERVICES_INTRO.intro}
          </p>
        </div>

        {/* Interactive showcase */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* LEFT — sticky preview panel. Uses key-based re-render + CSS
              keyframe fade rather than AnimatePresence because motion's
              mount-time animations don't fire reliably in this env; a CSS
              `animation` on key change always plays cleanly. */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div
              key={active.href}
              className="nexmed-hero-enter flex flex-col gap-5"
              style={{ animationDuration: "0.45s", animationDelay: "0s" }}
            >
              {/* Huge display number */}
              <span
                className="block bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text font-bold leading-[0.9] text-transparent"
                style={{
                  fontSize: "clamp(4.5rem, 10vw, 9rem)",
                  letterSpacing: "-0.05em",
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              {/* Service name */}
              <h3 className="text-[28px] font-semibold leading-tight text-ink sm:text-[32px]">
                {active.name}
              </h3>

              {/* Description */}
              <p className="max-w-md text-[14.5px] leading-[1.75] text-ink-soft">
                {active.description}
              </p>

              {/* CTA */}
              <Link
                href={active.href}
                className="group/cta inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-14px_rgba(20,121,232,0.55)] transition-all hover:scale-[1.03]"
              >
                Learn more about {active.name}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
              </Link>

              {/* Position indicator */}
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                <span className="text-brand-deep">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-2 text-ink-muted/40">/</span>
                <span>{String(SERVICES_GRID.length).padStart(2, "0")}</span>
                <span className="ml-4">All services</span>
              </p>
            </div>
          </div>

          {/* RIGHT — service list */}
          <ul
            role="tablist"
            aria-label="Services"
            className="relative flex flex-col"
          >
            {SERVICES_GRID.map((service, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={service.href} role="none" className="relative">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => {
                      window.location.href = service.href;
                    }}
                    className={`group/row relative flex w-full items-center gap-5 border-b border-surface-border/60 py-5 text-left transition-colors focus:outline-none focus-visible:bg-surface/40 ${
                      i === 0 ? "border-t border-surface-border/60" : ""
                    }`}
                  >
                    {/* Sliding active bar — motion layoutId works reliably in this env */}
                    {isActive ? (
                      <motion.span
                        layoutId="service-active-bar"
                        aria-hidden
                        className="absolute -left-2 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand-cyan to-brand-deep sm:-left-4"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    ) : null}

                    {/* Number */}
                    <span
                      className={`w-10 shrink-0 text-[13px] font-bold tabular-nums tracking-wider transition-colors ${
                        isActive ? "text-brand-deep" : "text-ink-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Service name */}
                    <span
                      className={`flex-1 text-[18px] font-semibold tracking-tight transition-all sm:text-[19px] lg:text-[20px] ${
                        isActive
                          ? "translate-x-1 text-ink"
                          : "text-ink/60 group-hover/row:text-ink"
                      }`}
                    >
                      {service.name}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? "border-brand-cyan/40 bg-brand-cyan/10 text-brand-deep"
                          : "border-surface-border text-ink-muted"
                      }`}
                    >
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-transform ${
                          isActive ? "translate-x-0.5" : ""
                        }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
