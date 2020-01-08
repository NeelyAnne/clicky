import React, { Component } from "react";
import logo from "./FamousApps.jpg";
import "./css/jumbotron.css";

const STATE = {
  START: { message: "Try not to click the same image twice!" },
  CORRECT: { message: "Keep going! You got this!" },
  INCORRECT: { message: "I'm sorry, you already clicked that one. Try again!" }
};

class Jumbotron extends Component {
  render() {
    let state = STATE[this.props.state];
    return (
      <div className="jumbotron">
        <img src={logo} alt="Logo" />
        <br />
        <br />
        <h1>Remember the Apps, Clicky Game</h1>
        <ul>
          <li>{state.message}</li>
          <li>
            Current Score: {this.props.score} | High Score:{" "}
            {this.props.topScore}
          </li>
        </ul>
      </div>
    );
  }
}

export default Jumbotron;
