import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
// import { motion } from "framer-motion";
import FactCard from "./facts"
import Aboutcard from "./cards";



function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", textAlign: "center" }}>
              Get to know me!
            </h1>
           </Col>
            </Row>

            <Row>
            <Col className="about-card">
            <Aboutcard />
          </Col>
          </Row>
          <Row>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              Fun facts about Chrissy!
            </h1>
            </Col>
          <Col className="fact-card">
          <FactCard />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default About;