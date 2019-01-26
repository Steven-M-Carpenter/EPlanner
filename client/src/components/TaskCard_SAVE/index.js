import React from 'react'
import './style.css';
import {  Card, CardHeader, CardText, CardFooter, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function TaskCard(props) {
  return (
    // <div className="task_Card_Div">
    <Card className="card_Main my-4">
      <CardHeader className="card_Header px-2 py-1"> {props.title} </CardHeader>
      <CardText className="card_Content px-1 my-1"> {props.description} </CardText>
      <CardFooter className="card_Footer px-2 pt-1 pb-2">
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
