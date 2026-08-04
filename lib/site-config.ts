// Central, client-safe site configuration.
// Pure data only (no Node builtins) so this can be imported from both
// Server and Client Components without breaking the Turbopack build.

export const SITE_URL = "https://nexmedfl.com";
export const SITE_NAME = "NexMed";
export const SITE_DEFAULT_DESCRIPTION =
  "NexMed is a medical clinic in Ormond Beach, FL specializing in neuropathy treatment, spinal decompression therapy, knee pain treatment, and chiropractic care.";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "NexMed",
  telephone: "386-271-0050",
  telephoneHref: "tel:386-271-0050",
  logo: "https://nexmedfl.com/wp-content/uploads/2025/08/Screenshot-2025-08-21-at-7.33.07-PM.png",
  // The actual header wordmark logo image used on the live site (distinct
  // from the default OG/schema image above).
  headerLogo:
    "https://nexmedfl.com/wp-content/uploads/2025/08/Nexmed-Transparent-Background-1.avif",
  address: {
    streetAddress: "141 Sagebrush Trail, Suite C",
    addressLocality: "Ormond Beach",
    addressRegion: "FL",
    postalCode: "32174",
    addressCountry: "US",
  },
  addressDisplay: "141 Sagebrush Trail, Suite C Ormond Beach, FL 32174",
  openingHours: [
    "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00",
  ],
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/NexMedOrmond",
  instagram: "https://www.instagram.com/nexmedormond/",
  youtube: "https://www.youtube.com/channel/UCHhGf0vLqsVA6k-0hmLasvA",
};

export type NavLink = {
  label: string;
  href: string;
};

// Primary header / "Quick Links" footer navigation, matching the live site.
export const MAIN_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/meet-our-team/" },
  { label: "Services", href: "/services/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Appointment Request", href: "/appointment-request/" },
  { label: "Blog", href: "/blogs/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export type HeaderNavItem = {
  label: string;
  /** Omitted for items that are dropdown-toggle-only on the live site (e.g. "About Us"). */
  href?: string;
  children?: NavLink[];
  /** Grouped mega-menu columns — Services and Conditions. */
  categories?: ServiceCategory[];
};

export type ServiceCategory = {
  label: string;
  items: NavLink[];
};

// Services mega-menu categories. The clinic's active service catalogue is
// now scoped to four core services; grouped 2x2 for a clean mega-menu grid.
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    label: "Spine & Chiropractic Care",
    items: [
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
      {
        label: "Spinal Decompression Therapy",
        href: "/spinal-decompression-therapy/",
      },
    ],
  },
  {
    label: "Knee & Nerve Care",
    items: [
      { label: "Knee Pain Treatment", href: "/knee-pain-treatment/" },
      { label: "Neuropathy Treatment", href: "/neuropathy-treatment/" },
    ],
  },
];

// Conditions mega-menu categories — grouped by body region. Every
// condition currently deep-links to /conditions-we-treat/ (the hub page)
// since we don't yet have per-condition pages. The mega menu itself is
// the primary discovery surface for "what we treat".
export const CONDITION_CATEGORIES: ServiceCategory[] = [
  {
    label: "Spine",
    items: [
      { label: "Herniated Disc", href: "/conditions-we-treat/" },
      { label: "Bulging Disc", href: "/conditions-we-treat/" },
      { label: "Sciatica", href: "/conditions-we-treat/" },
      { label: "Spinal Stenosis", href: "/conditions-we-treat/" },
      { label: "Chronic Low Back Pain", href: "/conditions-we-treat/" },
      { label: "Neck Pain", href: "/conditions-we-treat/" },
      { label: "Whiplash Injuries", href: "/conditions-we-treat/" },
    ],
  },
  {
    label: "Knee & Joint",
    items: [
      { label: "Knee Osteoarthritis", href: "/conditions-we-treat/" },
      { label: "Chronic Knee Pain", href: "/conditions-we-treat/" },
      { label: "Meniscus Irritation", href: "/conditions-we-treat/" },
      {
        label: "Patellofemoral Pain Syndrome",
        href: "/conditions-we-treat/",
      },
    ],
  },
  {
    label: "Neuropathy & Nerve",
    items: [
      { label: "Peripheral Neuropathy", href: "/conditions-we-treat/" },
      { label: "Diabetic Neuropathy", href: "/conditions-we-treat/" },
      {
        label: "Chemotherapy-Induced Neuropathy",
        href: "/conditions-we-treat/",
      },
      { label: "Burning Feet Syndrome", href: "/conditions-we-treat/" },
      { label: "Numbness & Tingling", href: "/conditions-we-treat/" },
    ],
  },
];

// Header top-level nav. The Services + Conditions mega menus are the
// two primary discovery surfaces; both are sourced from the clinic's
// service/condition catalogue.
export const HEADER_NAV: HeaderNavItem[] = [
  {
    label: "Services",
    href: "/services/",
    categories: SERVICE_CATEGORIES,
  },
  {
    label: "Conditions",
    href: "/conditions-we-treat/",
    categories: CONDITION_CATEGORIES,
  },
  { label: "Reviews", href: "/reviews/" },
  {
    label: "About Us",
    children: [
      { label: "Meet Our Team", href: "/meet-our-team/" },
      { label: "Payment Plans", href: "/payment-plans/" },
      { label: "Financing Options", href: "/financing-options/" },
    ],
  },
  {
    label: "Appointment Request",
    href: "/appointment-request/",
    children: [
      {
        label: "Neuropathy Appointment Request",
        href: "/neuropathy-appointment-request/",
      },
    ],
  },
  { label: "Blog", href: "/blogs/" },
  { label: "Contact Us", href: "/contact-us/" },
];

// "Our Services" footer column — every individual service leaf page
// (existing + newly added), grouped in the same order as the header
// mega-menu categories.
export const FOOTER_SERVICES: NavLink[] = [
  { label: "Neuropathy Treatment", href: "/neuropathy-treatment/" },
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Spinal Decompression Therapy", href: "/spinal-decompression-therapy/" },
  { label: "Knee Pain Treatment", href: "/knee-pain-treatment/" },
];

// Legal links shown in the footer bar, matching the live site.
export const FOOTER_LEGAL: NavLink[] = [
  { label: "HIPPA Privacy Policy", href: "/hippa-privacy-policy/" },
  { label: "No Surprises Act", href: "/no-suprises-act/" },
];

// Footer "Get in Touch" CTA band — copy taken verbatim from the live footer.
export const FOOTER_CTA = {
  eyebrow: "Get in Touch",
  heading: "Take the First Step to Better Health",
  body: "Ready to feel your best? Contact NexMed today to book your appointment or explore our personalized care. Together, we'll help you achieve lasting health and wellness!",
  buttonLabel: "Contact Now",
  buttonHref: "/contact-us/",
};

// Footer brand tagline, taken verbatim from the live footer.
export const FOOTER_TAGLINE =
  "NexMed delivers advanced medical care with compassion, expertise, and innovation—helping you live healthier and better.";
