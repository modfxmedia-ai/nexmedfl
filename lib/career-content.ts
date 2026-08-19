// Content for the /career-opportunities/ page. General "always accepting
// applications" copy rather than specific job postings, since no live job
// requisitions were provided, avoid fabricating specific titles/salaries.

export const CAREER_INTRO = {
  eyebrow: "Join Our Team",
  heading: "Career Opportunities at Ormond Spine & Nerve Center",
  intro:
    "Ormond Spine & Nerve Center is a growing chiropractic and rehabilitative care practice in Ormond Beach, FL. We're always glad to hear from experienced, compassionate healthcare professionals interested in joining our team, even when a specific opening isn't posted below.",
};

export interface CareerRole {
  title: string;
  description: string;
}

// Typical roles at a practice of this type, general interest categories
// rather than confirmed open requisitions.
export const CAREER_ROLE_CATEGORIES: CareerRole[] = [
  {
    title: "Chiropractic Assistants & Technicians",
    description:
      "Support daily patient care, decompression, laser, and compression therapy sessions alongside our clinical team.",
  },
  {
    title: "Front Desk & Patient Coordinators",
    description:
      "Be the first friendly face our patients see, managing scheduling, check-in, and day-to-day office operations.",
  },
  {
    title: "Billing & Insurance Specialists",
    description:
      "Help patients navigate insurance, payment plans, and billing questions with clarity and care.",
  },
];

export const CAREER_BENEFITS = [
  "A supportive, team-oriented clinic environment",
  "Hands-on experience with modern spinal decompression, laser, and shockwave equipment",
  "Opportunities to grow within a locally owned, patient-focused practice",
];
