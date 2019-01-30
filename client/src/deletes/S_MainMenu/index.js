import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from "semantic-ui-react";
import WeekBlock from "../WeekBlock";
import WorkBlock from "../WorkBlock";
// import TaskCard from "../TaskCard";


class MainMenu extends Component {
  state = {
    activeItem: 'Home',
    // sidebarVisible: true,
  };


  componentDidMount() {
    let readToken = window.sessionStorage.getItem("SMC_authkey");
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          this.setState({ isLoggedIn: true, });
        } else {
          this.setState({ isLoggedIn: false });
          window.location.assign('/login');
        };
      })
      .catch(err => console.log(err));
  };


  handleMenuClick = (event, { name }) => {
    this.setState({ activeItem: name })
  };


  render() {
    const { activeItem } = this.state

    return (

      <div className="MainMenu">
        <Menu attached="top" tabular inverted>
          <Menu.Item
            // as="a"
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleMenuClick} >
            <Icon name='home' />
          </Menu.Item>
          <Menu.Item
            // as="a"
            name="Taskboard"
            active={activeItem === "Taskboard"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            // as="a"
            name="Calendar"
            active={activeItem === "Calendar"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            // as="a"
            name="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            // as="a"
            position="right"
            name="Logout"
            active={activeItem === "Logout"}
            onClick={this.handleMenuClick}
          />
        </Menu>

        {this.state.activeItem === "Home" &&
          <div>
            <h1>{this.state.activeItem} Home</h1>
          </div>
        }

        {this.state.activeItem === "Dashboard" &&
          <div>
            <h1>{this.state.activeItem} Dashboard</h1>
          </div>
        }

        {this.state.activeItem === "Taskboard" &&
          <div>
            <h1>{this.state.activeItem} Taskboard</h1>
            <WorkBlock />
          </div>
        }

        {this.state.activeItem === "Calendar" &&
          <div>
          <h1>{this.state.activeItem} Calendar</h1>
            <WeekBlock />
          </div>
        }

      </div>
    );
  };
};


export default MainMenu;      