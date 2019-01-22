import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Button, Form, Input, FormGroup, Container, Row, Col, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    this.createUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
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

      <div className="login_Main">
        <Container>
          <Row className="top_Filler">
          </Row>
        </Container>

        <Container className="welcome_Box">
          <Row>
            {/* <Col className="d-flex justify-content-center py-3" sm="12"> */}
            <Col className="text-center py-3" sm="12">
              <FontAwesomeIcon className="icon_Traits mt-4" icon="cogs" size="6x" />
              <p className="product_Title mb-1">Eventāgeous</p>
              <p className="product_Slogan pb-4">Manage your activities - Deliver for your clients</p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col className="access_LoginCol" sm={{ size: 4, offset: 4 }}>
              <Form>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_fName">First name</Label>
                  <Input type="text" name="fName" id="login_fName" placeholder="Enter your first name" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_lName">Last name</Label>
                  <Input type="text" name="lName" id="login_lName" placeholder="Enter your last name" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_email">Email</Label>
                  <Input type="email" name="email" id="login_email" placeholder="Enter your email address" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_Password">Password</Label>
                  <Input type="password" name="password" id="login_Password" placeholder="Enter a password" onChange={this.handleInputChange} />
                </FormGroup>
                <div className="text-center">
                <Button className="submit_Button mt-3 mb-4" onClick={this.handleFormSubmit} >Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
