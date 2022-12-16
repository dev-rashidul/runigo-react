import React from "react";
import "./UniversityInfo1.css";

const UniversityInfo1 = () => {
  return (
    <section>
      <div className="form-step">
        <h5>University info</h5>
        <form>
          <div className="d-lg-flex justify-content-between">
            <div className="university-form-group">
              <label>Enter full name of your University</label>
              <input
                type="text"
                placeholder="Enter full name of your University"
                required
              />
            </div>
            <div className="university-form-group mt-4 mt-lg-0">
              <label>Enter Your university email</label>
              <input
                type="email"
                placeholder="gmail@gmail.com"
                required
              />
            </div>
          </div>
          <input
            className="verify-gray-btn"
            type="submit"
            value="verify email"
          />
        </form>
      </div>
    </section>
  );
};

export default UniversityInfo1;
