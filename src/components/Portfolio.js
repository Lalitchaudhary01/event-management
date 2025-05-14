import React, { useState } from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Navigation sections
  const sections = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "why", label: "Why Choose Us" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  // Services data
  const services = [
    { name: "Hospitality", icon: "🏨" },
    { name: "Hampers", icon: "🎁" },
    { name: "RSVP", icon: "✉️" },
    { name: "Team", icon: "👥" },
    { name: "Logistics", icon: "🚚" },
    { name: "Planning", icon: "📋" },
    { name: "Execution", icon: "✨" },
  ];

  // Wedding management items
  const weddingManagement = [
    "From Concept to Execution",
    "Stress-free experience for couples and families",
    "Seamless travel arrangements",
    "Ensuring guests feel cherished and comfortable",
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      title: "ATTENTION TO DETAIL",
      description: "EVERY ELEMENT CURATED WITH LOVE AND CARE",
    },
    {
      title: "PERSONALIZED APPROACH",
      description: "YOUR LOVE STORY, YOUR WEDDING, OUR INSPIRATION",
    },
    {
      title: "EXPERT TEAM",
      description: "A PASSIONATE AND EXPERIENCED TEAM AT YOUR SERVICE",
    },
    {
      title: "EXPERIENCE AND INNOVATION",
      description: "A PERFECT BLEND OF TRADITION AND INNOVATION",
    },
    {
      title: "STRESS-FREE PLANNING",
      description: "WE HANDLE EVERYTHING, SO YOU CAN SAVOR EVERY MOMENT",
    },
    {
      title: "VENDOR NETWORK",
      description: "ACCESS TO TOP-NOTCH VENDORS AND EXCLUSIVE SERVICES",
    },
  ];

  // Gallery images (using placeholders)
  const galleryImages = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Ember Events Wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Ember Events</h1>
          <p className="text-xl md:text-2xl font-light">By Amar & Isha</p>
          <p className="mt-6 text-lg md:text-xl italic">!!अतथ तुम कब आओगे!!</p>
          <button className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-serif text-purple-700 text-2xl">
              Ember Events
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-purple-700 border-b-2 border-purple-700"
                        : "text-gray-500 hover:text-purple-600"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap px-4 pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 mr-4 ${
                activeSection === section.id
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-500"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* About Us Section */}
      <section
        id="about"
        className={`py-16 px-4 ${
          activeSection === "about" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-700 mb-6 text-center">
            About Us
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-gray-700 leading-relaxed">
              Ember Events by Amar & Isha is a leading management company,
              specializing in crafting unforgettable memories and events with
              over 1+ year of experience. We work closely with clients to
              meticulously plan every detail, offering a customized approach for
              traditional or modern celebrations. From venue selection to vendor
              management, our comprehensive services ensure a seamless &
              stress-free wedding day. We prioritize clear communication to
              surpass your expectations, making your special day truly
              unforgettable & cherished.
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-serif text-purple-700 mb-6 text-center">
                Our Onboarding Process
              </h3>
              <p className="text-center text-lg font-medium mb-8">
                WHAT CAN WE DO FOR YOU
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors duration-300"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="font-medium text-purple-700">
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100 ${
          activeSection === "services" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-700 mb-6 text-center">
            Wedding Management
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src="/api/placeholder/500/500"
                alt="Wedding Management"
                className="rounded-xl shadow-xl"
              />
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {weddingManagement.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-purple-600 font-bold mr-2">•</div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why"
        className={`py-16 px-4 ${activeSection === "why" ? "block" : "hidden"}`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-700 mb-8 text-center">
            Why Choose Ember Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className={`py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100 ${
          activeSection === "gallery" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-700 mb-8 text-center">
            Our Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`/api/placeholder/400/300?text=Event ${img}`}
                  alt={`Ember Events Gallery ${img}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-serif text-purple-700 mb-4">
              Highlights & Others
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Thank you for reviewing the portfolio. We invite you to delve into
              our wedding highlights and discover the reviews shared on various
              portals to gain deeper insights into our work and client
              experiences.
            </p>
            <p className="mt-4 font-medium">Following link: ember_events</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 px-4 ${
          activeSection === "contact" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-700 mb-8 text-center">
            Contact Us
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium text-purple-700 mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to create unforgettable memories? Reach out to us for a
                  free consultation.
                </p>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">📱</span>
                    <span>+91 8005931391</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">📍</span>
                    <span>
                      863- Vyas Colony, Shastri Nagar, Jaipur, Rajasthan 302016
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">📸</span>
                    <span>@ember_events</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      rows="4"
                      placeholder="Tell us about your event"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
