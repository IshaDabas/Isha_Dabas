import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AsMSImg from "../../Assets/AsMS_Logo.png"
import LPImg from "../../Assets/Logos&PostersLogo.png"
import NetflixImg from "../../Assets/NetflixLogo.png"
import NotesImg from "../../Assets/NotesLogo.png"

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
              imgPath={AsMSImg}
              isBlog={false}
              title="AsMS"
              description="Developed a responsive react app in Next with beautiful UI designed with Chakra.
              Stores assets on S3 and interacts with the app using MongoDB.
              Visualized cards for Assets in particular categories.
              Last but not the least in app assets viewer(React Library)."
              ghLink="https://github.com/Assets-Management-System/AsMS-Frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LPImg}
              isBlog={false}
              title="Logos and Posters"
              description="Designed logos for two industry scaled products - Opti-AI and AsMS.
              Sketched, designed and illustrated posters for some clubs, companies and student ventures namely - Opti-AI, Bu-Gamers, Digisoft IT Solutions etc."
              ghLink="https://github.com/IshaDabas/logos-posters-ui-ux"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NotesImg}
              isBlog={false}
              title="Notes App"
              description="Customized take on the stereotypical notes app with innovative UI and gnarly features."
              ghLink="https://github.com/IshaDabas/Notes_application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetflixImg}
              isBlog={false}
              title="Nextflix"
              description="Developed a responsive react app like Netflix.
              Multiple profiles and authentication are implemented on firebase. 
              Data fetched from APIs and user data stored in the firestore database. 
              Payment is handled by the STRIPE payments gateway."
              ghLink="https://github.com/IshaDabas/Nextflix-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
