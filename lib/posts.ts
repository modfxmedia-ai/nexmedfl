// Client-safe pure data describing every blog post on the site.
// Used to generate post-sitemap.xml, the /blogs/ listing page, and the
// dynamic /[year]/[month]/[day]/[slug]/ route's generateStaticParams.

export interface BlogPostEntry {
  year: string;
  month: string;
  day: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageCaption?: string;
  datePublished: string;
  dateModified: string;
  section: string;
}

export const BLOG_POSTS: BlogPostEntry[] = [
  {
    year: "2026",
    month: "05",
    day: "10",
    slug: "early-clues-hormones-are-out-of-balance",
    title: "Signs of Hormone Imbalance and When to Seek Care",
    description:
      "Learn common early signs of hormone imbalance and how hormone replacement therapy in Ormond Beach may help restore energy, mood, and weight balance.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/05/tran-mau-tri-tam-aNlb8ktfr8o-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "hormone imbalance",
    datePublished: "2026-05-10T17:00:00+00:00",
    dateModified: "2026-05-10T17:00:00+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "05",
    day: "03",
    slug: "glp-1-weight-loss-options-ormond-beach",
    title: "GLP-1 Weight Loss Options: Ormond Beach",
    description:
      "Learn how GLP-1 therapy in Ormond Beach can support medical weight loss, curb cravings, and improve metabolic health with personalized care at NexMed clinic",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/04/getty-images-iMuc6uBHJx4-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "Weight Loss",
    datePublished: "2026-05-03T17:00:00+00:00",
    dateModified: "2026-05-03T17:00:00+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "04",
    day: "26",
    slug: "medical-weight-loss-peptides-in-ormond-beach",
    title: "Medical Weight Loss Peptides Guide in Ormond Beach",
    description:
      "Discover benefits, safety, and what to expect with weight loss peptides in Ormond Beach, including how peptide therapy supports sustainable results.",
    image: "https://nexmedfl.com/wp-content/uploads/2026/04/2148302106.jpg",
    imageWidth: "1500",
    imageHeight: "1001",
    imageCaption: "medical weight loss",
    datePublished: "2026-04-26T17:00:00+00:00",
    dateModified: "2026-04-26T17:00:00+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "04",
    day: "19",
    slug: "is-medical-weight-loss-right-for-you",
    title: "Medical Weight Loss Options in Ormond Beach Guide",
    description:
      "Explore whether medical weight loss in Ormond Beach fits your goals, including benefits, safety, and what to expect from supervised care and support",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/04/b-y-g-oThoRP1zGzE-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "medical weight loss",
    datePublished: "2026-04-19T17:00:00+00:00",
    dateModified: "2026-04-19T17:00:00+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "04",
    day: "12",
    slug: "functional-medicine-doctors-redefining-wellness",
    title: "Why Functional Medicine Doctors in Ormond Beach Are Redefining Wellness",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Why Functional Medicine Doctors in Ormond Beach Are",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/04/getty-images-87fXwk1fAq8-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "functional medicine",
    datePublished: "2026-04-12T17:00:00+00:00",
    dateModified: "2026-04-12T17:00:00+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "04",
    day: "06",
    slug: "when-neuropathy-needs-a-specialist",
    title: "Recognizing When Neuropathy Needs a Specialist in Ormond Beach",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Recognizing When Neuropathy Needs a Specialist in",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/04/getty-images-iZ554CtC-lQ-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "leg pain",
    datePublished: "2026-04-06T06:42:18+00:00",
    dateModified: "2026-04-08T06:47:32+00:00",
    section: "Medical Care",
  },
  {
    year: "2026",
    month: "03",
    day: "10",
    slug: "the-appetite-hormone-that-controls-weight",
    title: "The Appetite Hormone That Controls Weight",
    description:
      "Learn how GLP-1 medications support long-term fat loss and appetite control with NexMed's medically supervised weight loss program.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/03/Lumii_20260310_014045372.jpg",
    imageWidth: "1280",
    imageHeight: "750",
    datePublished: "2026-03-10T05:41:30+00:00",
    dateModified: "2026-03-10T05:41:31+00:00",
    section: "Uncategorized",
  },
  {
    year: "2026",
    month: "03",
    day: "10",
    slug: "the-hidden-metabolism-problem-why-some-people-burn-calories-slower-than-others",
    title:
      "The Hidden Metabolism Problem: Why Some People Burn Calories Slower Than Others",
    description:
      "Discover why a slow metabolism can prevent weight loss and how NexMed's doctor supervised medical weight loss program in Ormond Beach FL helps restore metabolic balance.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/03/Screenshot_20260310_013356_Gallery.jpg",
    imageWidth: "1079",
    imageHeight: "609",
    datePublished: "2026-03-10T05:34:39+00:00",
    dateModified: "2026-03-10T05:34:40+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "10",
    day: "11",
    slug: "peptide-therapy-for-inflammation-in-ormond-beach-fl-heal-naturally-with-nexmed",
    title:
      "Peptide Therapy for Inflammation in Ormond Beach FL: Heal Naturally with NexMed",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Peptide Therapy for Inflammation in Ormond Beach FL:",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/10/Screen-Shot-2025-10-11-at-06.26.46-AM.jpg",
    imageWidth: "619",
    imageHeight: "409",
    datePublished: "2025-10-11T01:29:25+00:00",
    dateModified: "2025-10-11T01:29:29+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "10",
    day: "11",
    slug: "peptide-therapy-for-weight-loss-in-ormond-beach-fl",
    title: "Peptide Therapy for Weight Loss in Ormond Beach FL",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Peptide Therapy for Weight Loss in Ormond Beach FL",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/10/Screen-Shot-2025-10-11-at-06.23.47-AM.jpg",
    imageWidth: "618",
    imageHeight: "371",
    datePublished: "2025-10-11T01:25:51+00:00",
    dateModified: "2025-10-11T01:25:52+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "differentiating-numbness-tingling-burning-diagnoses",
    title: "Differentiating Numbness/Tingling/Burning Diagnoses",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Differentiating Numbness/Tingling/Burning Diagnoses",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/a_leg_with_a_burning_sensation.webp",
    imageWidth: "926",
    imageHeight: "601",
    datePublished: "2025-08-17T19:13:09+00:00",
    dateModified: "2025-08-17T19:47:16+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "can-neuropathy-be-reversed",
    title: "Can Neuropathy Be Reversed?",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Can Neuropathy Be Reversed? post for the latest news.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/images-2025-08-18T002248.373.jpeg",
    imageWidth: "300",
    imageHeight: "168",
    datePublished: "2025-08-17T19:10:36+00:00",
    dateModified: "2025-08-17T19:23:04+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "which-medications-can-cause-neuropathy",
    title: "Which Medications Can Cause Neuropathy?",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Which Medications Can Cause Neuropathy? post for the",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/11062b_22d41eefeced42a8a22262bdf9e6eb1dmv2-1.avif",
    imageWidth: "740",
    imageHeight: "489",
    datePublished: "2025-08-17T19:12:14+00:00",
    dateModified: "2025-08-17T19:12:14+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "which-neuropathy-supplement-is-the-best",
    title: "Which Neuropathy Supplement Is The Best?",
    description:
      "Read the NexMed blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Which Neuropathy Supplement Is The Best? post for the",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/9b098e_c88df951b71f42e4babeec7adbdba022mv2.avif",
    imageWidth: "740",
    imageHeight: "389",
    datePublished: "2025-08-17T19:07:31+00:00",
    dateModified: "2025-08-17T19:07:32+00:00",
    section: "Uncategorized",
  },
];

export function getBlogPostPath(post: BlogPostEntry): string {
  return `/${post.year}/${post.month}/${post.day}/${post.slug}/`;
}

export function findBlogPost(
  year: string,
  month: string,
  day: string,
  slug: string
): BlogPostEntry | undefined {
  return BLOG_POSTS.find(
    (post) =>
      post.year === year &&
      post.month === month &&
      post.day === day &&
      post.slug === slug
  );
}
