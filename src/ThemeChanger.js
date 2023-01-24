import React, { Component } from "react";

class ThemeChanger extends Component {
  state = {
      theme: 190
    };

  themeUp = () => {
    let newTheme = this.state.theme + 8;
    // Hue value is 0 through 360. subtract 360 from the #
    if(newTheme > 360) newTheme -= 360;
    this.setState({ theme: newTheme });
    this.updateTheme();
  }

  themeDown = () => {
    let newTheme = this.state.theme - 8;
    // Hue value is 0 through 360. add 360 to the negative #
    if(newTheme < 0) newTheme += 360;
    this.setState({ theme: newTheme })
    this.updateTheme();
  }
  
  updateTheme () {
    document.documentElement.style.setProperty('--primary-hue', this.state.theme)
  }

  render() {
    return (
      <div className="ThemeChanger">
        <button onClick={this.themeUp}>+</button>
        <div className="theme-number">{this.state.theme}</div>
        <button onClick={this.themeDown}>-</button>
      </div>
    );
  }
}

export default ThemeChanger;