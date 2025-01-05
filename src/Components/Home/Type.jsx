import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <h1 className="text-xl font-semibold text-center text-gray-900">
      <Typewriter
        options={{
          strings: [
            "Java Developer",
            "Software Engineer",
            "React Developer",
            "Next Developer",
            "MERN Stack Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </h1>
  );
}

export default Type;
