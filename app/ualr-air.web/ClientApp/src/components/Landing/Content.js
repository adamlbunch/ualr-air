import React, { Component } from 'react';
import video from '../../videos/programming-video.mp4';
import logo from '../../images/logo-maroon.png';
export class Content extends Component {
  displayName = Content.name
  
  displayLogin() {
    document.getElementById("login-form-main").style.display = "block";
  }

  displaySignUp() {
    document.getElementById("signup-form-main").style.display = "block";
  }

  render() {
    return (
        <div id="landing-container">
          <div id="content">
            <img id="logo" src={logo}/>
              <h1 id="title">COMPUTER SCIENCE</h1>
                <p id="paragraph">
                  With Computer Science, you’re more than just a student. You have stories to tell, 
                  and passions to share, and things to talk about that are more interesting than 
                  the weather. Get noticed for who you are and accelerate your research and innovation 
                  exponentially.
                </p>
                <a href="javascript:void(0)" id="signup-btn" onClick={this.displaySignUp} color="white"><span id="signup-btn-text">SIGN UP</span></a>
                <p id="login-text">Have an account? <a href="javascript:void(0)" onClick = {this.displayLogin}>Sign in</a></p>
                <p id="tos">By clicking Sign up you agree to our <a href="javascript:void(0)">Terms</a>, <a href="javascript:void(0)">Privacy</a>, and <a href="javascript:void(0)">Cookie</a> Policies.</p>
          </div>
          <div>
            <video id="video" autoPlay muted loop>
              <source src={video} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
    );
  }
}