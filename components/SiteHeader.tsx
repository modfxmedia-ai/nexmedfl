"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BUSINESS, HEADER_NAV, SITE_NAME } from "@/lib/site-config";
import { MegaMenu } from "@/components/header/MegaMenu";
import { DropdownPanel } from "@/components/header/DropdownPanel";
import { MobileDrawer } from "@/components/header/MobileDrawer";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      className="h-3 w-3 shrink-0 text-current"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

type IndicatorRect = { left: number; width: number } | null;

export function SiteHeader() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [indicatorRect, setIndicatorRect] = useState<IndicatorRect>(null);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  const navRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close any open dropdown/drawer on route change, adjust state during
  // render rather than in an effect, to avoid setState-in-effect.
  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close any open dropdown on Escape.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function updateIndicator(e: React.MouseEvent<HTMLElement>) {
    const parent = navRef.current;
    if (!parent) return;
    const elRect = e.currentTarget.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    setIndicatorRect({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
  }

  function openWithIntent(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }

  function closeWithIntent() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function isActive(href?: string) {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname?.startsWith(href);
  }

  const openHeaderNavItem = HEADER_NAV.find(
    (item) => item.label === openMenu && item.categories,
  );

  return (
    <>
      {/* Utility bar, slim dark strip; collapses on scroll */}
      <motion.div
        aria-hidden={isScrolled}
        animate={{
          height: isScrolled ? 0 : 38,
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        className="overflow-hidden bg-ink text-white/85"
      >
        <div className="mx-auto flex h-[38px] max-w-[1280px] items-center justify-between gap-4 px-4 text-[13px] sm:px-6 lg:px-8">
          <a
            href={BUSINESS.telephoneHref}
            className="flex items-center gap-2 font-medium transition-colors hover:text-brand-cyan"
          >
            <svg
              className="h-3.5 w-3.5 text-brand-cyan"
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
            <span className="text-brand-cyan">{BUSINESS.telephone}</span>
            <span className="hidden text-white/50 sm:inline">
              · Ormond Beach, FL
            </span>
          </a>
          <div className="hidden items-center gap-4 text-white/60 md:flex">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="7.25" />
                <path d="M10 6v4l2.5 2" strokeLinecap="round" />
              </svg>
              {BUSINESS.hoursDisplay}
            </span>
            <span className="h-3 w-px bg-white/20" />
            <Link
              href="/reviews/"
              className="font-medium transition-colors hover:text-brand-cyan"
            >
              Patient Reviews
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main nav, full-width glass bar, flush against the utility bar */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-surface-border shadow-[0_8px_30px_-10px_rgba(1,36,83,0.18)]"
            : "border-surface-border/60"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex items-center justify-between gap-3 transition-[padding] duration-300 ${
              isScrolled ? "py-2.5" : "py-4"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label={`${SITE_NAME}, Home`}
            >
              <motion.span
                animate={{ scale: isScrolled ? 0.92 : 1 }}
                transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                className="flex items-center"
              >
                <Image
                  src={BUSINESS.logo}
                  alt={SITE_NAME}
                  width={BUSINESS.logoWidth}
                  height={BUSINESS.logoHeight}
                  priority
                  className="h-14 w-auto sm:h-16"
                />
              </motion.span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex">
              <ul
                ref={navRef}
                onMouseLeave={() => setIndicatorRect(null)}
                className="relative flex items-stretch gap-1"
              >
                {/* Sliding underline indicator */}
                <motion.span
                  aria-hidden
                  animate={{
                    opacity: indicatorRect ? 1 : 0,
                    left: indicatorRect?.left ?? 0,
                    width: indicatorRect?.width ?? 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="pointer-events-none absolute bottom-0 z-0 h-[2px] rounded-full bg-gradient-to-r from-brand-cyan to-brand-deep"
                />

                {HEADER_NAV.map((item) => {
                  const hasPanel = Boolean(item.categories || item.children);
                  const active = isActive(item.href);
                  const menuOpen = openMenu === item.label;

                  return (
                    <li
                      key={item.label}
                      className="relative flex items-center"
                      onMouseEnter={(e) => {
                        updateIndicator(e);
                        if (hasPanel) openWithIntent(item.label);
                      }}
                      onMouseLeave={hasPanel ? closeWithIntent : undefined}
                    >
                      <div className="flex items-center gap-1 px-2.5 py-2.5">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className={`whitespace-nowrap text-[14px] font-medium tracking-tight transition-colors ${
                              active || menuOpen
                                ? "text-brand-deep"
                                : "text-ink hover:text-brand-deep"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span
                            className={`whitespace-nowrap text-[14px] font-medium tracking-tight ${
                              menuOpen ? "text-brand-deep" : "text-ink"
                            }`}
                          >
                            {item.label}
                          </span>
                        )}
                        {hasPanel ? (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} menu`}
                            aria-expanded={menuOpen}
                            onClick={() =>
                              setOpenMenu((current) =>
                                current === item.label ? null : item.label,
                              )
                            }
                            className={`flex h-4 w-4 items-center justify-center transition-colors ${
                              menuOpen ? "text-brand-deep" : "text-ink-muted"
                            }`}
                          >
                            <Chevron open={menuOpen} />
                          </button>
                        ) : null}
                      </div>

                      {/* Small dropdowns (e.g. "About Us") stay anchored
                          directly under their own trigger. */}
                      <AnimatePresence>
                        {item.children && menuOpen ? (
                          <div
                            onMouseEnter={cancelClose}
                            onMouseLeave={closeWithIntent}
                            className="absolute left-0 top-full z-20"
                          >
                            <DropdownPanel
                              links={item.children}
                              viewAllHref={item.href}
                              viewAllLabel={`View all ${item.label}`}
                              onNavigate={() => setOpenMenu(null)}
                            />
                          </div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mega-menu panel, rendered once, centered under the full
                header row rather than anchored to the trigger's own
                position, so wide panels (Services/Conditions) stay fully
                on-screen regardless of which nav item opened them. */}
            <AnimatePresence>
              {openHeaderNavItem ? (
                <div
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeWithIntent}
                  className="absolute left-1/2 top-full z-20 -translate-x-1/2"
                >
                  <MegaMenu
                    label={openHeaderNavItem.label}
                    categories={openHeaderNavItem.categories!}
                    onNavigate={() => setOpenMenu(null)}
                  />
                </div>
              ) : null}
            </AnimatePresence>

            {/* CTA (desktop), gradient pill with shimmer */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/appointment-request/"
                  className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(1,36,83,0.55)] transition-shadow hover:shadow-[0_14px_36px_-8px_rgba(1,36,83,0.7)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full"
                  />
                  <span className="relative">Book Appointment</span>
                  <svg
                    className="relative h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6h8m0 0L6 2m4 4L6 10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border/60 bg-white/70 text-ink transition-colors hover:bg-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8h16M4 16h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={HEADER_NAV}
      />
    </>
  );
}
