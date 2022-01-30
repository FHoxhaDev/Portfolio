import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/testoje.webp";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/uipath-vector-logo.svg";
import chatify from "../../Assets/Projects/nextuLogo.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Pulsi APP"
              description="Developed PULSI App which you can use to measure and view digitally the heart beating per minutes. This app has been developed on Flutter. "
              link="https://play.google.com/store/apps/details?id=com.florianhoxha.pulsi&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DavosNetworks"
              description="Developed the front-end of a leading cyber security company on Switzerland. Developed the website using Wordpress and managed to list it on high SEO ranks."
              link="davosnetworks.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Uipath Robots"
              description="Created automated robots such as PDF OCR reader, Excel Extractor and Web Crawlers using Uipath."
              link="https://github.com/FHoxhaDev/"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
