import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h6 className="text-lg md:text-xl font-semibold">
              Design adopted from Sp
            </h6>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <h6 className="text-lg md:text-xl font-semibold">
              Copyright © {year} Sp
            </h6>
          </div>

          {/* Right Section with Social Links */}
          <div className="flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <a
                href="https://github.com/SuriyaPriyanS"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/suriya-priyan-ab186721b/"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;