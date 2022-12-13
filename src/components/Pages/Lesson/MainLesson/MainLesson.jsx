import React from "react";
import { Link } from "react-router-dom";

const MainLesson = () => {
  return (
    <section id="Lesson">
      <div className="main-lesson-wrapper">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="mentor-profile d-flex align-items-center">
              <div className="mentor-profile-img position-relative">
                <img src="assets/images/user-profile.png" alt="user-profile" />
              </div>
              <div className="mentor-profile-info ps-4">
                <h4>
                  Justin Septimus
                  <img
                    className="ps-2"
                    src="assets/images/verify.png"
                    alt="verify"
                  />
                </h4>
                <h6>new york</h6>
                <p>9:45 am local time</p>
              </div>
            </div>
            <div className="mentor-card mt-5 mt-md-0">
              <div className="d-flex justify-content-center align-items-center">
                <img src="assets/images/mentor1.png" alt="mentor1" />
                <img
                  className="mentor-card-img"
                  src="assets/images/mentor2.png"
                  alt="mentor2"
                />
                <img
                  className="mentor-card-img"
                  src="assets/images/mentor3.png"
                  alt="mentor3"
                />
              </div>
              <div className="find-mentor-btn mt-4">
                <Link to="/">find other mentors</Link>
              </div>
            </div>
          </div>
          <div className="meeting-buttons mt-5 pt-3">
            <Link to="/" className="meeting-btn">
              meeting
            </Link>
            <hr className="meeting-hr" />
          </div>
          <div className="meeting-main">
            <div className="container">
              <div className="row meeting-cards mt-5">
                <div className="col-md-5">
                  <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                    <div className="meeting-date text-center pe-4">
                      <h5>Mar</h5>
                      <span>24</span>
                    </div>
                    <h6>monday, 12:30 - 13:00</h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="meeting-right d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/lesson1.png" alt="lesson1" />
                      <div className="meeting-user ps-4">
                        <h4>katrina lamon</h4>
                        <p>Dubai</p>
                      </div>
                    </div>
                    <div className="meeting-message-btn mt-3 mt-lg-0">
                      <div className="send-message-btn">
                        <Link to="/">
                          <img
                            src="assets/images/message-green.png"
                            alt="message-green"
                          />
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row meeting-cards mt-4">
                <div className="col-md-5">
                  <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                    <div className="meeting-date text-center pe-4">
                      <h5>Mar</h5>
                      <span>28</span>
                    </div>
                    <h6>monday, 12:30 - 13:00</h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="meeting-right d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/lesson2.png" alt="lesson2" />
                      <div className="meeting-user ps-4">
                        <h4>katrina lamon</h4>
                        <p>Dubai</p>
                      </div>
                    </div>
                    <div className="meeting-message-btn mt-3 mt-lg-0">
                      <div className="send-message-btn">
                        <Link to="/">
                          <img
                            src="assets/images/message-green.png"
                            alt="message-green"
                          />
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row meeting-cards mt-4">
                <div className="col-md-5">
                  <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                    <div className="meeting-date text-center pe-4">
                      <h5>Apr</h5>
                      <span>10</span>
                    </div>
                    <h6>monday, 12:30 - 13:00</h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="meeting-right d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/lesson3.png" alt="lesson3" />
                      <div className="meeting-user ps-4">
                        <h4>lamon jason</h4>
                        <p>Dubai</p>
                      </div>
                    </div>
                    <div className="meeting-message-btn mt-3 mt-lg-0">
                      <div className="send-message-btn">
                        <Link to="/">
                          <img
                            src="assets/images/message-green.png"
                            alt="message-green"
                          />
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLesson;
