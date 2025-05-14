import React from "react";

const CallToAction = () => {
  return (
    <div className="py-16 bg-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Ready to Create Your Perfect Event?
        </h2>
        <p className="text-lg text-purple-100 mb-8">
          Let's collaborate to bring your vision to life with our expertise and
          attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/consult"
            className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition transform hover:-translate-y-1 shadow-lg font-medium"
          >
            Book a Consultation
          </a>
          <a
            href="/portfolio"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition transform hover:-translate-y-1 font-medium"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
