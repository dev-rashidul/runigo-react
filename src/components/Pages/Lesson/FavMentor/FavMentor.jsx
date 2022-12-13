import React from "react";
import { Link } from "react-router-dom";

const Fav_Mentor = () => {
  return (
    <section id="Fav-mentor">
      <div className="fav-mentor-wrapper position-relative">
        <div className="container">
          <div className="fav-mentor-top">
            <h2>Favorite mentors</h2>
            <hr className="fav-mentor-top-hr" />
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="fav-mentor-card">
                <img
                  className="pb-3"
                  src="assets/images/fav-mentor1.png"
                  alt="fav-mentor1"
                />
                <h5>
                  Justin Septimus
                  <img src="assets/images/verify.png" alt="verify" />
                </h5>
                <h5>new york</h5>
                <h5>9:45 am local time</h5>
                <img
                  className="pt-4"
                  src="assets/images/stamford.png"
                  alt="stamford"
                />
                <h4>Stanford University</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="fav-mentor-card mt-4 mt-md-0">
                <img
                  className="pb-3"
                  src="assets/images/fav-mentor2.png"
                  alt="fav-mentor2"
                />
                <h5>
                  Leslie Alexander
                  <img src="assets/images/verify.png" alt="verify" />
                </h5>
                <h5>kiribati</h5>
                <h5>9:45 am local time</h5>
                <img
                  className="pt-4"
                  src="assets/images/stamford.png"
                  alt="stamford"
                />
                <h4>Stanford University</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="fav-mentor-card mt-4 mt-lg-0">
                <img
                  className="pb-3"
                  src="assets/images/fav-mentor3.png"
                  alt="fav-mentor3"
                />
                <h5>
                  Eleanor Pena
                  <img src="assets/images/verify.png" alt="verify" />
                </h5>
                <h5>Saint Barthélemy</h5>
                <h5>9:45 am local time</h5>
                <img
                  className="pt-4"
                  src="assets/images/stamford.png"
                  alt="stamford"
                />
                <h4>Stanford University</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="fav-mentor-card mt-4 mt-xl-0">
                <img
                  className="pb-3"
                  src="assets/images/fav-mentor4.png"
                  alt="fav-mentor4"
                />
                <h5>
                  Jerome Bell
                  <img src="assets/images/verify.png" alt="verify" />
                </h5>
                <h5>Réunion</h5>
                <h5>9:45 am local time</h5>
                <img
                  className="pt-4"
                  src="assets/images/stamford.png"
                  alt="stamford"
                />
                <h4>Stanford University</h4>
              </div>
            </div>
          </div>
          <div className="fav-mentor-show-btn">
            <Link to="/">Show More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fav_Mentor;
