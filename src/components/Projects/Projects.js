import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AsMSImg from "../../Assets/AsMS_Logo.png";
import LPImg from "../../Assets/Logos&PostersLogo.png";
import Mudrabites from "../../Assets/MudraBites (2).png";
import BookRecord from "../../Assets/BMS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              isGit={true}
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
              isGit={false}
              imgPath={Mudrabites}
              isBlog={false}
              title="MudraBites"
              description="Re-engineered the website using ReactJS and NodeJS, including a new logo and updated UI components. This overhaul modernizes the design, boosts user experience, and positions the site for future growth."
              ghLink="https://www.nidhisoftwareguru.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isGit={true}
              imgPath={BookRecord}
              isBlog={false}
              title="BMS"
              description="Created a Book Record Management System using NodeJS, MongoDB, ExpressJS."
              ghLink="https://github.com/IshaDabas/MudraBites"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isGit={true}
              imgPath={LPImg}
              isBlog={false}
              title="Logos and Posters"
              description="Designed logos for two industry scaled products - Opti-AI and AsMS.
              Sketched, designed and illustrated posters for some clubs, companies and student ventures namely - Opti-AI, Bu-Gamers, Digisoft IT Solutions etc."
              ghLink="https://github.com/IshaDabas/logos-posters-ui-ux"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
