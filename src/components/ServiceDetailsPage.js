import React from "react";
import DestinationWeddingsImage from "../images/destination wedding.webp";
import Footer from "./Footer";

const ServiceDetailsPage = () => {
  return (
    <>
      <div className="text-center my-12">
        <span className="rounded-full bg-gray-300 text-4xl px-6 py-2 text-red-800 hover:bg-red-800 hover:text-white transition-colors duration-300 mt-10"></span>
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-6">
            <img
              src={DestinationWeddingsImage}
              alt="Destination Weddings"
              className="h-64 w-94 object-cover ring-4 ring-gray-300 hover:ring-blue-800 hover:transform hover:scale-110 transition duration-300"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mt-4 text-left">
            Destination Weddings
          </h3>
          <p className="text-gray-600 mt-4 text-left leading-relaxed">
            Devshree Wedding Planner is a wedding planning company based in the
            city of Ahmednagar. A wedding planner is a who supports the design,
            planning and administration of a couple's wedding reception.
            Weddings are important events in people's lives and as such, couples
            are often willing to spend a substantial amount of money to secure
            that their wedlocks are well-organised and thought by a professional
            specialist. Wedding planners are a great team who plan every wedding
            function smoothly.
          </p>
          <p className="text-gray-600 mt-4 text-left leading-relaxed">
            From planning your little events like pre-wedding to the wedding
            day, there would not be a bit of a second when you will not think
            about your planning of wedding parties. To take away all the stress
            and responsibility, Devshree Wedding Planners have a team of
            well-trained and hardworking wedding planners who will plan various
            celebrations in the most interesting way. As per your location, they
            are ready to give their support and make your event an extraordinary
            one. Devshree Wedding Planners propose a lot of tailor-made settings
            which can be customised as per your preferences and rates.
          </p>
          <ul className="list-disc list-inside text-left text-gray-600 mt-4 leading-relaxed">
            <li>Venue selection</li>
            <li>Catering</li>
            <li>Photography/Videography</li>
            <li>Styling & grooming</li>
            <li>Decoration</li>
            <li>DJ & entertainment</li>
            <li>Guests transfers</li>
            <li>Hospitality & guests support</li>
            <li>Invitations</li>
          </ul>
          <p className="text-gray-600 mt-4 text-left leading-relaxed">
            Planning a destination wedding can be overwhelming, but with
            Devshree Wedding Planners, you can relax and enjoy every moment.
            With our meticulous planning and attention to detail, we ensure that
            everything runs smoothly from start to finish. Leave all the
            logistics and coordination to us while you soak in the joy of your
            special day. Your wedding day is not just an event; it's an
            experience that will be remembered for a lifetime. With our
            expertise in creating unforgettable moments, we will help you create
            memories that you and your loved ones will cherish forever.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
