import React from "react";

const Testimonials = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-purple-600 mb-12">
          Client Experiences
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg relative">
          <div className="text-6xl text-purple-200 absolute top-4 left-4 font-serif">
            "
          </div>
          <p className="text-lg text-gray-600 mb-6 relative z-10">
            Working with Ember Events was the best decision we made for our
            wedding. Their attention to detail, creativity, and flawless
            execution made our special day absolutely perfect. Every moment was
            carefully crafted and our guests are still talking about it months
            later!
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-500 font-bold mr-3">
              JM
            </div>
            <div className="text-left">
              <p className="font-medium text-purple-600">Jessica & Michael</p>
              <p className="text-sm text-gray-500">Wedding Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
