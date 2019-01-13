import React, { Component } from 'react';
import API from "../../utils/API";
import { Button, Header, Grid, Icon, Form, Image, Input, Label, Segment, Container } from 'semantic-ui-react';


class Login extends Component {
  state = { isLoggedIn: false };

  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.loginEmail, 
      password: this.state.loginPassword
    });
  };


  // handleLoginEvent = event => {
  //   event.preventDefault();
  //   if (currentBook.id === bookDataId) {
  //     API.saveBook({
  //       key: saveKey,
  //       title: saveTitle,
  //       authors: saveAuthors,
  //       description: saveDescription,
  //       image: saveImage,
  //       link: saveLink
  //     })
  // };


  validateUser = query => {
    API.getUser(query)
      .then(res => {
        this.setState({ isLoggedIn: true })
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
                  id="loginEmail" 
                  onChange={this.handleInputChange} 
                  placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input 
                  id="loginPassword" 
                  onChange={this.handleInputChange} 
                  placeholder='Password' 
                  type="password" />
              </Form.Field>
              </Segment>
              {/* <Segment textAlign="right">Sign up now</Segment> */}
              <p className="signupText">Sign up now</p>
              <Segment basic textAlign="center" className="buttonBox" onClick={this.handleFormSubmit} ><Button type='submit'>Login</Button></Segment>
              <p className="copyright">Copyright © 2019 - Steven M. Carpenter</p>
            </Form>

          </Grid.Column>
        </Grid >
      </div >
    );
  }
}

export default Login;
