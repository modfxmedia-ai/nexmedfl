// Content for the general site /privacy-policy/ and /terms-and-conditions/
// pages. Distinct from /hippa-privacy-policy/, which covers HIPAA-specific
// handling of protected health information, these two pages cover
// standard website data-collection/cookies and terms-of-use, respectively.

// A paragraph can be a plain string, or a { label, text } pair rendered as
// a bold sub-heading (e.g. "a. Contact Information") followed by its text.
export type LegalParagraph = string | { label: string; text: string };

export interface LegalSection {
  heading: string;
  paragraphs: LegalParagraph[];
  list?: string[];
}

export interface LegalPageContent {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalPageContent = {
  eyebrow: "Legal",
  heading: "Privacy Policy",
  lastUpdated: "August 18, 2026",
  intro:
    "Ormond Spine & Nerve Center is committed to protecting the privacy and confidentiality of your personal information. This Communication Privacy Policy outlines how we collect, use, disclose, and safeguard your communication-related data. By engaging with our services, you agree to the terms outlined in this policy.",
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: [
        {
          label: "a. Contact Information",
          text: "We may collect your name, email address, phone number, and other contact details when you communicate with Ormond Spine & Nerve Center.",
        },
        {
          label: "b. Communication Content",
          text: "We may collect information related to your communication with us, including emails, messages, and other forms of communication.",
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: [
        {
          label: "a. Communication Processing",
          text: "We use your contact information to communicate with you and respond to your inquiries, requests, or concerns.",
        },
        {
          label: "b. Service-related Communications",
          text: "We may send you service-related announcements, updates, and administrative messages.",
        },
        {
          label: "c. Improving Services",
          text: "Your communication data may be used to analyze trends, track user interactions, and improve our services.",
        },
      ],
    },
    {
      heading: "3. Information Sharing and Disclosure",
      paragraphs: [
        {
          label: "a. Third-Party Service Providers",
          text: "We may engage third-party service providers to assist with communication services. These providers are contractually obligated to maintain the confidentiality and security of your information.",
        },
        {
          label: "b. Legal Requirements",
          text: "We may disclose your information if required by law, regulation, or legal process.",
        },
      ],
    },
    {
      heading: "4. Security Measures",
      paragraphs: [
        {
          label: "a. Data Security",
          text: "We implement reasonable security measures to protect against unauthorized access, disclosure, alteration, or destruction of your information.",
        },
      ],
    },
    {
      heading: "5. Your Choices",
      paragraphs: [
        {
          label: "a. Opting Out",
          text: "You may choose not to receive non-essential communications from Ormond Spine & Nerve Center by following the opt-out instructions included in the communication.",
        },
      ],
    },
    {
      heading: "6. Information Protection",
      paragraphs: [
        {
          label: "a. No Sale or Distribution",
          text: "Your information will not be sold or distributed to third parties for marketing purposes.",
        },
      ],
    },
    {
      heading: "7. Contact Information",
      paragraphs: [
        {
          label: "Ormond Spine & Nerve Center",
          text: "141 Sagebrush Trail, Ormond Beach, FL 32174",
        },
        "drherbert@ormondspinenervecenter.com",
        "(386) 361-3391",
      ],
    },
    {
      heading: "8. SMS Messaging Terms & Conditions",
      paragraphs: [
        "At Ormond Spine & Nerve Center you can opt in to receive text message notifications.",
      ],
      list: [
        "Notifications may include appointment reminders, updates, and other information related to the services provided by Ormond Spine & Nerve Center.",
        "Messaging frequency varies.",
        "Standard messaging rates and data charges may apply.",
        "You can opt out of receiving these SMS messages at any time by replying \"STOP\" or by contacting Ormond Spine & Nerve Center directly.",
        "You can text \"Options\" for help information.",
      ],
    },
    {
      heading: "9. Consent",
      paragraphs: [
        "By engaging with our services and communicating with Ormond Spine & Nerve Center, you consent to the collection, use, and disclosure of your information as described in this Communication Privacy Policy.",
      ],
    },
  ],
};

export const TERMS_CONDITIONS: LegalPageContent = {
  eyebrow: "Legal",
  heading: "Terms & Conditions",
  lastUpdated: "August 17, 2026",
  intro:
    "These Terms & Conditions (\"Terms\") govern your use of this website, operated by Ormond Spine & Nerve Center. By using this site, you agree to these Terms. If you do not agree, please do not use this website.",
  sections: [
    {
      heading: "Use of This Website",
      paragraphs: [
        "This website is provided for general informational purposes about our practice and services. You agree to use it only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by anyone else.",
      ],
    },
    {
      heading: "Not Medical Advice",
      paragraphs: [
        "Content on this website, including text, images, and any blog or educational material, is for general informational purposes only and is not intended as, and should not be relied upon as, medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition, and never disregard professional medical advice or delay seeking it because of something you read on this site.",
        "Use of this website, including submitting an appointment request or contact form, does not create a doctor-patient relationship.",
      ],
    },
    {
      heading: "Appointment Requests & Forms",
      paragraphs: [
        "Submitting an appointment request or contact form through this site is a request only and does not guarantee a scheduled appointment. Our office will contact you to confirm scheduling, insurance, and other details.",
        "If you have a medical emergency, call 911 or go to the nearest emergency room immediately rather than submitting a form on this website.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "All content on this website, including text, graphics, logos, and images, is the property of Ormond Spine & Nerve Center or its licensors and is protected by applicable intellectual property laws. You may view and print pages for your own personal, non-commercial use, but may not reproduce, distribute, or create derivative works from this content without our prior written permission.",
      ],
    },
    {
      heading: "Third-Party Links & Services",
      paragraphs: [
        "This site may link to, or embed forms or widgets from, third-party services (for example, appointment scheduling or financing partners). We are not responsible for the content, accuracy, or privacy practices of third-party websites or services, and your use of them is subject to their own terms and policies.",
      ],
    },
    {
      heading: "Disclaimer of Warranties",
      paragraphs: [
        "This website and its content are provided \"as is\" and \"as available\" without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Ormond Spine & Nerve Center will not be liable for any indirect, incidental, or consequential damages arising out of or relating to your use of, or inability to use, this website.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-law principles.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "We may revise these Terms at any time by updating this page. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "Questions about these Terms can be directed to info@ormondspinenervecenter.com, 386-361-3391, or 141 Sagebrush Trail, Suite C, Ormond Beach, FL 32174.",
      ],
    },
  ],
};

export const HIPAA_PRIVACY_POLICY: LegalPageContent = {
  eyebrow: "Legal",
  heading: "HIPAA Privacy Policy",
  lastUpdated: "August 20, 2026",
  intro:
    "This Notice of Privacy Practices describes how Ormond Spine & Nerve Center may use and disclose your Protected Health Information (PHI) to carry out treatment, payment, and healthcare operations, and for other purposes permitted or required by law. It also describes your rights regarding your health information. We are required by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) to maintain the privacy of your PHI and to provide you with this notice.",
  sections: [
    {
      heading: "1. How We May Use and Disclose Your Health Information",
      paragraphs: [
        {
          label: "Treatment",
          text: "We may use and disclose your PHI to provide, coordinate, or manage your chiropractic and rehabilitative care, including sharing information with other healthcare providers involved in your treatment.",
        },
        {
          label: "Payment",
          text: "We may use and disclose your PHI to bill and collect payment for the treatment and services you receive, including submitting claims to your health insurance carrier.",
        },
        {
          label: "Healthcare Operations",
          text: "We may use and disclose your PHI for internal operations such as quality assessment, staff training, and business management activities necessary to run our practice.",
        },
        {
          label: "As Required by Law",
          text: "We will disclose your PHI when required to do so by federal, state, or local law, including in response to a valid court order or subpoena.",
        },
      ],
    },
    {
      heading: "2. Your Rights Regarding Your Health Information",
      paragraphs: [
        {
          label: "Right to Inspect and Copy",
          text: "You have the right to inspect and obtain a copy of your health records, with limited exceptions.",
        },
        {
          label: "Right to Amend",
          text: "You have the right to request that we amend your health information if you believe it is incomplete or inaccurate.",
        },
        {
          label: "Right to an Accounting of Disclosures",
          text: "You have the right to request a list of certain disclosures we have made of your PHI.",
        },
        {
          label: "Right to Request Restrictions",
          text: "You have the right to request restrictions on certain uses and disclosures of your PHI, though we are not required to agree to all requests.",
        },
        {
          label: "Right to Request Confidential Communications",
          text: "You have the right to request that we communicate with you about your health information in a specific way or at a specific location.",
        },
        {
          label: "Right to a Paper Copy of This Notice",
          text: "You have the right to obtain a paper copy of this notice at any time, even if you agreed to receive it electronically.",
        },
        {
          label: "Right to File a Complaint",
          text: "If you believe your privacy rights have been violated, you may file a complaint with our office or with the U.S. Department of Health and Human Services, Office for Civil Rights. We will not retaliate against you for filing a complaint.",
        },
      ],
    },
    {
      heading: "3. Changes to This Notice",
      paragraphs: [
        "We reserve the right to change this notice and to make the revised notice effective for PHI we already have as well as any information we receive in the future. The current notice will be posted on this page.",
      ],
    },
    {
      heading: "4. Contact Us",
      paragraphs: [
        {
          label: "Ormond Spine & Nerve Center",
          text: "141 Sagebrush Trail, Suite C, Ormond Beach, FL 32174",
        },
        "info@ormondspinenervecenter.com",
        "386-361-3391",
      ],
    },
  ],
};

export const NO_SURPRISES_ACT: LegalPageContent = {
  eyebrow: "Legal",
  heading: "No Surprises Act & Medical Billing Protections",
  lastUpdated: "August 20, 2026",
  intro:
    "Under the federal No Surprises Act, you are protected from unexpected, or \"surprise,\" medical bills in certain situations. This page explains your rights and protections regarding balance billing and provides information on how to receive a Good Faith Estimate of expected charges before treatment.",
  sections: [
    {
      heading: "1. Your Billing Rights",
      paragraphs: [
        "When you receive emergency care, or are treated by an out-of-network provider at an in-network facility, federal law protects you from \"balance billing,\" meaning the provider cannot bill you for the difference between what they charge and the amount your health plan agrees to pay, beyond your normal in-network cost-sharing (copayments, coinsurance, and deductibles).",
        "These protections apply to certain emergency services and certain services provided by out-of-network providers at in-network facilities. They generally do not apply to routine, scheduled outpatient chiropractic and rehabilitative care obtained directly from our office, where you choose your provider in advance.",
      ],
    },
    {
      heading: "2. Right to a Good Faith Estimate",
      paragraphs: [
        "If you do not have insurance, or you are not planning to use your insurance for your visit, you have the right to receive a Good Faith Estimate of expected charges before you receive care.",
        "You can ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service, or any time you request it.",
        "If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the right to dispute the bill.",
      ],
    },
    {
      heading: "3. How to Request a Good Faith Estimate",
      paragraphs: [
        "Contact our office at 386-361-3391 or info@ormondspinenervecenter.com to request a Good Faith Estimate before scheduling treatment. Please make sure to save a copy of your Good Faith Estimate.",
      ],
    },
    {
      heading: "4. Questions or Disputes",
      paragraphs: [
        "For questions about your rights under the No Surprises Act, or to start a dispute process, visit www.cms.gov/nosurprises or call the No Surprises Help Desk at 1-800-985-3059.",
        "You may also contact our office directly with billing questions at 386-361-3391 or info@ormondspinenervecenter.com.",
      ],
    },
  ],
};

