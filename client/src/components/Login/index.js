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
    this.validateUser({
      email: this.state.email,
      password: this.state.password
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
          window.sessionStorage.setItem("SMC_authkey", res.data.token);
          window.location.assign('/auth/taskboard');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.sessionStorage.setItem("SMC_authkey", "");
          window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
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
            <Col className="text-center py-3" sm="12">
              <FontAwesomeIcon className="icon_Traits mt-4" icon="cogs" size="6x" />
              <p className="product_Title mb-1">Eventāgeous</p>
              <p className="product_Slogan pb-4">Manage your activities - Deliver for your clients</p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col className="access_LoginCol" sm={{ size: 4, offset: 4 }}>
              <Form className="access_Form">
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_email">Email</Label>
                  <Input type="email" name="email" id="login_email" placeholder="Enter your email address" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_Password">Password</Label>
                  <Input type="password" name="password" id="login_Password" placeholder="Enter your password" onChange={this.handleInputChange} />
                </FormGroup>
                <div className="text-center">
                  <Button className="access_Button mt-3 mb-4" onClick={this.handleFormSubmit} >Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
          {/* <p className="copyright mb-1">Copyright © 2019 - Steven M. Carpenter</p> */}
        </Container>
      </div>

    );
  }
}

export default Login;
