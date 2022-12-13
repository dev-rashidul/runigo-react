import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React from "react";
import OwlCarousel from 'react-owl-carousel';

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <div className="testimonial-wrapper section-spacing">
        <div className="section-top text-center">
          <h5>student reviews</h5>
          <h2>
            <span>What people</span> say about runigo
          </h2>
        </div>
        <div className="container">
          <OwlCarousel
            items={1}
            loop={true}
            nav={true}
            autoPlay
            margin={10}
            className="testimonial-slider owl-carousel owl-theme"
          >
            <div className="testimonial-slide item">
              <img src="assets/images/client-1.png" alt="client-1" />
              <h4>Justin Septimus</h4>
              <h6>new york</h6>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                consectetur adipiscing elit. Sit a laoreet libero dis eget
                maecenas bibendumetiam volutpat morbi et amet, sagittis
                adipiscing. “
              </p>
            </div>
            <div className="testimonial-slide item">
              <img src="assets/images/client-2.png" alt="client-1" />
              <h4>Justin Septimus</h4>
              <h6>new york</h6>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                consectetur adipiscing elit. Sit a laoreet libero dis eget
                maecenas bibendumetiam volutpat morbi et amet, sagittis
                adipiscing. “
              </p>
            </div>
            <div className="testimonial-slide item">
              <img src="assets/images/client-3.png" alt="client-1" />
              <h4>Justin Septimus</h4>
              <h6>new york</h6>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                consectetur adipiscing elit. Sit a laoreet libero dis eget
                maecenas bibendumetiam volutpat morbi et amet, sagittis
                adipiscing. “
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
