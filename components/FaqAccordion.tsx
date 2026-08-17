"use client";

import { useState } from "react";
import { motion } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.5v11M2.5 8h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FaqRow({ item }: { item: FaqAccordionItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-surface-border py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-semibold text-ink">{item.question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-brand-deep"
        >
          <PlusIcon />
        </motion.span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-3xl text-[14px] leading-[1.7] text-ink-soft">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Shared FAQ accordion, same visual style as the one built into
 * ServicePageBody, extracted so plain content pages (payment plans,
 * financing options, etc.) can reuse it without pulling in the whole
 * service-page layout.
 */
export function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  return (
    <div className="divide-y-0">
      {items.map((item) => (
        <FaqRow key={item.question} item={item} />
      ))}
    </div>
  );
}
