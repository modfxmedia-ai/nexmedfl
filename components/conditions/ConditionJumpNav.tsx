"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export interface JumpNavItem {
  slug: string;
  label: string;
}

/**
 * Jump-nav for /conditions/[category]/ pages, a sticky sidebar on
 * desktop (lg+) and a horizontally-scrollable pill row on mobile, both
 * linking to on-page #anchors with the active section highlighted via
 * IntersectionObserver as the user scrolls.
 *
 * Uses `motion/react` only for hover/tap micro-interactions (safe, 
 * event-driven, not mount/scroll-triggered, per the site's documented
 * Motion v12 + React 19 + Turbopack `whileInView` bug workaround).
 */
export function ConditionJumpNav({ items }: { items: JumpNavItem[] }) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-112px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile / tablet: horizontal scrollable pill row */}
      <nav
        aria-label="Jump to condition"
        className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden"
      >
        {items.map((item) => (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
              activeSlug === item.slug
                ? "border-transparent bg-gradient-to-br from-brand-cyan to-brand-deep text-white"
                : "border-surface-border bg-white text-ink-soft hover:text-brand"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Jump to condition"
        className="sticky top-28 hidden max-h-[calc(100vh-8rem)] flex-col gap-1 overflow-y-auto lg:flex"
      >
        <p className="mb-1 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
          On This Page
        </p>
        {items.map((item) => (
          <motion.a
            key={item.slug}
            href={`#${item.slug}`}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.18 }}
            className={`relative rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
              activeSlug === item.slug
                ? "bg-surface text-brand-deep"
                : "text-ink-soft hover:bg-surface/60 hover:text-brand"
            }`}
          >
            {activeSlug === item.slug && (
              <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand-cyan to-brand-deep" />
            )}
            {item.label}
          </motion.a>
        ))}
      </nav>
    </>
  );
}
