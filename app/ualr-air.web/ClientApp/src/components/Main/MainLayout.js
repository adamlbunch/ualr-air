import '../../css/main.css';
import '../../css/main-mobile.css';
import React, { Component } from 'react';
import { NavBar } from './NavBar';
import { SideNav } from './SideNav';
import { Start } from './Start';

export class MainLayout extends Component {
  displayName = MainLayout.name
  
  componentDidMount() {
    document.getElementsByClassName("sidenav-item")[0].click();
    var sidenavStartList = document.getElementById("sidenav-start-list");
    sidenavStartList.style.display="none";
  }

  constructor() {
    super();
    document.body.classList.remove('landing-body');
 }

  render() {
    return (
    <div id="main-grid-container">
        <NavBar/>
        <SideNav />
        <div id="main-content">
            {this.props.children}
        </div>
    </div>
    );
  }
}




   