import React from "react";
import DestinationWeddingsImage from "../images/destination wedding.webp";
import Footer from "./Footer";

const ServiceDetailsPage = () => {
  return (
    <>
      <div className="text-center my-6">
        <span className="rounded-full bg-gray-300 text-3xl px-3 py-1 text-red-800">
          SERVICES
        </span>
        <div className="mt-4">
          <div className="flex justify-center items-center">
            <img
              src={DestinationWeddingsImage}
              alt="Destination Weddings"
              className="h-94 w-94 object-cover ring-2 ring-gray-300 hover:transform hover:scale-110 transition duration-300"
            />
          </div>
          <h3 className="text-3xl text-center font-bold text-gray-800 mt-4 mx-8 text-left">
            Destination Weddings
          </h3>
          <p className="text-gray-600 text-center mt-2 mx-8 text-left">
            Devshree Wedding Planner is a wedding planning company based in the
            city of Ahmednagar. A wedding planner is a who supports the design,
            planning and administration of a couple's wedding reception.
            Weddings are important events in people's lives and as such, couples
            are often willing to spend a substantial amount of money to secure
            that their wedlocks are well-organised and thought by a professional
            specialist. Wedding planners are a great team who plan every wedding
            function smoothly. Services Offered From planning your little events
            like pre-wedding to the wedding day, there would not be a bit of a
            second when you will not think about your planning of wedding
            parties. To take away all the stress and responsibility, Devshree
            Wedding Planners have a team of well-trained and hardworking wedding
            planners who will plan various celebrations in the most interesting
            way. As per your location, they are ready to give their support and
            make your event an extraordinary one. Devshree Wedding Planners
            propose a lot of tailor-made settings which can be customised as per
            your preferences and rates. The wide collection of services offered
            by them include: Venue selection Catering Photography/ Videography
            Styling & grooming Decoration DJ & entertainment Guests transfers
            Hospitality & guests support Invitations Planning a destination
            wedding can be overwhelming, but with Dev Shree Wedding Planners,
            you can relax and enjoy every moment. With our meticulous planning
            and attention to detail, we ensure that everything runs smoothly
            from start to finish. Leave all the logistics and coordination to us
            while you soak in the joy of your special day Your wedding day is
            not just an event; it's an experience that will be remembered for a
            lifetime. With our expertise in creating unforgettable moments, we
            will help you create memories that you and your loved ones will
            cherish forever
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
