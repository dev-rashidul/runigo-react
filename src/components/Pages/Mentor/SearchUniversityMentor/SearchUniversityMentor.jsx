import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import Header2 from "../../../Shared/Header/Header2";
import Mentor from "../../Home/Mentor/Mentor";
import "./SearchUniversityMentor.css";

const SearchUniversityMentor = () => {
  return (
    <>
      <Header2></Header2>

      {/* Search Mentor By University Section JSX Start */}

      <section id="Search-uni-mentor">
        <div className="search-uni-mentor-wrapper">
          <Container>
            <div className="search-mentor-top">
              <div className="search-title">
                <h4>Search</h4>
                <hr />
              </div>
              <div className="search-mentor-buttons">
                <a className="active" href="#">
                  <img
                    src="assets/images/university-icon.svg"
                    alt="university-icon"
                  />
                  By University
                </a>
                <a href="#">
                  <img
                    src="assets/images/subject-icon.svg"
                    alt="subject-icon"
                  />
                  By Subject
                </a>
              </div>
              <div className="search-form pt-4">
                <div className="search">
                  <div className="search-text">
                    <input type="text" placeholder="search...." />
                    <img src="assets/images/search.png" alt="search" />
                  </div>
                  <input className="search-btn" type="submit" value="Search" />
                </div>
              </div>
              <section id="Talk">
                <div className="section-top text-center"></div>
                <div className="container">
                  <div className="row mt-4">
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img
                            src="assets/images/cambridge.png"
                            alt="cambridge"
                          />
                          <h5>University of Cambridge</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img
                            src="assets/images/stamford.png"
                            alt="stamford"
                          />
                          <h5>Stanford University</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img src="assets/images/oxford.png" alt="oxford" />
                          <h5>University of Oxford</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img src="assets/images/harvard.png" alt="harvard" />
                          <h5>Harvard University</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img src="assets/images/caltech.png" alt="caltech" />
                          <h5>Caltech</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img
                            src="assets/images/imperial.png"
                            alt="imperial"
                          />
                          <h5>Imperial College London</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img src="assets/images/ucl.png" alt="ucl" />
                          <h5>UCL</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4">
                      <Link to="/">
                        <div className="talk-card">
                          <img src="assets/images/etc.png" alt="etc" />
                          <h5>ETH Zurich</h5>
                          <p>12,341 mentors</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Container>
        </div>
      </section>

      {/* Search Mentor By University Section JSX End */}

      {/* Mentor Section JSX Start */}

      <Mentor></Mentor>

      {/* Mentor Section JSX End */}

      {/* Footer Section JSX Start */}

      <Footer></Footer>

      {/* Footer Section JSX End */}
    </>
  );
};

export default SearchUniversityMentor;
