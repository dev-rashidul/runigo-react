import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Header Section JSX Start */}

      <div className="contact-header">
        <Header></Header>
      </div>

      {/* Header Section JSX End */}

      {/* Contact Hero Section JSX Start */}

      <section id="Contact-Hero">
        <div className="contact-hero-wrapper position-relative">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6} xl={5}>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>Non quis ipsum dui aenean in ipsum lacus phasellus. Molestie neque mi proin sem pellentesque ipsum pretium.</p>
                    <ContactForm></ContactForm>
                </div>
              </Col>
              <Col md={6} xl={7}>
                <div className="contact-img">
                  <img draggable="false" className="img-fluid"
                    src="/assets/images/contact-hero.png"
                    alt="contact-hero"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="contact-shape">
            <img draggable="false" src="/assets/images/contact-shape.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Contact Hero Section JSX End */}

      {/* Footer Section JSX Start */}

      <Footer></Footer>

      {/* Footer Section JSX End */}
    </>
  );
};

export default Contact;
