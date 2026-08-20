import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  FOOTER_CONDITIONS,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  type NavLink,
} from "@/lib/site-config";
import { SERVICE_AREA_CITIES } from "@/lib/service-area-content";
import { BLOG_POSTS, getBlogPostPath } from "@/lib/posts";

const MAIN_PAGES: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Meet Our Team", href: "/meet-our-team/" },
  { label: "Services", href: "/services/" },
  { label: "Conditions We Treat", href: "/conditions-we-treat/" },
  { label: "Car Accidents & Personal Injury", href: "/car-accidents-personal-injury/" },
  { label: "Payment Plans", href: "/payment-plans/" },
  { label: "Financing Options", href: "/financing-options/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Appointment Request", href: "/appointment-request/" },
  { label: "Neuropathy Appointment Request", href: "/neuropathy-appointment-request/" },
  { label: "Blog", href: "/blogs/" },
  { label: "Areas We Serve", href: "/service-areas/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Career Opportunities", href: "/career-opportunities/" },
];

const SERVICE_AREA_LINKS: NavLink[] = [
  { label: "Areas We Serve (Overview)", href: "/service-areas/" },
  ...SERVICE_AREA_CITIES.map((city) => ({
    label: `${city.name}, FL`,
    href: `/service-areas/${city.slug}/`,
  })),
];

const BLOG_LINKS: NavLink[] = BLOG_POSTS.map((post) => ({
  label: post.title,
  href: getBlogPostPath(post),
}));

const LEGAL_LINKS = FOOTER_LEGAL.filter((link) => link.href !== "/sitemap/");

function LinkColumn({ heading, links }: { heading: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
        {heading}
      </h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-brand-deep"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Human-readable HTML sitemap at /sitemap/, listing every page on the
 * site grouped by section. Complements (does not replace) the machine
 * XML sitemaps at /sitemap_index.xml, /page-sitemap.xml, /post-sitemap.xml.
 */
export function SitemapPageBody() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(119,189,197,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-deep">
              Sitemap
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              Every Page on Our Website
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-ink-soft">
              Use this page to quickly find any service, condition, service area, or
              blog post on the Ormond Spine &amp; Nerve Center website.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <LinkColumn heading="Main Pages" links={MAIN_PAGES} />
          </Reveal>
          <Reveal delay={0.05}>
            <LinkColumn heading="Our Services" links={FOOTER_SERVICES} />
          </Reveal>
          <Reveal delay={0.1}>
            <LinkColumn heading="Conditions We Treat" links={FOOTER_CONDITIONS} />
          </Reveal>
          <Reveal delay={0.15}>
            <LinkColumn heading="Legal" links={LEGAL_LINKS} />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <LinkColumn heading="Areas We Serve" links={SERVICE_AREA_LINKS} />
          </Reveal>
          <div className="sm:col-span-1 lg:col-span-3">
            <Reveal delay={0.05}>
              <LinkColumn heading="Blog Posts" links={BLOG_LINKS} />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
