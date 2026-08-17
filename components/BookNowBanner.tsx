"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BUSINESS } from "@/lib/site-config";

// Pages that already put a booking form/CTA front-and-center, showing
// the persistent banner there too would be redundant.
const HIDDEN_PATH_PREFIXES = [
  "/contact-us",
  "/appointment-request",
  "/neuropathy-appointment-request",
];

/**
 * Persistent "Book Now" bar pinned to the bottom of the viewport. Stays
 * out of the way until the user has scrolled a bit, then slides in and
 * stays visible while scrolling, except once the footer scrolls into
 * view (avoids covering the footer's own contact info/links) or on pages
 * that already lead with a booking form.
 *
 * Visibility is driven by plain scroll position + IntersectionObserver
 * state, toggled via CSS transform/opacity classes on an always-mounted
 * element (no framer-motion mount/unmount), per this site's established
 * pattern for scroll-driven UI.
 */
export function BookNowBanner() {
  const pathname = usePathname();
  const [pastThreshold, setPastThreshold] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const hidden = HIDDEN_PATH_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix),
  );

  useEffect(() => {
    if (hidden) return;

    const onScroll = () => setPastThreshold(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.getElementById("site-footer");
    if (footer) {
      observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { rootMargin: "0px", threshold: 0 },
      );
      observerRef.current.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, [hidden, pathname]);

  if (hidden) return null;

  const visible = pastThreshold && !footerVisible;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-gradient-to-r from-brand-deep to-brand-cyan shadow-[0_-8px_30px_-6px_rgba(1,36,83,0.45)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <p className="hidden text-sm font-semibold text-white sm:block">
            Ready to get moving again? Book your appointment today.
          </p>
          <a
            href={BUSINESS.telephoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-ink"
          >
            <svg
              className="h-4 w-4"
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
            <span>{BUSINESS.telephone}</span>
          </a>
          <Link
            href="/appointment-request/"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-deep shadow-sm transition-transform hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
