import React from "react";
import "./SuccessForm.css";

const SuccessForm = () => {
  return (
    <section>
      <div className="success-form text-center">
        <img draggable="false" src="assets/images/success.png" alt="success" />
        <h5>Congratulations!</h5>
        <p>You are now in the Runigo’s mentor community</p>
        <div className="success-form-btn mt-5">
          <a href="#link">Open mentor’s profile</a>
        </div>
      </div>
    </section>
  );
};

export default SuccessForm;
