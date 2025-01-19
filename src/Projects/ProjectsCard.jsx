import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full sm:max-w-sm lg:max-w-md mx-auto my-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl">
        <CardMedia
          component="img"
          height="200"
          image={props.imgPath}
          alt="project-image"
          className="object-cover h-48 sm:h-56 lg:h-64 w-full hover:opacity-80 transition-opacity duration-300"
        />
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <Typography variant="h5" component="h2" className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-300 mb-2 sm:mb-3 lg:mb-4">
            {props.title}
          </Typography>
          <Typography variant="body2" className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
            {props.description}
          </Typography>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                href={props.ghLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 text-sm sm:text-base lg:text-lg shadow-lg"
                disabled
              >
                <BsGithub className="mr-2 text-lg sm:text-xl" />
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            </motion.div>

            {props.demoLink && (
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 text-sm sm:text-base lg:text-lg shadow-lg"
                  disabled
                >
                  <CgWebsite className="mr-2 text-lg sm:text-xl" />
                  Demo
                </a>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;