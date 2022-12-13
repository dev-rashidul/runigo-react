import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-content text-center">
            <Link to='/'>
              <img src="assets/images/footer-logo.png" alt="footer-logo" />
            </Link>
            <div className="footer-menu d-md-flex justify-content-center my-5">
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
            </div>
            <div className="footer-social">
              <Link to='/'>
                <img src="assets/images/facebook.png" alt="facebook" />
              </Link>
              <Link to='/'>
                <img src="assets/images/instagram.png" alt="instagram" />
              </Link>
              <Link to='/'>
                <img src="assets/images/twitter.png" alt="twitter" />
              </Link>
            </div>
            <hr />
            <div className="footer-copy">
              <p>Copyright @Runigo 2022. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
