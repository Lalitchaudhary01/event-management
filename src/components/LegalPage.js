import React from "react";

const address = "13 Anand Bhawan, Gurunanakpura, Raja Park, Jaipur";
const effectiveDate = "May 9, 2026";

const policySections = [
  {
    title: "1. Information We Collect",
    body: "We may collect the following information:",
    items: [
      "Name",
      "Email Address",
      "Phone Number",
      "Event Requirements",
      "Location Details",
      "Any information submitted through contact forms or inquiries",
    ],
    extra:
      "We may also automatically collect IP address, browser type, device information, and website usage data through cookies and analytics tools.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the collected information to:",
    items: [
      "Respond to inquiries and service requests",
      "Provide event planning and management services",
      "Improve website functionality and user experience",
      "Send updates, promotional offers, or important communication",
      "Run marketing and advertising campaigns including Google Ads",
    ],
  },
  {
    title: "3. Cookies & Tracking Technologies",
    paragraphs: [
      "Our website may use cookies and third-party analytics tools such as Google Analytics to improve performance and marketing effectiveness.",
      "You may disable cookies through your browser settings at any time.",
    ],
  },
  {
    title: "4. Third-Party Services",
    body: "We may use trusted third-party services including:",
    items: ["Google Analytics", "Google Ads", "Payment gateways", "Hosting providers"],
    extra:
      "These services may collect and process data according to their own privacy policies.",
  },
  {
    title: "5. Data Protection",
    paragraphs: [
      "We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.",
      "However, no online platform can guarantee complete security.",
    ],
  },
  {
    title: "6. Sharing of Information",
    body:
      "We do not sell, rent, or trade personal information to third parties. Information may only be shared:",
    items: [
      "To provide requested services",
      "When legally required",
      "With trusted service providers working on our behalf",
    ],
  },
  {
    title: "7. Your Rights",
    body: "You may request:",
    items: [
      "Access to your personal data",
      "Correction of inaccurate information",
      "Deletion of your data",
      "Removal from marketing communications",
    ],
    extra: "To request any changes, contact us through the website contact details.",
  },
  {
    title: "8. External Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "If you have any questions regarding this Privacy Policy, please contact us through our website:",
      "https://www.emberevents.in/",
      address,
    ],
  },
];

const termsSections = [
  {
    title: "1. Website Usage",
    body:
      "The content on this website is provided for general information and service inquiry purposes only. You agree not to:",
    items: [
      "Use the website for unlawful purposes",
      "Attempt unauthorized access to website systems",
      "Copy or reproduce website content without permission",
    ],
  },
  {
    title: "2. Services",
    body:
      "Ember Events provides event planning, management, and related services. All service bookings are subject to:",
    items: ["Availability", "Mutual agreement", "Quotation approval", "Payment terms"],
  },
  {
    title: "3. Pricing & Payments",
    body: "Prices and quotations may vary depending on:",
    items: ["Event type", "Venue", "Guest count", "Custom requirements"],
    extra: "Advance payments may be required before confirmation of services.",
  },
  {
    title: "4. Cancellation & Refunds",
    paragraphs: [
      "Cancellation and refund policies may vary based on the event and agreed contract terms.",
      "Refund eligibility will be communicated at the time of booking.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body:
      "All website content including logos, designs, images, text, and branding belongs to Ember Events and may not be copied or reused without written permission.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Ember Events shall not be held responsible for:",
    items: [
      "Technical interruptions",
      "Website downtime",
      "Third-party service failures",
      "Indirect or consequential damages",
    ],
  },
  {
    title: "7. Third-Party Links",
    paragraphs: [
      "Our website may contain external links. We are not responsible for the content or policies of third-party websites.",
    ],
  },
  {
    title: "8. Changes to Terms",
    paragraphs: [
      "We reserve the right to modify these Terms & Conditions at any time without prior notice.",
      "Updated terms will be posted on this page.",
    ],
  },
  {
    title: "9. Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed by the applicable laws of India.",
    ],
  },
  {
    title: "10. Contact Information",
    paragraphs: [
      "For any questions regarding these Terms & Conditions, please contact us through:",
      "https://www.emberevents.in/",
      address,
    ],
  },
];

const LegalPage = ({ type }) => {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const intro = isPrivacy
    ? "Welcome to Ember Events. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website https://www.emberevents.in/."
    : "Welcome to Ember Events. By accessing or using our website https://www.emberevents.in/, you agree to comply with the following Terms & Conditions.";
  const sections = isPrivacy ? policySections : termsSections;

  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-purple-50 px-4 pb-20 pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
            Effective Date: {effectiveDate}
          </p>
          <h1 className="font-serif text-4xl text-purple-900 md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600">
            {intro}
          </p>
        </div>

        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-xl shadow-purple-100 md:p-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="border-b border-purple-100 pb-6 last:border-b-0 last:pb-0"
            >
              <h2 className="mb-3 text-2xl font-semibold text-purple-800">
                {section.title}
              </h2>
              {section.body && (
                <p className="mb-3 leading-7 text-gray-700">{section.body}</p>
              )}
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-3 leading-7 text-gray-700 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.extra && (
                <p className="leading-7 text-gray-700">{section.extra}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
