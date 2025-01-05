import React from "react";
import homeLogo from "../../Assets/about.png";
import Particle from "../Partical.jsx";
import Home2 from "./Home1";
import Type from "./Type";

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen mt-10">
      <div className="container mx-auto px-4 max-w-7xl" id="home">
        <Particle />
        <div className="flex flex-col justify-center items-center text-center py-16 pt-8 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Section (Text) */}
            <div className="md:col-span-7 order-2 md:order-1">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-4">
                Hello!{" "}
                <span className="wave inline-block" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white">
                I'M
                <span className="text-red-400"> Suriyapriyan . S</span>
              </h2>
              <div className="mt-8">
                <Type />
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="md:col-span-5 order-1 md:order-2">
              <img
                src={homeLogo}
                alt="home pic"
                className="rounded-lg shadow-lg w-4/5 md:w-full mx-auto max-h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;