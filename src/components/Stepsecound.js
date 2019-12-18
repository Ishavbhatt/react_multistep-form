import React from "react";
import "../styles/style.css";

import { MdDone } from "react-icons/md";

export default function Stepsecound(props) {
  return (
    <div className="stepone-div">
      <div className="step1-header">
        <img className="adduser" src="images/man-user.png" alt="user" />
        <h2>Create Account for full Access</h2>
      </div>
      <div className="information">
        <div className="account-information">
          <span className="oneimg">
            <MdDone />
          </span>
          <h3 className="account">Account Information</h3>
        </div>
        <div className="account-information">
          <span className="oneimg">2</span>
          <h3 className="account">Personal Information</h3>
        </div>
        <div className="account-information">
          <span className="oneimg">3</span>
          <h3 className="account">Payment Information</h3>
        </div>
      </div>
      <div>
        <form className="form">
          <div className="formpadding">
            <label>
              Full Name:
              <input
                className="inputform"
                name="fullname"
                type="text"
                value={props.fullname}
                onChange={props.handleFullnamechange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Country:
              <select
                className="inputform input-select"
                name="country"
                value={props.country}
                onChange={props.handleCountrychange}
              >
                <option value="india">India</option>
                <option value="japan">Japan</option>
              </select>
            </label>
          </div>
          <div className="formpadding">
            <label>
              Gender:
              <select
                className="inputform input-select"
                name="country"
                value={props.gender}
                onChange={props.handleCountrychange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div className="formpadding">
            <label>
              About You:
              <textarea
                className="inputform"
                name="about"
                type="textarea"
                value={props.about}
                onChange={props.handleAboutchange}
              />
            </label>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="stepone-footer">
        <div>
          <p className="Steponeof-three">Step 2 of 3</p>
        </div>
        <div>
          <a href="">cancel</a>
          <span className="or">or</span>
          <button className="nextstep-button" onClick={props.secoundsubmit}>
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}
