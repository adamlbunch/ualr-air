import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { MainLayout } from '../Main/MainLayout';
import { Start } from '../Main/Start';
import { Programs } from '../Main/Programs';
import { Resources } from '../Main/Resources';
import { Assure } from '../Main/Assure';
import arrow from '../../images/landing-arrow.png'

export class Login extends Component {
  displayName = Login.name

  removeLogin() {
    document.getElementById("login-form-main").style.display = "none";
  }

  render() {
     var errorId = 0;
     var displayErrorMessages = null;
     if (this.props.responseData !== null &&
       this.props.responseData.generalErrorMessage !== null) {
       displayErrorMessages = this.props.responseData.generalErrorMessage.map(error => (
         errorId++,
         <div key={errorId}>
           {error}
         </div>
       ));
     }
    return (
    <div id="login-form-main">
      <div id="form-div">
        <form onSubmit={this.props.handleSubmit}>
         <a href="javascript:void(0)" onClick={this.removeLogin}><span id="login-exit-button"><img id="back-arrow" src={arrow} /></span></a>
          <div className="form-header">Sign in</div>
          <div id="emoji">👋</div>
          <p className="email">
            <input  id="email" value={this.props.email} onChange={this.props.handleEmailChange} className="feedback-input" placeholder="Email" maxLength="50" type="email" />
            <span asp-validation-for="Email" className="text-danger"></span>
          </p>
          <p className="password">
            <input  id="password" value={this.props.password} onChange={this.props.handlePasswordChange} className="feedback-input" placeholder="Password" maxLength="30" type="password"/>
            <span asp-validation-for="Password" className="text-danger"></span>
          </p>
          <div className="submit">
            <input type="submit" value="Sign in" id="button-blue"/>
          </div>
          <div className="form-header">
          {displayErrorMessages}
          </div>
        </form>
      </div>
    </div>
    );
  }
}