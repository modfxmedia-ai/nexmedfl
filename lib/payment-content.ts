// Client-safe pure data for the /payment-plans/ page — plain-language
// FAQ content about IN-OFFICE payment plans (structured directly with
// the practice), distinct from the third-party financing content on
// /financing-options/.

export const PAYMENT_PLANS_INTRO = {
  eyebrow: "Payment Plans",
  heading: "Flexible Payment Plans for Your Care",
  intro:
    "Cost shouldn't stand between you and relief. Ormond Spine & Nerve Center offers structured, in-office payment plans so you can start treatment now and pay over time — in plain language, with no surprises.",
};

export interface PaymentPlanFaq {
  question: string;
  answer: string;
}

export const PAYMENT_PLANS_FAQS: PaymentPlanFaq[] = [
  {
    question: "What is an in-office payment plan?",
    answer:
      "It's a simple agreement directly with our office: instead of paying for your full treatment plan up front, you split the cost into smaller, predictable payments over an agreed schedule.",
  },
  {
    question: "How do I set up a payment plan?",
    answer:
      "After your evaluation, our team reviews your recommended treatment plan and walks you through the payment options available, including how much is due at each visit and the total number of payments.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, HSA/FSA cards, and cash or check for scheduled payments. Our front desk team can confirm what works best for your plan.",
  },
  {
    question: "Can I use a payment plan alongside insurance?",
    answer:
      "Yes. If you have insurance or PIP coverage, a payment plan can cover your portion of the cost — copays, deductibles, or services not covered by your plan.",
  },
  {
    question: "What happens if my treatment plan changes?",
    answer:
      "If your provider adjusts your treatment based on your progress, we'll revisit your payment plan together so it still reflects an accurate, manageable schedule.",
  },
];
