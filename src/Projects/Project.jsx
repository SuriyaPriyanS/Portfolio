import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import Particle from "../Components/Partical";
import editor from "../Assets/Myproject/Myproject.png";
import bitsOfCode from "../Assets/Myproject/blogApp.png.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AspireKaleidoscope"
              description="Simple blogger Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/anandhakumarmca/simplebloggerapp-frontend"
              demoLink="https://simplebloggerapp91.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PetPlatfrom App"
              description="Simple Adpation  Application build with React.js, Bootstrap, Nodejs and MongoDB."
              ghLink="https://github.com/SuriyaPriyanS/FrontendAddpet"
              demoLink="https://adoptionpetplafrom.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;