import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      className={`bg-indigo-700 text-white flex items-center justify-between px-4 py-2 fixed top-0 w-full z-10 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Your Website Name
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="text-xl mr-2 focus:outline-none"
        >
          {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 m-2 mr-6">
          <li className="nav-item">
            <Link
              to="/"
              className={`hover:text-gray-400 ${
                darkMode ? "dark:text-gray-200" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`hover:text-gray-400 ${
                darkMode ? "dark:text-gray-200" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/events"
              className={`hover:text-gray-400 ${
                darkMode ? "dark:text-gray-200" : ""
              }`}
            >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`hover:text-gray-400 ${
                darkMode ? "dark:text-gray-200" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
