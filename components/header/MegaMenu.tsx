"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { ServiceCategory } from "@/lib/site-config";
import { BUSINESS } from "@/lib/site-config";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// One simple, distinct line-icon per mega-menu category — purely
// decorative accents, not literal anatomy. Keys cover both the Services
// mega-menu labels and the Conditions mega-menu labels.
const CATEGORY_ICON_PATHS: Record<string, string> = {
  // Services categories
  "Spine & Chiropractic Care":
    "M12 3v2M12 8v2M12 13v2M12 18v2M9 5h6M9 10h6M9 15h6M9 20h6",
  "Knee & Joint Care":
    "M12 3a4 4 0 0 1 4 4v3l3 3-3 3v3a4 4 0 0 1-8 0v-3l-3-3 3-3V7a4 4 0 0 1 4-4Z",
  "Nerve & Neuropathy Care": "M4 12h3l2-7 4 14 2-7h5",
  "Recovery & Advanced Therapies":
    "M3 8.5 8.5 3l3 3-1.6 1.6 4.5 4.5L16 10.5l3 3-5.5 5.5-3-3 1.6-1.6-4.5-4.5L6 11.5l-3-3Z",
  // Conditions categories
  Spine: "M12 3v2M12 8v2M12 13v2M12 18v2M9 5h6M9 10h6M9 15h6M9 20h6",
  "Knee & Joint":
    "M12 3a4 4 0 0 1 4 4v3l3 3-3 3v3a4 4 0 0 1-8 0v-3l-3-3 3-3V7a4 4 0 0 1 4-4Z",
  "Neuropathy & Nerve": "M4 12h3l2-7 4 14 2-7h5",
  "Muscle, Soft Tissue & Headaches":
    "M12 21s-7.5-4.6-9.6-9.1C.7 8.4 2.2 5 5.6 5c1.9 0 3.3 1 4.4 2.4C11.1 6 12.5 5 14.4 5 17.8 5 19.3 8.4 21.6 11.9 19.5 16.4 12 21 12 21Z",
};

function CategoryIcon({ label }: { label: string }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={CATEGORY_ICON_PATHS[label] ?? ""} />
    </svg>
  );
}

const columnVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

// Real clinic photo used as the featured "promo" panel background.
const PROMO_IMAGE =
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1547-1.jpg";

export function MegaMenu({
  categories,
  onNavigate,
}: {
  categories: ServiceCategory[];
  onNavigate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.985 }}
      transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
      style={{ transformOrigin: "top left" }}
      className="absolute left-0 top-full z-20 w-[min(1080px,calc(100vw-2rem))] pt-4"
    >
      <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_30px_80px_-20px_rgba(20,121,232,0.35),0_2px_10px_rgba(20,121,232,0.08)] backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
          {/* Category grid — 2×2 on desktop (fits the current 4-category
              Services and Conditions menus). */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.04, delayChildren: 0.05 }}
            className="grid grid-cols-1 gap-x-4 gap-y-4 p-6 sm:grid-cols-2 lg:gap-y-6 lg:p-7"
          >
            {categories.map((category) => (
              <motion.div
                key={category.label}
                variants={columnVariants}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="group relative rounded-2xl p-3 transition-colors hover:bg-surface/60"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-deep/15 text-brand-deep transition-all group-hover:from-brand-cyan/30 group-hover:to-brand-deep/30 group-hover:text-brand">
                    <CategoryIcon label={category.label} />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                    {category.label}
                  </p>
                </div>
                <ul className="mt-3 flex flex-col gap-0.5">
                  {category.items.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onNavigate}
                        className="group/link flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-brand"
                      >
                        <span className="h-px w-0 bg-brand transition-all duration-300 group-hover/link:w-3" />
                        <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                          {child.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured promo panel — real clinic photo + dark gradient overlay */}
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="relative hidden overflow-hidden bg-ink lg:block"
          >
            <Image
              src={PROMO_IMAGE}
              alt=""
              fill
              sizes="320px"
              className="object-cover opacity-45"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-brand-deep/85 via-ink/75 to-ink/95"
            />
            <div className="relative flex h-full flex-col justify-end gap-4 p-7 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-cyan">
                Not Sure Where to Start?
              </p>
              <h3 className="text-[22px] font-semibold leading-tight text-white">
                Let&apos;s match you to the right care.
              </h3>
              <p className="text-sm leading-relaxed text-white/75">
                A quick consult is the fastest way to a plan that actually fits
                your body, goals, and timeline.
              </p>
              <div className="mt-2 flex flex-col gap-2.5">
                <Link
                  href="/appointment-request/"
                  onClick={onNavigate}
                  className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-[0_10px_28px_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.02]"
                >
                  Book a Consultation
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6h8m0 0L6 2m4 4L6 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a
                  href={BUSINESS.telephoneHref}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 1 1.015-.063l2.803 2.803a.678.678 0 0 1 .063 1.015l-1.83 1.83a.678.678 0 0 0-.128.752 11.386 11.386 0 0 0 5.712 5.712.678.678 0 0 0 .752-.128l1.83-1.83a.678.678 0 0 1 1.015.063l2.803 2.803a.678.678 0 0 1-.063 1.015l-1.34 1.14c-.977.977-2.463 1.4-3.837.98-3.32-1.014-6.28-3.973-7.294-7.293-.42-1.374.003-2.86.98-3.837l1.14-1.34Z" />
                  </svg>
                  {BUSINESS.telephone}
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.div>
  );
}
