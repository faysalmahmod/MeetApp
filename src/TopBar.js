import React, { Component } from "react";
import ThemeChanger from "./ThemeChanger";

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <h1>NOFOMO</h1>
        <h3 className="subtitle text-white">No Fear Of Missing Out!</h3>
        <ThemeChanger />
      </div>
    );
  }
}

export default TopBar;