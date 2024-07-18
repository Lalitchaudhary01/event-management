import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const ServicePage = () => {
  const [showMore, setShowMore] = useState(false);

  // Grid items for initial display (2 grids)
  const initialGridItems = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/fc/74/e0/fc74e0344f537ba472f9268c6ff5abbc.jpg",
      alt: "Birthday Party",
      title: "Birthday Party",
      description: "Celebrate your special day with us.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/53/16/70/53167015a43b306921522d0650a81fba.jpg",
      alt: "Wedding Events",
      title: "Wedding Events",
      description: "Make your wedding memorable with our services.",
    },
  ];

  // Grid items for additional display (10 grids)
  const additionalGridItems = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/fc/74/e0/fc74e0344f537ba472f9268c6ff5abbc.jpg",
      alt: "Birthday Party",
      title: "Birthday Party",
      description: "Celebrate your special day with us.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/53/16/70/53167015a43b306921522d0650a81fba.jpg",
      alt: "Wedding Events",
      title: "Wedding Events",
      description: "Make your wedding memorable with our services.",
    },
    {
      id: 3,
      image:
        "https://english.cdn.zeenews.com/sites/default/files/2022/05/28/1047568-resort-wedding.jpg",
      alt: "Destination Weddings",
      title: "Destination Weddings",
      description: "Plan your dream destination wedding with us.",
    },
    {
      id: 4,
      image:
        "https://www.travelandtourworld.com/wp-content/uploads/2024/02/Award-General-850x485.jpg",
      alt: "Award Function",
      title: "Award Function",
      description: "Host a grand award function with our expertise.",
    },
    {
      id: 5,
      image:
        "https://eventsbase.co.uk/wp-content/uploads/2022/10/Cvent-Europe-600x300-1.png",
      alt: "Sponsor Events",
      title: "Sponsor Events",
      description: "Organize successful sponsor events with our support.",
    },
    {
      id: 6,
      image:
        "https://www.ecohospitality.in/new-images/wedding/wedding-banner.jpg",
      alt: "Hospitality",
      title: "Hospitality",
      description: "Experience top-notch hospitality services.",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/564x/fc/74/e0/fc74e0344f537ba472f9268c6ff5abbc.jpg",
      alt: "RSVP",
      title: "RSVP",
      description: "Manage your RSVP events effortlessly.",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyDdLBW29tETzMKBN7K4bgUCYuXJ4YTGzXQ&s",
      alt: "Corporate",
      title: "Corporate",
      description: "Host professional corporate events with us.",
    },
    {
      id: 9,
      image:
        "https://tourismquest.com/wp-content/uploads/2024/03/Live-Concert.jpg",
      alt: "Musical Conference",
      title: "Musical Conference",
      description: "Attend engaging musical conferences.",
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/564x/fc/74/e0/fc74e0344f537ba472f9268c6ff5abbc.jpg",
      alt: "Public & Private Events",
      title: "Public & Private Events",
      description: "Plan any public or private event with us.",
    },
  ];

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div className="text-center relative w-screen overflow-hidden ">
        <div className="mt-5">
          <span className="rounded-full w-40 bg-gray-300 text-4xl my-3 px-6 py-2 text-center text-indigo-700 hover:bg-indigo-700 hover:text-white transition-colors duration-300">
            Services
          </span>
        </div>
        <p className="mt-4 my-4">
          <span className="text-gray-800 text-4xl font-bold">Check our</span>{" "}
          <span className="text-indigo-700 text-4xl font-bold">Services</span>
        </p>
        <p className="text-gray-700 text-center mx-10 my-4">
          Creating unforgettable moments and turning dreams into reality, Ember
          Events offers a diverse range of services, from captivating weddings
          and idyllic holidays to warm hospitality and artistic experiences.
          With an eye for detail and a passion for perfection, we are your
          partners in crafting cherished memories that transcend time. Welcome
          to a world where magic comes to life.
        </p>
        <div className="mx-12">
          <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-12">
            {showMore
              ? additionalGridItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/service-details/${item.id}`}
                    className="text-left"
                  >
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
                  <Link
                    key={index}
                    to={`/service-details/${item.id}`}
                    className="text-left"
                  >
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
            <div class="relative inline-flex  group mb-5">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                onClick={handleShowMore}
                title="Get quote now"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
