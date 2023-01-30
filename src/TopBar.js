import React, { Component } from "react";
import ThemeChanger from "./ThemeChanger";
import logo from './img/logo.png';
import { InfoAlert } from './Alert';
import './Topbar.css';

class TopBar extends Component {
  state = { infoText: '' }

  networkStatus = () => {
    this.setState({ infoText: navigator.online ? 'online' : 'offline' })
  };

  async componentDidMount() {
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    this.networkStatus();
  }

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