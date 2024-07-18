import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const services = [
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

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));

  if (!service) {
    return <p className="text-center text-red-600 mt-8">Service not found</p>;
  }

  return (
    <>
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4  p-4">
          {service.title}
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center mb-6">
            <img
              src={service.image}
              alt={service.alt}
              className="h-80 w-full object-cover rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
