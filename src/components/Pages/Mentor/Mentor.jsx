import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header2 from "../../Shared/Header/Header2";

const Mentor = () => {
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
              <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-8">
                  <div class="mentor-main-content">
                    <div class="mentor-profile d-flex align-items-center">
                      <div class="mentor-profile-img position-relative">
                        <img
                          src="assets/images/user-profile.png"
                          alt="user-profile"
                        />
                      </div>
                      <div class="mentor-profile-info ps-4">
                        <h4>
                          Justin Septimus
                          <img src="assets/images/verify.png" alt="verify" />
                        </h4>
                        <h6>new york</h6>
                        <p>9:45 am local time</p>
                      </div>
                    </div>
                    <div class="mentor-info d-md-flex justify-content-between align-items-center mt-5">
                      <div class="mentor-info-text">
                        <li>
                          <img
                            src="assets/images/university.png"
                            alt="university"
                          />
                          student of <span>Stanford University</span>
                        </li>
                        <li>
                          <img src="assets/images/dept.png" alt="dept" />
                          studies <span>computer science</span>
                        </li>
                        <li>
                          <img
                            src="assets/images/language.png"
                            alt="language"
                          />
                          speaks <span>english</span>
                        </li>
                      </div>
                      <div class="mentor-info-text mt-md-0">
                        <li>
                          <img src="assets/images/growth.png" alt="growth" />4
                          lessons booked in <span>The last 48 hours</span>
                        </li>
                        <li>
                          <img
                            src="assets/images/response-time.png"
                            alt="response-time"
                          />
                          Usually responds in less than an hour
                        </li>
                      </div>
                    </div>
                    <div class="lesson-wrapper d-lg-none">
                      <div class="book-trial-btn">
                        <Link to='/'>Book trial lesson</Link>
                      </div>
                      <div class="send-message-btn mt-3">
                        <Link to='/'>
                          <img
                            class="pe-2"
                            src="assets/images/message-green.png"
                            alt="message-green"
                          />
                          Send message
                        </Link>
                      </div>
                      <div class="save-list-btn mt-3">
                        <Link to='/'>
                          <img
                            class="pe-2"
                            src="assets/images/heart-red.png"
                            alt="heart-red"
                          />
                          Save to my list
                        </Link>
                      </div>
                    </div>
                    <div class="about-buttons mt-5 pt-3">
                      <Link tp='/' class="about-btn">
                        about
                      </Link>
                      <Link tp='/' class="review-btn">
                        Reviews (50)
                      </Link>
                      <hr class="about-hr" />
                    </div>
                    <div class="mentor-about-content mt-5">
                      <h3>about the mentor</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit a laoreet libero dis eget maecenas bibendum. Morbi
                        lacinia eu, consectetur adipiscing elit. Sit a laoreet
                        libero dis eget maecenas bibendumetiam volutpat morbi et
                        amet, sagittis adipiscing.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit a laoreet libero dis eget maecenas bibendum. Morbi
                        lacinia eu, consectetur adipiscing elit. Sit a laoreet
                        libero dis eget maecenas bibendumetiam volutpat morbi et
                        amet, sagittis adipiscing.
                      </p>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                      <Link tp='/'>show more</Link>
                    </div>
                    <div class="education mt-4">
                      <div class="education-buttons d-flex align-items-center">
                        <h5>resume</h5>
                        <Link tp='/'>Education</Link>
                      </div>
                      <div class="certificate d-flex mt-4 pt-4">
                        <h6>2020 - 2021</h6>
                        <div class="ms-5">
                          <p>TEFL</p>
                          <p>TEFL Certficate</p>
                          <span>
                            <img
                              class="pe-2"
                              src="assets/images/verify.png"
                              alt="verify"
                            />
                            certification verified
                          </span>
                        </div>
                      </div>
                      <hr class="certificate-hr" />
                      <div class="certificate d-flex mt-4">
                        <h6>2020 - 2021</h6>
                        <div class="ms-5">
                          <p>Degree</p>
                          <p>BA Hons degree</p>
                          <span>
                            <img
                              class="pe-2"
                              src="assets/images/verify.png"
                              alt="verify"
                            />
                            certification verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="rating mt-4">
                      <div class="rating-top d-md-flex align-items-center">
                        <div class="final-rating">
                          <h1>5</h1>
                          <div>
                            <img src="assets/images/star.png" alt="star" />
                            <img src="assets/images/star.png" alt="star" />
                            <img src="assets/images/star.png" alt="star" />
                            <img src="assets/images/star.png" alt="star" />
                            <img src="assets/images/star.png" alt="star" />
                          </div>
                          <p>50 reviews</p>
                        </div>
                        <div class="w-100 mt-5 mt-md-0">
                          <div class="rating-cat rating-5 position-relative">
                            <p class="active">5 star</p>
                            <p class="active">(45)</p>
                          </div>
                          <div class="rating-cat rating-4 position-relative">
                            <p>4 star</p>
                            <p>(5)</p>
                          </div>
                          <div class="rating-cat position-relative">
                            <p>3 star</p>
                            <p>(0)</p>
                          </div>
                          <div class="rating-cat position-relative">
                            <p>2 star</p>
                            <p>(0)</p>
                          </div>
                          <div class="rating-cat position-relative">
                            <p>1 star</p>
                            <p>(0)</p>
                          </div>
                        </div>
                      </div>
                      <hr class="review-hr" />
                      <div class="student-reviews">
                        <div class="student-review py-4">
                          <div class="student-p-info d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                              <img class="student-info-img"
                                src="assets/images/student-1.png"
                                alt="student-1"
                              />
                              <div class="ps-4">
                                <h4>Justin Septimus</h4>
                                <h5>new york</h5>
                                <p>oct 6, 2022</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <img src="assets/images/star.png" alt="star" />
                              <h6>5</h6>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendum. Morbi lacinia eu, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendumetiam volutpat morbi et amet, sagittis
                            adipiscing.
                          </p>
                        </div>
                        <div class="student-review py-4">
                          <div class="student-p-info d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                              <img class="student-info-img"
                                src="assets/images/student-2.png"
                                alt="student-2"
                              />
                              <div class="ps-4">
                                <h4>katrina lamon</h4>
                                <h5>dubai</h5>
                                <p>oct 6, 2022</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <img src="assets/images/star.png" alt="star" />
                              <h6>5</h6>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendum. Morbi lacinia eu, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendumetiam volutpat morbi et amet, sagittis
                            adipiscing.
                          </p>
                        </div>
                        <div class="student-review py-4">
                          <div class="student-p-info d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                              <img class="student-info-img"
                                src="assets/images/student-3.png"
                                alt="student-3"
                              />
                              <div class="ps-4">
                                <h4>vicky</h4>
                                <h5>USA</h5>
                                <p>oct 6, 2022</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <img src="assets/images/star.png" alt="star" />
                              <h6>5</h6>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendum. Morbi lacinia eu, consectetur adipiscing
                            elit. Sit a laoreet libero dis eget maecenas
                            bibendumetiam volutpat morbi et amet, sagittis
                            adipiscing.
                          </p>
                        </div>
                        <div class="view-all-students text-center py-4">
                          <Link tp='/'>view All student reviews</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                  <div class="lesson-wrapper ms-md-5 d-none d-lg-block">
                    <div class="lesson">
                      <div class="lesson-thumb">
                        <img
                          src="assets/images/lesson-thumb.png"
                          alt="lesson-thumb"
                        />
                      </div>
                      <div class="lession-info d-flex justify-content-between align-items-center py-4">
                        <div class="text-center">
                          <div class="d-flex justify-content-center align-items-center">
                            <img src="assets/images/star.png" alt="star" />
                            <h6>5</h6>
                          </div>
                          <p>50 reviews</p>
                        </div>
                        <div class="text-center">
                          <div class="d-flex justify-content-center align-items-center">
                            <img src="assets/images/dollar.png" alt="dollar" />
                            <h6>12</h6>
                          </div>
                          <p>per hour</p>
                        </div>
                      </div>
                      <div class="book-trial-btn">
                        <Link tp='/'>Book trial lesson</Link>
                      </div>
                      <div class="send-message-btn mt-3">
                        <Link tp='/'>
                          <img
                            class="pe-2"
                            src="assets/images/message-green.png"
                            alt="message-green"
                          />
                          Send message
                        </Link>
                      </div>
                      <div class="save-list-btn mt-3">
                        <Link tp='/'>
                          <img
                            class="pe-2"
                            src="assets/images/heart-red.png"
                            alt="heart-red"
                          />
                          Save to my list
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Mentor Section HTML End --> */}

        {/* <!-- Mentor Section HTML Start --> */}

        <section id="Mentor">
          <div class="mentor-wrapper position-relative">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="mentor-content">
                    <h5>join runigo</h5>
                    <h2>
                      <span>become a</span> mentor on runigo and
                      <span>help thousands of students</span>
                    </h2>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                    <div class="common-btn mt-5">
                      <a href="register.html">join now</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mentor-img ms-md-5 ps-md-5">
                    <img src="assets/images/mentor.png" alt="mentor" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mentor-shape1">
              <img src="assets/images/mentor-shape1.png" alt="mentor-shape1" />
            </div>
            <div class="mentor-shape2">
              <img src="assets/images/mentor-shape2.png" alt="mentor-shape2" />
            </div>
            <div class="mentor-shape3">
              <img src="assets/images/mentor-shape3.png" alt="mentor-shape3" />
            </div>
          </div>
        </section>

        {/* <!-- Mentor Section HTML End --> */}
      </main>

      {/* <!-- Main Part HTML End --> */}

      {/* <!-- Footer Part HTML Start --> */}

        <Footer></Footer>

      {/* <!-- Footer Part HTML End --> */}
    </>
  );
};

export default Mentor;
