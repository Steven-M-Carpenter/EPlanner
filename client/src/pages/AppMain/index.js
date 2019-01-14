import React, { Component } from 'react';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './style.css';
// import NoMatch from "./pages/NoMatch";
import WeekBlock from '../../components/WeekBlock';
// import AppMain from './pages/AppMain';
// import Logout from './components/Logout';
// import TestWide from './components/TestWide';
// import WeekBlock from '../components/WeekBlock';
// import SidebarMenu from './components/SidebarMenu';

// console.log("Set State = " + JSON.stringify(this.state));


class AppMain extends Component {
  state = {
    isLoggedIn: false,
  };

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

  handleLoginStatus = (passedStatus, passedEmail) => {
    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedEmail);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginEmail: passedEmail });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginEmail: passedEmail });
    };
    console.log("APP: state = " + JSON.stringify(this.state));
  };



  render() {
    // return (
    //   <div className="App">
    //     <Login
    //       handleLoginStatus={this.handleLoginStatus}
    //     />
    //     <AppMain
    //       isLoggedIn={this.state.isLoggedIn}
    //       loginEmail={this.state.loginEmail}
    //     />
    //   </div >
    // );


    return (
      <div>
        <WeekBlock />
        <h1>Logged In?  {this.state.isLoggedIn}</h1>
        <h1>Email?  {this.state.loginEmail}</h1>

        <h1>Logged In?  {this.props.isLoggedIn}</h1>
        <h1>Email?  {this.props.loginEmail}</h1>
      </div>
    );
  };
};


export default AppMain;
