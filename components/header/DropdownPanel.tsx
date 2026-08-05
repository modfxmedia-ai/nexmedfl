"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { NavLink } from "@/lib/site-config";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function DropdownPanel({
  links,
  viewAllHref,
  viewAllLabel,
  onNavigate,
}: {
  links: NavLink[];
  viewAllHref?: string;
  viewAllLabel?: string;
  onNavigate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.985 }}
      transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
      style={{ transformOrigin: "top left" }}
      className="w-72 pt-4"
    >
      <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_24px_60px_-20px_rgba(20,121,232,0.35),0_2px_8px_rgba(20,121,232,0.08)] backdrop-blur-xl">
        {viewAllHref ? (
          <Link
            href={viewAllHref}
            onClick={onNavigate}
            className="mb-1 flex items-center justify-between rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-deep/10 px-3.5 py-2.5 text-[13px] font-semibold text-brand-deep transition-colors hover:from-brand-cyan/20 hover:to-brand-deep/20"
          >
            {viewAllLabel ?? "View all"}
            <svg
              className="h-3 w-3"
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
        ) : null}
        <ul className="flex flex-col gap-0.5">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="group/link flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-surface/70 hover:text-brand"
              >
                <span className="h-px w-0 bg-brand transition-all duration-300 group-hover/link:w-3" />
                <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
