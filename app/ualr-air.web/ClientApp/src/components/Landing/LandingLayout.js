import '../../css/landing.css';
import '../../css/landing-mobile.css';
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Content } from './Content';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { MainLayout } from '../Main/MainLayout';
import { NavBar } from './NavBar';
import { Start } from '../Main/Start';
import { Programs } from '../Main/Programs';
import { Resources } from '../Main/Resources';
import { Assure } from '../Main/Assure';

export class LandingLayout extends Component {
  displayName = LandingLayout.name

  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      responseData: null,
      loginEmail: "",
      loginPassword: "",
      email: "",
      password: "",
      interest: 'notvalid',
      studentType: 'T',
      registerSuccess: false,
      isLoading: false
    };
    this.handleLoginEmail = this.handleLoginEmail.bind(this);
    this.handleLoginPassword = this.handleLoginPassword.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleStudentTypeChange = this.handleStudentTypeChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    document.body.classList.add('landing-body');
  }

  handleLoginEmail(e) {
    this.setState({ loginEmail: e.target.value});
  }

  handleLoginPassword(e) {
    this.setState({ loginPassword: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleInterestChange(e) {
    this.setState({ interest: e.target.value });
  }

  handleStudentTypeChange(e) {
    this.setState({ studentType: e.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({ responseData: null });
    var email = this.state.loginEmail;
    var password = this.state.loginPassword;

    fetch("api/home/LoginStudent", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        responseData: data
      })
      if (this.state.responseData !== null &&
        this.state.responseData.loginSuccess) {
          this.setState({
            currentUser: {
              email: this.state.responseData.email,
              interest: this.state.responseData.interest,
              studentType: this.state.responseData.studentType
            }
          });
        }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ responseData: null });
    var email = this.state.email;
    var password = this.state.password;
    var interest = this.state.interest;
    var studentType = this.state.studentType;

    fetch("api/home/RegisterStudent", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        Email: email,
        Password: password,
        Interest: interest,
        StudentType: studentType
       })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        responseData: data
      })
      if (this.state.responseData !== null &&
        this.state.responseData.loginSuccess) {
          this.setState({
            currentUser: {
              email: this.state.responseData.email,
              interest: this.state.responseData.interest,
              studentType: this.state.responseData.studentType
            },
            registerSuccess: true
          });
      }
     });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({ responseData: null });
    var email = this.state.loginEmail;
    var password = this.state.loginPassword;

    fetch("api/home/LoginStudent", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        responseData: data
      })
      if (this.state.responseData !== null &&
        this.state.responseData.loginSuccess) {
          this.setState({
            currentUser: {
              email: this.state.responseData.email,
              interest: this.state.responseData.interest,
              studentType: this.state.responseData.studentType
            },
            registerSuccess: true
          });
        }
    });
  }

  render() {
    if (this.state.registerSuccess) {
      return (
      <MainLayout>
        <Route path='/start'
        render={(props) => <Start
          {...props}
          currentUser={this.state.currentUser}
          />
        }/>
        <Route path='/programs' component={Programs}/>
        <Route path='/resources' component={Resources}/>
        <Route path='/assure' component={Assure}/>
      </MainLayout>
      );
    }
    else {
      return (
        <div>
          <SignUp 
            handleSubmit={this.handleSubmit}
            handleEmailChange={this.handleEmailChange}
            email={this.state.email}
            handlePasswordChange={this.handlePasswordChange}
            password={this.state.password}
            handleInterestChange={this.handleInterestChange}
            interest={this.state.interest}
            handleStudentTypeChange={this.handleStudentTypeChange}
            studentType={this.state.studentType}
            responseData={this.state.responseData}
          />
          <Login
            handleSubmit={this.handleLogin}
            handleEmailChange={this.handleLoginEmail}
            handlePasswordChange={this.handleLoginPassword}
            email={this.state.loginEmail}
            password={this.state.loginPassword}
            responseData={this.state.responseData}
          />
        <NavBar/>
        <Content/>
      </div>
      );
    }
  }
}
