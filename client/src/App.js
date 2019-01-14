import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
//import logo from './logo.svg';
import './App.css';
//import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
import Login from './components/Login';
import AppMain from './pages/AppMain';
import NoMatch from "./pages/NoMatch";
import PubLand from './components/PubLand';
import Signup from './components/Signup';


// import AppMain from './pages/AppMain';
// import Logout from './components/Logout';
// import TestWide from './components/TestWide';
// import WeekBlock from './components/WeekBlock';
// import SidebarMenu from './components/SidebarMenu';




class App extends Component {
  state = {
    isLoggedIn: false,
    loginEmail: ""
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


  reportLogin = () => {
    let note = this.state.isLoggedIn;
    return note
  };

  reportEmail = () => {
    let email = this.state.loginEmail;
    return email;
  };


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={PubLand} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/authenticated/main" />
              ) : (
                  <Login handleLoginStatus={this.handleLoginStatus} />
              ))} />

            <Route exact path="/authenticated/main" component={AppMain} />


              {/* <AppMain
               loginState={this.reportLogin()}
               userEmail={this.reportEmail()}
               />
            )} /> */}


            {/* <PubLand /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
};


export default App;