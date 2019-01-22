import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";
import { Button, Header, Grid, Icon, Form, Image, Input, Label, Segment, Container } from 'semantic-ui-react';


class Signup extends Component {


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
  };

  createUser = query => {
    console.log("query = " + JSON.stringify(query));
    API.createUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          window.location.assign('/login');
          // this.setState({ loginStatus: true, });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: true, });
          // this.setState({ loginMsg: res.data.message });
        } else {
          console.log("in failure handle");
          window.location.assign('/signup');
          // this.setState({ loginStatus: false });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: false });
          // this.setState({ loginMsg: res.data.message });
        }
        // console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };


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
                <input name='firstName' onChange={this.handleInputChange} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input name='lastName' onChange={this.handleInputChange} placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email Address</label>
                <input name='email' onChange={this.handleInputChange} placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name='password' onChange={this.handleInputChange} placeholder='Password' type="password" />
              </Form.Field>
              <Segment basic textAlign="center"><Button type='submit' onClick={this.handleFormSubmit} >Submit</Button></Segment>
              <p className="copyright">Copyright © 2019 - Steven M. Carpenter</p>
            </Form>

          </Grid.Column>
        </Grid >
      </div >
    );
  }
}

export default Signup;
