import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import "./BecomeMentor.css";
import BecomeMentorForm from "./BecomeMentorForm/BecomeMentorForm";
import BecomeMentorHero from "./BecomeMentorHero/BecomeMentorHero";

const BecomeMentor = () => {
  return (
    <>
      {/* Become Mentor Header */}

      <section id="Header">
        <nav className="navbar transparent-header navbar-expand-xl">
          <div className="container">
            <a className="logo" href="index.html">
              <img src="assets/images/footer-logo.png" alt="footer-logo" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav pl-md-5 mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    How It Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="navbar-nav ml-auto">
                <div className="nav-buttons">
                  <Link to="/register" className="sign-up">
                    sign up
                  </Link>
                  <Link to="/login" className="login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      {/* Become Mentor Header */}

      {/* Become Mentor Hero */}

      <BecomeMentorHero></BecomeMentorHero>

      {/* Become Mentor Hero */}

      {/* Become Mentor Form */}

      <BecomeMentorForm></BecomeMentorForm>

      {/* Become Mentor Form */}

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default BecomeMentor;
