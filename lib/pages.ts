// Client-safe pure data describing every static/service route on the site.
// Used to generate page-sitemap.xml and can be reused anywhere metadata
// needs to be looked up by path.

export interface StaticPageEntry {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}

export const STATIC_PAGES: StaticPageEntry[] = [
  {
    path: "/",
    title: "Chiropractor Ormond Beach FL | Ormond Spine & Nerve",
    description:
      "Trusted chiropractor in Ormond Beach, FL offering spinal decompression, neuropathy treatment & more. Call Ormond Spine & Nerve Center today!",
    image: "/images/logo-v3.png",
    datePublished: "2025-09-05T16:16:55+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/payment-plans/",
    title: "Payment Plans | Ormond Spine & Nerve Center",
    description:
      "Explore flexible in-office payment plans at Ormond Spine & Nerve Center in Ormond Beach, FL and start treatment without delay.",
    datePublished: "2026-06-22T21:17:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/financing-options/",
    title: "Financing Options | Ormond Spine & Nerve Center",
    description:
      "Learn about third-party financing options at Ormond Spine & Nerve Center in Ormond Beach, FL to help make treatment costs easier to manage.",
    datePublished: "2026-06-22T19:27:47+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/no-suprises-act/",
    title: "No Surprises Act and Medical Billing Protections | Ormond Spine & Nerve Center",
    description:
      "Learn your No Surprises Act rights at Ormond Spine & Nerve Center, including protection from surprise bills and how to request a Good Faith Estimate.",
    datePublished: "2025-08-19T22:31:47+00:00",
    dateModified: "2026-04-09T04:56:42+00:00",
  },
  {
    path: "/hippa-privacy-policy/",
    title: "HIPAA Privacy Policy and Patient Data Protection | Ormond Spine & Nerve Center",
    description:
      "Read our HIPAA Notice of Privacy Practices to learn how Ormond Spine & Nerve Center protects your health information and what privacy rights you have.",
    datePublished: "2025-08-19T22:25:14+00:00",
    dateModified: "2026-04-09T04:56:29+00:00",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | Ormond Spine & Nerve Center",
    description:
      "Read Ormond Spine & Nerve Center's website privacy policy to learn what information we collect, how we use it, and your choices.",
    datePublished: "2026-08-17T00:00:00+00:00",
    dateModified: "2026-08-17T00:00:00+00:00",
  },
  {
    path: "/terms-and-conditions/",
    title: "Terms & Conditions | Ormond Spine & Nerve Center",
    description:
      "Review the Terms & Conditions governing your use of the Ormond Spine & Nerve Center website, including appointment requests and third-party links.",
    datePublished: "2026-08-17T00:00:00+00:00",
    dateModified: "2026-08-17T00:00:00+00:00",
  },
  {
    path: "/career-opportunities/",
    title: "Ormond Spine & Nerve Center Career Opportunities: Explore Open Positions & Apply",
    description:
      "Interested in joining Ormond Spine & Nerve Center in Ormond Beach, FL? Learn about typical roles, clinic benefits, and how to send us your resume.",
    image: "/images/legacy/career-opportunities-coming-soon.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:55:54+00:00",
  },
  {
    path: "/appointment-request/",
    title: "Book an Appointment | Ormond Spine & Nerve Center",
    description:
      "Request your appointment at Ormond Spine & Nerve Center in Ormond Beach, FL. Learn what to expect, how to prepare, and book your visit today.",
    image: "/images/legacy/appointment-request-support.png",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/contact-us/",
    title: "Contact Us | Ormond Spine & Nerve Center",
    description:
      "Contact Ormond Spine & Nerve Center in Ormond Beach, FL. Find our location, hours, phone, and email, or send us a message to get started today.",
    image: "/images/legacy/contact-us-office.jpg",
    datePublished: "2025-08-17T16:02:58+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/blogs/",
    title: "Health & Wellness Blog | Ormond Spine & Nerve Center",
    description:
      "Explore spine, knee, neuropathy, and recovery insights from Ormond Spine & Nerve Center in Ormond Beach, FL to support your health and pain-free living.",
    datePublished: "2025-08-17T16:02:58+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/neuropathy-appointment-request/",
    title: "Neuropathy Consultation | Ormond Spine & Nerve Center",
    description:
      "Book a neuropathy consultation at Ormond Spine & Nerve Center in Ormond Beach, FL. Learn what to expect and take the first step toward nerve pain relief.",
    image: "/images/legacy/neuropathy-consultation.webp",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/reviews/",
    title: "Patient Reviews | Ormond Spine & Nerve Center",
    description:
      "Read real patient reviews of Ormond Spine & Nerve Center in Ormond Beach, FL and see why patients trust us for chiropractic and pain relief care.",
    image: "/images/legacy/reviews-family.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/knee-pain-treatment/",
    title: "Knee Pain Treatment in Ormond Beach, FL",
    description:
      "Non-surgical knee pain treatment in Ormond Beach, FL combining decompression, shockwave, and laser therapy to restore movement. Schedule a visit!",
    image: "/images/legacy/knee-pain-treatment-hero.jpeg",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/neuropathy-treatment/",
    title: "Neuropathy Treatment in Ormond Beach, FL",
    description:
      "Neuropathy treatment in Ormond Beach, FL for nerve pain, numbness, and tingling in the hands and feet. Restore nerve health and mobility. Book now!",
    image: "/images/legacy/neuropathy-treatment-hero.jpg",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/services/",
    title: "Chiropractic & Spine Services | Ormond Beach, FL",
    description:
      "Explore chiropractic and spine services in Ormond Beach at Ormond Spine & Nerve Center. From decompression to neuropathy care, book your appointment today!",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/meet-our-team/",
    title: "Meet Our Team | Ormond Spine & Nerve Center",
    description:
      "Meet the Ormond Beach, FL care team at Ormond Spine & Nerve Center, dedicated to chiropractic, spinal decompression, and neuropathy treatment.",
    image: "/images/legacy/meet-our-team-hero.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },

  // --- New service pages (equipment/program-driven offerings added
  // alongside the existing specialties above; kept distinct from
  // existing pages to avoid keyword cannibalization). ---
  {
    path: "/chiropractic-care/",
    title: "Chiropractic Care in Ormond Beach, FL",
    description:
      "Chiropractic care in Ormond Beach, FL for back pain, neck pain, and sciatica. Personalized spinal adjustments at Ormond Spine & Nerve Center. Book today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/spinal-decompression-therapy/",
    title: "Spinal Decompression Therapy in Ormond Beach, FL",
    description:
      "Non-surgical spinal decompression in Ormond Beach, FL relieves disc and nerve pressure from herniated discs, sciatica, and stenosis. Schedule your visit!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/knee-decompression-therapy/",
    title: "Knee Decompression Therapy in Ormond Beach, FL",
    description:
      "Knee decompression therapy in Ormond Beach, FL gently unloads the knee joint to ease arthritis and chronic joint pain. Book your appointment today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/shockwave-therapy/",
    title: "Shockwave Therapy in Ormond Beach, FL",
    description:
      "Shockwave therapy in Ormond Beach, FL stimulates healing for plantar fasciitis, tennis elbow, and chronic tendon pain. Schedule your session today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/laser-therapy/",
    title: "Laser Therapy in Ormond Beach, FL",
    description:
      "Class IV laser therapy in Ormond Beach, FL reduces inflammation and speeds healing for muscles, tendons, and nerves. Book your appointment today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/compression-therapy/",
    title: "Compression Therapy in Ormond Beach, FL",
    description:
      "Normatec compression therapy in Ormond Beach, FL improves circulation, reduces swelling, and speeds recovery. Schedule your session today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },
  {
    path: "/car-accidents-personal-injury/",
    title: "Car Accident & Injury Care in Ormond Beach, FL",
    description:
      "Injured in a car accident? Get same-day evaluations, whiplash care, and injury documentation at Ormond Spine & Nerve Center in Ormond Beach, FL.",
    datePublished: "2026-08-05T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },

  {
    path: "/conditions-we-treat/",
    title: "Conditions Treated | Ormond Beach Chiropractor",
    description:
      "Explore all conditions treated at Ormond Spine & Nerve Center. Your Ormond Beach chiropractor for spine, nerve, joint & more. Call to book today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-05T00:00:00+00:00",
  },

  // --- Dedicated /conditions/[category]/ pages (deeper, per-sub-condition
  // write-ups), titles/descriptions kept in sync with CONDITION_PAGES in
  // lib/condition-pages-content.ts, which is the source of truth. ---
  {
    path: "/conditions/spine/",
    title: "Spine Conditions We Treat | Ormond Beach, FL",
    description:
      "Chiropractic & spinal decompression care in Ormond Beach, FL for herniated discs, sciatica, spinal stenosis, and chronic back pain. Book today!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/knee-joint/",
    title: "Knee & Joint Conditions | Ormond Beach, FL",
    description:
      "Knee decompression and joint pain treatment in Ormond Beach, FL for osteoarthritis, meniscus issues, and chronic knee pain. Schedule your visit!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/neuropathy-nerve/",
    title: "Neuropathy & Nerve Conditions | Ormond Beach",
    description:
      "Nerve pain treatment in Ormond Beach, FL for peripheral and diabetic neuropathy, burning feet, and numbness & tingling. Book your consultation!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/joint-extremity/",
    title: "Joint & Extremity Pain Relief | Ormond Beach",
    description:
      "Treatment for shoulder pain, frozen shoulder, tennis elbow, carpal tunnel, hip pain & plantar fasciitis in Ormond Beach, FL. Schedule today!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/muscle-soft-tissue/",
    title: "Muscle & Soft Tissue Pain | Ormond Beach, FL",
    description:
      "Care for muscle strains, trigger points, tendinitis, and sports injuries in Ormond Beach, FL using laser & chiropractic therapy. Book now!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/circulatory-recovery/",
    title: "Circulatory & Recovery Care | Ormond Beach, FL",
    description:
      "Compression therapy in Ormond Beach, FL for poor circulation, leg swelling, and athletic recovery to help you feel lighter, faster. Book today!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/headaches/",
    title: "Headache & Migraine Relief | Ormond Beach, FL",
    description:
      "Chiropractic care in Ormond Beach, FL for cervicogenic headaches, tension headaches, and neck-related migraines. Schedule your visit today!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/conditions/wellness/",
    title: "Wellness & Preventative Care | Ormond Beach",
    description:
      "Preventative chiropractic care in Ormond Beach, FL supporting mobility, healthy aging, and fall prevention for long-term wellness. Book now!",
    datePublished: "2026-08-06T00:00:00+00:00",
    dateModified: "2026-08-06T00:00:00+00:00",
  },
  {
    path: "/sitemap/",
    title: "Sitemap | Ormond Spine & Nerve Center",
    description:
      "Browse a full list of every page on the Ormond Spine & Nerve Center website, including services, conditions, service areas, and blog posts.",
    datePublished: "2026-08-20T00:00:00+00:00",
    dateModified: "2026-08-20T00:00:00+00:00",
  },
];

export function getStaticPage(path: string): StaticPageEntry {
  const page = STATIC_PAGES.find((entry) => entry.path === path);
  if (!page) {
    throw new Error(`Unknown static page path: ${path}`);
  }
  return page;
}
