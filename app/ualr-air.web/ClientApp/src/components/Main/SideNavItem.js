import React, { Component } from 'react';
import arrow from '../../images/right-arrow.svg'

export class SideNavItem extends Component {
    displayName = SideNavItem.name
    render() {
      return (
        <div className="sidenav-item" id={this.props.itemId} onClick={this.props.onClick}>
            {this.props.text}
            <img className="arrow" src={arrow} />
            <ol className="sidenav-item-list" id={this.props.listId}>
                <li>{this.props.listItem1}</li>
                <li>{this.props.listItem2}</li>
                <li>{this.props.listItem3}</li>
                <li>{this.props.listItem4}</li>
            </ol>
        </div>
        
      );
    }
  }