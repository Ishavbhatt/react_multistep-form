import React from "react";
import "../styles/style.css";

import { MdDone } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

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
            <span className="oneimg">
              <MdDone />
            </span>
            <h3 className="account">Account Information</h3>
          </div>
          <div className="account-information">
            <span className="oneimg">
              <MdDone />
            </span>
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
                Payment Type
                <button className="inputform">
                  <FaCcVisa />
                </button>
                <button className="inputform">
                  <FaCcMastercard />
                </button>
                <button className="inputform">
                  <FaCcPaypal />
                </button>
              </label>
            </div>
            <div className="formpadding">
              <label>
                Credit Card:
                <input className="inputform" name="creditcard" type="number" />
              </label>
            </div>
            <div className="formpadding">
              <label>
                Expiration Date:
                <input
                  className="inputform"
                  name="expirationdate"
                  type="number"
                />
              </label>
            </div>
            <div className="formpadding">
              <label>
                Name Of Card:
                <input className="inputform" name="cardname" type="text" />
              </label>
            </div>
          </form>
        </div>
        <hr />
      </div>
      <div className="stepone-footer">
        <div>
          <button className="nextstep-button">Submit</button>
        </div>

        <div>
          By Submitting this form, you agree with our
          <a href=""> Terms and Condition</a>
        </div>
      </div>
    </div>
  );
}
