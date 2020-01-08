import React, { Component } from "react";
import Character from "./Character";

class Page extends Component {
  render() {
    return (
      <div>
        {this.props.characters.map(c => (
          <Character character={c} key={c.id} onClick={this.props.onClick} />
        ))}
      </div>
    );
  }
}

export default Page;
