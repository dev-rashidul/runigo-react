import React from "react";
import { BiImageAdd } from "react-icons/bi";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <section id="account-settings">
      <div className="account-settings-wrapper">
        <h3>Account Settings</h3>
        <div className="profile-picture mt-5">
          <h4>Change Profile Picture</h4>
          <hr />
          <div className="pp-input-field my-4">
            <label>Upload here</label>
            <br />
            <div className="file-upload">
              <input type="file" required />
              <div className="file-upload-box">
                <BiImageAdd></BiImageAdd>
                <span>Upload</span>
              </div>
            </div>
          </div>
        </div>
        <div className="change-password mt-5 pt-5">
          <h4>Change Password</h4>
          <hr />
          <div className="cp-input-field mb-4 mt-4">
            <label>Password</label>
            <br />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="cp-input-field">
            <input type="submit" value="Save" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
