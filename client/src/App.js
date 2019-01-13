import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import TestWide from './components/TestWide';
import WeekBlock from './components/WeekBlock';
import SidebarMenu from './components/SidebarMenu';


class App extends Component {
  state = { isLoggedOn: false }


  render() {
    const { activeItem } = this.state

    return (
      <div className="App">

        <Login />

      </div >
    );
  }
}


export default App;