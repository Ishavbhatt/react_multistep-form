// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";
import Stepsecound from "./components/Stepsecound";
import Stepfirst from "./components/Stepfirst";
import Stepthird from "./components/Stepthird";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      active: "stepfirst",
      username: "",
      email: "",
      password: "",
      avatar: "",
      fullname: "",
      country: "",
      about: "",
      gender: "",
      creditcard: "",
      expirationdate: "",
      cardname: "",
      errors: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   let errors = this.state.errors;

  //   switch (name) {
  //     case "username":
  //       errors.username =
  //         value.length < 5 ? "User Name must be 5 characters long!" : "";
  //       break;
  //     case "email":
  //       errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
  //       break;
  //     case "password":
  //       errors.password =
  //         value.length < 8 ? "Password must be 8 characters long!" : "";
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ errors, [name]: value });
  // };

  // step first next button
  handleFirstSubmit = event => {
    this.setState({ active: "stepsecound" });
  };

  // handleFirstSubmit = event => {
  //   event.preventDefault();
  //   if (validateForm(this.state.errors)) {
  //     console.info("Valid Form");
  //   } else {
  //     console.error("Invalid Form");
  //   }
  // };

  // step secound next button
  handleSecoundSubmit = event => {
    this.setState({ active: "stepthird" });
  };

  // Step third submit button
  handleLastSubmit = event => {
    alert("Your Account is created Successfully");
  };

  // Handle Previous Buttons
  handleprevious = event => {
    this.setState({ active: "previousone" });
    event.preventDefault();
  };

  handlelastprevious = event => {
    this.setState({ active: "previous2page" });
  };

  renderPages = () => {
    console.log(this.state.active);
    switch (this.state.active) {
      case "stepfirst":
        return (
          <Stepfirst
            onChange={this.handleChange}
            firstsubmit={this.handleFirstSubmit}
          />
        );

      case "stepsecound":
        return (
          <Stepsecound
            onChange={this.handleChange}
            secoundsubmit={this.handleSecoundSubmit}
            previous={this.handleprevious}
          />
        );
      case "stepthird":
        return (
          <Stepthird
            onChange={this.handleChange}
            previousthird={this.handlelastprevious}
            lastsubmit={this.handleLastSubmit}
          />
        );
    }
  };

  previouspage = () => {
    switch (this.state.active) {
      case "previousone":
        return (
          <Stepfirst
            onChange={this.handleChange}
            firstsubmit={this.handleFirstSubmit}
          />
        );
      case "previous2page":
        return (
          <Stepsecound
            onChange={this.handleChange}
            secoundsubmit={this.handleSecoundSubmit}
            previous={this.handleprevious}
          />
        );
    }
  };

  render() {
    return (
      <>
        {this.renderPages()}
        {this.previouspage()}
      </>
    );
  }
}

render(<Index />, document.getElementById("root"));
