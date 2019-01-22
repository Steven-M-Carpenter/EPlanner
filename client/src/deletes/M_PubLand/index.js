import React, { Component } from 'react';
import API from "../../utils/API";
// import { Button, Divider, Header, Grid, Icon, Segment, } from 'semantic-ui-react';
import './style.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Extension } from '@material-ui/icons';

  

//    {/* <Grid columns={2} stackable textAlign='center'> */ }

class PubLand extends Component {

  handleLogin = event => {
    event.preventDefault();
    console.log("Handle Login");
    window.location.assign('/login');
  };

  handleSignup = event => {
    event.preventDefault();
    console.log("Handle Signup");
    window.location.assign('/signup');
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Extension className="application_Icon"/>
              <h1 className="application_Name">Eventageous</h1>
              <h3 className="application_Slogan">Manage your activities and deliver for clients.</h3>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default withStyles(styles) (PubLand);