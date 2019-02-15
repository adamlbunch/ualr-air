import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class Welcome extends Component {
  displayName = Welcome.name

  typeAndInterest() {
    var studentType = null;
    if (this.props.location.state.studentType == 'T') {
      studentType = "Traditional Student";
    }
    else {
      studentType = "Non-Traditional Student";
    }
    return (<div>
      <p>It's great to see a new {studentType} with a passion for {this.props.location.state.interest}.</p>
    </div>);
  }

  render() {
      return (
          <div>
            <h1>Welcome {this.props.email}</h1>
          </div>
      );
  }
}