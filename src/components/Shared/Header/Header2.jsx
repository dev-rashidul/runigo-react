import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  // State for Dropdown
  const [dropdown, setDropdown] = useState(false);

  return (
    <section id="Header">
      <nav className="navbar navbar-expand-xl">
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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="works.html">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="reviews.html">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-nav ml-auto">
              <div className="nav-buttons d-flex align-items-center">
                <Link to="/" className="px-2">
                  <img draggable="false"
                    style={{ width: "17px" }}
                    src="assets/images/notification.png"
                    alt="notification"
                  />
                </Link>
                <Link className="px-2">
                  <img draggable="false" src="assets/images/inbox.png" alt="inbox" />
                </Link>
                <Link className="px-2">
                  <img draggable="false" src="assets/images/heart.svg" alt="heart" />
                </Link>
                <li className="position-relative">
                  <span onClick={()=> setDropdown(!dropdown)} className="px-2 cursor-pointer">
                    <img draggable="false"
                      className="user-profile-img"
                      src="assets/images/profile.png"
                      alt="profile"
                    />
                  </span>
                  {dropdown ? (
                    <ul className="dropdown_menu">
                      <li>
                        <Link>Update user profile</Link>
                      </li>
                      <li>
                        <Link>Orders history</Link>
                      </li>
                      <li>
                        <Link>Logout</Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header2;
