import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="Header">
      <nav className="navbar navbar2 navbar-expand-xl">
        <div className="container">
          <a className="logo" href="index.html">
            <img draggable="false" src="assets/images/logo.png" alt="logo" />
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
                <Link to='/' className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  How It Works
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="navbar-nav ml-auto">
              <div className="nav-buttons">
                <Link to='/register' className="sign-up">
                  sign up
                </Link>
                <Link to='/login' className="login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
