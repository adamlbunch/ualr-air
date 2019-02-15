import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/landing-arrow.png'
import { Redirect } from 'react-router-dom';
import { MainLayout } from '../Main/MainLayout'; 
import { LandingLayout } from './LandingLayout';

export class SignUp extends Component {
  displayName = SignUp.name

  removeSignUp() {
    document.getElementById("signup-form-main").style.display = "none";
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
      <div id="signup-form-main">
        <div id="form-div">
          <form onSubmit={this.props.handleSubmit}>
            <a href="javascript:void(0)" onClick={this.removeSignUp}><span id="login-exit-button"><img id="back-arrow" src={arrow} /></span></a>
            <div className="form-header">Sign up</div>
            <div id="signup-form-text">Welcome! Who are you?</div>
            <p className="email">
              <input id="email" value={this.props.email} onChange={this.props.handleEmailChange} className="feedback-input" placeholder="Email" maxLength="50" type="email" />
              <span asp-validation-for="Email" className="text-danger"></span>
            </p>
            <p className="password">
              <input id="password" value={this.props.password} onChange={this.props.handlePasswordChange} className="feedback-input" placeholder="Password" maxLength="30" type="password" />
              <span asp-validation-for="Password" className="text-danger"></span>
            </p>
            <p className="option">
              <select id="option" value={this.props.interest} onChange={this.props.handleInterestChange} className="feedback-input">
                <option value="notvalid">Select your interest...</option>
                <option value="development">Development</option>
                <option value="security">Security</option>
                <option value="databaseAnalysis">Database Analysis</option>
                <option value="notSure">Not Sure</option>
              </select>
              <span asp-validation-for="Interest" className="text-danger"></span>
            </p>
              <div className="radio">
                <input id="radio-1" name="radio" type="radio" value="T" checked={this.props.studentType === 'T'} onChange={this.props.handleStudentTypeChange} />
                <label for="radio-1" className="radio-label">Traditional</label>
              </div>
              <div className="radio">
                <input id="radio-2" name="radio" type="radio" value="N" checked={this.props.studentType === 'N'} onChange={this.props.handleStudentTypeChange}/>
                <label for="radio-2" className="radio-label">Non-Traditional</label>
              </div>
              <span asp-validation-for="StudentType" className="text-danger"></span>
            <div className="submit">
              <input type="submit" value="Sign up" id="button-blue"/>
            </div>
            <p className="form-header">{displayErrorMessages}</p>
          </form>
        </div>
      </div>
    );
  }
}