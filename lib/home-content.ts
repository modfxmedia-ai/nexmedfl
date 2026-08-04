// Homepage-only content data — copied verbatim from the live nexmedfl.com
// homepage (scraped 2026-08-04). Pure data (no Node builtins) so it's safe
// to import from client components.

export const HERO = {
  eyebrow: "Happy Patients",
  heading: "Wellness Starts Here!",
  subheading:
    "From advanced neuropathy care and innovative wound healing solutions, we combine medical expertise with technology to restore health, confidence, and quality of life.",
  ctaLabel: "Book An Appointment",
  ctaHref: "/contact-us/",
  backgroundImage:
    "https://nexmedfl.com/wp-content/uploads/2025/09/pexels-cottonbro-5934641-e1757018550981.jpg",
};

export interface TrustItem {
  title: string;
  description: string;
}

// The 3-item icon strip directly under the hero on the live site — this is
// the closest real equivalent to a "trust bar" (the live site has no
// separate logo/certification strip).
export const TRUST_ITEMS: TrustItem[] = [
  {
    title: "Comprehensive Medical Care",
    description:
      "From personalized evaluations to advanced treatments, we provide tailored healthcare solutions designed around your needs.",
  },
  {
    title: "Healing Stories of Success",
    description:
      "Many patients have started a new journey of health and life with our holistic treatments — and achieved success.",
  },
  {
    title: "Trusted Expertise",
    description:
      "Experience compassionate care backed by modern technology, proven results, and a commitment to your well-being.",
  },
];

export const WELCOME = {
  eyebrow: "Welcome to NexMed",
  heading: "Your Partner in Health, Healing & Wellness",
  intro:
    "At NexMed, your well-being comes first. We provide advanced, comprehensive care with a focus on innovative treatments designed to restore health, relieve pain, and improve quality of life.",
  programsLeadIn: "Our specialty programs include:",
  closing: [
    "At NexMed, you'll find more than treatments, you'll find a team committed to your success. With expertise, state-of-the-art technology, and personalized care, we help patients achieve lasting results in health, wellness, and aesthetics.",
    "Discover the NexMed difference where advanced medicine meets genuine care.",
  ],
};

export interface WelcomeProgram {
  name: string;
  description: string;
}

export const WELCOME_PROGRAMS: WelcomeProgram[] = [
  {
    name: "Neuropathy Treatment",
    description:
      "Tailored therapies that target nerve-related conditions to reduce pain, improve function, and help you regain independence.",
  },
  {
    name: "Advanced Wound Care",
    description:
      "Cutting-edge treatments, including skin substitute grafts, to promote healing for chronic wounds that haven't closed with traditional care.",
  },
  {
    name: "Regenerative Medicine",
    description:
      "PRP therapy, peptide therapy, and other advanced options to repair tissue, decrease inflammation, and restore mobility.",
  },
  {
    name: "Hormone Replacement Therapy",
    description:
      "Customized programs for men and women to restore balance, improve energy, support weight management, and enhance overall vitality.",
  },
  {
    name: "Medical Weight Loss & Laser Lipolysis",
    description:
      "A powerful combination of compounded Semaglutide and Laser Lipolysis, delivering effective solutions for sustainable weight management.",
  },
  {
    name: "IV Therapy",
    description:
      "Hydration and nutrient-rich infusions designed to boost energy, strengthen immunity, support recovery, and promote overall wellness.",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// Exact values scraped from the live site's Elementor counter widgets
// (data-toValue / data-duration), since the rendered DOM text is animated
// client-side and not present as static markup.
export const STATS: StatItem[] = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "k+", label: "Successful Treatments" },
  { value: 5, suffix: "k+", label: "Patients Helped" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

export const HOW_IT_WORKS = {
  eyebrow: "How It Works",
  heading: "Helping You Live Your Best Life",
  intro:
    "We make getting the right treatment simple, personalized, and stress-free—so you can focus on feeling your best, regain your confidence, and enjoy a healthier, more vibrant life with the care and expertise you deserve.",
  ctaLabel: "Contact Now",
  ctaHref: "/contact-us/",
};

export interface ProcessStep {
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    title: "Schedule a Consultation",
    description:
      "Book your appointment at a time that works for you and start your wellness journey.",
  },
  {
    title: "Meet with Our Specialists",
    description:
      "Discuss your concerns, history, and goals with our expert medical team in a comfortable setting.",
  },
  {
    title: "Get Your Customized Plan",
    description: "Receive a treatment plan designed specifically for your health needs.",
  },
  {
    title: "Begin Your Transformation",
    description:
      "Start your journey with continuous care, advanced treatments, and ongoing support.",
  },
];

export const SERVICES_INTRO = {
  eyebrow: "Our Services",
  heading: "Our Specialized Services",
  intro:
    "These are a list of some of our more popular services that are offered at NexMed. If you have any questions please click on each to find more information.",
};

export interface ServiceGridItem {
  name: string;
  description: string;
  href: string;
}

// The live homepage's 9-card services carousel. NOTE: on the live site,
// the "Regenerative Medicine" and "Hormone Replacement Therapy" cards both
// mistakenly link to /neuropathy-treatment/ (an authoring bug). Per
// project convention, real/correct hrefs are used here instead
// (/regenerative-medicine/ and /hormone-replacement-therapy/) rather than
// reproducing the broken links.
export const SERVICES_GRID: ServiceGridItem[] = [
  {
    name: "Medical Weight Loss",
    description:
      "Our medical weight loss program offers safe, personalized plans designed to help you achieve lasting results. With expert guidance, proven strategies, and ongoing support, we help you reach your health and fitness goals effectively.",
    href: "/medical-weight-loss/",
  },
  {
    name: "Peptide Therapy",
    description:
      "Peptide therapy uses natural amino acid chains to support healing, improve energy, balance hormones, and enhance overall wellness. Our personalized treatments help restore vitality and promote long-term health benefits safely and effectively.",
    href: "/peptide-therapy/",
  },
  {
    name: "PRP & Trigger Point Injections",
    description:
      "Our PRP and trigger point injections promote natural healing, reduce pain, and restore function. By targeting the source of discomfort, we help relieve muscle tension, improve mobility, and support long-term recovery.",
    href: "/prp-trigger-point-injections/",
  },
  {
    name: "Erectile Dysfunction Treatment",
    description:
      "Our erectile dysfunction treatments focus on restoring confidence, improving performance, and enhancing intimacy. With personalized care, we address the root causes and support long-term sexual wellness.",
    href: "/erectile-dysfunction-treatment/",
  },
  {
    name: "Knee Pain Treatment",
    description:
      "Our knee pain treatments target the root cause to relieve discomfort, improve mobility, and restore strength. Using advanced therapies and personalized care, we help you return to an active, pain-free lifestyle safely and effectively.",
    href: "/knee-pain-treatment/",
  },
  {
    name: "Wound Care",
    description:
      "Proper wound care speeds healing, prevents infection, and reduces complications. We provide personalized treatment for acute, chronic, and post-surgical wounds with advanced techniques and compassionate care for safe, comfortable recovery.",
    href: "/wound-care/",
  },
  {
    name: "Regenerative Medicine",
    description:
      "Our regenerative medicine treatments harness the body's natural healing abilities to repair damaged tissues, reduce inflammation, and restore function. Using advanced, non-surgical techniques, we support long-term recovery, improve mobility, and enhance overall quality of life.",
    href: "/regenerative-medicine/",
  },
  {
    name: "Neuropathy Treatment",
    description:
      "Neuropathy can cause pain, numbness, tingling, or weakness—making everyday life difficult. At NexMed, we provide safe and effective neuropathy treatments designed to relieve symptoms, restore nerve function, and improve your quality of life.",
    href: "/neuropathy-treatment/",
  },
  {
    name: "Hormone Replacement Therapy",
    description:
      "Hormone replacement therapy helps restore balance, boost energy, and improve overall wellness. By addressing hormonal imbalances, we support better sleep, mental clarity, sexual health, and vitality. With customized treatment plans, we help you feel your best at every stage of life.",
    href: "/hormone-replacement-therapy/",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
}

// Verbatim real patient testimonials from the live homepage carousel.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Absolutely amazing! I love Central Florida health center. From my first appointment all of the staff was so friendly and supportive. I am always treated like a VIP. I am a type 1 diabetic suffering from neuropathy in my hands and feet. Already in a month into treatment I'm in less pain. If you are looking for treatment for neuropathy I would highly recommend them.",
    name: "Olivia Holte",
  },
  {
    quote:
      "My husband Rich & I have learned so much about his neuropathy. We are grateful for the staff at this facility. Their knowledge, professionalism, friendly atmosphere & genuine care is encouraging him to keep up with the prescribed program. He is improving little by little. Thank you!",
    name: "Vicky Kennedy",
  },
  {
    quote:
      "This is an awesome place to go to. When you walk in, you walk into an awesome atmosphere and are greeted by all the staff with smiling faces. This office in Ormond Beach Florida is very professional. They are here to help you and Answer any questions you have about your treatment. Thank you for being made to feel like you are with family, you guys are fantastic.",
    name: "Rose Marie Diaz",
  },
];

// Real in-office/patient photo gallery paired with the testimonials on the
// live homepage.
export const TESTIMONIAL_GALLERY: string[] = [
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1547-1.jpg",
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1550-1.jpg",
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1544-1.jpg",
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1549-1.jpg",
  "https://nexmedfl.com/wp-content/uploads/2025/09/IMG_1548-1.jpg",
];
