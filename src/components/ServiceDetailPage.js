import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CalendarHeart,
  Gift,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/919027195011?text=Hello! Can I get more information.";

const services = {
  weddings: {
    title: "Weddings",
    eyebrow: "Wedding Planning",
    icon: CalendarHeart,
    image:
      "https://ik.imagekit.io/icrguob6c/event/wedding.jpg?updatedAt=1747242629574",
    intro:
      "Thoughtfully planned wedding celebrations shaped around your story, family, rituals, guests, and the feeling you want everyone to remember.",
    highlights: [
      "Concept, theme, and decor planning",
      "Venue and vendor coordination",
      "Guest hospitality and RSVP support",
      "Timeline, rituals, and day-of execution",
    ],
    process: [
      "We understand your event vision, budget, guest flow, and priorities.",
      "We curate venues, vendors, decor direction, logistics, and hospitality.",
      "Our team coordinates execution so families can stay present during the celebration.",
    ],
  },
  corporate: {
    title: "Corporate Events",
    eyebrow: "Brand Experiences",
    icon: Briefcase,
    image:
      "https://ik.imagekit.io/icrguob6c/event/coporate.jpg?updatedAt=1747242629540",
    intro:
      "Professional, polished corporate events designed for launches, meetings, conferences, celebrations, and client-facing brand moments.",
    highlights: [
      "Conference and seminar planning",
      "Product launch coordination",
      "Stage, AV, branding, and production",
      "Guest reception and team logistics",
    ],
    process: [
      "We align the event plan with your business objective and audience.",
      "We manage venue, production, hospitality, branding, and vendor movement.",
      "We keep the experience organized, punctual, and easy for your team to host.",
    ],
  },
  galas: {
    title: "Galas & Fundraisers",
    eyebrow: "Elegant Evenings",
    icon: Sparkles,
    image:
      "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.32.17_f3cb6f57.jpg?updatedAt=1747209954070",
    intro:
      "Refined gala nights and fundraisers with an elevated guest experience, graceful flow, and memorable ambience from arrival to closing.",
    highlights: [
      "Theme, ambience, and guest journey design",
      "Premium hospitality and seating flow",
      "Entertainment and show coordination",
      "Vendor, stage, and event-night management",
    ],
    process: [
      "We define the evening format, mood, program, and guest expectations.",
      "We coordinate creative, hospitality, stage, and service partners.",
      "We manage the event floor so the evening feels seamless and premium.",
    ],
  },
  parties: {
    title: "Birthday Parties",
    eyebrow: "Personal Celebrations",
    icon: PartyPopper,
    image:
      "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.31.58_089ec1f2.jpg?updatedAt=1747209954490",
    intro:
      "Warm, stylish birthday celebrations for intimate gatherings, milestone parties, kids celebrations, and large family events.",
    highlights: [
      "Theme styling and decor",
      "Entertainment and activity planning",
      "Cake, catering, and vendor coordination",
      "Photography, entry moments, and guest flow",
    ],
    process: [
      "We shape the party theme around the age, personality, and venue.",
      "We coordinate decor, entertainment, catering, and important moments.",
      "We handle setup and execution so the celebration stays effortless.",
    ],
  },
  special: {
    title: "Special Occasions",
    eyebrow: "Custom Events",
    icon: Gift,
    image:
      "https://ik.imagekit.io/icrguob6c/event/destination.jpg?updatedAt=1747244162249",
    intro:
      "Custom event planning for anniversaries, roka, engagement, festive gatherings, private dinners, and one-of-a-kind celebrations.",
    highlights: [
      "Personalized concept and styling",
      "Venue, decor, and vendor planning",
      "Hospitality, logistics, and guest comfort",
      "Complete event-day coordination",
    ],
    process: [
      "We listen to the occasion, guest profile, and emotional tone.",
      "We design a custom event plan with the right partners and details.",
      "We coordinate execution with care, timing, and attention to every guest.",
    ],
  },
};

const serviceLinks = [
  ["Weddings", "/services/weddings"],
  ["Corporate Events", "/services/corporate"],
  ["Galas & Fundraisers", "/services/galas"],
  ["Birthday Parties", "/services/parties"],
  ["Special Occasions", "/services/special"],
];

const ServiceDetailPage = ({ serviceKey }) => {
  const service = services[serviceKey] || services.weddings;
  const Icon = service.icon;

  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-purple-50 pt-28 sm:pt-32 text-gray-800">
      <div className="relative min-h-[58vh] overflow-hidden sm:min-h-[62vh]">
        <img
          src={service.image}
          alt={`${service.title} by Ember Events`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-purple-900/55 to-black/30"></div>
        <div className="relative mx-auto flex min-h-[58vh] max-w-7xl items-center px-4 py-14 sm:min-h-[62vh] sm:px-6 sm:py-20">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Icon className="mr-2 h-4 w-4" />
              {service.eyebrow}
            </div>
            <h1 className="font-serif text-4xl font-light sm:text-5xl md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-purple-50 sm:text-lg sm:leading-8 md:text-xl">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-medium text-purple-800 shadow-lg transition hover:bg-purple-50"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3 font-medium text-white transition hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 sm:mb-12 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {serviceLinks.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                to.endsWith(serviceKey)
                  ? "border-purple-600 bg-purple-600 text-white"
                  : "border-purple-200 bg-white text-purple-700 hover:border-purple-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-2xl bg-white p-5 shadow-xl shadow-purple-100 sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-500">
              What We Handle
            </p>
            <h2 className="mt-3 font-serif text-2xl text-purple-900 sm:text-3xl md:text-4xl">
              Complete planning with refined execution
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-purple-100 bg-purple-50/60 p-5"
                >
                  <Sparkles className="mb-3 h-5 w-5 text-purple-600" />
                  <p className="leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-purple-900 p-5 text-white shadow-xl shadow-purple-100 sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-200">
              Our Approach
            </p>
            <div className="mt-8 space-y-6">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-purple-800">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-purple-50">{step}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-300 px-6 py-3 font-medium text-white transition hover:from-purple-300 hover:to-pink-200"
            >
              Chat on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
