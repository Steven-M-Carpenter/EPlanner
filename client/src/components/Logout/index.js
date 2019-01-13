import React, { Component } from 'react';
import './style.css';
import { Button, Header, Grid, Icon, Form, Image, Input, Label, Segment, Container } from 'semantic-ui-react';


class Login extends Component {
  state = { isLoggedIn: false };


  render() {

    return (
      <div className="LoginMain">
        <Grid centered>
          <Grid.Column width={6}>

            <Form className="formBox">
              <Segment basic textAlign="center" className="logoSegment" >
                <Header as='h2' icon>
                  <Icon name='settings' />
                  Event Planner
                  <Header.Subheader>Manage your activities and deliver for clients.</Header.Subheader>
                </Header>
              </Segment>
              <Segment textAlign="center" className="messageWrapper">
                <Header as='h1' color='red'>Logout Complete</Header>
              </Segment>
              <p className="copyright">Copyright © 2019 - Steven M. Carpenter</p>
            </Form>

          </Grid.Column>
        </Grid >
      </div >
    );
  }
}

export default Login;
