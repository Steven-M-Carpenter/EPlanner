import React, { Component } from 'react';
import API from "../../utils/API";
import { Button, Header, Grid, Icon, Form, Segment, } from 'semantic-ui-react';
import './style.css';


class Login extends Component {
  state = {
    isLoggedIn: false,
  };


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
    this.validateUser({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
    console.log("state = " + JSON.stringify(this.state));
  };


  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", res.data.token);
          window.location.assign('/authenticated/main');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", "");
          window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

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
              <Segment className="inputWrapper">
                <Form.Field>
                  <label>Email Address</label>
                  <input
                    name="loginEmail"
                    autoComplete="username"
                    onChange={this.handleInputChange}
                    placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    name="loginPassword"
                    autoComplete="current-password"
                    onChange={this.handleInputChange}
                    placeholder='Password'
                    type="password" />
                </Form.Field>
              </Segment>
              {/* <Segment textAlign="right">Sign up now</Segment> */}
              <a href="/signup" className="signupText">Sign up now</a>
              <Segment basic textAlign="center" className="buttonBox"><Button type='submit' onClick={this.handleFormSubmit} >Login</Button></Segment>
              <p className="copyright">Copyright © 2019 - Steven M. Carpenter</p>
            </Form>

          </Grid.Column>
        </Grid >
      </div >
    );
  }
}

export default Login;
