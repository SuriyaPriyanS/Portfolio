import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Mynamelogo.avif";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    updateNavbar(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navColour ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            {/* <img src={logo} alt="brand" className="h-10 w-auto" /> */}
          </Link>

          <button
            onClick={() => updateExpanded(!expand)}
            className="md:hidden text-white hover:rotate-180 transition-transform duration-300"
          >
            {expand ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-gray-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            ${expand ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}
            transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link to="/" 
                  onClick={() => updateExpanded(false)}
                  className="flex items-center text-white hover:text-amber-400 hover:translate-x-2 transition-all duration-300">
                  <AiOutlineHome className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about"
                  onClick={() => updateExpanded(false)}
                  className="flex items-center text-white hover:text-amber-400 hover:translate-x-2 transition-all duration-300">
                  <AiOutlineUser className="mr-1" /> About
                </Link>
              </li>
              <li>
                <Link to="/project"
                  onClick={() => updateExpanded(false)}
                  className="flex items-center text-white hover:text-amber-400 hover:translate-x-2 transition-all duration-300">
                  <AiOutlineFundProjectionScreen className="mr-1" /> Projects
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/suriya-priyan-ab186721b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-white hover:text-amber-400 hover:translate-x-2 transition-all duration-300">
                  <ImBlog className="mr-1" /> Blogs
                </a>
              </li>
              <li>
                <Link to="/resume"
                  onClick={() => updateExpanded(false)}
                  className="flex items-center text-white hover:text-amber-400 hover:translate-x-2 transition-all duration-300">
                  <CgFileDocument className="mr-1" /> Resume
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/SuriyaPriyanS/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-900 text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 hover:scale-105 hover:shadow-yellow-400/50 transition-all duration-300"
                >
                  <CgGitFork className="animate-bounce" />
                  <AiFillStar className="animate-pulse" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;