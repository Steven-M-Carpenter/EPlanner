import React, { Component } from 'react';
import './style.css';
import { Button, Header, Grid, Icon, Form, Image, Input, Label, Segment, Container } from 'semantic-ui-react';


class Signup extends Component {
  state = { isLoggedIn: false };


  render() {

    return (
      <div className="SignupMain">
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
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email Address</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" />
              </Form.Field>
              <Segment basic textAlign="center"><Button type='submit'>Submit</Button></Segment>
              <p className="copyright">Copyright © 2019 - Steven M. Carpenter</p>
            </Form>

          </Grid.Column>
        </Grid >
      </div >
    );
  }
}

export default Signup;
