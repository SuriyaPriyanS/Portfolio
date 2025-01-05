import React from "react";
import myImg from "../../Assets/Avater.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="bg-gray py-8 sm:py-12 md:py-20" id="about">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Text Section */}
          <div className="sm:col-span-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
            </h3>
            <p className="mt-4 sm:mt-6 md:mt-8 text-white text-sm sm:text-base">
              I fell in love with programming and I have at least learned
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="text-purple-600"> Java, Javascript, and React. </b>
              </i>
              <br />
              <br />
              My field of interest is building new  
              <i>
                <b className="text-purple-600">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-purple-600">Node.js</b> and
              <i>
                <b className="text-purple-600"> Modern Javascript Libraries and Frameworks </b>
              </i>
                like
              <i>
                <b className="text-purple-600"> React.js </b>
              </i>
            </p>
          </div>

          {/* Image Section */}
          <div className="sm:col-span-4 flex justify-center mt-6 sm:mt-0">
            <Tilt>
              <img
                src={myImg}
                alt="avatar"
                className="w-[250px] sm:w-[300px] md:w-full rounded-full shadow-lg"
              />
            </Tilt>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl text-white">
              FIND ME ON
            </h4>
            <p className="mt-2 sm:mt-3 md:mt-4 text-white text-sm sm:text-base">
              Feel free to <span className="text-purple-600">connect</span> with me
            </p>
            <div className="flex justify-center mt-4">
              <ul className="flex space-x-4 sm:space-x-5 md:space-x-6">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-purple-600 transition-colors"
                  >
                    <AiFillGithub className="text-xl sm:text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-purple-600 transition-colors"
                  >
                    <AiOutlineTwitter className="text-xl sm:text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-purple-600 transition-colors"
                  >
                    <FaLinkedinIn className="text-xl sm:text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-purple-600 transition-colors"
                  >
                    <AiFillInstagram className="text-xl sm:text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;