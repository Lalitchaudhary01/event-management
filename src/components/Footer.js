import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to redirect to WhatsApp
  const redirectToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "918005931391"; // Format for WhatsApp API
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! I would like to know more about Ember Events services.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-pink-300"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-300"></div>
        <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-pink-200"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 flex items-center">
              {/* Logo */}
              <div className="h-12 w-12 flex items-center justify-center relative">
                <img
                  src="https://ik.imagekit.io/yg3bo4zvy/EVENTS/lo-removebg-preview.png?updatedAt=1747212948299"
                  alt="Ember Events Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              {/* Brand name */}
              <div className="ml-3 font-serif tracking-wider text-purple-100 flex flex-col">
                <span className="text-xl font-bold tracking-wide">EMBER</span>
                <span className="text-md text-pink-200 -mt-1 tracking-widest">
                  EVENTS
                </span>
              </div>
            </div>
            <p className="mb-6 text-gray-300 text-center md:text-left">
              Crafting unforgettable moments and bringing your vision to life
              with elegance and flair.
            </p>
            <div className="flex space-x-5 mb-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-purple-200 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/ember_events_"
                aria-label="Instagram"
                className="text-purple-200 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                onClick={redirectToWhatsApp}
                aria-label="WhatsApp"
                className="text-purple-200 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-5 text-pink-200 relative">
              Quick Links
              <span className="block w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-5 text-pink-200 relative">
              Our Services
              <span className="block w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/weddings"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Weddings
                </Link>
              </li>
              <li>
                <Link
                  to="/services/corporate"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  to="/services/galas"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Galas &
                  Fundraisers
                </Link>
              </li>
              <li>
                <Link
                  to="/services/parties"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Birthday Parties
                </Link>
              </li>
              <li>
                <Link
                  to="/services/special"
                  className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 flex items-center"
                >
                  <span className="text-pink-300 mr-2">›</span> Special
                  Occasions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-5 text-pink-200 relative">
              Contact Us
              <span className="block w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mt-2"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-4">
              <p className="flex items-start">
                <span className="flex-shrink-0 bg-purple-700 p-2 rounded-full mr-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-pink-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span>
                  FF - 89 VYAS COLONY
                  <br />
                  SHASTRI NAGAR
                  <br />
                  JAIPUR 302016
                </span>
              </p>
              <p className="flex items-center">
                <span className="flex-shrink-0 bg-purple-700 p-2 rounded-full mr-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-pink-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
                <a href="tel:+918005931391" className="hover:text-pink-200">
                  +91 8005931391
                </a>
              </p>
              <p className="flex items-center">
                <span className="flex-shrink-0 bg-purple-700 p-2 rounded-full mr-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-pink-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <a
                  href="mailto:emberevents9027@gmail.com"
                  className="hover:text-pink-200"
                >
                  emberevents9027@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="mt-16 border-t border-purple-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            {/* <div className="mb-6 lg:mb-0">
              <h4 className="text-lg font-medium mb-3 text-pink-200">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-purple-800 border border-purple-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-white w-64"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-400 px-4 py-2 rounded-r-md text-white hover:from-purple-400 hover:to-pink-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}

            <div className=" text-center lg:text-right text-sm text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} Ember Events. All rights
                reserved.
              </p>
              <div className="mt-2 space-x-4">
                <Link
                  to="/privacy"
                  className="hover:text-pink-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-pink-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
