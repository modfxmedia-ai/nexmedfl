"use client";

import { motion } from "motion/react";

interface Bar {
  value: number; // 0-100, percentage of max bar height
}

const BARS: Bar[] = [
  { value: 38 },
  { value: 52 },
  { value: 46 },
  { value: 64 },
  { value: 58 },
  { value: 78 },
  { value: 92 },
];

/**
 * Small decorative animated bar chart for the hero's "real outcomes" stat
 * card — purely a visual flourish (upward trend), not a literal data
 * chart. Uses `motion/react`'s plain mount `initial`/`animate` (NOT
 * `whileInView`), which is reliable in this Motion v12 + React 19 +
 * Turbopack stack per this site's established convention — safe here
 * since the hero is always in view on page load anyway.
 */
export function HeroBarChart() {
  return (
    <div
      className="flex h-14 items-end gap-[5px]"
      role="img"
      aria-label="Illustrative chart of patient outcomes trending upward"
    >
      {BARS.map((bar, i) => (
        <motion.div
          key={i}
          className="w-2.5 rounded-t-[3px] bg-gradient-to-t from-brand-deep to-brand-cyan"
          style={{ height: `${bar.value}%`, transformOrigin: "bottom" }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 16,
            delay: 1.4 + i * 0.06,
          }}
          whileHover={{ scaleY: 1.08, filter: "brightness(1.2)" }}
        />
      ))}
    </div>
  );
}
