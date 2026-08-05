import { BUSINESS } from "@/lib/site-config";
import { Reveal } from "@/components/Reveal";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=141+Sagebrush+Trail+Suite+C+Ormond+Beach+FL+32174&output=embed";

const CONTACT_ITEMS = [
  {
    label: "Visit Us",
    value: BUSINESS.addressDisplay,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      BUSINESS.addressDisplay,
    )}`,
    icon: "M12 21s-7.5-4.6-7.5-11A7.5 7.5 0 0 1 19.5 10c0 6.4-7.5 11-7.5 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
  {
    label: "Call Us",
    value: BUSINESS.telephone,
    href: BUSINESS.telephoneHref,
    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z",
  },
  {
    label: "Email Us",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
    icon: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  },
];

/**
 * "Visit Our Office" section — embedded Google map paired with the
 * office address, phone, and email. Rendered on the homepage just above
 * the site footer.
 */
export function LocationSection() {
  return (
    <section className="bg-bg-tinted">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
            Find Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Visit Our Ormond Beach Office
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Stop by or reach out any time — our team is ready to help you
            start your treatment journey.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-10">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-surface-border bg-white p-8 shadow-[0_24px_60px_-30px_rgba(20,121,232,0.25)] sm:p-10">
              <ul className="flex flex-col gap-7">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-deep text-white">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={item.icon} />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="mt-1 block text-base font-semibold leading-snug text-ink transition-colors hover:text-brand-deep"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Map embed */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-80 overflow-hidden rounded-2xl border border-surface-border shadow-[0_24px_60px_-30px_rgba(20,121,232,0.25)] lg:h-full lg:min-h-[360px]">
              <iframe
                src={MAP_EMBED_SRC}
                title={`${BUSINESS.name} location map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
