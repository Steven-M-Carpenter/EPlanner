import React, { Component } from 'react';
import './style.css';

import { Button, ButtonDropdown, Card, CardHeader, CardText, CardFooter, Collapse, Dropdowns, Forms, Container, Row, Col, Images, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Tooltips, Well } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function CalWHeader(props) {
  return (

    <div className="calendar_Main">
      {/* <Container className="fluid mt-5"> */}
        <Row className="mx-2">
          <Col className="day_Label text-center border ml-0 px-1">Sunday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Monday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Tuesday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Wednesday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Thursday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Friday</Col>
          <Col className="day_Label text-center border ml-0 px-1">Saturday</Col>
        </Row>
      {/* </Container> */}
    </div >
  );
};


export default CalWHeader;
