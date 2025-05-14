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
  X,
} from "lucide-react";

const FeaturedServices = () => {
  // Enhanced featured services with detailed info for modal
  const services = [
    {
      id: "wedding-planning",
      title: "Wedding Planning",
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      description:
        "Bespoke wedding experiences curated with exquisite attention to detail, transforming your vision into an unforgettable celebration of love.",
      fullDescription:
        "Our bespoke wedding planning service transforms your dreams into reality with meticulous attention to every detail. From intimate ceremonies to grand celebrations, we orchestrate flawless experiences that reflect your unique love story. Our team handles everything from venue selection and decor design to timeline management and vendor coordination, allowing you to be fully present in every moment of your special day.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/wedding.jpg?updatedAt=1747242629574",
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      icon: <Building className="w-10 h-10 text-purple-600" />,
      description:
        "Distinguished corporate gatherings that elevate your brand presence, from elite conferences to exclusive executive retreats.",
      fullDescription:
        "Elevate your corporate brand with our distinguished event management expertise. We specialize in creating impactful corporate experiences from sophisticated conferences and product launches to exclusive executive retreats. Our team integrates your brand identity throughout every touchpoint, ensuring memorable experiences that strengthen client relationships and inspire employee loyalty.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/coporate.jpg?updatedAt=1747242629540",
    },
    {
      id: "destination-events",
      title: "Destination Events",
      icon: <MapPin className="w-10 h-10 text-purple-600" />,
      description:
        "Extraordinary celebrations in world-class destinations, expertly orchestrated with seamless logistics and breathtaking experiences.",
      fullDescription:
        "Transform your event into an extraordinary journey with our destination event planning services. We specialize in creating immersive experiences in the world's most stunning locations. Our expert team handles complex logistics including travel arrangements, accommodations, local permits, and cultural considerations, allowing your guests to enjoy a seamless and unforgettable experience in breathtaking settings.",
      image: "/api/placeholder/700/400",
    },
    {
      id: "elite-coordination",
      title: "Elite Coordination",
      icon: <Users className="w-10 h-10 text-purple-600" />,
      description:
        "Meticulous management of premier vendors, specialized professionals, and skilled staff ensuring flawless execution of your vision.",
      fullDescription:
        "Our elite coordination service brings together the finest vendors and professionals in the industry to execute your vision with precision and elegance. We meticulously manage every aspect of your event, from selecting the perfect team to overseeing each detail during execution. Our seasoned coordinators ensure seamless communication and flawless timing, allowing you to enjoy your event with complete peace of mind.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/team%20elite.jpg?updatedAt=1747242629833",
    },
    {
      id: "luxury-hospitality",
      title: "Luxury Hospitality",
      icon: <Trophy className="w-10 h-10 text-purple-600" />,
      description:
        "Exceptional guest experiences featuring bespoke amenities, exclusive VIP services, and personalized attention to every detail.",
      fullDescription:
        "Elevate your guests' experience with our luxury hospitality services designed for the most discerning clientele. We create memorable moments through bespoke amenities, personalized welcome gifts, and thoughtful touches tailored to each guest's preferences. From VIP transportation and exclusive accommodations to personalized concierge services, we ensure every aspect of your guests' experience reflects unparalleled sophistication and attention to detail.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/hos.jpg?updatedAt=1747242629588",
    },
    {
      id: "artist-curation",
      title: "Artist Curation",
      icon: <Music className="w-10 h-10 text-purple-600" />,
      description:
        "Access to an elite portfolio of performers, renowned speakers, and sophisticated entertainment tailored precisely to your event.",
      fullDescription:
        "Our artist curation service provides access to an exclusive network of world-class performers and entertainers perfectly matched to your event's atmosphere and audience. From Grammy-winning musicians and celebrity DJs to captivating speakers and unique specialty acts, we handle all aspects of talent selection, contract negotiation, and performance logistics to create unforgettable entertainment experiences for your guests.",
      image: "/api/placeholder/700/400",
    },
    {
      id: "venue-selection",
      title: "Venue Selection",
      icon: <Star className="w-10 h-10 text-purple-600" />,
      description:
        "Privileged access to exclusive, sought-after venues and hidden gems worldwide, perfectly aligned with your prestigious vision.",
      fullDescription:
        "Discover the perfect setting for your event with our venue selection service. We provide access to an exclusive portfolio of prestigious locations, from historic landmarks and luxury estates to cutting-edge contemporary spaces and undiscovered gems. Our team personally visits and vets each venue, considering not only aesthetics but also practical considerations such as capacity, amenities, and technical capabilities to ensure the perfect match for your vision.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/venue.jpg?updatedAt=1747242629591",
    },
    {
      id: "logistics-excellence",
      title: "Logistics Excellence",
      icon: <Truck className="w-10 h-10 text-purple-600" />,
      description:
        "Impeccable event logistics management with precision timing, seamless transportation coordination, and flawless technical execution.",
      fullDescription:
        "Our logistics excellence service ensures every operational aspect of your event runs with clockwork precision. We manage complex logistics including guest transportation, equipment delivery, technical production, and vendor scheduling with meticulous attention to detail. Our comprehensive contingency planning anticipates potential challenges before they arise, creating a seamless and stress-free experience for both hosts and guests.",
      image:
        "https://ik.imagekit.io/icrguob6c/event/logis.jpg?updatedAt=1747242629575",
    },
    {
      id: "vendor-partnerships",
      title: "Vendor Partnerships",
      icon: <ShoppingBag className="w-10 h-10 text-purple-600" />,
      description:
        "Access to our exclusive network of elite vendors and artisans, meticulously curated to deliver unparalleled quality and distinction.",
      fullDescription:
        "Leverage our carefully cultivated network of premier vendors and artisans to bring exceptional quality to every aspect of your event. Our longstanding relationships with the industry's finest professionals—from renowned chefs and floral designers to luxury rental companies and master craftsmen—ensure priority booking, preferential pricing, and uncompromising quality for your event. Each vendor in our network has been personally vetted to meet our exacting standards of excellence.",
      image: "/api/placeholder/700/400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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

  // Open service details modal
  const openServiceDetails = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    setSelectedService(service);
    // Add class to body to prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Close service details modal
  const closeServiceDetails = () => {
    setSelectedService(null);
    // Remove class from body to re-enable scrolling when modal is closed
    document.body.style.overflow = "";
  };

  // Add event listener for ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && selectedService) {
        closeServiceDetails();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedService]);

  // Auto-advance the carousel every 5 seconds, pause on hover
  useEffect(() => {
    if (!isHovering && !selectedService) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovering, selectedService]);

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

                  <button
                    onClick={() => openServiceDetails(service.id)}
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
                  </button>
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

      {/* Service Details Modal with improved vertical image layout */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
          style={{ backdropFilter: "blur(5px)" }}
          onClick={closeServiceDetails}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-90vh overflow-auto relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - positioned better in top right */}
            <button
              onClick={closeServiceDetails}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-purple-50 transition-colors z-10"
              aria-label="Close details"
            >
              <X className="h-6 w-6 text-purple-700" />
            </button>

            {/* Content with side-by-side layout for larger screens */}
            <div className="flex flex-col md:flex-row">
              {/* Image - Now in a vertical format taking up left side on larger screens */}
              <div className="w-full md:w-2/5">
                <div className="h-64 md:h-full md:min-h-full bg-purple-100">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details - Now on right side on larger screens */}
              <div className="p-8 w-full md:w-3/5">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-purple-800">
                    {selectedService.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  <div className="pt-6 border-t border-purple-100">
                    <h3 className="text-xl font-serif text-purple-700 mb-4">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {/* Generate some fake features based on the service */}
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex items-start">
                          <div className="text-purple-500 mr-3 mt-1">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-600">
                            {i === 1
                              ? `Personalized ${selectedService.title.toLowerCase()} consultation`
                              : i === 2
                              ? `Custom ${selectedService.title.toLowerCase()} design`
                              : i === 3
                              ? `Expert ${selectedService.title.toLowerCase()} management`
                              : `Premium ${selectedService.title.toLowerCase()} execution`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      <span>Request Consultation</span>
                      <svg
                        className="ml-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add fade-in animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .max-h-90vh {
          max-height: 90vh;
        }
      `}</style>
    </div>
  );
};

export default FeaturedServices;
