import React from 'react';
import './DashboardHero.css';

const DashboardHero = () => {
    return (
        <section>
            <div className="dashboard-hero-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <div className="dashboard-hero-content">
                                <h2><span>Hi,</span> Justin</h2>
                                <h3>Have a nice day!</h3>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 mt-lg-0">
                            <div className="dashboard-hero-img">
                                <img src="assets/images/dashboard-person.png" alt="dashboard-person" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-hero-shape">
                    <img src="assets/images/dashboard-hero-shape.png" alt="dashboard-hero-shape" />
                </div>
            </div>
        </section>
    );
};

export default DashboardHero;