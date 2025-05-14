import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  User,
  MessageSquare,
  Home,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-purple-100 bg-opacity-90 py-3 shadow-lg"
            : "bg-purple-50 bg-opacity-80 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <span className="sr-only">Ember Events</span>
                {/* Increased logo size */}
                <div className="h-16 w-16 flex items-center justify-center relative">
                  <img
                    src="https://ik.imagekit.io/yg3bo4zvy/events_logo-removebg-preview.png?updatedAt=1747201717497"
                    alt="Ember Events Logo"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                {/* Enhanced text styling with pastel purple */}
                <div className="ml-3 font-serif tracking-wider text-purple-500 flex flex-col">
                  <span className="text-2xl font-bold tracking-wide">
                    EMBER
                  </span>
                  <span className="text-lg text-purple-400 -mt-1 tracking-widest">
                    EVENTS
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-purple-600 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center group"
              >
                <Home className="w-4 h-4 mr-1 opacity-70" />
                HOME
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-300 mt-0.5 ml-1"></span>
              </a>
              <div className="relative group">
                <button className="text-purple-600 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center">
                  SERVICES
                  <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-purple-50 ring-1 ring-purple-300 ring-opacity-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <a
                    href="/weddings"
                    className="block px-4 py-2 text-sm text-purple-600 hover:bg-purple-100"
                  >
                    Weddings
                  </a>
                  <a
                    href="/corporate"
                    className="block px-4 py-2 text-sm text-purple-600 hover:bg-purple-100"
                  >
                    Corporate Events
                  </a>
                  <a
                    href="/galas"
                    className="block px-4 py-2 text-sm text-purple-600 hover:bg-purple-100"
                  >
                    Galas & Fundraisers
                  </a>
                </div>
              </div>
              <a
                href="/events"
                className="text-purple-600 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center group"
              >
                <Calendar className="w-4 h-4 mr-1 opacity-70" />
                EVENTS
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-300 mt-0.5 ml-1"></span>
              </a>
              <a
                href="/about"
                className="text-purple-600 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center group"
              >
                <User className="w-4 h-4 mr-1 opacity-70" />
                ABOUT
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-300 mt-0.5 ml-1"></span>
              </a>
              <a
                href="/contact"
                className="text-purple-600 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center group"
              >
                <MessageSquare className="w-4 h-4 mr-1 opacity-70" />
                CONTACT
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-300 mt-0.5 ml-1"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="/consult"
                className="inline-flex items-center px-6 py-2 border border-purple-300 text-sm font-medium rounded-full shadow-md text-white bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-300 hover:to-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transform transition-transform hover:-translate-y-1"
              >
                BOOK CONSULTATION
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-purple-200 rounded-full p-2 text-purple-600 hover:text-purple-800 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-50 border-t border-purple-200">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-light text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              Home
            </a>
            <a
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-light text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              Services
            </a>
            <a
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-light text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              Events
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-light text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-light text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              Contact
            </a>
            <a
              href="/consult"
              className="block px-3 py-2 text-center rounded-full text-base font-medium text-white bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-300 hover:to-pink-200 mt-4"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
