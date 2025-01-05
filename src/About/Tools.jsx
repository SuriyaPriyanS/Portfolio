import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="pb-10">
     
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center px-4">
          <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
            <SiWindows11 className="w-fit h-fit text-blue-500 hover:text-blue-700 transition-all" />
          </div>
          <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
            <SiVisualstudiocode className="w-fit h-fit text-blue-500 hover:text-blue-700 transition-all" />
          </div>
          <div className="tech-icons p-3 aspect-square flex items-center justify-center bg-white/5 rounded-lg hover:scale-105 transition-all">
            <SiPostman className="w-fit h-fit text-orange-500 hover:text-orange-700 transition-all" />
          </div>
        </div>
      </div>
    
  );
}

export default Toolstack;