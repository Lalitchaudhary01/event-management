import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, Star, Heart, Camera } from "lucide-react";

const Events = () => {
  // State for the featured event slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  // ImageKit URLs for your events (these should be your actual uploaded images)
  const featuredEvents = [
    {
      id: 1,
      title: "Royal Elegance Wedding",
      category: "wedding",
      location: "The Grand Palace, Delhi",
      date: "March 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding1.jpg",
    },
    {
      id: 2,
      title: "Luxe Corporate Gala",
      category: "corporate",
      location: "Taj Luxury Resort, Mumbai",
      date: "January 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate1.jpg",
    },
    {
      id: 3,
      title: "Enchanted Garden Wedding",
      category: "wedding",
      location: "Heritage Mansion, Udaipur",
      date: "February 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding2.jpg",
    },
    {
      id: 4,
      title: "Tech Innovation Summit",
      category: "corporate",
      location: "Leela Palace, Bengaluru",
      date: "December 2024",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate2.jpg",
    },
    {
      id: 5,
      title: "Celebrity Birthday Extravaganza",
      category: "private",
      location: "Private Villa, Goa",
      date: "November 2024",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private1.jpg",
    },
  ];

  // Gallery events
  const galleryEvents = [
    ...featuredEvents,
    {
      id: 6,
      title: "Royal Heritage Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding3.jpg",
      location: "Jaipur Palace",
    },
    {
      id: 7,
      title: "Beach Destination Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding4.jpg",
      location: "Andaman Islands",
    },
    {
      id: 8,
      title: "Luxury Product Launch",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate3.jpg",
      location: "The Oberoi, Delhi",
    },
    {
      id: 9,
      title: "Intimate Anniversary Celebration",
      category: "private",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private2.jpg",
      location: "Private Yacht, Mumbai",
    },
    {
      id: 10,
      title: "Charity Fundraising Gala",
      category: "gala",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/gala1.jpg",
      location: "ITC Grand Bharat",
    },
  ];

  const filteredEvents =
    activeCategory === "all"
      ? galleryEvents
      : galleryEvents.filter((event) => event.category === activeCategory);

  // Auto-rotates the slider
  useEffect(() => {
    setIsLoaded(true);

    setTimeout(() => {
      setAnimateItems(true);
    }, 400);

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, featuredEvents.length]);

  // Navigation functions for the featured slider
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
  }, [featuredEvents.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredEvents.length) % featuredEvents.length
    );
  }, [featuredEvents.length]);

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-16">
      {/* Page Header - Animated */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl font-serif font-bold text-purple-600 mb-6 
            transform transition-all duration-1000 ease-out
            ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Our Spectacular Events
          </h1>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-8 rounded-full
            transform transition-all duration-700 delay-200 ease-out
            ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          ></div>
          <p
            className={`text-xl text-purple-700 font-light max-w-3xl mx-auto
            transform transition-all duration-1000 delay-300 ease-out
            ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Luxury Events That Leave Lasting Impressions
          </p>
        </div>
      </div>

      {/* Featured Events Slider with Animation */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24
          transform transition-all duration-1000 delay-500 ease-out
          ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-96 md:h-[500px] lg:h-[600px]">
            {/* Current slide with animation */}
            <div className="absolute inset-0 w-full h-full">
              {featuredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                  ${
                    currentIndex === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-7000 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Caption with animation */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white
                    transform transition-all duration-700 ease-out
                    ${
                      currentIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                      {event.title}
                    </h2>
                    <div className="flex items-center mb-3 text-pink-200">
                      <span>{event.date}</span>
                      <span className="mx-3">•</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all z-20"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all z-20"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-20 md:bottom-28 right-10 flex space-x-2 z-20">
              {featuredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter with Animation */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12
        transform transition-all duration-1000 delay-600 ease-out
        ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
      >
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "all"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveCategory("wedding")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "wedding"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Weddings
          </button>
          <button
            onClick={() => setActiveCategory("corporate")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "corporate"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Corporate
          </button>
          <button
            onClick={() => setActiveCategory("private")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "private"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Private Events
          </button>
          <button
            onClick={() => setActiveCategory("gala")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === "gala"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            Galas & Fundraisers
          </button>
        </div>
      </div>

      {/* Events Gallery with Animation on Load and Hover */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                ${
                  animateItems
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: `${100 * (index % 6)}ms`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-purple-700 rounded-full">
                    {event.category.charAt(0).toUpperCase() +
                      event.category.slice(1)}
                  </span>
                </div>

                {/* Hidden details that appear on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center text-white">
                    {event.location && (
                      <span className="text-sm">{event.location}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-serif font-medium text-purple-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <button className="text-purple-600 flex items-center group">
                    <span className="text-sm mr-1">View</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action with Animation */}
      <div
        className={`bg-purple-50 py-16
        transform transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-serif font-bold text-purple-700 mb-4">
            Create Your Unforgettable Event
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-3 bg-white text-purple-600 border border-purple-200 font-medium rounded-full shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
