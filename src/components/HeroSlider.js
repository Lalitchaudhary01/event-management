import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Star } from "lucide-react";

const HeroSlider = () => {
  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Expanded event slides with luxury descriptions using actual ImageKit URLs
  const eventSlides = [
    {
      id: 1,
      title: "Exclusive Venues",
      description: "Handpicked elite locations for unforgettable celebrations",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/VENUE.jpg?updatedAt=1747209052356",
    },
    {
      id: 2,
      title: "Bespoke Celebrations",
      description: "Personalized experiences crafted with meticulous attention",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.31.58_089ec1f2.jpg?updatedAt=1747209954490",
    },
    {
      id: 3,
      title: "Gala Experiences",
      description: "Sophisticated gatherings with world-class service",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.32.17_f3cb6f57.jpg?updatedAt=1747209954070",
    },

    {
      id: 5,
      title: "Corporate Excellence",
      description: "Distinguished events that elevate your brand",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/4.jpg?updatedAt=1747210126233",
    },
    {
      id: 6,
      title: "Exquisite Details",
      description: "Every element curated for luxury and refinement",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/3.jpg?updatedAt=1747210126181",
    },
    {
      id: 7,
      title: "Iconic Celebrations",
      description: "Creating legacies through extraordinary moments",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/2.jpg?updatedAt=1747210126175",
    },
    {
      id: 8,
      title: "Unparalleled Service",
      description: "Attentive hospitality that exceeds expectations",
      image:
        "https://ik.imagekit.io/yg3bo4zvy/EVENTS/1.jpg?updatedAt=1747210126175",
    },
  ];

  // Auto-slide functionality - pauses on hover
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === eventSlides.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [eventSlides.length, isHovering]);

  // Navigation functions
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === eventSlides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventSlides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative h-screen max-h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {eventSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Sophisticated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Elegant text overlay for each slide */}
            {/* <div className="absolute bottom-32 left-16 max-w-lg text-left text-white z-10 opacity-0 animate-fadeIn">
              <h3 className="text-xl font-light tracking-wider mb-2 text-purple-200">
                {slide.title}
              </h3>
              <p className="text-sm font-light opacity-90">
                {slide.description}
              </p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Enhanced navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Sophisticated progress bar instead of dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-1/3 max-w-lg">
        <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-700 ease-in-out"
            style={{
              width: `${((currentSlide + 1) / eventSlides.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-white/50">
          <span>01</span>
          <span>0{eventSlides.length}</span>
        </div>
      </div>

      {/* Elegant hero overlay with golden accents */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-6">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="mt-2 w-32 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          </div>

          {/* Main title with luxury styling */}
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-widest mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
              OPULENT
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              OCCASIONS
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 font-light tracking-wide">
            Where extraordinary visions transform into unforgettable moments
          </p>

          {/* Decorative elements */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced CTA section */}
        {/* <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/consult"
            className="group px-8 py-4 bg-gradient-to-r from-purple-900 to-purple-600 text-white rounded-sm hover:from-purple-800 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg font-light tracking-wider flex items-center justify-center overflow-hidden relative"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 transform -skew-x-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
            <Calendar className="w-4 h-4 mr-2" />
            <span>SCHEDULE CONSULTATION</span>
          </a>

          <a
            href="/portfolio"
            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-sm hover:bg-white/10 transition-all duration-300 font-light tracking-wider flex items-center"
          >
            <Star className="w-4 h-4 mr-2" />
            <span>VIEW PORTFOLIO</span>
          </a>
        </div> */}

        {/* Luxury indicators */}
        {/* <div className="mt-16 flex items-center justify-center gap-8 text-white/70">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">GLOBAL LOCATIONS</span>
          </div>
          <div className="h-4 w-px bg-white/20"></div>
          <div>
            <span className="text-sm">EST. 2010</span>
          </div>
          <div className="h-4 w-px bg-white/20"></div>
          <div>
            <span className="text-sm">AWARD WINNING</span>
          </div>
        </div> */}
      </div>

      {/* Custom styling for animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
