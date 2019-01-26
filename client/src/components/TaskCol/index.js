import React, { Component } from 'react';
import './style.css';
// import API from "../../utils/API";

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { DatePicker } from "@blueprintjs/datetime";
// import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import TaskCard from "../TaskCard";
// import MainMenu from '../MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function TaskCol(props) {
  return (
    <div className="taskColumn_Main">
      <Col className="col_Box px-3 pb-4 mx-1" sm="2">
        <Row><Col className="text-right pr-0" sm={{ size: 12 }}>
          <Button className="addCard_Button mt-1 mb-0 pt-0 pb-0" color="white" size="sm" data-column="Resourced" onClick={props.handleCardCreate} >
            <FontAwesomeIcon className="add_CardIcon mt-1 mb-1" icon="plus-circle" size="lg" data-column="Resourced" />
          </Button>
        </Col></Row>
        <Row><Col className="col_Lane text-center mt-0" sm={{ size: 10, offset: 1 }}>{props.columnName}</Col></Row>
        {/* <Row><Col sm={{ size: 12 }}> */}
        {/* </Col></Row> */}
      </Col>
    </div >
  );
};


export default TaskCol;
