import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  Calendar,
  MapPin,
  Camera,
} from "lucide-react";

const Events = () => {
  // State for the featured event slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // For filtering events by category
  const [activeCategory, setActiveCategory] = useState("all");

  // Animation for the fade-in effect as elements load
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate the featured slider
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Placeholder for event images - replace these URLs with your ImageKit URLs
  const featuredEvents = [
    {
      id: 1,
      title: "Royal Elegance Wedding",
      category: "wedding",
      location: "The Grand Palace, Delhi",
      date: "March 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding1.jpg", // Replace with your ImageKit URL
      description:
        "A breathtaking celebration of love with crystal chandeliers, exotic floral arrangements, and a seven-tier cake that left guests in awe.",
    },
    {
      id: 2,
      title: "Luxe Corporate Gala",
      category: "corporate",
      location: "Taj Luxury Resort, Mumbai",
      date: "January 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate1.jpg", // Replace with your ImageKit URL
      description:
        "A sophisticated evening of networking and celebration, featuring custom installations and immersive entertainment for over 500 executives.",
    },
    {
      id: 3,
      title: "Enchanted Garden Wedding",
      category: "wedding",
      location: "Heritage Mansion, Udaipur",
      date: "February 2025",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding2.jpg", // Replace with your ImageKit URL
      description:
        "Thousands of fairy lights illuminated this magical wedding where guests were transported to a dreamy wonderland of flowers and music.",
    },
    {
      id: 4,
      title: "Tech Innovation Summit",
      category: "corporate",
      location: "Leela Palace, Bengaluru",
      date: "December 2024",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate2.jpg", // Replace with your ImageKit URL
      description:
        "A cutting-edge event featuring holographic presentations, interactive displays, and a synchronized drone light show finale.",
    },
    {
      id: 5,
      title: "Celebrity Birthday Extravaganza",
      category: "private",
      location: "Private Villa, Goa",
      date: "November 2024",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private1.jpg", // Replace with your ImageKit URL
      description:
        "A star-studded celebration with themed rooms, international performers, and a midnight fireworks display over the Arabian Sea.",
    },
  ];

  // Gallery events - Add more events to showcase your 20+ successful events
  const galleryEvents = [
    ...featuredEvents,
    {
      id: 6,
      title: "Royal Heritage Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding3.jpg", // Replace with your ImageKit URL
      location: "Jaipur Palace",
    },
    {
      id: 7,
      title: "Beach Destination Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding4.jpg", // Replace with your ImageKit URL
      location: "Andaman Islands",
    },
    {
      id: 8,
      title: "Luxury Product Launch",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate3.jpg", // Replace with your ImageKit URL
      location: "The Oberoi, Delhi",
    },
    {
      id: 9,
      title: "Intimate Anniversary Celebration",
      category: "private",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private2.jpg", // Replace with your ImageKit URL
      location: "Private Yacht, Mumbai",
    },
    {
      id: 10,
      title: "Charity Fundraising Gala",
      category: "gala",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/gala1.jpg", // Replace with your ImageKit URL
      location: "ITC Grand Bharat",
    },
    {
      id: 11,
      title: "Fashion Show Extravaganza",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate4.jpg", // Replace with your ImageKit URL
      location: "JW Marriott, Mumbai",
    },
    {
      id: 12,
      title: "Traditional Wedding Celebration",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding5.jpg", // Replace with your ImageKit URL
      location: "Heritage Haveli, Rajasthan",
    },
    {
      id: 13,
      title: "CEO Awards Night",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate5.jpg", // Replace with your ImageKit URL
      location: "Grand Hyatt, Mumbai",
    },
    {
      id: 14,
      title: "Private Celebrity Reception",
      category: "private",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private3.jpg", // Replace with your ImageKit URL
      location: "Undisclosed Luxury Venue",
    },
    {
      id: 15,
      title: "Bollywood Theme Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding6.jpg", // Replace with your ImageKit URL
      location: "Film City, Mumbai",
    },
    {
      id: 16,
      title: "Annual Business Conference",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate6.jpg", // Replace with your ImageKit URL
      location: "Shangri-La, Delhi",
    },
    {
      id: 17,
      title: "Royal Family Celebration",
      category: "private",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private4.jpg", // Replace with your ImageKit URL
      location: "Palace Gardens, Jodhpur",
    },
    {
      id: 18,
      title: "Charity Ball",
      category: "gala",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/gala2.jpg", // Replace with your ImageKit URL
      location: "Ritz Carlton, Bangalore",
    },
    {
      id: 19,
      title: "Seaside Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding7.jpg", // Replace with your ImageKit URL
      location: "Private Beach, Goa",
    },
    {
      id: 20,
      title: "Silicon Valley Tech Meetup",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate7.jpg", // Replace with your ImageKit URL
      location: "IT Park, Hyderabad",
    },
    {
      id: 21,
      title: "Elite Soirée",
      category: "private",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/private5.jpg", // Replace with your ImageKit URL
      location: "Private Estate, Lonavala",
    },
    {
      id: 22,
      title: "Luxury Brand Anniversary",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate8.jpg", // Replace with your ImageKit URL
      location: "Heritage Fort, Jaipur",
    },
    {
      id: 23,
      title: "Modern Fusion Wedding",
      category: "wedding",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/wedding8.jpg", // Replace with your ImageKit URL
      location: "Contemporary Resort, Pune",
    },
    {
      id: 24,
      title: "International Sports Event",
      category: "corporate",
      image: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/corporate9.jpg", // Replace with your ImageKit URL
      location: "Sports Arena, Mumbai",
    },
  ];

  const filteredEvents =
    activeCategory === "all"
      ? galleryEvents
      : galleryEvents.filter((event) => event.category === activeCategory);

  // Navigation functions for the featured slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-24">
      {/* Page Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1
            className="text-5xl font-serif font-bold text-purple-600 mb-6 
            transform transition-all duration-1000 ease-out
            translate-y-0 opacity-100 scale-100"
          >
            Our Spectacular Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-8 rounded-full"></div>
          <p
            className="text-xl text-purple-700 font-light max-w-3xl mx-auto
            transform transition-all duration-1000 delay-300 ease-out
            translate-y-0 opacity-100"
          >
            Over 20+ Luxury Events That Left Lasting Impressions
          </p>
        </div>
      </div>

      {/* Featured Events Slider */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-96 md:h-[500px] lg:h-[600px]">
            {/* Current slide */}
            <div className="absolute inset-0 w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={featuredEvents[currentIndex].image}
                  alt={featuredEvents[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 mr-2 text-pink-300" />
                  <span className="text-pink-200">
                    {featuredEvents[currentIndex].date}
                  </span>
                  <span className="mx-3">•</span>
                  <MapPin className="w-5 h-5 mr-2 text-pink-300" />
                  <span className="text-pink-200">
                    {featuredEvents[currentIndex].location}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                  {featuredEvents[currentIndex].title}
                </h2>
                <p className="text-lg text-gray-200 max-w-3xl">
                  {featuredEvents[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-20 md:bottom-28 right-10 flex space-x-2">
              {featuredEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
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

      {/* Events Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                      <>
                        <MapPin className="w-4 h-4 mr-1 text-pink-300" />
                        <span className="text-sm">{event.location}</span>
                      </>
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
                    <span className="text-sm mr-1">View Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">200+</p>
              <p className="text-purple-100">Events Organized</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-purple-100">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-purple-100">Luxury Venues</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-purple-100">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-purple-600 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="text-purple-100 absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="mb-4 flex">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
            </div>
            <p className="text-gray-700 italic mb-6">
              "Ember Events transformed our wedding into something straight out
              of a fairy tale. Every detail was meticulously planned and
              executed to perfection. Our guests still talk about it years
              later!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 overflow-hidden">
                <img
                  src="/api/placeholder/100/100"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-purple-800">
                  Priyanka & Raj Malhotra
                </h4>
                <p className="text-sm text-purple-600">Royal Wedding, Mumbai</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="text-purple-100 absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="mb-4 flex">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <Star className="w-5 h-5 text-amber-400 fill-current" />
            </div>
            <p className="text-gray-700 italic mb-6">
              "Our corporate launch event was nothing short of spectacular.
              Ember Events' attention to detail and innovative ideas helped us
              create a lasting impression on our clients and partners."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 overflow-hidden">
                <img
                  src="/api/placeholder/100/100"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-purple-800">Vikram Ahuja</h4>
                <p className="text-sm text-purple-600">
                  CEO, TechNova Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-purple-700 mb-4">
            Ready to Create Your Unforgettable Event?
          </h2>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto mb-8">
            Let's transform your vision into a spectacular reality. Our team is
            ready to craft a bespoke experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
