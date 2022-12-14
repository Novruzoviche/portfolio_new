import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              title="Responsive Personal Portfolio"
              description="Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode"
              ghLink="https://github.com/Novruzoviche/my-portfol-o.git"
              demoLink="https://novportfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Responsive One Page Website"
              description="Responsive One Page Website from scratch using HTML, CSS, and JavaScript"
              ghLink="https://github.com/Novruzoviche/gt.git"
              demoLink="https://gtvbdesign.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Most page blog"
              description="This is a most page blog with all your new blog posts on one page. It also includes a link to your blogroll and a contact form."
              ghLink="#"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;