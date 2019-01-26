import React from 'react'
import './style.css';
import {  Card, CardHeader, CardText, CardFooter, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

console.log("Launched task card")

function TaskCard(props) {
  console.log("key = " + props.A_key + " =====> " + props.key);
  console.log("title = " + props.A_title + " =====> " + props.key);
  console.log("desc = " + props.A_desc + " =====> " + props.key);
  console.log("start = " + props.A_start + " =====> " + props.key);
  console.log("end = " + props.A_end + " =====> " + props.key);
  return (
    // <div className="task_Card_Div">
    <Card className="card_Main my-4">
      <CardHeader className="card_Header px-2 py-1"> {props.A_title} </CardHeader>
      <CardHeader className="card_Date text-left px-1 py-1"> {props.A_start} -- </CardHeader>
      <CardText className="card_Content px-1 my-1"> {props.A_desc}</CardText>
      <CardFooter className="card_Date text-right py-1 px-1"> -- {props.A_end} </CardFooter>
      <CardFooter className="card_Date px-2 pt-1 pb-2">
        <Container>
          <Row>
            <Col className="arrow_block pl-0 pt-1" sm="2"><FontAwesomeIcon className="arrow_Icons" icon="arrow-circle-left" size="lg" /></Col>
            <Col className="assigned_inits move_Left text-center" sm="8"><FontAwesomeIcon className="user_Icons mr-1" icon="user" size="sm" />{props.user}</Col>
            <Col className="arrow_block pr-0 pt-1" sm="2"><FontAwesomeIcon className="arrow_Icons" icon="arrow-circle-right" size="lg" /></Col>
          </Row>
        </Container>
      </CardFooter>
    </Card>
  )
};

export default TaskCard;
