"use client";

/**
 * Displays a numeric stat. Was previously an animated count-up, but
 * mount-time animation via motion's `useInView`, plain
 * IntersectionObserver, and rAF all proved unreliable in this
 * codebase's React 19 + Turbopack + Motion combo (values stuck at 0).
 * Render as a static value, the visual weight of the number itself is
 * what matters for this section.
 */
export function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}



