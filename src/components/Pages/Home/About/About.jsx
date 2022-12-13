import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="About">
      <div className="about-wrapper section-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-img">
                <img src="assets/images/about.png" alt="about" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content ms-0 ms-md-3">
                <h5>about us</h5>
                <h2>
                  <span>talented and highly qualified</span> mentors to help you
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="common-btn mt-4">
                  <Link to='/'>learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
