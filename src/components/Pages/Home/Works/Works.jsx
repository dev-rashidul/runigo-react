import React from "react";

const Works = () => {
  return (
    <section id="Works">
      <div className="works-wrapper section-spacing overflow-hidden">
        <div className="section-top text-center">
          <h5>easy and fast</h5>
          <h2>
            how <span>runigo</span> works
          </h2>
        </div>
        <div className="container">
          <div className="works-timeline position-relative">
            <div className="works">
              <div className="work-img" data-aos="fade-right">
                <img src="assets/images/works-1.png" alt="works-1" />
              </div>
              <div className="work-content position-relative work-1">
                <div data-aos="fade-left">
                  <h1>1</h1>
                  <h3>find the best tutor</h3>
                  <p>
                    Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                    Aliquet nibh Lorem ipsum dolor sit amet adipiscing elit
                    tempor incididunt Aliquet nibh.
                  </p>
                </div>
              </div>
            </div>
            <div className="works cl-reverse">
              <div
                className="work-content position-relative ms-0"
                data-aos="fade-right"
              >
                <h1>2</h1>
                <h3>steps i don’t know :P</h3>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh Lorem ipsum dolor sit amet adipiscing elit tempor
                  incididunt Aliquet nibh.
                </p>
              </div>
              <div className="work-img ms-md-5 ps-md-5" data-aos="fade-left">
                <img src="assets/images/works-2.png" alt="works-2" />
              </div>
            </div>
            <div className="works">
              <div className="work-img" data-aos="fade-right">
                <img src="assets/images/works-3.png" alt="works-3" />
              </div>
              <div className="work-content position-relative" data-aos="fade-left">
                <h1>3</h1>
                <h3>here goes step 3</h3>
                <p>
                  Lorem ipsum dolor sit amet adipiscing elit tempor incididunt
                  Aliquet nibh Lorem ipsum dolor sit amet adipiscing elit tempor
                  incididunt Aliquet nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
