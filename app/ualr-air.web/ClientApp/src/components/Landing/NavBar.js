import React, { Component } from 'react';
import logo from '../../images/logo-white.png'

export class NavBar extends Component {
  displayName = NavBar.name
  render() {
    return (
      <div id="navbar">
        <a href="#" id="navbar-logo"><img id="navbar-logo" src={logo}/></a>
      </div>
    );
  }
}