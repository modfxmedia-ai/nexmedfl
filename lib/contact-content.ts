// Client-safe pure data for the /contact-us/, /appointment-request/, and
// /neuropathy-appointment-request/ pages. Each page shares the same
// LeadConnector form embed (see components/LeadFormEmbed.tsx) but has its
// own hero copy and "why choose us" benefit content so the three pages
// don't read as duplicates of each other.

export interface FormPageBenefit {
  title: string;
  description: string;
}

export interface FormPageContent {
  eyebrow: string;
  heading: string;
  intro: string;
  formHeading: string;
  formIntro: string;
  benefits: FormPageBenefit[];
}

export const CONTACT_PAGE_CONTENT: FormPageContent = {
  eyebrow: "Get In Touch",
  heading: "Contact Ormond Spine & Nerve Center",
  intro:
    "Questions about your care, insurance, or what to expect at your first visit? Our Ormond Beach, FL team is here to help. Send us a message below and we'll get back to you quickly.",
  formHeading: "Send Us a Message",
  formIntro:
    "Fill out the form and a member of our team will follow up to answer your questions or help you get scheduled.",
  benefits: [
    {
      title: "Fast, Friendly Responses",
      description:
        "Our local team responds quickly to every message, no call centers, no automated runaround.",
    },
    {
      title: "Real Answers to Insurance Questions",
      description:
        "Ask about coverage, PIP, payment plans, or financing and get a clear, honest answer.",
    },
    {
      title: "One Local Team",
      description:
        "You'll work directly with the same Ormond Beach, FL clinic and providers throughout your care.",
    },
  ],
};

export const APPOINTMENT_PAGE_CONTENT: FormPageContent = {
  eyebrow: "Book Your Visit",
  heading: "Request Your Appointment",
  intro:
    "Ready to start feeling better? Request your appointment at Ormond Spine & Nerve Center and our team will reach out to confirm a time that works for you.",
  formHeading: "Request Your Appointment",
  formIntro:
    "Tell us a bit about what's going on and the best way to reach you, we'll follow up to schedule your visit.",
  benefits: [
    {
      title: "Personalized Care Plans",
      description:
        "Every visit starts with a thorough evaluation so your treatment plan fits your specific condition and goals.",
    },
    {
      title: "Multiple Treatment Options",
      description:
        "From chiropractic care to spinal and knee decompression, neuropathy treatment, and more, all under one roof.",
    },
    {
      title: "Same-Week Availability",
      description:
        "We know pain doesn't wait. Our team works to get new patients seen as quickly as possible.",
    },
  ],
};

export const NEUROPATHY_APPOINTMENT_PAGE_CONTENT: FormPageContent = {
  eyebrow: "Neuropathy Care",
  heading: "Request Your Neuropathy Consultation",
  intro:
    "Living with nerve pain, numbness, or tingling? Request your specialized neuropathy consultation at Ormond Spine & Nerve Center and take the first step toward lasting relief.",
  formHeading: "Request Your Neuropathy Consultation",
  formIntro:
    "Share a bit about your symptoms and the best way to reach you, our team will follow up to schedule your consultation.",
  benefits: [
    {
      title: "Advanced Nerve Diagnostics",
      description:
        "We evaluate the root cause of your nerve pain, not just the symptoms, to build an effective treatment plan.",
    },
    {
      title: "Non-Surgical Treatment Options",
      description:
        "Our neuropathy program is designed to relieve pain and improve nerve function without surgery.",
    },
    {
      title: "Personalized Recovery Plans",
      description:
        "Every consultation results in a treatment plan tailored to your specific symptoms and lifestyle.",
    },
  ],
};

export interface StepItem {
  title: string;
  description: string;
}

// "What to Expect at Your First Visit", /appointment-request/
export const APPOINTMENT_EXPECT_STEPS: StepItem[] = [
  {
    title: "Check-In & Health History",
    description:
      "You'll complete a brief health history so our team understands your symptoms, past treatments, and goals before you're seen.",
  },
  {
    title: "One-on-One Evaluation",
    description:
      "A provider will listen to your concerns, examine the affected area, and discuss what's likely causing your pain.",
  },
  {
    title: "Personalized Treatment Plan",
    description:
      "Based on your evaluation, we'll walk you through recommended treatment options, timelines, and what results to expect.",
  },
  {
    title: "Start Your Care Plan",
    description:
      "Many patients begin treatment the same day. We'll also cover payment, insurance, and scheduling for future visits.",
  },
];

// "How to Prepare for Your Appointment", /appointment-request/
export const APPOINTMENT_PREP_CHECKLIST: string[] = [
  "A photo ID and your insurance card (if applicable)",
  "A list of current medications and supplements",
  "Any prior imaging, X-rays, or MRI results related to your condition",
  "A brief note on when your symptoms started and what makes them better or worse",
  "Comfortable clothing that allows easy movement for your evaluation",
];

// "What a Neuropathy Consultation Involves", /neuropathy-appointment-request/
export const NEUROPATHY_CONSULT_STEPS: StepItem[] = [
  {
    title: "Symptom & Health History Review",
    description:
      "We'll ask about your numbness, tingling, burning, or weakness, including when it started and any related conditions like diabetes.",
  },
  {
    title: "Nerve Function Evaluation",
    description:
      "Your provider performs a focused neurological exam to assess sensation, reflexes, and nerve function in the affected areas.",
  },
  {
    title: "Root-Cause Discussion",
    description:
      "We'll talk through possible underlying causes and what additional testing, if any, may help confirm a diagnosis.",
  },
  {
    title: "Custom Treatment Roadmap",
    description:
      "You'll leave with a clear, personalized plan for managing symptoms and improving nerve health over time.",
  },
];

// "What to Bring", /neuropathy-appointment-request/
export const NEUROPATHY_WHAT_TO_BRING: string[] = [
  "A list of current medications, including any for diabetes or blood pressure",
  "Notes on when your nerve symptoms started and where you feel them",
  "Any prior neuropathy testing, labs, or specialist notes, if available",
  "Your insurance card and photo ID",
];

export interface BlogTopic {
  label: string;
  description: string;
}

// /blogs/ index page intro content
export const BLOG_INTRO = {
  eyebrow: "Health & Wellness Blog",
  heading: "Your Guide to Spine, Nerve & Joint Health",
  intro:
    "Our blog is where our Ormond Beach, FL care team shares practical, easy-to-understand guidance on spine health, knee and joint pain, neuropathy, and recovery, so you can make informed decisions about your care between visits.",
};

export const BLOG_TOPICS: BlogTopic[] = [
  {
    label: "Spine & Chiropractic",
    description: "Back pain, posture, and non-surgical spine care.",
  },
  {
    label: "Knee & Joint",
    description: "Knee pain relief and non-surgical decompression care.",
  },
  {
    label: "Neuropathy & Nerve Health",
    description: "Understanding and managing nerve pain and numbness.",
  },
  {
    label: "Recovery & Advanced Therapies",
    description: "Shockwave, laser, and compression therapy insights.",
  },
];

