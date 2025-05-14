import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      quote:
        "Working with Ember Events was the best decision we made for our wedding. Their attention to detail, creativity, and flawless execution made our special day absolutely perfect. Every moment was carefully crafted and our guests are still talking about it months later!",
      name: "Manya Arora",
      role: "Wedding Clients",
      initials: "JM",
    },
    {
      quote:
        "Our corporate gala was transformed into an unforgettable experience by Ember Events. They handled everything from venue selection to entertainment, allowing us to focus on our guests. The event exceeded all expectations!",
      name: "Rahul Singh",
      role: "Marketing Director",
      initials: "RS",
    },
    {
      quote:
        "As a nervous bride, I was worried about everything going wrong. Ember Events put all my fears to rest with their professionalism and expertise. They turned my vision into reality and created a magical atmosphere for our celebration.",
      name: "Priya Sharma",
      role: "Bride",
      initials: "PS",
    },
    {
      quote:
        "For our annual charity gala, we needed something extraordinary. Ember Events delivered beyond our expectations, helping us raise record funds while creating a memorable evening for all attendees.",
      name: "Lalit Chaudhary",
      role: "Non-profit Organizer",
      initials: "DC",
    },
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  // Handle video play state
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-purple-700 mb-8 text-center">
          Client Experiences
        </h2>

        {/* Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Video Section - Optimized for horizontal video */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <video
                  className="w-full object-cover"
                  controls
                  poster="https://ik.imagekit.io/yg3bo4zvy/EVENTS/testinomial.mp4?updatedAt=1747219350221"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                >
                  <source
                    src="https://ik.imagekit.io/yg3bo4zvy/EVENTS/testinomial.mp4?updatedAt=1747219350221"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Testimonial Card - Side by side with video on large screens */}
          <div className="lg:w-1/2 relative z-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
              <div>
                <div className="text-6xl text-purple-300 absolute top-4 left-4 font-serif">
                  "
                </div>
                <p className="text-lg text-gray-700 mb-6 relative z-10 pt-6">
                  {testimonials[currentTestimonial].quote}
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-purple-700">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index
                          ? "bg-purple-600 w-6"
                          : "bg-purple-300"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-16 bg-purple-200 rounded-full opacity-50 mr-24"></div>
          <div className="w-8 h-8 bg-pink-200 rounded-full opacity-50"></div>
          <div className="w-12 h-12 bg-purple-300 rounded-full opacity-50 ml-16"></div>
        </div>

        {/* Additional Testimonials Preview - Smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {testimonials
            .filter((_, i) => i !== currentTestimonial)
            .slice(0, 3)
            .map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setCurrentTestimonial(
                    testimonials.findIndex((t) => t.name === testimonial.name)
                  )
                }
              >
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  "{testimonial.quote.substring(0, 100)}..."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                    {testimonial.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-purple-700 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
