import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from "@blueprintjs/datetime";
// import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import TaskCard from "../TaskCard";
// import MainMenu from '../MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//******************************************************************************************/
// https://stackoverflow.com/questions/51197205/dynamically-creating-table-rows-with-react
//
//******************************************************************************************/
class TaskCol1 extends Component {
  state = {
    // activeItem: 'Taskboard',
    // createCardModal: false,
    tgt_column: "",
    columnHeads: [],
    cardData: [],
    steprows: [{}]
  };

  // componentDidMount = () => {
    // let readToken = window.localStorage.getItem("SMC_authkey");
    // console.log("Token Read = " + readToken);
    // let query = {
    //   token: readToken
    // };
    // API.checkAuth(query)
    //   .then(res => {
    //     if (res.data.success) {
    //       console.log("in success handle");
    //       this.setState({ isLoggedIn: true, });
    //       // window.location.assign('/auth/main');
    //     } else {
    //       console.log("in failure handle");
    //       this.setState({ isLoggedIn: false });
    //       window.location.assign('/login');
    //       console.log("ERROR:  Would redirect to login.")
    //     };
    //   })
    //   .catch(err => console.log(err));


  //     API.getCols()
  //     .then(res => {
  //       console.log("RES: " + JSON.stringify(res));
  //       console.log("COLUMNS BEFORE: " + JSON.stringify(this.state.columnHeads));

  //       res.data.map(column => {
  //         let v_isDeleted = (column.isDeleted);
  //         let v_columnName = (column.columnName);
  //         let v_dispOrder = (column.dispOrder);
  //         let v_id = (column._id);

  //         let columnHeads = [...this.state.columnHeads];
  //         columnHeads.push({ isDeleted: v_isDeleted, columnName: v_columnName, dispOrder: v_dispOrder, id: v_id });
  //         this.setState({ columnHeads });

  //         // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });

  //         // this.setState({ events: res.data });
  //         console.log("COLUMNS AFTER: " + JSON.stringify(this.state.columnHeads));
  //       })
  //     })
  //     .catch(err => console.log(err));
  // };

  

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

  // reloadCards = () => {
  //   this.setState({ cards: [] });
  //   API.loadCards()
  //     .then(res => {
  //       // console.log("RES: " + JSON.stringify(res));
  //       console.log("CARDS BEFORE: " + JSON.stringify(this.state.cards));
  //       // 
  //       // res.data.map(card => {
  //       //   let v_isDeleted = (event.isDeleted);
  //       //   let v_title = (event.title);
  //       //   let v_start = new Date(event.start);
  //       //   let v_end = new Date(event.end);
  //       //   let v_id = (event._id);

  //       // let cards = [...this.state.cards];
  //       // cards.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
  //       // this.setState({ cards });

  //       // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });

  //       // this.setState({ events: res.data });
  //       console.log("CARD AFTER: " + JSON.stringify(this.state.cards));
  //     })
  //     // })
  //     .catch(err => console.log(err));
  // };


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
        <div className="taskColumn_Main">
          <Col className="col_Box px-3 pb-4 mx-1" sm="2">
            <Row><Col className="text-right pr-0" sm={{ size: 12 }}>
              <Button className="addCard_Button mt-1 mb-0 pt-0 pb-0" color="white" size="sm" data-column="Resourced" onClick={this.handleCardCreate} >
                <FontAwesomeIcon className="add_CardIcon mt-1 mb-1" icon="plus-circle" size="lg" data-column="Resourced" />
              </Button>
            </Col></Row>
            <Row><Col className="col_Lane text-center mt-0" sm={{ size: 10, offset: 1 }}>{this.state.columnName}</Col></Row>
            {this.state.cardData.map(card => {
            let id = (card._id);
            let title = (card.title);
            let column = (card.column);
            let columnName = (this.state.columnName);
            if (column === columnName) {
            return (
              // <div className="border border-dark rounded px-2 py-2">
              <div>
                <ResultsItem
                  key={id}
                  title={title}
                  authors={authors}
                  description={description}
                  image={image}
                  link={link}
                />
              </div>
            );
            };            
          })}
          </Col>
        </div >
      );
    };
  };    
};


export default TaskCol1;
