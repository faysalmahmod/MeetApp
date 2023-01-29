import React, { Component } from "react";
import ThemeChanger from "./ThemeChanger";
import logo from './img/logo.png';
import './Topbar.css';

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <img className='logo' alt='Logo' src={logo}></img>
        <h1>Treffen</h1>
        <h3 className="subtitle text-white">Plan your meetings</h3>
        <ThemeChanger />
      </div>
    );
  }
}

export default TopBar;