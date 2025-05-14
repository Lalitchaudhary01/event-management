import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, Play, ZoomIn } from "lucide-react";

const Event = () => {
  // State for the slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activePreview, setActivePreview] = useState(null);

  // Gallery media items
  const mediaItems = [
    {
      id: 1,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.14_600e89f0.jpg?updatedAt=1747224937769",
    },
    {
      id: 2,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.57.01_efe45d1f.jpg?updatedAt=1747224921455",
    },
    {
      id: 3,
      type: "video",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Video%202025-05-14%20at%2014.51.13_6c0bdadd.mp4?updatedAt=1747225020716",
    },
    {
      id: 4,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.11_b27552bc.jpg?updatedAt=1747224940891",
    },
    {
      id: 5,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.31_9b246386.jpg?updatedAt=1747224923376",
    },
    {
      id: 6,
      type: "video",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Video%202025-05-14%20at%2014.52.30_91311f21.mp4?updatedAt=1747225030982",
    },
    {
      id: 7,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.10_287212ff.jpg?updatedAt=1747224938813",
    },
    {
      id: 8,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.32_365f4e80.jpg?updatedAt=1747224921076",
    },
    {
      id: 9,
      type: "video",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Video%202025-05-14%20at%2016.57.00_39908ffa.mp4?updatedAt=1747225027621",
    },
    {
      id: 10,
      type: "image",
      url: "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2016.56.33_a56e14ac.jpg?updatedAt=1747224917789",
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Auto-rotates the sliders
  useEffect(() => {
    setIsLoaded(true);

    setTimeout(() => {
      setAnimateItems(true);
    }, 400);

    const mainInterval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      }
    }, 4000);

    const secondaryInterval = setInterval(() => {
      if (!isHovering) {
        setSecondaryIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      }
    }, 5000);

    return () => {
      clearInterval(mainInterval);
      clearInterval(secondaryInterval);
    };
  }, [isHovering, mediaItems.length]);

  // Navigation functions for the slider
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  }, [mediaItems.length]);

  // Modal preview functions
  const openPreview = (item) => {
    setActivePreview(item);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setActivePreview(null);
    document.body.style.overflow = "auto";
  };

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div className="bg-black pt-8 sm:pt-16">
      {/* Main Slider with Animation */}
      <div
        className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-6 sm:mb-12 transition-all duration-1000 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(16px)",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="rounded-xl overflow-hidden">
          <div
            className="relative h-64 sm:h-80 md:h-96 lg:h-128"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Current slide with animation */}
            <div className="absolute inset-0 w-full h-full">
              {mediaItems.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: currentIndex === index ? 1 : 0,
                    zIndex: currentIndex === index ? 10 : 0,
                  }}
                  onClick={() => openPreview(item)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-7000 ease-out hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Zoom icon for mobile */}
            <div className="absolute top-4 right-4 z-20">
              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
            >
              <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
              {mediaItems.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 sm:h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white w-6 sm:w-8"
                      : "bg-white/50 hover:bg-white/80 w-2 sm:w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-optimized grid view for smaller screens */}
      <div className="md:hidden px-2 mb-8">
        <div className="grid grid-cols-2 gap-2">
          {mediaItems.slice(0, 6).map((item) => (
            <div
              key={`grid-${item.id}`}
              className="relative aspect-square rounded-lg overflow-hidden"
              onClick={() => openPreview(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="w-full mt-3 py-2 text-center rounded-lg bg-white/10 text-white text-sm font-medium"
          onClick={() => openPreview(mediaItems[0])}
        >
          View All Media
        </button>
      </div>

      {/* Horizontal scrolling gallery for desktop - hidden on mobile */}
      <div className="hidden md:block">
        {/* Animated Showcase Row 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 overflow-hidden">
          <div
            className="relative flex space-x-4 transition-all duration-1000 ease-out"
            style={{
              opacity: animateItems ? 1 : 0,
              transform: animateItems ? "translateX(0)" : "translateX(50px)",
            }}
          >
            {mediaItems.map((item, index) => (
              <div
                key={`row1-${item.id}`}
                className="group relative min-w-64 h-48 md:h-64 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-500"
                style={{
                  transform: `translateX(-${secondaryIndex * 20}%)`,
                  transition: "transform 1s ease-out",
                }}
                onClick={() => openPreview(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {item.type === "video" && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Animated Showcase Row 2 (Reverse Direction) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 overflow-hidden">
          <div
            className="relative flex space-x-4 transition-all duration-1000 ease-out"
            style={{
              opacity: animateItems ? 1 : 0,
              transform: animateItems ? "translateX(0)" : "translateX(-50px)",
            }}
          >
            {[...mediaItems].reverse().map((item, index) => (
              <div
                key={`row2-${item.id}`}
                className="group relative min-w-64 h-48 md:h-64 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-500"
                style={{
                  transform: `translateX(${secondaryIndex * 15}%)`,
                  transition: "transform 1s ease-out",
                }}
                onClick={() => openPreview(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {item.type === "video" && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90"
            onClick={closePreview}
          ></div>

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-full max-h-screen flex items-center justify-center p-4">
              {activePreview.type === "image" ? (
                <img
                  src={activePreview.url}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <video
                  src={activePreview.url}
                  className="max-w-full max-h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                ></video>
              )}
            </div>

            {/* Navigation arrows for preview */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = mediaItems.findIndex(
                    (item) => item.id === activePreview.id
                  );
                  const prevIndex =
                    (currentIndex - 1 + mediaItems.length) % mediaItems.length;
                  setActivePreview(mediaItems[prevIndex]);
                }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closePreview();
                }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
              >
                <div className="w-6 h-6 text-white relative">
                  <span className="absolute inset-0 block w-0.5 h-6 bg-white left-1/2 -ml-px rotate-45"></span>
                  <span className="absolute inset-0 block w-0.5 h-6 bg-white left-1/2 -ml-px -rotate-45"></span>
                </div>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = mediaItems.findIndex(
                    (item) => item.id === activePreview.id
                  );
                  const nextIndex = (currentIndex + 1) % mediaItems.length;
                  setActivePreview(mediaItems[nextIndex]);
                }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
