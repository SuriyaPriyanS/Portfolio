import React from "react";
import { Card, Typography, CardContent } from "@mui/material";  // MUI components
import { ImPointRight } from "react-icons/im";  // React Icons

function AboutCard() {
  return (
    <Card className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-4 sm:my-6 p-3 sm:p-4 bg-gray-800 text-gray-700 rounded-lg shadow-md">
      <CardContent className="text-black-800">
        <Typography variant="body1" className="text-justify mb-3 sm:mb-4 text-base sm:text-lg font-medium leading-relaxed text-gray-800">
          Hello, I am <span className="text-purple-500">Suriyapriyan</span>
          from <span className="text-purple-500">Tamil Nadu, India.</span>
          <br />
          I am currently working as a Full-Stack Developer  at MercuryMinds, where I am gaining real-world experience in full-stack development and contributing to live projects. This  has allowed me to apply my knowledge of both front-end and back-end technologies in a professional environment.
          <br />
          <br />
          Apart from coding, some other activities that I love to do:
        </Typography>

        <ul className="list-none pl-0">
          <li className="flex items-center mb-2">
            <ImPointRight className="mr-2 text-purple-500" />
            Listening to Music
          </li>
        </ul>

        <Typography variant="body2" className="text-base sm:text-xl text-gray-300 mt-3 sm:mt-4">
          "Hard work Never Fails!"
        </Typography>
        <footer className="text-sm sm:text-base text-gray-400 mt-2 text-right">
          - Suriya
        </footer>
      </CardContent>
    </Card>
  );
}

export default AboutCard;