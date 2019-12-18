// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";
import Stepsecound from "./components/Stepsecound";
import Stepfirst from "./components/Stepfirst";
import Stepthird from "./components/Stepthird";

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
      cardname: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // step first next button
  handleFirstSubmit = event => {
    this.setState({ active: "stepsecound" });
  };

  // step secound next button
  handleSecoundSubmit = event => {
    this.setState({ active: "stepthird" });
  };

  handleprevious = event => {
    console.log("running");
    this.setState({ active: "previousone" });
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
        return <Stepthird onChange={this.handleChange} />;
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
