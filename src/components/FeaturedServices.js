import React, { useState, useEffect } from "react";
import {
  Calendar,
  Star,
  MapPin,
  Users,
  Trophy,
  Music,
  Building,
} from "lucide-react";

const FeaturedServices = () => {
  // Enhanced featured services
  const services = [
    {
      title: "Wedding Planning",
      icon: <Calendar className="w-10 h-10 text-indigo-600" />,
      description:
        "Full-service wedding planning with personalized themes and meticulous attention to detail.",
    },
    {
      title: "Corporate Events",
      icon: <Star className="w-10 h-10 text-indigo-600" />,
      description:
        "Professional corporate gatherings from conferences to team-building retreats.",
    },
    {
      title: "Destination Events",
      icon: <MapPin className="w-10 h-10 text-indigo-600" />,
      description:
        "Spectacular events at breathtaking venues worldwide, handling all logistics.",
    },
    {
      title: "Team Management",
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      description:
        "Expert coordination of event staff, vendors, and specialized professionals for seamless execution.",
    },
    {
      title: "Hospitality Services",
      icon: <Trophy className="w-10 h-10 text-indigo-600" />,
      description:
        "Premium guest experiences with curated amenities, VIP services, and personalized attention.",
    },
    {
      title: "Artist Management",
      icon: <Music className="w-10 h-10 text-indigo-600" />,
      description:
        "Booking and coordination of performers, speakers, and entertainers tailored to your event.",
    },
    {
      title: "Venue Selection",
      icon: <Building className="w-10 h-10 text-indigo-600" />,
      description:
        "Access to exclusive venues and spaces, perfectly matched to your vision and requirements.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the indices of services to display (3 at a time)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % services.length);
    }
    return indices;
  };

  // Navigate to previous set of services
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 3 : Math.max(0, prev - 3)
    );
  };

  // Navigate to next set of services
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= services.length ? 0 : prev + 3));
  };

  // Auto-advance the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-indigo-800 mb-4">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your events with our comprehensive range of premium
            services, designed to create unforgettable experiences.
          </p>
        </div>

        <div className="relative">
          {/* Carousel navigation buttons */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
              aria-label="Previous services"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
              aria-label="Next services"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service cards container with transition effect */}
          <div className="grid grid-cols-3 gap-8 overflow-hidden">
            {getVisibleIndices().map((serviceIndex) => {
              const service = services[serviceIndex];
              return (
                <div
                  key={serviceIndex}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-50 group"
                >
                  <div className="mb-6 p-4 bg-indigo-50 inline-block rounded-lg group-hover:bg-indigo-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <a
                    href={`/services#${service.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(services.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-indigo-600"
                      : "bg-indigo-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
