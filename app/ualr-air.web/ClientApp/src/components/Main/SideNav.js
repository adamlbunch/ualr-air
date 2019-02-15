import React, { Component } from 'react';
import { SideNavItem } from './SideNavItem';
import { NavLink } from 'react-router-dom'

export class SideNav extends Component {
  displayName = SideNav.name
  constructor(props) {
    super(props);

    this.expandItem = this.expandItem.bind(this);
    this.closeOtherItems = this.closeOtherItems.bind(this);
    this.toggle = this.toggle.bind(this);
    this.isClicked = this.isClicked.bind(this);

    // not the best way to do this but yeah, I need the START section to be already loaded 
    // and the SideNavItem to be clicked without showing the list yet

  }

  startListClicked = true;
  programsListClicked = false;
  resourcesListClicked = false;
  assureListClicked = false;

  // TODO: very hacky way to get list id, could improve this
   expandItem(e) {
    var id = e.target.id;
    var listId = e.target.id + "-list"
    var list = document.getElementById(listId);
    
    if (id !== "") {
        if (!this.isClicked(e)) {
            list.style.display = "block";
            this.closeOtherItems(e);
            this.isClicked(e);
        } else if (this.isClicked(e)) {
            list.style.display = "none";
            this.isClicked(e);
        }
    }
}

// bad code. need to make this more generic
closeOtherItems(e) {
    var sidenavStartList = document.getElementById("sidenav-start-list");
    var sidenavProgramsList = document.getElementById("sidenav-programs-list");
    var sidenavResourcesList = document.getElementById("sidenav-resources-list");
    var sidenavAssureList = document.getElementById("sidenav-assure-list");

    if (e.target.id === "sidenav-start") {
        sidenavProgramsList.style.display = "none";
        sidenavResourcesList.style.display = "none";
        sidenavAssureList.style.display = "none";

    }

    if (e.target.id === "sidenav-programs") {
        sidenavStartList.style.display = "none";
        sidenavResourcesList.style.display = "none";
        sidenavAssureList.style.display = "none";

    }

    if (e.target.id === "sidenav-resources") {
        sidenavStartList.style.display = "none";
        sidenavProgramsList.style.display = "none";
        sidenavAssureList.style.display = "none";
    }

    if (e.target.id === "sidenav-assure") {
        sidenavStartList.style.display = "none";
        sidenavResourcesList.style.display = "none";
        sidenavProgramsList.style.display = "none";
    }
}

toggle(bool) {
    bool = !bool;
}
// TODO: Fix issue with highlighting sidenav-items after one has already been clicked; it has to do with
// document.getElementById("sidenav-start").style.backgroundColor = "white";
isClicked(e) {
    var element = document.getElementById(e.target.id);

    if (e.target.id === "sidenav-start") {
        this.toggle(this.startListClicked);
        element.style.backgroundColor = "rgb(235, 235, 235)";
    } else {
        document.getElementById("sidenav-start").style.backgroundColor = "white";
    }

    if (e.target.id === "sidenav-programs") {
        this.toggle(this.programsListClicked);
        element.style.backgroundColor = "rgb(235, 235, 235)";
    } else {
        document.getElementById("sidenav-programs").style.backgroundColor = "white";
    }

    if (e.target.id === "sidenav-resources") {
        this.toggle(this.resourcesListClicked);
        element.style.backgroundColor = "rgb(235, 235, 235)";
    } else {
        document.getElementById("sidenav-resources").style.backgroundColor = "white";
    }

    if (e.target.id === "sidenav-assure") {
        this.toggle(this.assureListClicked);
        element.style.backgroundColor = "rgb(235, 235, 235)";
    } else {
        document.getElementById("sidenav-assure").style.backgroundColor = "white";
    }
}
  render() {
    return (
      <div id="sidenav">
        <NavLink to={'./start'} style={{ textDecoration: 'none'}}>
          <SideNavItem 
            itemId="sidenav-start" 
            text="Start" 
            listId="sidenav-start-list"
            listItem1="Welcome" 
            listItem2="Team"
            listItem3="Where we are"
            onClick={this.expandItem}
          />
        </NavLink>
        <NavLink to={'./programs'} style={{ textDecoration: 'none'}}>
          <SideNavItem
            itemId="sidenav-programs"
            text="Programs"
            listId="sidenav-programs-list"
            listItem1="Undergraduate"
            listItem2="Graduate"
            listItem3="Research"
            onClick={this.expandItem}
          />
        </NavLink>
        <NavLink to={'./resources'} style={{ textDecoration: 'none'}}>
          <SideNavItem 
            itemId="sidenav-resources"
            text="Resources"
            listId="sidenav-resources-list"
            listItem1="People"
            listItem2="Facilities"
            listItem3="FAQ"
            listitem4="About"
            onClick={this.expandItem}
          />
        </NavLink>
        <NavLink to={'./assure'} style={{ textDecoration: 'none'}}>
          <SideNavItem
            itemId="sidenav-assure"
            text="Assure"
            listId="sidenav-assure-list"
            listItem1="Mission"
            listItem2="SAIL Alliance"
            listItem3="Interesting Links"
            listItem4="Information Assurance Programs"
            onClick={this.expandItem}
          />
        </NavLink>
      </div>
    );
  }
}
