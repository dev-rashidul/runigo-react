import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        // <!-- Login Section HTML Start -->

    <section id="Login">
      <div
        className="login-wrapper d-lg-flex justify-content-between align-items-center"
      >
        <div className="login-img d-none d-lg-block">
          <img src="assets/images/login.png" alt="login" />
        </div>
        <div className="login-content my-5 my-lg-0">
          <div className="login-top text-center">
            <img src="assets/images/logo.png" alt="logo" />
          </div>
          <div className="login-form text-center">
            <form>
              <div className="form-group">
                <input type="email" placeholder="email" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" />
              </div>
              <div className="login-btn">
                <input type="submit" value="Sign In" />
              </div>
              <p>
                Don’t have an account? <a href="register.html">Register here</a>
              </p>
              <Link tp='/'>Forgot password</Link>
            </form>
          </div>
        </div>
      </div>
    </section>

    // <!-- Login Section HTML End -->
    );
};

export default Login;