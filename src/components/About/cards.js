import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }} className="about-text">
          Hello! I'm Chrissy Sohal.
            <br />
            I am a current animal care professional with a background in psychology and public speaking, and a recent graduate of the University of Washington’s intensive full stack development boot camp. I am honing my skills in HTML5, CCS, Bootstrap, JavaScript, jQuery, and a bit of Python and MySQL. I plan to create and maintain websites while also developing iOS and Android apps. I am able to collaborate and work with a team while solving problems in high-stress environments. I am looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. I’m excited to leverage my skills as part of a fast-paced, quality-driven team. 
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;