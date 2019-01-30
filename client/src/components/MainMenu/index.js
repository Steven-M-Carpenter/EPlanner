import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MainMenu extends Component {
  state = {
    activeItem: 'Dashboard',
    isOpen: true,
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


  // handleMenuClick = (event, { name }) => {
  //   this.setState({ activeItem: name })
  // };

  render() {
    return (
      <div>
        <Navbar className="navbar_Main" expand="md">
          <NavbarBrand className="app_Title mr-5" href="/">Eventāgeous</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink className="nav_Option mx-5" href="/auth/dashboard" >Dashboard</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="nav_Option mx-5"  href="/auth/taskboard" >Task Board</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav_Option mx-5"  href="/auth/calendar" >Calendar</NavLink>
              </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav_Option ml-auto" href="/logout">Logout</NavLink>
              </NavItem>
              </Nav>
          {/* </Collapse> */}
        </Navbar>
      {/* </div>
    );
  }; */}


        {/* {
  this.state.activeItem === "Home" &&
  <div>
    <h1>{this.state.activeItem} Home</h1>
  </div>
}

{
  this.state.activeItem === "Dashboard" &&
  <div>
    <h1>{this.state.activeItem} Dashboard</h1>
  </div>
}

{
  this.state.activeItem === "Taskboard" &&
  <div>
    <h1>{this.state.activeItem} Taskboard</h1>
    <WorkBlock />
  </div>
}

{
  this.state.activeItem === "Calendar" &&
  <div>
    <h1>{this.state.activeItem} Calendar</h1>
    <WeekBlock />
  </div>
}

      </div > */}
      </div>
    );
  };
};


export default MainMenu;      