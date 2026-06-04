import React from "react";

const heroImage =
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.31.58_089ec1f2.jpg?updatedAt=1747209954490";

const HeroSlider = () => {
  const whatsappUrl =
    "https://wa.me/918005931391?text=Hello! Can I get more information.";

  return (
    <section className="bg-[#fbf7f8] px-6 py-14 md:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr]">
        <div className="max-w-2xl">
          <p className="mb-5 font-serif text-lg font-semibold text-[#211817]">
            Ember Events
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#171111] sm:text-5xl lg:text-[52px]">
            Wedding, Corporate, Birthday, and Social Event Planning Services in India
          </h1>
          <p className="mt-8 max-w-xl text-[15px] font-medium leading-8 text-[#251f1f]">
            Creating Extraordinary Experiences, One Celebration At A Time
            At Ember Events, we are passionate about turning special occasions
            into unforgettable memories. With a commitment to creativity,
            quality, and flawless execution, we provide complete event planning
            and management services for weddings, corporate events, birthdays,
            and social celebrations. Our dedicated team works closely with
            clients to understand their vision and bring it to life through
            innovative concepts, stunning decor, and exceptional attention to
            detail. No matter the size or style of your event, we strive to
            create experiences that exceed expectations and leave a lasting
            impression on every guest.
          </p>
        </div>

        <div className="h-[300px] overflow-hidden bg-white shadow-sm md:h-[360px]">
          <img
            src={heroImage}
            alt="Pink event decoration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-purple-400 hover:to-pink-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
