import React, { Component } from 'react';
// import API from "../../utils/API";
import './style.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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


  // function PubLand(props) {
  render() {
    return (

      <div>
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
              <p className="product_Slogan pb-3">Manage your activities - Deliver for your clients</p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col className="access_LoginCol text-center" sm={{ size: 4, offset: 2 }}>
              <FontAwesomeIcon className="icon_Traits mt-5" icon="user" size="5x" />
              <p className="account_Labels pt-4 pb-3">Access Your Account</p>
              <Button className="access_Button mb-4" onClick={this.handleLogin}>Login</Button>
            </Col>
            <Col className="access_LoginCol text-center" sm="4">
              <FontAwesomeIcon className="icon_Traits mt-5" icon="plus-circle" size="5x" />
              <p className="account_Labels pt-4 pb-3">Create An Account</p>
              <Button className="access_Button mb-4" onClick={this.handleSignup} >Sign-up</Button>
            </Col>
          </Row>
        </Container>
      </div >
    );
  };
};

export default PubLand;