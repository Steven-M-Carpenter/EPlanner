import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from "semantic-ui-react";
import WeekBlock from "../WeekBlock";


class MainMenu extends Component {
  state = {
    activeItem: 'Home',
    // sidebarVisible: true,
  };


  // handleSBToggle = () => {
  //   if (this.state.sidebarVisible) {
  //     this.setState({ sidebarVisible: false })
  //   } else {
  //     this.setState({ sidebarVisible: true })
  //   };
  // };


  // handleSBShowClick = () => this.setState({ sidebarVisible: true })
  // handleSBHide = () => this.setState({ sidebarVisible: false })

  // constructor(props) {
  //   super(props);

  //   this.state ={
  //     isLoggedIn: props.loginState,
  //     loginEmail: props.userEmail
  //   };
  // }


  componentDidMount() {
    let readToken = window.localStorage.getItem("SMC_authkey");
    console.log("Token Read = " + readToken);
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        // console.log("AUTH: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          // this.setState({ loginMsg: res.data.message });
          // window.localStorage.setItem("SMC_authkey", res.data.token);
          // window.location.assign('/authenticated/main');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          // this.setState({ loginMsg: res.data.message });
          // window.localStorage.setItem("SMC_authkey", "");
          window.location.assign('/login');
          console.log("ERROR:  Would redirect to login.")
        };
      })
      .catch(err => console.log(err));
  }


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
            <WeekBlock />
          </div>
        }

        {this.state.activeItem === "Dashboard" &&
          <h1>{this.state.activeItem} Dashboard</h1>}

        {this.state.activeItem === "Taskboard" &&
          <h1>{this.state.activeItem} Taskboard</h1>}

        {this.state.activeItem === "Calendar" &&
          <h1>{this.state.activeItem} Calendar</h1>}


      </div>
    );
  };
};


export default MainMenu;      