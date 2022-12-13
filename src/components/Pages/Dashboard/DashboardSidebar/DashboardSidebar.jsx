import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  return (
    <section className="dashboard-sidebar-main">
      <div class="dashboard-sidebar">
        <div class="dashboard-profile d-flex align-items-center">
          <div class="dashboard-profile-img">
            <img src="assets/images/user-profile.png" alt="user-profile" />
          </div>
          <div class="dashboard-profile-info ps-3">
            <h4>
              Justin Septimus
              <img
                className="ps-1"
                src="assets/images/verify.png"
                alt="verify"
              />
            </h4>
            <h6>new york</h6>
          </div>
        </div>
        <div className="dashboard-sidebar-review mt-4">
          <h3>
            5
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
          </h3>
          <p>50 reviews</p>
        </div>
        <div class="dashboard-info mt-4">
          <div class="dashboard-info-text">
            <li>
              <img src="assets/images/university.png" alt="university" />
              <span>Stanford University</span>
            </li>
            <li>
              <img src="assets/images/dept.png" alt="dept" />
              <span>computer science</span>
            </li>
            <li>
              <img src="assets/images/language.png" alt="language" />
              <span>english</span>
            </li>
          </div>
        </div>
        <div className="meeting-link-btn send-message-btn mt-4">
          <Link to="/">
            <img src="assets/images/link.png" alt="link" /> Meeting Link
          </Link>
        </div>
      </div>
      <div className="dashboard-analytics mt-5">
        <select>
            <option value="Last 7 days ">Last 7 days </option>
        </select>
        <hr className="dashbahr" />
        <div className="dashboard-analytics-item d-flex justify-content-between align-items-center">
            <div>
                <p>Impretions</p>
                <h3>123</h3>
            </div>
            <span>+18.7%</span>
        </div>
        <div className="dashboard-analytics-item d-flex justify-content-between align-items-center mt-4">
            <div>
                <p>Clicks</p>
                <h3>6</h3>
            </div>
            <span>+0.2%</span>
        </div>
      </div>
    </section>
  );
};

export default DashboardSidebar;
