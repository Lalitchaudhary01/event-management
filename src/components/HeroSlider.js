import React, { useEffect, useState } from "react";

const heroImages = [
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/VENUE.jpg?updatedAt=1747209052356",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.31.58_089ec1f2.jpg?updatedAt=1747209954490",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/WhatsApp%20Image%202025-05-14%20at%2013.32.17_f3cb6f57.jpg?updatedAt=1747209954070",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/4.jpg?updatedAt=1747210126233",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/3.jpg?updatedAt=1747210126181",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/2.jpg?updatedAt=1747210126175",
  "https://ik.imagekit.io/yg3bo4zvy/EVENTS/1.jpg?updatedAt=1747210126175",
];

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappUrl =
    "https://wa.me/918005935735?text=Hello! Can I get more information.";
  const activeImages = [
    heroImages[currentImage],
    heroImages[(currentImage + 2) % heroImages.length],
    heroImages[(currentImage + 4) % heroImages.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((image) =>
        image === heroImages.length - 1 ? 0 : image + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fbf7f8] px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mb-5 font-serif text-lg font-semibold text-[#211817]">
            Ember Events
          </p>
          <h1 className="font-serif text-3xl leading-tight text-[#171111] sm:text-4xl md:text-5xl lg:text-[52px]">
            Wedding, Corporate, Birthday, and Social Event Planning Services in India
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-[#251f1f] sm:text-[15px] sm:leading-8 lg:mx-0 lg:mt-8">
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

        <div className="relative mx-auto min-h-[360px] w-full max-w-xl sm:min-h-[410px] lg:max-w-none">
          <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-pink-200/80 via-purple-100/50 to-white blur-2xl sm:-inset-5 sm:rounded-[36px]"></div>

          <div className="absolute left-0 top-4 h-[240px] w-[82%] overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-[0_20px_48px_rgba(80,32,56,0.22)] sm:top-8 sm:h-[300px] sm:rounded-[28px] sm:border-8 md:h-[330px]">
            {heroImages.map((image, index) => (
              <img
                key={`main-${image}`}
                src={image}
                alt="Event decoration"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentImage
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
          </div>

          <div className="absolute right-0 top-0 h-28 w-[44%] rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_rgba(80,32,56,0.2)] sm:h-36 sm:rotate-3 sm:border-[6px] md:h-44">
            <img
              src={activeImages[1]}
              alt="Event setup detail"
              className="h-full w-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/10"></div>
          </div>

          <div className="absolute bottom-0 right-3 h-36 w-[52%] -rotate-1 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_16px_38px_rgba(80,32,56,0.22)] sm:right-8 sm:h-44 sm:-rotate-2 sm:border-[6px] md:h-52">
            <img
              src={activeImages[2]}
              alt="Celebration decor"
              className="h-full w-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-white/10"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-purple-400 hover:to-pink-300 sm:w-auto"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
