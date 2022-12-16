import React from "react";
import '../UniversityInfo1/UniversityInfo1.css';

const UniversityInfo3 = () => {
  return (
    <section>
      <div className="form-step">
        <h5>Email confirmation</h5>
        <form>
          <div className="d-lg-flex justify-content-between">
            <div className="university-form-group">
              <label>Please, verify your email using the code we send to your email</label>
              <input
                type="text"
                placeholder="Enter Code"
                required
              />
            </div>
          </div>
          <input
            className="verify-red-btn"
            type="submit"
            value="next step"
          />
        </form>
      </div>
    </section>
  );
};

export default UniversityInfo3;
