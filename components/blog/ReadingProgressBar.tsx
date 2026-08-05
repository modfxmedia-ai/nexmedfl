"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Fixed top-of-viewport bar that fills with scroll progress through the
 * article. Driven continuously by `useScroll`/`useSpring` (not a one-shot
 * mount animation), so it isn't affected by the motion/react + Turbopack
 * `whileInView`/mount-entrance bug documented in project memory.
 */
export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-brand-cyan to-brand-deep"
    />
  );
}
