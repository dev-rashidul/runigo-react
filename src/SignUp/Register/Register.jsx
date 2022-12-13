import React from "react";

const Register = () => {
  return (
    // <!-- Register Section HTML Start -->

    <section id="Register">
      <div className="register-top text-center">
        <img src="assets/images/logo.png" alt="logo" />
      </div>
      <div className="container">
        <div className="register-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="register-content">
                <h2>Register</h2>
                <div className="register-form">
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="username" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="submit-btn">
                      <input type="submit" value="Join the community" />
                    </div>
                    <p>
                      Already a member? <a href="login.html">Sign in</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="register-img">
                <img src="assets/images/register.png" alt="register" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <!-- Register Section HTML End -->
  );
};

export default Register;
