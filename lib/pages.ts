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
    title: "NexMed: Neuropathy, Wound Care & Regenerative Therapies",
    description:
      "NexMed in Ormond Beach, FL specializes in neuropathy, medical weight loss, HRT, and wound care. Restore your health with personalized therapy today. Book now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/Screenshot-2025-08-21-at-7.33.07-PM.png",
    datePublished: "2025-09-05T16:16:55+00:00",
    dateModified: "2025-09-10T20:32:43+00:00",
  },
  {
    path: "/payment-plans/",
    title: "Payment Plans - NexMed",
    description:
      "NexMed provides expert neuropathy care, HRT, and regenerative medicine. Explore our Payment Plans page to discover personalized wellness plans.",
    datePublished: "2026-06-22T21:17:26+00:00",
    dateModified: "2026-06-22T21:18:13+00:00",
  },
  {
    path: "/financing-options/",
    title: "Financing Options - NexMed",
    description:
      "NexMed provides expert neuropathy care, HRT, and regenerative medicine. Explore our Financing Options page to discover personalized wellness plans.",
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
      "Request your appointment at NexMed today. Our team offers specialized care in neuropathy, wound care, and regenerative therapy. Start your path to recovery now!",
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
      "Read the NexMed blog for expert advice on neuropathy, HRT, and regenerative medicine. Stay updated with the latest trends in medical wellness and recovery.",
    datePublished: "2025-08-17T16:02:58+00:00",
    dateModified: "2026-04-09T04:51:33+00:00",
  },
  {
    path: "/wound-care-appointment-request/",
    title: "Request an Advanced Wound Care Appointment | NexMed",
    description:
      "Schedule your advanced wound care consultation at NexMed today. Our specialists provide expert treatment to ensure fast healing and prevent further infection.",
    image: "https://nexmedfl.com/wp-content/uploads/2025/09/2724253.jpg",
    datePublished: "2025-08-18T21:15:06+00:00",
    dateModified: "2026-04-09T04:51:21+00:00",
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
    path: "/erectile-dysfunction-treatment/",
    title: "Erectile Dysfunction Treatment in Ormond Beach, FL",
    description:
      "Restore confidence with Erectile Dysfunction treatment at NexMed in Ormond Beach, FL. Our non-surgical therapies help improve performance and health. Book now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/Erectile_Dysfunction.webp",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:50:06+00:00",
  },
  {
    path: "/prp-trigger-point-injections/",
    title: "PRP Trigger Point Injections in Ormond Beach, Florida",
    description:
      "Relieve chronic pain with PRP and Trigger Point Injections at NexMed in Ormond Beach, FL. Our specialists use natural therapies to speed up healing. Book today!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/Screen-Shot-2020-02-20-at-5.21.36-pm-e1755546670538.png",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:49:50+00:00",
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
    path: "/peptide-therapy/",
    title: "Peptide Therapy in Ormond Beach | Peptide Therapy Near Me",
    description:
      "Unlock your potential with Peptide Therapy at NexMed in Ormond Beach, FL. Improve recovery, aging, and wellness with customized peptide protocols. Call us!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/09/face-treatment-concept_173387-6793.jpeg",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:45:49+00:00",
  },
  {
    path: "/medical-weight-loss/",
    title: "Medical Weight Loss in Ormond Beach, FL | NexMed",
    description:
      "Start your journey with Medical Weight Loss at NexMed in Ormond Beach, FL. Our doctor-led programs offer personalized plans for lasting results. Book now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/depositphotos_265155160-stock-photo-lipo-laser-hardware-cosmetology-body_jpg.avif",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:45:30+00:00",
  },
  {
    path: "/hormone-replacement-therapy/",
    title: "Hormone Replacement Therapy Ormond Beach | HRT Specialists",
    description:
      "Optimize your health with Hormone Replacement Therapy at NexMed in Ormond Beach, FL. Our HRT programs restore energy, focus, and vitality. Book a consult today!",
    image: "https://nexmedfl.com/wp-content/uploads/2025/09/1918599.jpg",
    datePublished: "2025-09-04T21:23:26+00:00",
    dateModified: "2026-04-09T04:45:17+00:00",
  },
  {
    path: "/regenerative-medicine/",
    title: "Regenerative Medicine Ormond Beach | Joint Pain Relief Care",
    description:
      "Discover healing through regenerative medicine at NexMed in Ormond Beach FL. We use cutting-edge therapies to repair tissue and reduce pain naturally. Book now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/09/fbioe-10-789644-g001.jpg",
    datePublished: "2025-09-04T21:23:26+00:00",
    dateModified: "2026-04-09T04:45:05+00:00",
  },
  {
    path: "/wound-care/",
    title: "Wound Care Treatment | Wound Care Specialist Ormond Beach",
    description:
      "Get expert advanced wound care at NexMed in Ormond Beach, FL. Our specialized treatments focus on fast healing and preventing infections. Book your consult now!",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/09/at-home-wound-care-scaled-1.webp",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:44:44+00:00",
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
      "Explore the comprehensive medical services at NexMed in Ormond Beach, FL. From HRT to weight loss and wound care, we offer personalized wellness plans for you.",
    datePublished: "2025-08-17T16:02:26+00:00",
    dateModified: "2026-04-09T04:44:20+00:00",
  },
  {
    path: "/meet-our-team/",
    title: "Meet the Specialists at NexMed in Ormond Beach, FL",
    description:
      "Meet the expert medical team at NexMed in Ormond Beach, FL. Our dedicated providers specialize in neuropathy, HRT, and regenerative care. Visit our clinic!",
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
    path: "/knee-decompression-therapy/",
    title: "Knee Decompression Therapy in Ormond Beach, FL | NexMed",
    description:
      "NexMed's Knee Decompression Therapy uses targeted unloading technology to relieve knee joint pressure and osteoarthritis pain. Book your visit today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/shockwave-therapy/",
    title: "Shockwave Therapy in Ormond Beach, FL | NexMed",
    description:
      "Accelerate healing with Extracorporeal Shockwave Therapy at NexMed in Ormond Beach, FL. Non-invasive treatment for chronic tendon and soft tissue pain.",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/laser-therapy/",
    title: "Laser Therapy in Ormond Beach, FL | NexMed",
    description:
      "NexMed's Class IV Laser Therapy reduces inflammation and speeds tissue repair for chronic pain and injury recovery. Schedule your consultation today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/compression-therapy/",
    title: "Compression Therapy in Ormond Beach, FL | NexMed",
    description:
      "Improve circulation and reduce swelling with Compression Therapy at NexMed in Ormond Beach, FL. Supports recovery, mobility, and long-term vascular health.",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/headache-treatment/",
    title: "Headache & Migraine Treatment in Ormond Beach, FL | NexMed",
    description:
      "Find lasting relief from migraines and chronic headaches at NexMed in Ormond Beach, FL. Personalized, non-surgical treatment plans. Book a consult today!",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/treatment-programs/",
    title: "Treatment Programs in Ormond Beach, FL | NexMed",
    description:
      "Explore structured, multi-visit Treatment Programs at NexMed in Ormond Beach, FL, combining advanced therapies into a personalized recovery plan.",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/conditions-we-treat/",
    title: "Conditions We Treat in Ormond Beach, FL | NexMed",
    description:
      "Browse the full range of conditions treated at NexMed in Ormond Beach, FL — from spine and knee pain to neuropathy, migraines, and soft tissue injuries.",
    datePublished: "2026-08-04T00:00:00+00:00",
    dateModified: "2026-08-04T00:00:00+00:00",
  },
  {
    path: "/wellness-services/",
    title: "Wellness Services in Ormond Beach, FL | NexMed",
    description:
      "Discover NexMed's wellness services in Ormond Beach, FL, including medical weight loss, hormone health, peptide therapy, and advanced recovery care.",
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
