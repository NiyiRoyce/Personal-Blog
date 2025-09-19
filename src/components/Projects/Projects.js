import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sellfastpayfast"
              description="A cryptocurrency exchange and trading platform built using TypeScript."
              ghLink="https://github.com/NiyiRoyce/Sellfastpayfast"
              demoLink="https://sellfastpayfast-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Algo_Server"
              description="Improved File Search Algorithm via WebSockets using Python."
              ghLink="https://github.com/NiyiRoyce/Algo_Server"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="RAG"
              description="A RAG-LLM mini data engineering project leveraging retrieval-augmented generation techniques in Python."
              ghLink="https://github.com/NiyiRoyce/RAG"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PunchApp"
              description="A simple chat app designed for internal organization communication, built using HTML,CSS and Vanilla JS."
              ghLink="https://github.com/NiyiRoyce/PunchApp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Rouple"
              description="A web-based project built with HTML,CSS, JS (MIT Licensed)."
              ghLink="https://github.com/NiyiRoyce/Rouple"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
