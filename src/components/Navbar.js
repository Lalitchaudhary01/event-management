import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Your Website Name {/* Or replace with your logo */}
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-4">
        <li className="nav-item">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="hover:text-gray-400">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
