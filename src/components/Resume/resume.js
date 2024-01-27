import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./resume.css";
import pdf from "../../assets/Sohal_Chrissy_Resume2024.pdf";
import Techstack from "./icons";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {


  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="btn"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", fontSize: "40px"}}
          >
            <AiOutlineDownload />
            Resume
          </Button>
          <br></br>
          <br></br>
          <br></br>
          
        </Row>
        <h1 className="project-heading">
          Technical Skills 
        </h1>

        <Techstack />

      </Container>
    </div>
  );
}

export default ResumeNew;