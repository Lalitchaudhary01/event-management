import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Star,
  MapPin,
  Users,
  Trophy,
  Music,
  Building,
  ChevronLeft,
  ChevronRight,
  Truck,
  ShoppingBag,
} from "lucide-react";

const FeaturedServices = () => {
  // Enhanced featured services with more premium descriptions and two new services
  const services = [
    {
      title: "Wedding Planning",
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      description:
        "Bespoke wedding experiences curated with exquisite attention to detail, transforming your vision into an unforgettable celebration of love.",
    },
    {
      title: "Corporate Events",
      icon: <Building className="w-10 h-10 text-purple-600" />,
      description:
        "Distinguished corporate gatherings that elevate your brand presence, from elite conferences to exclusive executive retreats.",
    },
    {
      title: "Destination Events",
      icon: <MapPin className="w-10 h-10 text-purple-600" />,
      description:
        "Extraordinary celebrations in world-class destinations, expertly orchestrated with seamless logistics and breathtaking experiences.",
    },
    {
      title: "Elite Coordination",
      icon: <Users className="w-10 h-10 text-purple-600" />,
      description:
        "Meticulous management of premier vendors, specialized professionals, and skilled staff ensuring flawless execution of your vision.",
    },
    {
      title: "Luxury Hospitality",
      icon: <Trophy className="w-10 h-10 text-purple-600" />,
      description:
        "Exceptional guest experiences featuring bespoke amenities, exclusive VIP services, and personalized attention to every detail.",
    },
    {
      title: "Artist Curation",
      icon: <Music className="w-10 h-10 text-purple-600" />,
      description:
        "Access to an elite portfolio of performers, renowned speakers, and sophisticated entertainment tailored precisely to your event.",
    },
    {
      title: "Venue Selection",
      icon: <Star className="w-10 h-10 text-purple-600" />,
      description:
        "Privileged access to exclusive, sought-after venues and hidden gems worldwide, perfectly aligned with your prestigious vision.",
    },
    {
      title: "Logistics Excellence",
      icon: <Truck className="w-10 h-10 text-purple-600" />,
      description:
        "Impeccable event logistics management with precision timing, seamless transportation coordination, and flawless technical execution.",
    },
    {
      title: "Vendor Partnerships",
      icon: <ShoppingBag className="w-10 h-10 text-purple-600" />,
      description:
        "Access to our exclusive network of elite vendors and artisans, meticulously curated to deliver unparalleled quality and distinction.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);

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

  // Auto-advance the carousel every 5 seconds, pause on hover
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovering]);

  return (
    <div className="py-32 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-full flex flex-col items-center">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="mt-2 w-40 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        <div className="text-center mb-24 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-purple-800 mb-6">
            <span className="relative inline-block">
              Signature Offerings
              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-purple-200 via-purple-500 to-purple-200"></div>
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Elevate your occasions with our collection of{" "}
            <span className="italic text-purple-700">distinctive services</span>
            , meticulously designed to transform moments into extraordinary
            memories.
          </p>
        </div>

        <div
          className="relative"
          ref={carouselRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Elegant carousel navigation buttons */}
          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white text-purple-700 p-4 rounded-full shadow-lg hover:shadow-xl hover:text-purple-900 border border-purple-100 group transition-all duration-300"
              aria-label="Previous services"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white text-purple-700 p-4 rounded-full shadow-lg hover:shadow-xl hover:text-purple-900 border border-purple-100 group transition-all duration-300"
              aria-label="Next services"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Luxurious service cards container with smooth transitions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {getVisibleIndices().map((serviceIndex) => {
              const service = services[serviceIndex];
              return (
                <div
                  key={serviceIndex}
                  className="bg-white p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-50 group relative overflow-hidden"
                >
                  {/* Subtle decorative accent */}
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-purple-100 to-transparent opacity-50 -mr-12 -mt-12 rounded-full"></div>

                  <div className="mb-8 p-5 bg-gradient-to-br from-purple-50 to-white inline-flex items-center justify-center rounded-full border border-purple-100 group-hover:border-purple-200 transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-purple-800 mb-4 relative">
                    {service.title}
                    <div className="absolute -bottom-2 left-0 w-12 h-px bg-purple-300"></div>
                  </h3>

                  <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <a
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium transition-all duration-300 relative overflow-hidden group-hover:font-semibold"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Discover Excellence</span>
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      </div>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Elegant carousel indicators */}
          <div className="flex justify-center mt-12">
            {Array.from({ length: Math.ceil(services.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`mx-1.5 rounded-full border transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index
                      ? "w-10 h-1 bg-purple-600 border-purple-600"
                      : "w-3 h-1 bg-purple-200 border-purple-200 hover:bg-purple-300 hover:border-purple-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Premium experience highlight */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-12 bg-purple-300"></div>
            <span className="mx-4 text-purple-600 text-sm tracking-widest uppercase font-light">
              Extraordinary Experiences
            </span>
            <div className="h-px w-12 bg-purple-300"></div>
          </div>
          <p className="mt-4 text-gray-500 font-light italic max-w-2xl mx-auto">
            "Our commitment to excellence defines every aspect of our service,
            ensuring a journey of pure luxury from conception to celebration."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
