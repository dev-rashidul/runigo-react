import React from "react";
import "../PersonalInfo1/PersonalInfo.css";

const PersonalInfo2 = () => {
  return (
    <section>
      <div className="form-step personal-info-step">
        <h5>Personal info</h5>
        <form>
          <div className="d-lg-flex justify-content-between">
            <div className="personal-form-group mt-4 mt-lg-0">
              <label>Name</label>
              <input type="text" placeholder="Your first name" required />
            </div>
            <div className="personal-form-group mt-4 mt-lg-0">
              <label>Last name</label>
              <input type="text" placeholder="Your last name" required />
            </div>
            <div className="personal-form-group mt-4 mt-lg-0">
              <label>Age</label>
              <input type="text" placeholder="Your age" required />
            </div>
          </div>
          <div className="d-lg-flex pt-4">
            <div className="personal-form-group">
              <label>Name</label>
              <select>
                <option value="American">American</option>
                <option value="London">London</option>
                <option value="Italy">Italy</option>
              </select>
            </div>
            <div className="personal-form-group mt-4 mt-lg-0">
              <label>Hourly price rate for your meetings</label>
              <div className="price d-flex align-items-center">
                <span>$</span>{" "}
                <input type="text" placeholder="Hourly rate" required />
              </div>
            </div>
          </div>
          <p>
            {" "}
            <img src="assets/images/info-icon.svg" alt="info-icon" />
            These informations can be changed at any time{" "}
          </p>
          <input className="confirm-red-btn" type="submit" value="Confirm" />
        </form>
      </div>
    </section>
  );
};

export default PersonalInfo2;
