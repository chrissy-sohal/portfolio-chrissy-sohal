import React from "react";
import './home.css';
import { Container, Row } from "react-bootstrap";

import myImg from "../../assets/chrissy-photo.jpg";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
          <Container fluid className="home-about-section" id="about">
      <Container>
        <Row  md={8} className="home-about-description" style={{
              justifyContent: "center"
            }}>
            <h1 style={{ fontSize: "50px", textAlign: "center" }}>
              CHRISSY SOHAL
            </h1>
            <h2 style={{ fontSize: "35px"}}>
              FULL STACK WEB DEVELOPER
            </h2>
            <p className="home-about-body">
            </p>
          </Row>

          <Row md={4} className="myAvtar" style={{
              justifyContent: "center"}}>
            <Tilt>
              <img src={myImg} className="img" alt="avatar" />
            </Tilt>
          
        </Row>
      </Container>
    </Container>

    </section>
  );
}

export default Home;