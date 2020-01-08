import React, { Component } from "react";
import "./css/character.css";

class Character extends Component {
  render() {
    return (
      <div
        className="finalCharacter"
        onClick={() => this.props.onClick(this.props.character.id)}
      >
        <img src={this.props.character.img} alt="Character" />
      </div>
    );
  }
}

export default Character;
