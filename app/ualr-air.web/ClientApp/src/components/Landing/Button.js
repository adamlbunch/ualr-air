import React, { Component } from 'react';

export class Button extends Component {
  displayName = Button.name

  render() {
    return (
        <a className="button" id={this.props.id}
          style={{color: this.props.color, backgroundColor: this.props.backgroundColor}}>
          {this.props.text}
        </a>
    );
  }
}