import React, { Component } from 'react';
import { LandingLayout } from './components/Landing/LandingLayout';

export default class App extends Component {
  displayName = App.name
  render() {
      return (
        <div>
          <LandingLayout />
        </div>
      );
  }
}
                  