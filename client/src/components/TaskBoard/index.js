import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskCard from "../TaskCard";
import MainMenu from '../MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//******************************************************************************************/
// https://stackoverflow.com/questions/51197205/dynamically-creating-table-rows-with-react
//
//******************************************************************************************/
class TaskBoard extends Component {
  state = {
    activeItem: 'Taskboard',
    createCardModal: false,
    tgt_column: "",
    columnHeads: [],
    cardData: [],
    steprows: [{}]
  };

  componentDidMount = () => {
    let readToken = window.localStorage.getItem("SMC_authkey");
    console.log("Token Read = " + readToken);
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          // window.location.assign('/auth/main');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          window.location.assign('/login');
          console.log("ERROR:  Would redirect to login.")
        };
      })
      .catch(err => console.log(err));
  };


  handleRowChange = idx => event => {
    const value = event.target.value;
    const name = event.target.name;
    // const steprows = [];
    const steprows = [...this.state.rows];
    steprows[idx] = {
      [name]: value
    };
    this.setState({
      steprows
    });
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    // console.log("name = " + name);
    // console.log("value = " + value);
    // console.log("id = " + id);
  };


  ccModalToggle = () => {
    this.setState({
      createCardModal: !this.state.createCardModal
    });
  };


  reloadCards = () => {
    this.setState({ cards: [] });
    API.loadCards()
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        console.log("CARDS BEFORE: " + JSON.stringify(this.state.cards));
        // 
        // res.data.map(card => {
        //   let v_isDeleted = (event.isDeleted);
        //   let v_title = (event.title);
        //   let v_start = new Date(event.start);
        //   let v_end = new Date(event.end);
        //   let v_id = (event._id);

        // let cards = [...this.state.cards];
        // cards.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
        // this.setState({ cards });

        // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });

        // this.setState({ events: res.data });
        console.log("CARD AFTER: " + JSON.stringify(this.state.cards));
      })
      // })
      .catch(err => console.log(err));
  };

  handleScrollLeft = () => {
    console.log("Scroll Left");
  };


  handleCardCreate = (event) => {
    // const columnName = event.target.getAttribute('data-column');
    const columnName = event.target.attributes.getNamedItem('data-column').value;
    console.log("COLUMN NAME: = " + columnName);
    this.setState({
      tgt_column: columnName,
      createCardModal: !this.state.createCardModal
    });
  };


  createCard = query => {
    // console.log("query = " + JSON.stringify(query));
    API.createCard(query)
      .then(res => {
        console.log("EVENT: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
        } else {
          console.log("in failure handle");
        };
        // this.reloadCard();
      })
      .catch(err => console.log(err));
  };


  handleAddRow = () => {
    const item = { step: "" };
    this.setState({
      steprows: [...this.state.steprows, item]
    });

    // let rc = this.state.steprows.length;
    // let steprows = [...this.state.steprows];
    // steprows.push(`row${rc}`);
    // this.setState({ steprows });
  };


  handleRemoveRow = (idx) => () => {
    const steprows = [...this.state.steprows]
    steprows.splice(idx, 1)
    this.setState({ steprows })
  };

  handleNewCard = () => {
    console.log("Creating new card");
    if (this.state.taskTitle) {
      console.log("We've got an event to post " + this.state.title + " " + this.state.start + " " + this.state.end);
    };
    this.createCard({
      title: this.state.taskTitle,
      desc: this.state.taskDesc,
      start: this.state.taskStart,
      end: this.state.taskEnd,
      steps: this.state.steprows,
      lane: "Activities",
      column: this.state.tgt_column,
    });
    this.setState({
      createEventModal: !this.state.createEventModal
    });
  }


  render() {
    return (

      <div className="taskboard_Main">
        <MainMenu />


        <Modal className="newCard_Modal modal-lg" isOpen={this.state.createCardModal} toggle={this.ccModalToggle}>
          <ModalHeader className="newCard_MHeader">Create Task Card</ModalHeader>
          <ModalBody>
            <Form className="newCard_ModalForm">
              <Container>
                <Row className="pb-5">
                  <Col className="form_Col" sm={{ size: 8 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Title">Card Title</Label>
                      <Input type="text" name="taskTitle" id="card_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 12 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Desc">Description</Label>
                      <Input type="textarea" rows="4" name="taskDesc" id="card_Desc" placeholder="Card description" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Start">Start</Label>
                      <Input type="text" name="taskStart" id="card_Start" placeholder="Add start date/time" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_End">End</Label>
                      <Input type="text" name="taskEnd" id="card_End" placeholder="Add end date/time" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Table>
                  <thead>
                    <tr>
                      <th className="table_Header">#</th>
                      <th className="table_Header pl-3">Step</th>
                      <th className="table_Header"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.steprows.map((row, idx) => (
                      <tr id="addr0" key={idx}>
                        <td id="table_Index">{idx}</td>
                        <td id="table_Input">
                          <Input
                            type="text"
                            name="step"
                            value={this.state.steprows[idx].step}
                            onChange={this.handleRowChange(idx)}
                            className="step_Input"
                          />
                        </td>
                        <td className="text-right">
                          <Button
                            className="delete_Button text-center mt-0 mb-0 pl-2 pr-1"
                            onClick={this.handleRemoveRow(idx)} >
                            <FontAwesomeIcon className="delete_icon text-center mt-0 mr-1" icon="times-circle" size="lg" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button className="add_Button mt-0 mb-2" size="sm" onClick={this.handleAddRow} >Add Row</Button>
                </div>
              </Container>
            </Form>
          </ModalBody>
          <ModalFooter className="text-center">
            <Button className="process_Button mt-0 mb-0" onClick={this.handleNewCard} >Save</Button>
            <Button className="process_Button mt-0 mb-0" onClick={this.ccModalToggle} >Cancel</Button>
          </ModalFooter>
        </Modal>


        <Container fluid className="mt-5">
          <Row className="mx-2">
            <Col className="lane_Title text-right" sm="1">Activities</Col>

            <Col className="end_Box px-3 pb-4 mx-1 text-center align-middle" sm="1" >
              <FontAwesomeIcon className="left-pan sticky-top mt-0 mr-1" icon="chevron-left" size="2x" onClick={this.handleScrollLeft} />
            </Col>
            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <Row><Col className="text-right" sm={{ size: 12 }}>
                <FontAwesomeIcon className="add_CardIcon mt-2 mr-1" icon="plus-circle" size="2x" data-column="Resourced" onClick={this.handleCardCreate} />
              </Col></Row>
              <Row><Col className="col_Lane text-center mt-0" sm={{ size: 10, offset: 1 }}>Resourced</Col></Row>
              <Row><Col sm={{ size: 12 }}>
                <TaskCard
                  title='Card Title1'
                  description='This is a sample description included for demonstration purposes.  It may be longer on some cards so this is intended to show that size difference.  How does this look with all of this text.'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title2'
                  description='This is a sample description included for demonstration purposes'
                  user='AC'>
                </TaskCard>
                <TaskCard
                  title='Card Title3'
                  description='This is a sample description included for demonstration purposes'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title4'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
                <TaskCard
                  title='Card Title1'
                  description='This is a sample description included for demonstration purposes.  It may be longer on some cards so this is intended to show that size difference.  How does this look with all of this text.'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title2'
                  description='This is a sample description included for demonstration purposes'
                  user='AC'>
                </TaskCard>
                <TaskCard
                  title='Card Title3'
                  description='This is a sample description included for demonstration purposes'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title4'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
              </Col></Row>
            </Col>


            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <Row><Col className="text-right" sm={{ size: 12 }}>
                <FontAwesomeIcon className="add_CardIcon mt-2 mr-1" icon="plus-circle" size="2x" data-column="Funded" onClick={this.handleCardCreate} />
              </Col></Row>
              <Row><Col className="col_Lane text-center mt-0" sm={{ size: 10, offset: 1 }}>Funded</Col></Row>
              <Row><Col sm={{ size: 12 }}>
                <TaskCard
                  title='Card Title5'
                  description='This is a sample description included for demonstration purposes'
                  user='AC'>
                </TaskCard>
                <TaskCard
                  title='Card Title6'
                  description='This is a sample description included for demonstration purposes'
                  user='AC'>
                </TaskCard>
              </Col></Row>
            </Col>

            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <Row><Col className="text-right" sm={{ size: 12 }}>
                <FontAwesomeIcon className="add_CardIcon mt-2 mr-1" icon="plus-circle" size="2x" data-column="Executing" onClick={this.handleCardCreate} />
              </Col></Row>
              <Row><Col className="col_Lane text-center  mt-0" sm={{ size: 10, offset: 1 }}>Executing</Col></Row>
              <Row><Col sm={{ size: 12 }}>
                <TaskCard
                  title='Card Title7'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
                <TaskCard
                  title='Card Title8'
                  description='This is a sample description included for demonstration purposes'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title9'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
              </Col></Row>
            </Col>

            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <Row><Col className="text-right" sm={{ size: 12 }}>
                <FontAwesomeIcon className="add_CardIcon mt-2 mr-1" icon="plus-circle" size="2x" data-column="Closed" onClick={this.handleCardCreate} />
              </Col></Row>
              <Row><Col className="col_Lane text-center  mt-0" sm={{ size: 10, offset: 1 }}>Closed</Col></Row>
              <Row><Col sm={{ size: 12 }}>
                <TaskCard
                  title='Card Title7'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
                <TaskCard
                  title='Card Title8'
                  description='This is a sample description included for demonstration purposes'
                  user='SC'>
                </TaskCard>
                <TaskCard
                  title='Card Title9'
                  description='This is a sample description included for demonstration purposes'
                  user='DC'>
                </TaskCard>
              </Col></Row>
            </Col>
            <Col className="end_Box px-3 pb-4 mx-1 text-center align-middle" sm="1" ><FontAwesomeIcon className="right-pan sticky-top mt-0 mr-1" icon="chevron-right" size="2x" /></Col>

          </Row>
        </Container>

      </div >
    );
  };
};


export default TaskBoard;
