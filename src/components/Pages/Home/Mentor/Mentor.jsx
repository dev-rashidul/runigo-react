import React from "react";

const Mentor = () => {
  return (
    <section id="Mentor">
      <div className="mentor-wrapper position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mentor-content">
                <h5>join runigo</h5>
                <h2>
                  <span>become a</span> mentor on runigo and
                  <span>help thousands of students</span>
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div className="common-btn mt-5">
                  <a href="register.html">join now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mentor-img ms-md-5 ps-md-5">
                <img src="assets/images/mentor.png" alt="mentor" />
              </div>
            </div>
          </div>
        </div>
        <div className="mentor-shape1">
          <img src="assets/images/mentor-shape1.png" alt="mentor-shape1" />
        </div>
        <div className="mentor-shape2">
          <img src="assets/images/mentor-shape2.png" alt="mentor-shape2" />
        </div>
        <div className="mentor-shape3">
          <img src="assets/images/mentor-shape3.png" alt="mentor-shape3" />
        </div>
      </div>
    </section>
  );
};

export default Mentor;
