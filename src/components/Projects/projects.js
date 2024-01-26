import React from "react";
import "./projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./cards";
import workout from "../../assets/homepage.jpg";
import brewery from "../../assets/vecteezyBeerDayBackgroundfv0621_generated.jpg";
import editor from "../../assets/b88f983b-06ae-4405-82f7-265ecc17e8d5.png";
import taste from "../../assets/screenshot.png";
import employee from "../../assets/tracking-employee-computer-activity-1600.jpg";
import team from "../../assets/team-company-profile-template.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Most Recent Projects
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={taste}
              isBlog={false}
              title="TasteBuds"
              description="A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!"
              ghLink="https://github.com/chrissy-sohal/TasteBuds"
              demoLink="https://pure-dawn-43328.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={workout}
              isBlog={false}
              title="Workout Nation"
              description="A workout tracker, designed to help you keep track of your healthy lifestyle."
              ghLink="https://github.com/chrissy-sohal/Workout-Nation"
              demoLink="https://boiling-dusk-37737.herokuapp.com/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={brewery}
              isBlog={false}
              title="US Brewery Finder"
              description="An app that lets a user find local breweries in a searched city with an interactive map."
              ghLink="https://github.com/chrissy-sohal/US-Brewery-Finder"
              demoLink="https://chrissy-sohal.github.io/US-Brewery-Finder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={team}
              isBlog={false}
              title="Team Profile Generator"
              description="A command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person."
              ghLink="https://github.com/chrissy-sohal/team-profile-generator"
              demoLink="https://drive.google.com/file/d/1VPH3yp-dKEOKVj2ZVnorHtNvozxn5g6z/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={editor}
              isBlog={false}
              title="Text Editor"
              description="A simple text editor app that can function both online and offline, with a variety of data persistence options."
              ghLink="https://github.com/chrissy-sohal/text-editor"
              demoLink="https://dashboard.heroku.com/apps/text-editor-chrissy-sohal"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="A command-line application for managing a company's employees using node, inquirer, and MySQL."
              ghLink="https://github.com/chrissy-sohal/employee-tracker"
              demoLink="https://drive.google.com/file/d/1beMJX3YQoFkcD7ln3UU1QFK_KT_6D9qm/view"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;