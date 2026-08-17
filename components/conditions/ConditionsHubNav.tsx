"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export interface HubNavItem {
  slug: string;
  label: string;
}

/**
 * Sticky horizontal category nav for the /conditions-we-treat/ hub, 
 * jumps between the 8 category sections with the active one highlighted
 * via IntersectionObserver as the user scrolls.
 *
 * Uses `motion/react` only for hover/tap micro-interactions and the
 * sliding active-pill indicator (event/state-driven, not mount/scroll
 * -triggered), per the site's documented Motion v12 + React 19 +
 * Turbopack `whileInView` bug workaround (see ConditionJumpNav.tsx).
 */
export function ConditionsHubNav({ items }: { items: HubNavItem[] }) {
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
      { rootMargin: "-180px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Jump to category"
      className="sticky top-[104px] z-30 border-b border-surface-border bg-white/85 backdrop-blur-md lg:top-[112px]"
    >
      <div className="scrollbar-none mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map((item) => {
          const active = activeSlug === item.slug;
          return (
            <motion.a
              key={item.slug}
              href={`#${item.slug}`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold"
            >
              {active && (
                <motion.span
                  layoutId="conditions-hub-nav-pill"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep"
                />
              )}
              <span className={`relative ${active ? "text-white" : "text-ink-soft hover:text-brand"}`}>
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
}
