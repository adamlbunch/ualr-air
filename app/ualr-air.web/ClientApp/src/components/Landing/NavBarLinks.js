import React, { Component } from 'react';

export class NavBarLinks extends Component {
  displayName = NavBarLinks.name
  render() {
    return (
      <div id="navbar-links">
        <ul>
          <li><a href="https://ualr.edu/admissions/">ADMISSIONS</a></li>
          <li><a href="https://ualr.edu/academics/">ACADEMICS</a></li>
          <li><a href="https://ualr.edu/campuslife/">STUDENTS</a></li>
          <li><a href="https://ualr.edu/community/">COMMUNITY</a></li>
          <li><a href="https://ualr.edu/orsp/">RESEARCH</a></li>
          <li><a href="https://ualr.edu/about/">ABOUT</a></li>
        </ul>
      </div>
    );
  }
}