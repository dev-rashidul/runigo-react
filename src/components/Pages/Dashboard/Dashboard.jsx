import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header2 from "../../Shared/Header/Header2";
import './Dashboard.css';
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
