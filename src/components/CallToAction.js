import React from "react";
import { ChevronRight, Sparkles, GalleryHorizontal } from "lucide-react";

const CallToAction = () => {
  // WhatsApp redirect URL with phone number and preset message
  const phoneNumber = "918005931391"; // Format for WhatsApp API (no + sign)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! Can I get more information.`;

  return (
    <div className="relative py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-500 rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800 bg-opacity-50 rounded-full mb-6">
            <Sparkles size={16} className="text-purple-200" />
            <span className="text-sm font-medium text-purple-100">
              Create Unforgettable Memories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center leading-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-200">
              Dreams
            </span>{" "}
            Into Reality
          </h2>

          <p className="text-lg text-purple-100 mb-10 text-center max-w-2xl">
            Let's collaborate to craft an extraordinary event that reflects your
            unique style and vision. Our dedicated team ensures every detail is
            perfect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-lg">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-purple-700 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium flex items-center justify-center gap-2 group"
            >
              Book a Consultation
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-white border-opacity-50 text-white rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2 group"
            >
              View Our Portfolio
              <GalleryHorizontal
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
