import React, { Component } from 'react';
import API from "../../utils/API";
import { Button, Divider, Header, Grid, Icon, Segment, } from 'semantic-ui-react';
import './style.css';



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
      <Grid textAlign='center'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment basic className="placeholderBox">
              <Header as='h2' icon>
                <Icon name='settings' />
                Event Planner
                <Header.Subheader>Manage your activities and deliver for clients.</Header.Subheader>
              </Header>
              <Segment placeholder className="placeholderBox2">
                <Grid textAlign='center' >
                  <Divider vertical>Or</Divider>
                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={8}>
                      <Header icon>
                        <Icon name='search' />
                        Access Your Account
                  </Header>
                      <Button
                        primary
                        content="Login"
                        onClick={this.handleLogin}
                      />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Header icon>
                        <Icon name='world' />
                        Create An Account
                    </Header>
                      <Button
                        primary
                        content="Sign-up"
                        onClick={this.handleSignup}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid >
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row >
      </Grid >
    );
  };
};

  export default PubLand;
