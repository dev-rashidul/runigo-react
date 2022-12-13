import React from "react";

const Benefits = () => {
  return (
    <section id="Benefits">
      <div className="benefits-wrapper section-spacing">
        <div className="section-top text-center">
          <h5>why choose us</h5>
          <h2>
            <span>benefits</span> of runigo
          </h2>
        </div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="benefits-card">
                <img src="assets/images/time.png" alt="time" />
                <h5>24/7 availability</h5>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4 mt-md-0">
              <div className="benefits-card">
                <img src="assets/images/teaching.png" alt="teaching" />
                <h5>one on one teaching</h5>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <div className="benefits-card">
                <img src="assets/images/price.png" alt="price" />
                <h5>affordable prices</h5>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 mt-4 mt-xl-0">
              <div className="benefits-card">
                <img src="assets/images/message.png" alt="message" />
                <h5>Fast Turnaround</h5>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
