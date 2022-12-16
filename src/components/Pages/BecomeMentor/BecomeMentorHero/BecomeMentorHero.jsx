import React from "react";
import "./BecomeMentorHero.css";

const BecomeMentorHero = () => {
  return (
    <section>
      <div className="become-mentor-hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="bm-hero-content position-relative mt-md-5">
                <h2>
                  One step left <br /> <span>to become</span> <br /> a mentor {" "}
                  <img draggable="false"
                    src="assets/images/become-mentor-content.png"
                    alt="become-mentor-content"
                  />
                </h2>
                <p>
                  <span>Becoming a mentor has never been easier.</span> Fill out
                  the form below and you are in our community of mentors.
                </p>
                <div className="bm-hero-shape">
                  <img draggable="false" src="assets/images/become-mentor-hero-shape.png" alt="become-mentor-hero-shape" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bm-hero-img">
                <img draggable="false"
                  src="assets/images/become-mentor-hero.png"
                  alt="become-mentor-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentorHero;
