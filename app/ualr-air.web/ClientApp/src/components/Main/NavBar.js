import React, { Component } from 'react';
import logo from '../../images/logo-maroon.png'

export class NavBar extends Component {
  displayName = NavBar.name

  toggle() {
    var element = document.getElementsByClassName("hamburger")[0];
    var sideNav = document.getElementById("sidenav");
    element.classList.toggle("is-active");
    sideNav.classList.toggle("is-active");
   }
  
  render() {
    return (
      <div id="main-header">
      <div class="row cf">
        <div class="three col">
          <div class="hamburger" onClick={this.toggle} id="hamburger-1">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
        <a id="main-logo"><img id="main-logo" src={logo}/></a>
      </div>
    );
  }
}