import './contact.css';
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
// import React, { useRef, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


// import emailjs from '@emailjs/browser';

const Contact = () => {
  // const [fullName, setFullName] = useState('')
  // const [email, setEmail] = useState('')
  // const [textArea, setTextArea] = useState('')

  // const [err] = useState(false)
  // const [ setMessage] = useState(false);
  // const formRef = useRef();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  //   emailjs
  //     .sendForm(
  //       'service_k2qawqh',
  //       'template_c6rkpn6',
  //       formRef.current,
  //       'X7K7ebhIeOy3YwHki'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
  // };
  return (
    <section id="contact">
      <Row>
          <Col md={12} className="home-about-social">
            <h1 className="heading">FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chrissy-sohal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chrissy-sohal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:cmart131@yahoo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
<br></br>
<div>
      <h3>
      Have an interesting project or want to know more about me? I'd love to hear from you!
      </h3>
      <h3 style={{ textAlign: "center" }}>
      Get in touch!
      </h3>
</div>
      {/* <br></br>
      <br></br>
  <div className="container contact__container">
      <Form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
  {err && !fullName &&
      <p>* You must include full name</p>
      }
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
  {err && !email &&
      <p>* You must include an Email</p>
      }
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" onChange={(e) => setTextArea(e.target.value)} value={textArea} id="exampleFormControlTextarea1" rows="3"></textarea>
  {err && !textArea &&
      <p>* You must include a descriptive message</p>
      }
</div>
    <Button type="submit" className="button">Submit</Button>
      </Form>*/}

  {/* </div>  */}
</section>
  );
};

export default Contact;