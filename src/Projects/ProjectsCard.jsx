import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material"; // MUI imports

function ProjectCards(props) {
  return (
    <Card className="max-w-xs mx-4 my-4 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <CardMedia
        component="img"
        height="200"
        image={props.imgPath}
        alt="project-image"
        className="object-cover"
      />
      <CardContent className="p-4">
        <Typography variant="h5" component="h2" className="text-xl font-semibold">
          {props.title}
        </Typography>
        <Typography variant="body2" className="text-sm text-gray-300 mt-2 mb-4 text-justify">
          {props.description}
        </Typography>
        <div className="flex flex-wrap justify-start">
          <Button
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 mr-3 mb-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            disabled
          >
            <BsGithub className="mr-2" />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and it's not a Blog, it will render the Demo button */}
          {!props.isBlog && props.demoLink && (
            <Button
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled
            >
              <CgWebsite className="mr-2" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCards;