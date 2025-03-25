import React from "react";
import { Box, Typography,Grid2 } from "@mui/material";
//import Grid2 from "@mui/material/Unstable_Grid2"; // Import Grid2
import ProjectCard from "./ProjectsCard";
//import Particle from "../Components/Partical";
import editor from "../Assets/Myproject/Myproject.png";
import bitsOfCode from "../Assets/Myproject/blogApp.png.png";

function Projects() {
  return (
    <Box className="py-20 bg-gray-900 project-section">
      {/* <Particle /> */}
      <Box className="max-w-screen-xl mx-auto px-8">
        <Typography variant="h2" className="text-white text-4xl font-semibold">
          My Recent <strong className="text-purple-600">Works</strong>
        </Typography>
        <Typography variant="body1" className="text-white mt-4 mb-8">
          Here are a few projects I've worked on recently.
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 xs={12} md={4}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eventopulse"
              description="Eventopulse in currently worked developed next.js and react.js, node.js and mongodb"
              // ghLink=""
              demoLink="https://eventopulse.boothmaven.com/"
            />
          </Grid2>

          <Grid2 xs={12} md={4}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PetPlatform App"
              description="Simple Adoption Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/SuriyaPriyanS/FrontendAddpet"
              demoLink="https://adoptionpetplafrom.netlify.app/"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Projects;
