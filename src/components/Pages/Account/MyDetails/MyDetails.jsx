import React from "react";
import { Col, Row } from "react-bootstrap";
import "./MyDetails.css";

const MyDetails = () => {
  return (
    <section id="my-details">
      <div className="my-details-wrapper">
        <h3>My Details</h3>
        <div className="my-details-content">
          <div className="personal-info-container mt-5">
            <h4>Personal Information</h4>
            <hr />
            <div className="personal-info-content mt-4">
              <Row>
                <Col lg={12} xl={4}>
                  <div className="pi-text mb-4 mb-md-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt perferendis ratione sit, iste quas dolores harum
                      sapiente laborum alias maxime.
                    </p>
                  </div>
                </Col>
                <Col lg={12} xl={8}>
                  <div className="pi-form">
                    <form>
                      <div className="d-md-flex justify-content-between">
                        <div className="pi-input-field mb-4">
                          <label>First Name</label>
                          <input type="text" placeholder="First Name" required />
                        </div>
                        <div className="pi-input-field mb-4">
                          <label>Last Name</label>
                          <input type="text" placeholder="Last Name" required />
                        </div>
                      </div>
                      <div className="pi-input-field mb-4">
                        <label>Birth Date</label>
                        <input type="date" required/>
                      </div>
                      <div className="pi-input-field mb-4">
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone Number" required/>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit</span>
                      </div>
                      <div className="pi-input-field">
                        <input type="submit" value="Save"/>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="personal-info-container mt-5 pt-4">
            <h4>Email Address</h4>
            <hr />
            <div className="personal-info-content mt-4">
              <Row>
                <Col lg={4}>
                  <div className="pi-text mb-4 mb-md-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt perferendis ratione sit, iste quas dolores harum
                      sapiente laborum alias maxime.
                    </p>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="pi-form">
                    <form>
                      <div className="d-flex justify-content-between">
                        <div className="pi-input-field mb-4">
                          <label>Email Address</label>
                          <input type="email" placeholder="Email Address" required />
                        </div>
                      </div>
                      <div className="pi-input-field">
                        <input type="submit" value="Save"/>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDetails;
