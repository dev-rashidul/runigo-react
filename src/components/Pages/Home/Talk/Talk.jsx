import React from "react";
import { Link } from "react-router-dom";

const Talk = () => {
  return (
    <section id="Talk">
      <div className="talk-wrapper section-spacing overflow-hidden">
        <div className="section-top text-center">
          <h5>Top global universities</h5>
          <h2>
            <span>talk</span> to students from your
            <span>dream university</span>
          </h2>
          <div className="search-form">
            <div className="search">
              <div className="search-text">
                <input type="text" placeholder="search...." />
                <img src="assets/images/search.png" alt="search" />
              </div>
              <input className="search-btn" type="submit" value="Search" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="fade-right">
                  <img src="assets/images/cambridge.png" alt="cambridge" />
                  <h5>University of Cambridge</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-up">
                  <img src="assets/images/stamford.png" alt="stamford" />
                  <h5>Stanford University</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-down">
                  <img src="assets/images/oxford.png" alt="oxford" />
                  <h5>University of Oxford</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="fade-left">
                  <img src="assets/images/harvard.png" alt="harvard" />
                  <h5>Harvard University</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-right">
                  <img src="assets/images/caltech.png" alt="caltech" />
                  <h5>Caltech</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-up">
                  <img src="assets/images/imperial.png" alt="imperial" />
                  <h5>Imperial College London</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-down">
                  <img src="assets/images/ucl.png" alt="ucl" />
                  <h5>UCL</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
              <Link to='/'>
                <div className="talk-card" data-aos="zoom-in-left">
                  <img src="assets/images/etc.png" alt="etc" />
                  <h5>ETH Zurich</h5>
                  <p>12,341 mentors</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk;
