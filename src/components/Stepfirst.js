import React from "react";
import "../styles/style.css";

export default function Stepfirst(props) {
  return (
    <div className="stepone-div">
      <div className="step1-header">
        <img className="adduser" src="images/adduser.png" alt="adduser" />
        <h2>Sign-up to create account</h2>
      </div>
      <div className="information">
        <div className="account-information">
          <span className="oneimg">1</span>
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
              UserName:
              <input
                className="inputform"
                name="username"
                type="text"
                value={props.username}
                onChange={props.handleChange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Email:
              <input
                className="inputform"
                name="email"
                type="email"
                value={props.email}
                onChange={props.handleChange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Password:
              <input
                className="inputform"
                name="password"
                type="password"
                value={props.password}
                onChange={props.handleChange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Select Avatar:
              <input
                className="inputform input-file"
                name="avatar"
                type="file"
                value={props.avatar}
                onChange={props.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="stepone-footer">
        <div>
          <p className="Steponeof-three">Step 1 of 3</p>
        </div>
        <div>
          <a href="">cancel</a>
          <span className="or">or</span>
          <button className="nextstep-button" onClick={props.firstsubmit}>
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}
