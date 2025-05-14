import React from "react";

const TaglineSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 flex flex-col items-center w-full">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="mt-2 w-40 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* Luxury quotation marks */}
        <div className="relative">
          <span className="absolute -top-16 -left-4 text-8xl text-purple-100 font-serif opacity-60">
            "
          </span>
          <span className="absolute -bottom-40 -right-4 text-8xl text-purple-100 font-serif opacity-60">
            "
          </span>

          {/* Main content with enhanced typography */}
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-purple-600 mb-8">
              <span className="relative inline-block">
                Creating Magical Moments
                <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </span>
              <span className="block mt-4">That Last Forever</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              At{" "}
              <span className="italic font-normal text-purple-700">
                Ember Events
              </span>
              , we transform your vision into a masterpiece of memories. From
              intimate gatherings to grand celebrations, our attention to detail
              and personalized approach ensures every event is uniquely{" "}
              <span className="italic font-normal">yours</span>.
            </p>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="mx-4">
              <div className="w-2 h-2 rounded-full border border-purple-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
              </div>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>
        </div>

        {/* Premium features listing */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">01</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Exclusive Experiences
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Tailored with sophistication
            </p>
          </div>

          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">02</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Meticulous Planning
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Refined to perfection
            </p>
          </div>

          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">03</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Prestigious Service
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Beyond expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
