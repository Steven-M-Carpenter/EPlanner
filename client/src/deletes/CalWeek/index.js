import React, { Component } from 'react';
import './style.css';

import { Button, ButtonDropdown, Card, CardHeader, CardText, CardFooter, Collapse, Dropdowns, Forms, Container, Row, Col, Images, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Tooltips, Well } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function CalWeek(props) {
  return (

    <div className="calendar_Main">
      {/* <Container className="fluid mt-5"> */}
        <Row className="mx-2">
          {/* <Col className="day_Head border mx-2" sm="1">Head</Col> */}
          <Col className="day_Block border ml-0 px-1">{props.SuDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.MoDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.TuDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.WeDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.ThDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.FrDt}</Col>
          <Col className="day_Block border ml-0 px-1">{props.SaDt}</Col>
          {/* <Col className="day_Head border ml-0 px-1" sm="3">Tail</Col> */}
        </Row>
      {/* </Container> */}
    </div >
  );
};


export default CalWeek;
