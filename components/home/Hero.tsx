"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HERO, STATS } from "@/lib/home-content";

const HEADLINE_WORDS = HERO.heading.split(" ");

// Compact trust markers below CTAs — real stats reused as inline chips.
const TRUST_MARKERS = [
  { value: `${STATS[0].value}${STATS[0].suffix}`, label: "Years of experience" },
  { value: `${STATS[2].value}${STATS[2].suffix}`, label: "Patients helped" },
  { value: `${STATS[3].value}${STATS[3].suffix}`, label: "Satisfaction" },
];

function StarRow() {
  return (
    <span className="flex items-center gap-0.5 text-brand-cyan">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L1.4 7.9l6-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      aria-label="NexMed"
      className="relative overflow-hidden bg-white"
    >
      {/* Background — soft brand radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 65% 0%, rgba(34,199,240,0.18) 0%, rgba(26,134,247,0.06) 40%, rgba(255,255,255,0) 80%)",
        }}
      />
      {/* Faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,134,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,134,247,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      {/* Ambient floating orbs */}
      <div
        aria-hidden
        className="nexmed-orb-a pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-brand-cyan/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="nexmed-orb-b pointer-events-none absolute -right-24 bottom-16 h-[360px] w-[360px] rounded-full bg-brand-deep/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-8 lg:py-20">
        {/* LEFT — copy */}
        <div className="flex flex-col">
          {/* Eyebrow chip */}
          <div
            className="nexmed-hero-enter inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(20,121,232,0.35)] backdrop-blur"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-cyan/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
              {HERO.eyebrow} · Ormond Beach, FL
            </span>
          </div>

          {/* Headline — word-by-word CSS stagger */}
          <h1 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[68px]">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="nexmed-hero-enter mr-3 inline-block last:mr-0"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                {i === HEADLINE_WORDS.length - 1 ? (
                  <span className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className="nexmed-hero-enter mt-5 max-w-xl text-base leading-[1.7] text-ink-soft sm:text-[17px]"
            style={{ animationDelay: "0.85s" }}
          >
            {HERO.subheading}
          </p>

          {/* CTAs */}
          <div
            className="nexmed-hero-enter mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "1.0s" }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={HERO.ctaHref}
                className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-8 py-4 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(20,121,232,0.55)] transition-shadow hover:shadow-[0_22px_52px_-8px_rgba(34,199,240,0.55)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
                />
                <span className="relative">{HERO.ctaLabel}</span>
                <svg
                  className="relative h-4 w-4 transition-transform group-hover/cta:translate-x-1"
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
              </Link>
            </motion.div>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-6 py-3.5 text-[14px] font-semibold text-ink transition-all hover:border-brand-cyan/50 hover:bg-surface hover:text-brand-deep"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-brand-deep">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 3l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Explore Services
            </Link>
          </div>

          {/* Trust markers row */}
          <div
            className="nexmed-hero-enter mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-surface-border pt-5"
            style={{ animationDelay: "1.25s" }}
          >
            {TRUST_MARKERS.map((marker) => (
              <div
                key={marker.label}
                className="flex flex-col leading-tight"
              >
                <span className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-2xl font-bold text-transparent">
                  {marker.value}
                </span>
                <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {marker.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — video card + floating badges */}
        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[440px]">
          <div
            className="nexmed-slide-in-right relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/60 bg-ink shadow-[0_40px_100px_-30px_rgba(20,121,232,0.5)]"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay for legibility of any on-video content */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(27,30,36,0.15) 0%, rgba(27,30,36,0.0) 40%, rgba(27,30,36,0.55) 100%)",
              }}
            />

            {/* Bottom-left stat callout on the video */}
            <div
              className="nexmed-hero-enter absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md"
              style={{ animationDelay: "1.35s" }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s-7.5-4.6-9.6-9.1C.7 8.4 2.2 5 5.6 5c1.9 0 3.3 1 4.4 2.4C11.1 6 12.5 5 14.4 5 17.8 5 19.3 8.4 21.6 11.9 19.5 16.4 12 21 12 21Z" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Now accepting
                </p>
                <p className="text-sm font-semibold text-white">
                  New patients
                </p>
              </div>
            </div>
          </div>

          {/* Floating rating badge — top-left, overlapping the card */}
          <div
            className="nexmed-pop-in absolute -top-4 -left-4 flex items-center gap-3 rounded-2xl border border-surface-border bg-white px-4 py-3 shadow-[0_20px_50px_-20px_rgba(20,121,232,0.4)] sm:-top-6 sm:-left-6"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-deep/15 text-brand-deep">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L1.4 7.9l6-.9L10 1.5Z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-ink">5.0</span>
                <StarRow />
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-ink-muted">
                From real patients
              </p>
            </div>
          </div>

          {/* Floating "Live now" pill — top-right */}
          <div
            className="nexmed-pop-in absolute -top-3 right-4 flex items-center gap-2 rounded-full border border-surface-border bg-white px-3.5 py-1.5 shadow-[0_16px_40px_-16px_rgba(20,121,232,0.4)] sm:right-8"
            style={{ animationDelay: "1.1s" }}
          >
            <span className="nexmed-live-pulse relative flex h-2 w-2 rounded-full text-brand-cyan">
              <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
              Open Today
            </span>
          </div>

          {/* Floating "Trusted care" pill — bottom-right, overlapping */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="nexmed-pop-in absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl border border-surface-border bg-white px-4 py-3 shadow-[0_20px_50px_-20px_rgba(20,121,232,0.4)] sm:-right-6"
            style={{ animationDelay: "1.25s" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-deep/15 text-brand-deep">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Zm-3 10 2 2 4-4" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">Trusted Care</p>
              <p className="mt-0.5 text-[11px] font-medium text-ink-muted">
                Board-certified team
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
