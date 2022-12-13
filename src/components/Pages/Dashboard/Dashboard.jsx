import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header2 from "../../Shared/Header/Header2";
import "./Dashboard.css";
import DashboardHero from "./DashboardHero/DashboardHero";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import UpcomingLessons from "./UpcomingLessons/UpcomingLessons";

const Dashboard = () => {
  return (
    <>
      {/* <!-- Header Part HTML Start --> */}

      <header>
        {/* <!-- Header Section HTML Start --> */}

        <Header2></Header2>

        {/* <!-- Header Section HTML End --> */}
      </header>

      {/* <!-- Header Part HTML End --> */}

      {/* <!-- Main Part HTML Start --> */}

      <main>
        {/* <!-- Main Mentor Section HTML Start --> */}

        <div id="Mentor_main">
          <div class="mentor-main-wrapper">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  {/* Dashboard Hero */}

                  <DashboardHero></DashboardHero>

                  {/* For Mobile */}

                  <div class="dashboard-sidebar d-block d-lg-none mt-5 mt-lg-0">
                    <div class="dashboard-profile d-flex align-items-center">
                      <div class="dashboard-profile-img">
                        <img
                          draggable="false"
                          src="assets/images/user-profile.png"
                          alt="user-profile"
                        />
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
                        <img
                          draggable="false"
                          src="assets/images/star.png"
                          alt="star"
                        />
                        <img
                          draggable="false"
                          src="assets/images/star.png"
                          alt="star"
                        />
                        <img
                          draggable="false"
                          src="assets/images/star.png"
                          alt="star"
                        />
                        <img
                          draggable="false"
                          src="assets/images/star.png"
                          alt="star"
                        />
                        <img
                          draggable="false"
                          src="assets/images/star.png"
                          alt="star"
                        />
                      </h3>
                      <p>50 reviews</p>
                    </div>
                    <div class="dashboard-info mt-4">
                      <div class="dashboard-info-text">
                        <li>
                          <img
                            draggable="false"
                            src="assets/images/university.png"
                            alt="university"
                          />
                          <span>Stanford University</span>
                        </li>
                        <li>
                          <img
                            draggable="false"
                            src="assets/images/dept.png"
                            alt="dept"
                          />
                          <span>computer science</span>
                        </li>
                        <li>
                          <img
                            draggable="false"
                            src="assets/images/language.png"
                            alt="language"
                          />
                          <span>english</span>
                        </li>
                      </div>
                    </div>
                    <div className="meeting-link-btn send-message-btn mt-4">
                      <Link to="/">
                        <img
                          draggable="false"
                          src="assets/images/link.png"
                          alt="link"
                        />
                        Meeting Link
                      </Link>
                    </div>
                  </div>

                  {/* For Mobile */}

                  {/* Dashboard Hero */}

                  <div className="analytics">
                    <div className="analytics-items">
                      <div className="analytics-item">
                        <p>Personal balance</p>
                        <h3>$144</h3>
                      </div>
                      <div className="analytics-item">
                        <p>Earnings in December </p>
                        <h3>$24</h3>
                      </div>
                      <div className="analytics-item w-100">
                        <Link to="/">Analitycs</Link>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Lessons */}

                  <UpcomingLessons></UpcomingLessons>

                  {/* Upcoming Lessons */}
                </div>
                <div class="col-lg-4">
                  {/* Dashboard SideBar */}

                  <DashboardSidebar></DashboardSidebar>

                  {/* Dashboard SideBar */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Mentor Section HTML End --> */}
      </main>

      {/* <!-- Main Part HTML End --> */}

      {/* <!-- Footer Part HTML Start --> */}

      <Footer></Footer>

      {/* <!-- Footer Part HTML End --> */}
    </>
  );
};

export default Dashboard;
