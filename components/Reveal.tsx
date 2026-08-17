import type { CSSProperties, ReactNode } from "react";

/**
 * Generic scroll-reveal wrapper (fade + slide up) used throughout the site
 * for section entrances. Implemented with a CSS `@keyframes` animation
 * (see `.nexmed-reveal` in globals.css) rather than motion/react's
 * `initial + whileInView`, the current Motion v12 + React 19 + Turbopack
 * combo intermittently leaves `whileInView` elements stuck at their
 * initial (invisible) state. CSS animations always run, so this is a
 * plain server component with no client JS cost.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div
      className={["nexmed-reveal", className].filter(Boolean).join(" ")}
      style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
