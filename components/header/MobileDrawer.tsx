"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BUSINESS, SITE_NAME, type HeaderNavItem } from "@/lib/site-config";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center text-current">
      <span className="absolute h-[1.6px] w-3 rounded-full bg-current" />
      <motion.span
        animate={{ rotate: open ? 0 : 90, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute h-[1.6px] w-3 rounded-full bg-current"
      />
    </span>
  );
}

function MobileGroup({
  item,
  onNavigate,
}: {
  item: HeaderNavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const links = item.categories
    ? item.categories.flatMap((category) => category.items)
    : (item.children ?? []);

  return (
    <div className="border-b border-surface-border/70 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-1 py-3.5 text-base font-medium text-ink"
      >
        {item.label}
        <PlusMinus open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 pb-3 pl-1">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-brand"
                >
                  View all {item.label}
                </Link>
              ) : null}
              {links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2 text-sm text-ink-soft"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function MobileDrawer({
  open,
  onClose,
  navItems,
}: {
  open: boolean;
  onClose: () => void;
  navItems: HeaderNavItem[];
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
              <Image
                src={BUSINESS.logo}
                alt={SITE_NAME}
                width={BUSINESS.logoWidth}
                height={BUSINESS.logoHeight}
                className="h-11 w-auto"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-2">
              {navItems.map((item) =>
                item.categories || item.children ? (
                  <MobileGroup key={item.label} item={item} onNavigate={onClose} />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={onClose}
                    className="block border-b border-surface-border/70 px-1 py-3.5 text-base font-medium text-ink last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex flex-col gap-3 border-t border-surface-border px-5 py-5">
              <a
                href={BUSINESS.telephoneHref}
                className="flex items-center gap-2 text-base font-semibold text-ink"
              >
                <svg
                  className="h-4 w-4 text-brand"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {BUSINESS.telephone}
              </a>
              <Link
                href="/appointment-request/"
                onClick={onClose}
                className="rounded-full bg-brand-deep px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cta-hover"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
