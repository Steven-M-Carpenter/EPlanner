import React, { Component } from 'react';
import './style.css';

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
import TaskCard from "../TaskCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//******************************************************************************************/
// https://stackoverflow.com/questions/51197205/dynamically-creating-table-rows-with-react
//
//******************************************************************************************/

const TB_Doing = ({ children }) => {
  return (

    <div className="taskboard_Doing">

      <Col className="col_Box px-3 pb-4 mx-1" sm="2">
        <Row><Col className="text-right pr-0" sm={{ size: 12 }}>
          {/* <Button className="addCard_Button mt-1 mb-0 pt-0 pb-0" color="white" size="sm" data-column="Doing" onClick={this.handleCardCreate} >
            <FontAwesomeIcon className="add_CardIcon mt-1 mb-1" icon="plus-circle" size="lg" data-column="Doing" />
          </Button> */}
        </Col></Row>
        <Row><Col className="col_Lane text-center  mt-0" sm={{ size: 10, offset: 1 }}>Doing</Col></Row>
        <Row><Col sm={{ size: 12 }}>
          {children}
        </Col></Row>
      </Col>

    </div >
  );
};


export default TB_Doing;
