import React, { useState } from "react";
import { Link } from "react-router-dom";
import DestinationWeddingsImage from "../images/destination wedding.webp";
import Corporate from "../images/corporate event.jpg";
import Service from "./Service";

const ServicePage = () => {
  const [showMore, setShowMore] = useState(false);

  // Grid items for initial display (2 grids)
  const initialGridItems = [
    {
      image: DestinationWeddingsImage,
      alt: "Destination Weddings",
      title: "Destination Weddings",
      description: "Plan your dream destination wedding with Devshree.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
  ];

  // Grid items for additional display (6 grids)
  const additionalGridItems = [
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    {
      image: Corporate,
      alt: "Devshree Holidays",
      title: "Devshree Holidays",
      description: "Explore the world with our curated holiday packages.",
    },
    // Add more grid items here if needed
  ];

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div className="text-center relative w-screen overflow-hidden ">
        <div className="mt-5">
          <span className="rounded-full bg-gray-300 text-3xl px-3 py-1 text-indigo-700">
            SERVICES
          </span>
        </div>
        <p className="mt-4 my-4">
          <span className="text-gray-800 text-4xl font-bold">Check our</span>{" "}
          <span className="text-indigo-700 text-4xl font-bold">Services</span>
        </p>
        <p className="text-gray-700 text-center mx-10 my-4">
          Creating unforgettable moments and turning dreams into reality,
          Devshree offers a diverse range of services, from captivating weddings
          and idyllic holidays to warm hospitality and artistic experiences.
          With an eye for detail and a passion for perfection, we are your
          partners in crafting cherished memories that transcend time. Welcome
          to a world where magic comes to life.
        </p>
        <div className="mx-12">
          <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-12">
            {showMore
              ? additionalGridItems.map((item, index) => (
                  <Link key={index} to="/service-details" className="text-left">
                    <div className="bg-white h-full p-6 rounded-md shadow-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-72 w-full object-cover ring-2 ring-gray-300 hover:transform hover:scale-110 transition duration-300"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mt-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <button className="mt-2 px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-red-600">
                        Read More
                      </button>
                    </div>
                  </Link>
                ))
              : initialGridItems.map((item, index) => (
                  <Link key={index} to="/service-details" className="text-left">
                    <div className="bg-white h-full p-6 rounded-md shadow-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-72 w-full object-cover ring-2 ring-gray-300 hover:transform hover:scale-110 transition duration-300"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mt-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <button className="mt-2 px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-red-600">
                        Read More
                      </button>
                    </div>
                  </Link>
                ))}
          </section>
          {!showMore && (
            <div class="relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                onClick={handleShowMore}
                title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                For more
              </Link>
            </div>
          )}
        </div>
      </div>
      <Service />
    </>
  );
};

export default ServicePage;
