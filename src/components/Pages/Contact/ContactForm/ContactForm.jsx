import React from "react";
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form>
      <div className="contact-input-field">
        <input type="text" placeholder="Name*" required />
      </div>
      <div className="contact-input-field">
        <input type="email" placeholder="Email*" required />
      </div>
      <div className="contact-input-field">
        <textarea rows="6" placeholder="Your Message" required></textarea>
      </div>
      <div className="contact-input-field">
        <input className="contact-submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default ContactForm;
