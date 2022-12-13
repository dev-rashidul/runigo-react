import React from "react";
import { Link } from "react-router-dom";

const UpcomingLessons = () => {
  return (
    <section className="mb-md-5 pb-md-4">
      <div class="about-buttons mt-5 pt-3">
        <Link tp="/" class="about-btn">
          Upcoming lessons
        </Link>
        <Link tp="/" class="review-btn">
          Reviews (50)
        </Link>
        <hr class="about-hr" />
      </div>
      <div className="meeting-main">
        <div className="container">
          <div className="row meeting-cards mt-4">
            <div className="col-md-6">
              <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                <div className="meeting-date text-center pe-4">
                  <h5>DEC</h5>
                  <span>14</span>
                </div>
                <h6>Wednesday, 12:30 - 13:00</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meeting-right d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    draggable="false"
                    src="assets/images/lesson3.png"
                    alt="lesson3"
                  />
                  <div className="meeting-user ps-4">
                    <h4>katrina lamon</h4>
                    <p>Dubai</p>
                  </div>
                </div>
                <Link to="/">
                  <img
                    draggable="false"
                    src="assets/images/message-green.png"
                    alt="message-green"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row meeting-cards mt-4">
            <div className="col-md-6">
              <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                <div className="meeting-date text-center pe-4">
                  <h5>DEC</h5>
                  <span>15</span>
                </div>
                <h6>Thursday, 12:30 - 13:00</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meeting-right d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    draggable="false"
                    src="assets/images/lesson3.png"
                    alt="lesson3"
                  />
                  <div className="meeting-user ps-4">
                    <h4>katrina lamon</h4>
                    <p>Paris</p>
                  </div>
                </div>
                <Link to="/">
                  <img
                    draggable="false"
                    src="assets/images/message-green.png"
                    alt="message-green"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row meeting-cards mt-4">
            <div className="col-md-6">
              <div className="meeting-card-left d-flex align-items-center mb-4 mb-md-0">
                <div className="meeting-date text-center pe-4">
                  <h5>DEC</h5>
                  <span>19</span>
                </div>
                <h6>Monday, 12:30 - 13:00</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meeting-right d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    draggable="false"
                    src="assets/images/lesson3.png"
                    alt="lesson3"
                  />
                  <div className="meeting-user ps-4">
                    <h4>katrina lamon</h4>
                    <p>Spain</p>
                  </div>
                </div>
                <Link to="/">
                  <img
                    draggable="false"
                    src="assets/images/message-green.png"
                    alt="message-green"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLessons;
