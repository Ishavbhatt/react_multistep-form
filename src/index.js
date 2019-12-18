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
      gender: ""
    };
  }

  // HandleName
  handleNamechange = event => {
    console.log(event);
    this.setState({ username: event.target.value });
  };

  // HandleName
  handleEmailchange = event => {
    this.setState({ email: event.target.value });
  };

  // HandleName
  handlePasswordchange = event => {
    this.setState({ password: event.target.value });
  };

  // HandleName
  handleAvatarchange = event => {
    this.setState({ avatar: event.target.value });
  };

  handleFullnamechange = event => {
    this.setState({ fullname: event.target.value });
  };

  handleCountrychange = event => {
    this.setState({ country: event.target.value });
  };

  handleAboutchange = event => {
    this.setState({ about: event.target.value });
  };

  handleGenderchange = event => {
    this.setState({ gender: event.target.value });
  };

  // step first next button
  handleFirstSubmit = event => {
    this.setState({ active: "stepsecound" });
  };

  // step secound next button
  handleSecoundSubmit = event => {
    this.setState({ active: "stepthird" });
  };

  renderPages = () => {
    console.log(this.state.active);
    switch (this.state.active) {
      case "stepfirst":
        return (
          <Stepfirst
            onChange={this.handleNamechange}
            onChange={this.handleEmailchange}
            onChange={this.handlePasswordchange}
            onChange={this.handleAvatarchange}
            firstsubmit={this.handleFirstSubmit}
          />
        );

      case "stepsecound":
        return (
          <Stepsecound
            onChange={this.handleFullnamechange}
            onChange={this.handleCountrychange}
            onChange={this.handleAboutchange}
            onChange={this.handleGenderchange}
            secoundsubmit={this.handleSecoundSubmit}
          />
        );
      case "stepthird":
        return <Stepthird />;
    }
  };

  render() {
    return <>{this.renderPages()}</>;
  }
}

render(<Index />, document.getElementById("root"));
