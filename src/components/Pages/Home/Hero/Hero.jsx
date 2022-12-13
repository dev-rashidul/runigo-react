import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero-wrapper position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h5>100 satisfaction guarantee</h5>
                <h1>
                  clear doubts about <br />
                  <span> the university</span> <br />
                  with the best <br />
                  <span>online mentors</span>
                </h1>
                <p>
                  private, 1 0n 1 lesson with the expert instructor based on
                  your goals and interests.
                </p>
                <div className="common-btn mt-4">
                  <Link to='/'>learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-img text-center">
                <img src="assets/images/hero.png" alt="hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          <img src="assets/images/hero-shape.png" alt="hero-shape" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
