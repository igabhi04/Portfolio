import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGooglecolab,
  SiPowerbi,
  SiJupyter,
  SiMicrosoftexcel
} from "react-icons/si";
import{
  DiGit
}from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col> 
    </Row>
  );
}

export default Toolstack;
