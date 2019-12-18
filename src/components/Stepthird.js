import React from "react";
import "../styles/style.css";

export default function Stepthird(props) {
  return (
    <div className="stepone-div">
      <div className="step1-header">
        <img className="adduser" src="images/man-user.png" alt="user" />
        <h2>Create Account for full Access</h2>
      </div>

      <div>
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
            {/* <div className="formpadding">
              <label>
                Payment Type
                <input className="inputform" name="payment" type="text" />
              </label>
            </div> */}
            <div className="formpadding">
              <label>
                Credit Card:
                <input className="inputform" name="creditcard" type="number" />
              </label>
            </div>
            <div className="formpadding">
              <label>Expiration Date:</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
