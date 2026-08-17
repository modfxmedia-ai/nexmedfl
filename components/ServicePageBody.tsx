"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/home/CountUp";
import { BUSINESS } from "@/lib/site-config";
import { STATS } from "@/lib/home-content";
import { CONDITION_SLUG_BY_LABEL } from "@/lib/conditions-content";
import type {
  ServiceRichContentBlock,
  ServiceFAQ,
  ServiceRelatedLink,
} from "@/lib/service-content";

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceEquipment {
  heading: string;
  description: string;
  features: string[];
}

export interface ServicePageBodyProps {
  /** Mega-menu category this page belongs to, shown as a small eyebrow label. */
  eyebrow: string;
  /** H1 */
  heading: string;
  /** Hero paragraph. */
  intro: string;
  /** Optional hero photograph (path under /public); falls back to a
   *  gradient panel with the brand mark when omitted. */
  heroImage?: string;
  benefits: ServiceBenefit[];
  equipment: ServiceEquipment;
  /** Conditions Treated list, plain labels, optionally cross-linked from /conditions-we-treat/. */
  conditions: string[];
  /** Long-form on-page SEO content blocks, rendered below the hero. */
  richContent?: ServiceRichContentBlock[];
  /** FAQ items, rendered as an accordion (schema emitted separately via buildFAQSchema). */
  faqs?: ServiceFAQ[];
  /** Cross-links to complementary services. */
  relatedServices?: ServiceRelatedLink[];
}

// Reuse the same 3 verified stats shown on the homepage (18+ years, 5k+
// patients, 98% satisfaction) rather than inventing per-treatment figures.
const TRUST_STATS = [STATS[0], STATS[2], STATS[3]];

function CheckIcon({ className = "h-5 w-5 text-brand-cyan" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4L8.5 12l6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
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
  );
}

function SpineMark() {
  return (
    <svg className="h-16 w-16 text-white/25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 2c-2 2-3 4-1 6s3 4 1 6-3 4-1 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M${6 + (i % 2)} ${4 + i * 3}h-3`}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Decorative concentric "technology" pulse rings for the dark equipment
 *  section, freezes in place when the user prefers reduced motion. */
function PulseRings() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-40 w-40 shrink-0 items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full border border-brand-cyan/40"
          style={{ height: `${64 + i * 34}px`, width: `${64 + i * 34}px` }}
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={
            reduce
              ? { opacity: 0.35, scale: 1 }
              : { opacity: [0.5, 0, 0.5], scale: [0.9, 1.15, 0.9] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }
          }
        />
      ))}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep shadow-[0_8px_28px_-8px_rgba(119,189,197,0.55)]">
        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.5v11M2.5 8h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Single accordion row for the FAQ section, pure CSS grid-row expand/
 *  collapse so no height measurement is required. */
function FAQItem({ faq }: { faq: ServiceFAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-surface-border py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-semibold text-ink">{faq.question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-brand-deep"
        >
          <PlusIcon />
        </motion.span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-3xl text-[14px] leading-[1.7] text-ink-soft">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Shared body layout (hero / rich content / benefits / technology /
 * conditions treated / related services / FAQ / closing CTA) reused
 * across every equipment- and program-driven service page, styled with
 * the site's brand tokens and animated with motion/react scroll reveals.
 */
export function ServicePageBody({
  eyebrow,
  heading,
  intro,
  heroImage,
  benefits,
  equipment,
  richContent,
  faqs,
  relatedServices,
  conditions,
}: ServicePageBodyProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(119,189,197,0.1) 0%, transparent 55%)",
          }}
        />
        <div
          aria-hidden
          className="nexmed-orb-a pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-brand-cyan/15 blur-[100px]"
        />
        <div
          aria-hidden
          className="nexmed-orb-b pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-deep/10 blur-[100px]"
        />

        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:py-24">
          {/* Copy */}
          <div>
            <div
              className="nexmed-hero-enter inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-white/70 px-3 py-1.5 shadow-[0_8px_28px_-14px_rgba(1,36,83,0.35)] backdrop-blur"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-cyan/60" />
                <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
                {eyebrow}
              </span>
            </div>

            <h1
              className="nexmed-hero-enter mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "0.25s" }}
            >
              {heading}
            </h1>

            <p
              className="nexmed-hero-enter mt-5 max-w-xl text-base leading-[1.7] text-ink-soft"
              style={{ animationDelay: "0.4s" }}
            >
              {intro}
            </p>

            <div
              className="nexmed-hero-enter mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.55s" }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/appointment-request/"
                  className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-shadow hover:shadow-[0_22px_52px_-8px_rgba(119,189,197,0.55)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
                  />
                  <span className="relative">Book Appointment</span>
                  <ArrowIcon />
                </Link>
              </motion.div>

              <a
                href={BUSINESS.telephoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-6 py-3.5 text-[14px] font-semibold text-ink transition-all hover:border-brand-cyan/50 hover:bg-surface hover:text-brand-deep"
              >
                Call {BUSINESS.telephone}
              </a>
            </div>

            <div
              className="nexmed-hero-enter mt-7 flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ animationDelay: "0.7s" }}
            >
              {["Personalized Treatment Plans", "Conservative, Non-Surgical Care", "Ormond Beach, FL"].map(
                (label) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft">
                    <CheckIcon className="h-4 w-4 text-brand-cyan" />
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Image / brand panel */}
          <div
            className="nexmed-hero-enter relative"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-[0_32px_70px_-30px_rgba(1,36,83,0.4)]">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={heading}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-deep to-ink">
                  <SpineMark />
                </div>
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              />
            </div>

            {/* Floating caption card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: EASE_OUT_EXPO }}
              className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-surface-border bg-white px-5 py-4 shadow-[0_20px_44px_-16px_rgba(1,36,83,0.35)] sm:left-8"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                <CheckIcon className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">One-on-One Provider Time</p>
                <p className="text-xs text-ink-soft">Every visit is built around you</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rich SEO content, "What to Expect" / "Is this right for you" */}
      {richContent && richContent.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {richContent.map((block, i) => (
              <Reveal key={block.heading} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-surface-border bg-surface/60 p-7">
                  <h2 className="text-lg font-semibold text-ink">{block.heading}</h2>
                  <p className="mt-3 text-[14px] leading-[1.75] text-ink-soft">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Why Patients Choose This Treatment
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-surface-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_24px_60px_-30px_rgba(1,36,83,0.35)]">
                <span className="text-sm font-bold text-brand-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="mt-2 block h-px w-8 bg-gradient-to-r from-brand-cyan to-brand-deep transition-all group-hover:w-12"
                />
                <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-soft">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Equipment / technology callout */}
      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(119,189,197,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-cyan">
                Our Technology
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {equipment.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
                {equipment.description}
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {equipment.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mx-auto lg:mx-0">
              <PulseRings />
            </Reveal>
          </div>

          {/* Trust stats */}
          <Reveal delay={0.1}>
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-gradient-to-br from-brand-cyan to-brand-deep bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Conditions Treated
            </h2>
            <Link
              href="/conditions-we-treat/"
              className="text-sm font-semibold text-brand-deep transition-colors hover:text-brand-cyan"
            >
              View all conditions we treat →
            </Link>
          </div>
        </Reveal>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {conditions.map((condition, i) => {
            const slug = CONDITION_SLUG_BY_LABEL[condition.toLowerCase()];
            const className =
              "inline-flex rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-cyan/40 hover:text-brand-deep";
            return (
              <Reveal key={condition} delay={i * 0.04} y={12}>
                {slug ? (
                  <Link href={`/conditions-we-treat/#${slug}`} className={className}>
                    {condition}
                  </Link>
                ) : (
                  <span className={className}>{condition}</span>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Related services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Explore Related Care
            </h2>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.08}>
                <Link
                  href={link.href}
                  className="group/cta flex h-full items-center justify-between gap-3 rounded-2xl border border-surface-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_20px_50px_-28px_rgba(1,36,83,0.35)]"
                >
                  <span className="text-sm font-semibold text-ink">{link.label}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand-deep transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-cyan group-hover:to-brand-deep group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-surface-border bg-bg-tinted">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(119,189,197,0.12) 0%, transparent 65%)",
          }}
        />
        <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Schedule a consultation with the {BUSINESS.name} team in Ormond
            Beach, FL and find out if this treatment is right for you.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2"
          >
            <Link
              href="/appointment-request/"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-8 py-4 text-[15px] font-semibold text-white shadow-[0_18px_44px_-10px_rgba(1,36,83,0.55)] transition-shadow hover:shadow-[0_22px_52px_-8px_rgba(119,189,197,0.55)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
              />
              <span className="relative">Book Appointment</span>
              <ArrowIcon />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </main>
  );
}
