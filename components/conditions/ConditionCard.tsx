"use client";

import Link from "next/link";
import { motion } from "motion/react";

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/cond:translate-x-0.5"
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
 * Condition card for the /conditions-we-treat/ hub — motion/react is used
 * only for hover/tap micro-interactions (event-driven, not mount/scroll
 * -triggered), per the site's documented Motion v12 + React 19 +
 * Turbopack `whileInView` bug workaround. Scroll-entrance is still
 * handled by the reliable CSS-based `<Reveal>` wrapper around this card.
 */
export function ConditionCard({
  href,
  id,
  label,
  description,
}: {
  href: string;
  id: string;
  label: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="group/cond h-full"
    >
      <Link
        href={href}
        id={id}
        className="flex h-full scroll-mt-40 flex-col gap-2.5 rounded-2xl border border-surface-border bg-white p-6 shadow-[0_16px_40px_-32px_rgba(20,121,232,0.35)] transition-all group-hover/cond:border-brand-cyan/40 group-hover/cond:shadow-[0_22px_50px_-28px_rgba(20,121,232,0.4)]"
      >
        <h3 className="text-[15.5px] font-semibold leading-snug text-ink">
          {label}
        </h3>
        <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">
          {description}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-deep">
          Learn more
          <ArrowIcon />
        </span>
      </Link>
    </motion.div>
  );
}
