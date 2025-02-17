import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 mt-auto">
      {" "}
      {/* Added mt-auto for footer positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8">
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 items-center justify-center">
            <Link to="/home" className="hover:text-gray-400 text-sm">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400 text-sm">
              About Us
            </Link>
            <Link to="/cart" className="hover:text-gray-400 text-sm">
              Cart
            </Link>
            <Link to="/contact" className="hover:text-gray-400 text-sm">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.facebook.com/swiggy.in/"
              className="hover:text-gray-400 text-sm"
            >
              <i className="fab fa-facebook">Facebook</i>
            </a>
            <a
              href="https://x.com/Swiggy?ref_src=twsrc%5Etfw&mx=2"
              className="hover:text-gray-400 text-sm"
            >
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a
              href="https://www.instagram.com/swiggyindia/"
              className="hover:text-gray-400 text-sm"
            >
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-700 pt-2 text-center text-xs">
          <p>&copy; 2025 Swiggy Demo By Saransh Meena | All rights reserved.</p>
          <div className="mt-1 flex items-center justify-center">
            <p className=" text-xs">Privacy Policy | </p>
            <p className=" text-xs"> Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
