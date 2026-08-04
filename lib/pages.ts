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
    title: "NexMed: Neuropathy, Spinal Decompression & Knee Pain Care",
    description:
      "NexMed in Ormond Beach, FL specializes in neuropathy treatment, spinal decompression, knee pain treatment, and chiropractic care. Restore your health today. Book now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/Screenshot-2025-08-21-at-7.33.07-PM.png",
    datePublished: "2025-09-05T16:16:55+00:00",
    dateModified: "2025-09-10T20:32:43+00:00",
  },
  {
    path: "/payment-plans/",
    title: "Payment Plans - NexMed",
    description:
      "NexMed provides expert neuropathy, spine, and knee care. Explore our Payment Plans page to discover personalized wellness plans.",
    datePublished: "2026-06-22T21:17:26+00:00",
    dateModified: "2026-06-22T21:18:13+00:00",
  },
  {
    path: "/financing-options/",
    title: "Financing Options - NexMed",
    description:
      "NexMed provides expert neuropathy, spine, and knee care. Explore our Financing Options page to discover personalized wellness plans.",
    datePublished: "2026-06-22T19:27:47+00:00",
    dateModified: "2026-06-22T19:28:12+00:00",
  },
  {
    path: "/no-suprises-act/",
    title: "No Surprises Act and Medical Billing Protections | NexMed",
    description:
      "Understand your rights under the No Surprises Act at NexMed. Learn about our transparent medical billing practices and protections against unexpected charges.",
    datePublished: "2025-08-19T22:31:47+00:00",
    dateModified: "2026-04-09T04:56:42+00:00",
  },
  {
    path: "/hippa-privacy-policy/",
    title: "HIPAA Privacy Policy and Patient Data Protection | NexMed",
    description:
      "Read NexMed's HIPAA privacy policy to learn how we use and protect your medical information. Review your privacy rights and contact us with questions.",
    datePublished: "2025-08-19T22:25:14+00:00",
    dateModified: "2026-04-09T04:56:29+00:00",
  },
  {
    path: "/career-opportunities/",
    title: "NexMed Career Opportunities: Explore Open Positions & Apply",
    description:
      "Explore NexMed career opportunities in Ormond Beach, FL. View open positions, learn about benefits, and apply online to join our healthcare team today.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/COMING-SOON-copy-e1755484144871.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:55:54+00:00",
  },
  {
    path: "/appointment-request/",
    title: "Appointment Request | Schedule Your Visit to NexMed Clinic",
    description:
      "Request your appointment at NexMed today. Our team offers specialized care in neuropathy, spinal decompression, and knee pain. Start your path to recovery now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/call-center-smiling-female-support-600nw-1187046229-removebg-preview-e1755637568819.png",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:52:00+00:00",
  },
  {
    path: "/contact-us/",
    title: "Contact NexMed | Connect with Our Medical Treatment Experts",
    description:
      "Have questions? Contact NexMed to learn more about our specialized medical treatments. Our team is ready to help you find the right path to wellness now.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1548-1-1024x768.jpg",
    datePublished: "2025-08-17T16:02:58+00:00",
    dateModified: "2026-04-09T04:51:46+00:00",
  },
  {
    path: "/blogs/",
    title: "NexMed Health & Wellness Blog | Medical Insights & Tips",
    description:
      "Read the NexMed blog for expert advice on neuropathy, spinal decompression, and knee pain care. Stay updated with the latest trends in medical wellness and recovery.",
    datePublished: "2025-08-17T16:02:58+00:00",
    dateModified: "2026-04-09T04:51:33+00:00",
  },
  {
    path: "/neuropathy-appointment-request/",
    title: "Neuropathy Appointment Request | Expert Care at NexMed",
    description:
      "Ready to find relief from nerve pain? Book your specialized neuropathy consultation at NexMed. Our advanced treatments help you get back to a pain-free life.",
    image: "https://nexmedfl.com/wp-content/uploads/2025/09/2649477.webp",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:50:56+00:00",
  },
  {
    path: "/reviews/",
    title: "Patient Testimonials and Clinical Success Stories | NexMed",
    description:
      "Read what our patients have to say about their experience at NexMed. See how our personalized medical treatments and regenerative therapies change lives today!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/young-family-with-their-sons-home-having-fun_1303-20999-e1755551149385.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:50:17+00:00",
  },
  {
    path: "/knee-pain-treatment/",
    title: "Trusted Knee Pain Treatment in Ormond Beach, Florida",
    description:
      "Find relief with expert Knee Pain Treatment at NexMed in Ormond Beach, FL. Our non-surgical regenerative therapies help you move pain-free. Schedule a visit!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/shutterstock_2468278869_1-e1755546015713.jpeg",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:46:07+00:00",
  },
  {
    path: "/neuropathy-treatment/",
    title: "Neuropathy Treatment Ormond Beach | Nerve Pain Relief Clinic",
    description:
      "Find lasting relief with neuropathy treatment at NexMed in Ormond Beach, FL. Our advanced therapies target nerve pain to restore your mobility. Schedule today!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/Neuropathy-iStock-893912334-1.jpg",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:44:32+00:00",
  },
  {
    path: "/services/",
    title: "Medical & Wellness Services at NexMed in Ormond Beach, FL",
    description:
      "Explore neuropathy, spinal decompression, knee pain, and chiropractic care services at NexMed in Ormond Beach, FL. Personalized treatment plans for lasting relief.",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:44:20+00:00",
  },
  {
    path: "/meet-our-team/",
    title: "Meet the Specialists at NexMed in Ormond Beach, FL",
    description:
      "Meet the expert medical team at NexMed in Ormond Beach, FL. Our dedicated providers specialize in neuropathy, spinal decompression, and knee pain care. Visit our clinic!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/hands-collaboration-healthcare-with-medicine-team-huddle-circle-hospital-insurance-medical-teamwork-motivation-solidarity-with-doctor-nurse-group-clinic_590464-90372-e1755483593747.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:44:07+00:00",
  },

  // --- New service pages (equipment/program-driven offerings added
  // alongside the existing specialties above; kept distinct from
  // existing pages to avoid keyword cannibalization). ---
  {
    path: "/chiropractic-care/",
    title: "Chiropractic Care in Ormond Beach, FL | NexMed",
    description:
      "Relieve back, neck, and joint pain with expert Chiropractic Care at NexMed in Ormond Beach, FL. Personalized spinal adjustments to restore mobility. Book now!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/spinal-decompression-therapy/",
    title: "Spinal Decompression Therapy in Ormond Beach, FL | NexMed",
    description:
      "Non-surgical Spinal Decompression Therapy at NexMed in Ormond Beach, FL relieves pressure on discs and nerves to ease chronic back pain. Schedule a visit!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },

  {
    path: "/conditions-we-treat/",
    title: "Conditions We Treat in Ormond Beach, FL | NexMed",
    description:
      "Browse the full range of conditions treated at NexMed in Ormond Beach, FL — from spine and knee pain to neuropathy.",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
];

export function getStaticPage(path: string): StaticPageEntry {
  const page = STATIC_PAGES.find((entry) => entry.path === path);
  if (!page) {
    throw new Error(`Unknown static page path: ${path}`);
  }
  return page;
}
