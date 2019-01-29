import React, { Component } from 'react';
import './style.css';

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
import TaskCard from "../TaskCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//******************************************************************************************/
// https://stackoverflow.com/questions/51197205/dynamically-creating-table-rows-with-react
//
//******************************************************************************************/


const TB_Done = (props) => {
  return (

    <span className="taskboard_Done">
        <Row><Col className="text-right pr-0" sm={{ size: 12 }}>
          {/* <Button className="addCard_Button mt-1 mb-0 pt-0 pb-0" color="white" size="sm" data-column="Done" id="Done" onClick={props.handleCardCreate} > */}
            <FontAwesomeIcon className="add_CardIcon mt-1 mb-1 mr-1" icon="plus-circle" size="lg" id="Done" data-column="Done" onClick={props.handleCardCreate}/>
          {/* </Button> */}
        </Col></Row>
        <Row><Col className="col_Lane text-center  mt-0" sm={{ size: 10, offset: 1 }}>Execute</Col></Row>
        <Row><Col sm={{ size: 12 }}>

        {/* {console.log("props: " + JSON.stringify(props.cardsDone))} */}
        {props.cardsDone.map(card => {
          let theKey = (card.id);
          let theId = (card.id);
          let theTitle = (card.title);
          let theDesc = (card.desc);
          let theStart = (card.start);
          let theEnd = (card.end);
          let theLane = (card.lane);
          let theColumn = (card.column);
          let theIsDeleted = (card.isDeleted);
          let theIsClosed = (card.isClosed);
          let theIsArchived = (card.isArchived);
          let theIdCol = theId + "_" + theColumn;
          // console.log("X = " + desc +  " " + "Y = " + start);
          return (
            <TaskCard
              A_key={theKey}
              A_id={theId}
              A_idCol={theIdCol}
              A_title={theTitle}
              A_desc={theDesc}
              A_start={theStart}
              A_end={theEnd}
              A_lane={theLane}
              A_column={theColumn}
              A_isDeleted={theIsDeleted}
              A_isClosed={theIsClosed}
              A_isArchived={theIsArchived}
              handleShiftLeft={props.handleShiftLeft}
              handleShiftRight={props.handleShiftRight}
              handleCardEditRequest={props.handleCardEditRequest}
            />);
        })}
        
        </Col></Row>

    </span >
  );
};


export default TB_Done;
