import React, { Component } from "react";
import "./style.css";
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from "semantic-ui-react";

let menuActiveItem = "";


const MainMenu = (props) => (
  <div className="MainMenu">
    <Menu attached="top" tabular>
      <Menu.Item 
        // as="a"
        name="Dashboard"
        active={menuActiveItem === "Dashboard"}
        onClick={ props.handleSBToggle }
      />
      <Menu.Item 
        // as="a"
        name="Taskboard"
        active={menuActiveItem === "Tasksboard"}
        onClick={props.handleMenuClick}
      />
      <Menu.Item 
        // as="a"
        name="Calendar"
        active={menuActiveItem === "Calendar"}
        onClick={props.handleMenuClick}
      />
      <Menu.Item 
        // as="a"
        position="right"
        name="Logout"
        active={menuActiveItem === "Logout"}
        onClick={props.handleMenuClick}
      />
    </Menu>
  </div>
);


export default MainMenu;