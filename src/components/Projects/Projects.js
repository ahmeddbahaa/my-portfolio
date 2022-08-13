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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Molsak"
              description="Molsak is a web-application aims to solve car parking problem using qrcode."
              demoLink="https://www.molsak.net/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MyReads"
              description="My Reads is web-application that manage your reading books using reactjs."
              demoLink="https://github.com/ahmeddbahaa/MyReads"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Valeo Mentorship Program"
              description="Wokred with Valeo Ai Department team and published 20 NLP models in Abstractive Arabic text summarization task and won 2nd best place in valeo projects"
              demoLink="https://huggingface.co/ahmeddbahaa"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="1st place in Cegedim Hackathon (2022)"
              description="Designed and developed a Video Conference Web-application that connects the doctor with patients in realtime using nodejs & express & reactjs & redux & Circle CI/CD Pipline."
              demoLink="https://github.com/ahmeddbahaa/Emergency-Aid"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
