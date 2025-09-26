import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import SuperStore from "../../Assets/Projects/SuperStore.png";
import road from "../../Assets/Projects/road.jpeg";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
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
              imgPath={netflix}
              isBlog={false}
              title="Data Analysis of Netflix Content"
              description="This Power BI project is designed to analyze and compare content available across popular OTT platforms: Netflix, Amazon Prime, and Disney+ Hotstar. The dashboard provides interactive visualizations to help uncover trends related to content types, view ratings, release timelines, IMDb scores, and more."
              ghLink="http://github.com/igabhi04/Netflix-Prime-Hotstar-Dashboard-Power-BI"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperStore}
              isBlog={false}
              title="Super Store Annual Sales Report"
              description="Developed an interactive Power BI dashboard to analyze Superstore sales data across regions and categories.
                    Built KPIs and DAX measures to track Sales, Profit, and Customer Segments with clear visual insights.
                    Identified top-performing products and highlighted low-profit areas to guide business strategy.
                    Enabled data-driven decision making through dynamic filters, maps, and trend analysis."
              ghLink="http://github.com/igabhi04/Power-Bi-Superstore-Sales"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={road}
              isBlog={false}
              title="Road Accident Analysis Dashboard"
              description="Created an interactive Power BI dashboard to analyze road accident trends across time, location, and vehicle types.
                  Designed KPIs to track total accidents, casualties, and severity distribution for better safety insights.
                  Visualized accident hotspots using maps and charts to identify high-risk regions and time periods.
                  Enabled data-driven policy recommendations by highlighting key causes and patterns in accidents."
              // ghLink="https://github.com/Abhishek1603/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <ul className="certification-list">
          <li className="certification-item">
            <ImPointRight /> National Programme on Technology Enhanced Learning (NPTEL - Data Analytics With Python)
          </li>
          <li className="certification-item">
            <ImPointRight /> National Programme on Technology Enhanced Learning (NPTEL - Cloud Computing)
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default Projects;
