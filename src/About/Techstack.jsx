import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiGithub, DiJava, DiAws } from "react-icons/di";
import { SiExpress, SiRedux, SiFirebase, SiNextdotjs } from "react-icons/si";
import { FaJira } from "react-icons/fa";

const Techstack = () => {
  return (
    <div className="pb-10">
      <h1 className="project-heading text-center pb-8">
        Technologies I <span className="text-purple-500">Use</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center px-4">
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiHtml5 className="w-fit h-fit text-orange-500 hover:text-orange-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiCss3 className="w-fit h-fit text-blue-500 hover:text-blue-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiJavascript1 className="w-fit h-fit text-yellow-500 hover:text-yellow-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiReact className="w-fit h-fit text-cyan-500 hover:text-cyan-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <SiRedux className="w-fit h-fit text-indigo-600 hover:text-indigo-800 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiNodejs className="w-fit h-fit text-green-600 hover:text-green-800 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiMongodb className="w-fit h-fit text-green-700 hover:text-green-900 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiGit className="w-fit h-fit text-red-500 hover:text-red-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiGithub className="w-fit h-fit text-gray-900 hover:text-gray-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <SiFirebase className="w-fit h-fit text-orange-600 hover:text-orange-800 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiJava className="w-fit h-fit text-red-500 hover:text-red-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <DiAws className="w-fit h-fit text-yellow-600 hover:text-yellow-800 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <SiNextdotjs className="w-fit h-fit text-black hover:text-gray-700 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <SiExpress className="w-fit h-fit text-black hover:text-green-800 transition-all" />
        </div>
        <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
          <FaJira className="w-fit h-fit text-blue-700 hover:text-blue-900 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Techstack;