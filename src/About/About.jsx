import React from "react";
import Particle from "../Components/Partical";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../Assets/about.png";
import Toolstack from "./Tools";

function About() {
  return (
    <div className="w-full relative">
      <Particle />

      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-12 gap-8 py-12">
          <div className="col-span-7">
            <div className="pt-8 pb-12">
              <h1 className="text-3xl font-semibold pb-6 text-left">
                Know Who <strong className="text-purple-600">I'M</strong>
              </h1>
              <Aboutcard />
            </div>
          </div>

          <div className="col-span-5">
            <div className="pt-8 pb-12">
              <img
                src={laptopImg}
                alt="about"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-8">
          Professional <strong className="text-purple-600">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="text-2xl font-semibold text-center mb-8">
          <strong className="text-purple-600">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;