import React from 'react'
import './style.css';
import {  Card, CardHeader, CardText, CardFooter, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function TaskCard(props) {
  return (
    // <div className="task_Card_Div">
    <Card className="card_Main my-4">
      <CardHeader className="card_Header px-2" tag="h4"> {props.title} </CardHeader>
      <CardText className="card_Content px-1"> {props.description} </CardText>
      <CardFooter className="card_Footer">
        <Container>
          <Row>
            <Col className=" pl-0" sm="2"><FontAwesomeIcon className="arrow_Icons" icon="arrow-circle-left" size="lg" /></Col>
            <Col className="move_Left text-center" sm="8"><FontAwesomeIcon className="user_Icons mr-1" icon="user" size="lg" />{props.user}</Col>
            <Col className=" pr-0" sm="2"><FontAwesomeIcon className="arrow_Icons" icon="arrow-circle-right" size="lg" /></Col>
          </Row>
        </Container>
      </CardFooter>
    </Card>
  )
};

export default TaskCard;
