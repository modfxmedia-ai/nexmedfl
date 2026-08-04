"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { TESTIMONIAL_GALLERY, TESTIMONIALS } from "@/lib/home-content";

function StarIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L1.4 7.9l6-.9L10 1.5Z" />
    </svg>
  );
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  function go(delta: number) {
    setIndex((current) => (current + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-3 gap-3">
          {TESTIMONIAL_GALLERY.map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl bg-surface"
            >
              <Image
                src={src}
                alt="NexMed patient care"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 16vw, 30vw"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Happy Patients
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Real Stories, Real Results
          </h2>

          <div className="mt-6 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-ink">
                  {testimonial.name}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink transition-colors hover:border-brand hover:text-brand"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink transition-colors hover:border-brand hover:text-brand"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
