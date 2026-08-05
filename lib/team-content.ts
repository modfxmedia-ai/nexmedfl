// Client-safe pure data for the /meet-our-team/ page.
//
// Dr. Herbert is currently the practice's sole listed provider — his
// entry below uses his real bio/photo. Add additional real team members
// here (with real names/credentials/photos/bios) as they're hired;
// do not add placeholder "bio coming soon" entries.

export const TEAM_INTRO = {
  eyebrow: "About The Practice",
  heading: "Meet Dr. Noah Herbert, DC",
  intro:
    "Ormond Spine & Nerve Center is led by Dr. Noah Herbert, who combines chiropractic expertise, advanced neuropathy training, and genuine hometown care. Every treatment plan is built by taking the time to understand your condition, your goals, and what it will take to get you back to living without pain.",
};

export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Noah Herbert, DC",
    title: "Lead Chiropractic Physician",
    credentials: "D.C.",
    image: "/images/team/noah-herbert-dc.png",
    bio: "Dr. Herbert has spent more than 16 years helping patients find lasting relief from pain. A Central Florida native who grew up in New Smyrna Beach, he completed his undergraduate studies at Stetson University before earning his Doctor of Chiropractic degree from Palmer College of Chiropractic in Port Orange. He pursued advanced training in neuropathy through the American College of Physical Medicine and holds additional credentials in MRI spine interpretation, spinal biomechanical engineering, and impairment rating. Outside the office, Dr. Herbert is a devoted husband and father of four who enjoys spending time with family and coaching his children's sports teams.",
  },
];

// Education & training timeline for Dr. Herbert — derived from his bio
// above, used to power the "Education & Training" section on the team
// page. Keep in sync if the bio copy changes.
export const DOCTOR_TIMELINE = [
  {
    year: "Undergraduate",
    title: "Stetson University",
    description: "Completed undergraduate studies before pursuing chiropractic medicine.",
  },
  {
    year: "Doctor of Chiropractic",
    title: "Palmer College of Chiropractic, Port Orange",
    description: "Earned his Doctor of Chiropractic degree.",
  },
  {
    year: "Advanced Training",
    title: "American College of Physical Medicine",
    description: "Pursued advanced training in neuropathy care.",
  },
  {
    year: "Specialized Credentials",
    title: "MRI Spine Interpretation, Biomechanical Engineering & Impairment Rating",
    description:
      "Holds additional credentials in MRI spine interpretation, spinal biomechanical engineering, and impairment rating.",
  },
];

// "Our Approach to Care" pillars shown on the team page.
export const CARE_APPROACH = [
  {
    title: "Personalized Treatment Plans",
    description:
      "No two patients are the same — every plan starts with a thorough evaluation of your condition, history, and goals.",
  },
  {
    title: "Advanced, Evidence-Based Care",
    description:
      "From spinal decompression to laser and shockwave therapy, treatment is guided by current clinical evidence, not guesswork.",
  },
  {
    title: "Whole-Person Recovery",
    description:
      "Care doesn't stop at symptom relief — the goal is restoring function so you can get back to the activities you love.",
  },
  {
    title: "Genuine, Hometown Care",
    description:
      "As a Central Florida native, Dr. Herbert treats every patient like a neighbor, not a number.",
  },
];

// Short-form homepage teaser for Dr. Herbert — a condensed version of his
// full bio above, paired with his photo and a few scannable credential
// highlights for the "Meet the Doctor" homepage section.
export const DOCTOR_HIGHLIGHT = {
  name: "Dr. Noah Herbert, DC",
  title: "Lead Chiropractic Physician",
  image: "/images/team/noah-herbert-dc.png",
  bio: "With more than 16 years of experience, Dr. Noah Herbert combines advanced neuropathy training with credentials in MRI spine interpretation, spinal biomechanical engineering, and impairment rating. A Central Florida native, he's dedicated to helping patients throughout Ormond Beach find lasting relief and get back to the life they love.",
  credentials: [
    "16+ years in practice",
    "Advanced neuropathy training, American College of Physical Medicine",
    "Credentialed in MRI spine interpretation",
    "Spinal biomechanical engineering & impairment rating",
  ],
};

