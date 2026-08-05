import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  FOOTER_CONDITIONS,
  FOOTER_CTA,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  FOOTER_TAGLINE,
  MAIN_NAV,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/site-config";

const SOCIAL_ICON_PATHS: Record<string, string> = {
  Facebook:
    "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  Instagram:
    "M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.89 1.77 1.15.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.34 1.05-.05 1.37-.06 4.04-.06Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  Youtube:
    "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z",
};

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={SOCIAL_ICON_PATHS[label]} />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-ink text-white/80">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">
              {FOOTER_CTA.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {FOOTER_CTA.heading}
            </h2>
            <p className="mt-3 text-base text-white/70">{FOOTER_CTA.body}</p>
          </div>
          <Link
            href={FOOTER_CTA.buttonHref}
            className="shrink-0 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cta-hover active:bg-brand-cta-active"
          >
            {FOOTER_CTA.buttonLabel}
          </Link>
        </div>
      </div>

      {/* Column grid */}
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Image
              src={BUSINESS.logo}
              alt={SITE_NAME}
              width={BUSINESS.logoWidth}
              height={BUSINESS.logoHeight}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {FOOTER_TAGLINE}
            </p>
            <nav aria-label="Legal links" className="mt-5 flex flex-col gap-2">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-brand-cyan"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <nav aria-label="Our Services">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Our Services
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Conditions We Treat">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Conditions We Treat
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_CONDITIONS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick Links">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h2>
            <a
              href={BUSINESS.telephoneHref}
              className="mt-4 block text-sm font-semibold text-white transition-colors hover:text-brand-cyan"
            >
              {BUSINESS.telephone}
            </a>
            <a
              href={BUSINESS.emailHref}
              className="mt-2 block text-sm font-semibold text-white transition-colors hover:text-brand-cyan"
            >
              {BUSINESS.email}
            </a>
            <p className="mt-2 text-sm text-white/60">
              {BUSINESS.addressDisplay}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon label="Facebook" href={SOCIAL_LINKS.facebook} />
              <SocialIcon label="Instagram" href={SOCIAL_LINKS.instagram} />
              <SocialIcon label="Youtube" href={SOCIAL_LINKS.youtube} />
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>All Copyrights Reserved © {new Date().getFullYear()}.</p>
          <a
            href="https://www.modfxmedia.com/"
            className="transition-colors hover:text-brand-cyan"
          >
            Powered By ModFXMedia.
          </a>
        </div>
      </div>
    </footer>
  );
}
