import React from "react";
import "./BecomeMentorForm.css";
import UniversityInfo1 from "./UniversityInfo1/UniversityInfo1";

const BecomeMentorForm = () => {
  return (
    <section>
      <div className="bm-form-wrapper">
        <div className="container">
          <div className="bm-form-container">
            <div className="bm-form-step-wrapper d-flex justify-content-between">
              <div className="bm-form-step">
                <h2 className="active">1</h2>
                <p>University info</p>
              </div>
              <div className="bm-form-step">
                <h2>2</h2>
                <p>Personal info</p>
              </div>
              <div className="bm-form-step">
                <h2>3</h2>
                <p>Success</p>
              </div>
            </div>
            <div className="bm-step-form">
              {/* Form */}

              <UniversityInfo1></UniversityInfo1>

              {/* Form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMentorForm;
