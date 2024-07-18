import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative w-screen  overflow-hidden">
      {/* Social media section */}
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a
                href="/"
                className="block w-56 mb-10 border-b-4 border-blue-600"
              >
                <text
                  fill="white"
                  font-family="Nunito-Bold, Nunito"
                  font-size="512"
                  font-weight="bold"
                >
                  <tspan x="654" y="518">
                    Ember Events
                  </tspan>
                </text>
              </a>
              <p className="text-justify">
                Gate no. 2, Golden Leaf, Railway Station, 411, 4th floor, Tonk
                Rd, Gandhi Nagar, Jaipur, Rajasthan 302015
                <br></br>Phone: +91 98873 89999
                <br></br>Email: emberevents@gmail.com
              </p>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Company
                </h2>
              </div>
              <ul class="leading-8">
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <a href="/terms" class="hover:text-blue-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Blog
                </h2>
              </div>
              <ul class="leading-8">
                <li>
                  <a href="/" class="hover:text-blue-400">
                    Stay updated with the latest trends & <br></br> insights in
                    event management!
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue-400">
                    Dive into our blog for expert tips,<br></br> success
                    stories, and innovative
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue-400">
                    ideas to make your events unforgettable.<br></br>
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:text-blue-400">
                    Explore now and get inspired with Ember Events.
                  </a>
                </li>
              </ul>
            </div>

            {/* Social media icons */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                  Connect With Us
                </h2>
              </div>
              <div className="flex space-x-2">
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-indigo-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024 - {new Date().getFullYear()} Ember Events. All
              Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Ember Events.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
