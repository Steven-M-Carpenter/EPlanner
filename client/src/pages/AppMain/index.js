import React, { Component } from 'react';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './style.css';


import MainMenu from '../../components/MainMenu';
// import NoMatch from "./pages/NoMatch";
import WeekBlock from '../../components/WeekBlock';
// import AppMain from './pages/AppMain';
// import Logout from './components/Logout';
// import TestWide from './components/TestWide';
// import WeekBlock from '../components/WeekBlock';
import SidebarMenu from '../../components/Sidebar';

// console.log("Set State = " + JSON.stringify(this.state));


class AppMain extends Component {
  state = {
    isLoggedIn: false,
    activeItem: 'Dashboard',
    sidebarVisible: true,
  };

  handleSBToggle = () => {
    if (this.state.sidebarVisible) {
      this.setState({ sidebarVisible: false })
    } else {
      this.setState({ sidebarVisible: true })
    };
  };


  handleSBShowClick = () => this.setState({ sidebarVisible: true })
  handleSBHide = () => this.setState({ sidebarVisible: false })

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
        .catch (err => console.log(err));
  }


  handleMenuClick = () => {

  };



  render() {

    return (
      <div>
        <MainMenu />

        {/* <WeekBlock /> */}

      </div>
    );
  };
};


export default AppMain;
