import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Table, Container, Row, Col, Images, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import TaskCard from "../TaskCard";
import MainMenu from '../MainMenu';
import TB_Groom from '../TB_Groom';
import TB_ToDo from '../TB_ToDo';
import TB_Doing from '../TB_Doing';
import TB_Done from '../TB_Done';

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
    columnHeads: ["Grooming", "To-Do", "Doing", "Done"],
    renderGrooming: 0,
    renderToDo: 0,
    renderDoing: 0,
    renderDone: 0,
    cardsGrooming: [],
    cardsToDo: [],
    cardsDoing: [],
    cardsDone: [],
    steprows: []
  };

  componentDidMount = () => {
    let readToken = window.localStorage.getItem("SMC_authkey");
    // console.log("Token Read = " + readToken);
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          // console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          // window.location.assign('/auth/main');
        } else {
          // console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          window.location.assign('/login');
          // console.log("ERROR:  Would redirect to login.")
        };
      })
      .catch(err => console.log(err));

      this.loadGroomRows();
      this.loadToDoRows();
      this.loadDoingRows();
      this.loadDoneRows();
    };   //This is the end of ComponentDidMount


  loadGroomRows = () => {
    this.setState({cardsGrooming: []});
    API.loadCards("Grooming")
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        // console.log("Grooming BEFORE: " + JSON.stringify(this.state.cardsGrooming));
        res.data.map(column => {
          let v_id = (column._id);
          let v_title = (column.title);
          let v_desc = (column.desc);
          let v_start = (column.start);
          let v_end = (column.end);
          let v_columnAssigned = (column.column);
          let v_isDeleted = (column.isDeleted);
          let v_isClosed = (column.isClosed);
          let v_isArchived = (column.isArchived);

          let cardsGrooming = [...this.state.cardsGrooming];
          cardsGrooming.push({ isDeleted: v_isDeleted, isClosed: v_isClosed, isArchived: v_isArchived, column: v_columnAssigned, end: v_end, start: v_start, desc: v_desc, title: v_title, id: v_id });
          this.setState({ cardsGrooming });
          // console.log("Grooming AFTER: " + JSON.stringify(this.state.cardsGrooming));
        })
      })
      .catch(err => console.log(err));
  };


  loadToDoRows = () => {
    this.setState({cardsToDo: []});
    API.loadCards("To-Do")
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        // console.log("To-Do BEFORE: " + JSON.stringify(this.state.cardsToDo));
        res.data.map(column => {
          let v_id = (column._id);
          let v_title = (column.title);
          let v_desc = (column.desc);
          let v_start = (column.start);
          let v_end = (column.end);
          let v_columnAssigned = (column.column);
          let v_isDeleted = (column.isDeleted);
          let v_isClosed = (column.isClosed);
          let v_isArchived = (column.isArchived);

          let cardsToDo = [...this.state.cardsToDo];
          cardsToDo.push({ isDeleted: v_isDeleted, isClosed: v_isClosed, isArchived: v_isArchived, column: v_columnAssigned, end: v_end, start: v_start, desc: v_desc, title: v_title, id: v_id });
          this.setState({ cardsToDo });
          // console.log("To-Do AFTER: " + JSON.stringify(this.state.cardsToDo));
        })
      })
      .catch(err => console.log(err));
  };


  loadDoingRows = () => {
    this.setState({cardsDoing: []});
    API.loadCards("Doing")
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        // console.log("Doing BEFORE: " + JSON.stringify(this.state.cardsDoing));
        res.data.map(column => {
          let v_id = (column._id);
          let v_title = (column.title);
          let v_desc = (column.desc);
          let v_start = (column.start);
          let v_end = (column.end);
          let v_columnAssigned = (column.column);
          let v_isDeleted = (column.isDeleted);
          let v_isClosed = (column.isClosed);
          let v_isArchived = (column.isArchived);

          let cardsDoing = [...this.state.cardsDoing];
          cardsDoing.push({ isDeleted: v_isDeleted, isClosed: v_isClosed, isArchived: v_isArchived, column: v_columnAssigned, end: v_end, start: v_start, desc: v_desc, title: v_title, id: v_id });
          this.setState({ cardsDoing });
          // console.log("Doing AFTER: " + JSON.stringify(this.state.cardsDoing));
        })
      })
      .catch(err => console.log(err));
  };


  loadDoneRows = () => {
    this.setState({cardsDone: []});
    API.loadCards("Done")
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        // console.log("Done BEFORE: " + JSON.stringify(this.state.cardsDone));
        res.data.map(column => {
          let v_id = (column._id);
          let v_title = (column.title);
          let v_desc = (column.desc);
          let v_start = (column.start);
          let v_end = (column.end);
          let v_columnAssigned = (column.column);
          let v_isDeleted = (column.isDeleted);
          let v_isClosed = (column.isClosed);
          let v_isArchived = (column.isArchived);

          let cardsDone = [...this.state.cardsDone];
          cardsDone.push({ isDeleted: v_isDeleted, isClosed: v_isClosed, isArchived: v_isArchived, column: v_columnAssigned, end: v_end, start: v_start, desc: v_desc, title: v_title, id: v_id });
          this.setState({ cardsDone });
          // console.log("Done AFTER: " + JSON.stringify(this.state.cardsDone));
        })
      })
      .catch(err => console.log(err));
  };


  handleRowChange = idx => event => {
    const value = event.target.value;
    const name = event.target.name;
    // const steprows = [];
    const steprows = [...this.state.steprows];
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
  };


  ccModalToggle = () => {
    this.setState({
      createCardModal: !this.state.createCardModal
    });
  };


  ecModalToggle = () => {
    this.setState({
      editCardModal: !this.state.editCardModal
    });
  };


  reRenderCards = (card) => {
    let theTitle = (card.title);
    let theDesc = (card.desc);
    let theStart = (card.start);
    let theEnd = (card.end);
    let theSteps = (card.steps);
    let theLane = (card.lane);
    let theColumn = (card.column);
    let theIsDeleted = (card.isDeleted);
    let theIsClosed = (card.isClosed);
    let theIsArchived = (card.isArchived);

    console.log("theColumn === " + theColumn);
    if (theColumn === "Grooming") {
      this.loadGroomRows();
      // this.state.cardsGrooming.push({ title: theTitle, desc: theDesc, start: theStart, end: theEnd, steps: theSteps, isDeleted: theIsDeleted, isClosed: theIsClosed, isArchived: theIsArchived });
      // this.setState({ renderGrooming: this.state.renderGrooming + 1 });
    } else if (theColumn === "To-Do") {
      this.loadToDoRows();
      // this.state.cardsToDo.push({ title: theTitle, desc: theDesc, start: theStart, end: theEnd, steps: theSteps, isDeleted: theIsDeleted, isClosed: theIsClosed, isArchived: theIsArchived });
      // this.setState({ renderToDo: this.state.renderToDo + 1 });
    } else if (theColumn === "Doing") {
      this.loadDoingRows();
      // this.state.cardsDoing.push({ title: theTitle, desc: theDesc, start: theStart, end: theEnd, steps: theSteps, isDeleted: theIsDeleted, isClosed: theIsClosed, isArchived: theIsArchived });
      // this.setState({ renderDoing: this.state.renderDoing + 1 });
    } else if (theColumn === "Done") {
      this.loadDoneRows();
      // this.state.cardsDone.push({ title: theTitle, desc: theDesc, start: theStart, end: theEnd, steps: theSteps, isDeleted: theIsDeleted, isClosed: theIsClosed, isArchived: theIsArchived });
      // this.setState({ renderDone: this.state.renderDone + 1 });
    } else {
      console.log("ERROR:  Cannot clear an unknown column.");
    };
  };


  handleCardEditRequest = event => {
    let card_id = event.target.id;
    // let card_id = event.target.getAttribute('card_id');
    console.log(card_id);

    API.getCard(card_id)
      .then(res => {
        console.log(res.data);
        let {
          _id,
          title,
          desc,
          start,
          end,
          steps,
          column,
          isDeleted,
          isClosed,
          isArchived,
        } = res.data[0];

        this.setState({
          id: _id,
          title: title,
          desc: desc,
          start: start,
          end: end,
          // steps: steps,
          column: column,
          isDeleted: isDeleted,
          isClosed: isClosed,
          isArchived: isArchived,
          steprows: []
        });
        // let stepObject0 = steps[0];
        // let stepObject1 = steps[1];
        // console.log("StepOBJ = " + JSON.stringify(stepObject0) + " " + JSON.stringify(stepObject1));
        for (let stepArray of steps) {
          for (let objArray of stepArray) {
            console.log("Obj Array = " + JSON.stringify(objArray));
            this.state.steprows.push(objArray);
          };
        };
        console.log("StepRows" + JSON.stringify(this.state.steprows));
        this.ecModalToggle();
      })
      .catch(err => console.log(err));
  };


  // refreshColumns = (newColumn) => {
  //   if (newColumn === 'Grooming') {
  //     this.setState({ renderGrooming: this.state.cardsGrooming + 1 });
  //   } else if (newColumn === 'To-Do') {
  //     this.setState({ renderToDo: this.state.cardsToDo + 1 });
  //   } else if (newColumn === 'Doing') {
  //     this.setState({ renderDoing: this.state.cardsDoing + 1 });
  //   } else if (newColumn === 'Done') {
  //     this.setState({ renderDone: this.state.cardsDone + 1 });
  //   } else {
  //     console.log("Unknown column");
  //   };
  // };

  handleUpdateCard = () => {
    const newId = this.state.id;
    const newTitle = this.state.title;
    const newDesc = this.state.desc;
    const newStart = new Date(this.state.start).toISOString();
    const newEnd = new Date(this.state.end).toISOString();
    const newColumn = this.state.column;
    const newIsDel = this.state.isDeleted;
    const newIsArch = this.state.isArchived;
    const newIsClose = this.state.isClosed;
    const newSteps = this.state.steprows;
    console.log("Steprows = " + JSON.stringify(this.state.steprows));


    const chgCard = {
      id: newId,
      title: newTitle,
      desc: newDesc,
      start: newStart,
      end: newEnd,
      column: newColumn,
      isDeleted: newIsDel,
      isClosed: newIsClose,
      isArchived: newIsArch,
      steps: [...newSteps]
    };
    // this.reRenderCards(chgCard);
    API.editCard(chgCard)
      .then(res => {
        console.log("API_RES: " + JSON.stringify(res));
        this.ecModalToggle();

        if (newColumn === 'Grooming') {
          this.loadGroomRows();
          // let recordIndex = this.findByAttribute(this.state.cardsGrooming, "id", newId);
          // this.state.cardsGrooming.splice(recordIndex, 1);
          // this.state.cardsGrooming.push(chgCard);
          // this.setState({ renderGrooming: this.state.cardsGrooming + 1 });
        } else if (newColumn === 'To-Do') {
          this.loadToDoRows();
          // let recordIndex = this.findByAttribute(this.state.cardsToDo, "id", newId);
          // this.state.cardsToDo.splice(recordIndex, 1);
          // this.state.cardsToDo.push(chgCard);
          // this.setState({ renderToDo: this.state.cardsToDo + 1 });
        } else if (newColumn === 'Doing') {
          this.loadDoingRows();
          // let recordIndex = this.findByAttribute(this.state.cardsDoing, "id", newId);
          // this.state.cardsDoing.splice(recordIndex, 1);
          // this.state.cardsDoing.push(chgCard);
          // this.setState({ renderDoing: this.state.cardsDoing + 1 });
        } else if (newColumn === 'Done') {
          this.loadDoneRows();
          // let recordIndex = this.findByAttribute(this.state.cardsDone, "id", newId);
          // this.state.cardsDone.splice(recordIndex, 1);
          // this.state.cardsDone.push(chgCard);
          // this.setState({ renderDone: this.state.cardsDone + 1 });
        } else {
          console.log("Unknown column");
        };
      })
      .catch(err => console.log(err));
  };


  handleCalendarAdd = () => {
    if (this.state.title && this.state.start && this.state.end) {
      console.log("We've got an event to post " + this.state.title + " " + this.state.start + " " + this.state.end);
    } else {
      console.log("You mush provide an event title, start and end times to add event.");
    };
    let query = {
      title: this.state.title,
      start: this.state.start,
      end: this.state.end,
    };

    // console.log("query = " + JSON.stringify(query));
    API.createEvent(query)
      .then(res => {
        // console.log("EVENT: res = " + JSON.stringify(res));
        if (res.data.success) {
          // console.log("in success handle");
        } else {
          // console.log("in failure handle");
        };
      })
      .catch(err => console.log(err));
  }


  handleCloseCard = () => {
    console.log("Card to close = " + this.state.id);

    let query = {
      id: this.state.id,
      isClosed: true
    };

    // console.log("query = " + JSON.stringify(query));
    API.closeCard(query)
      .then(res => {
        // console.log("EVENT: res = " + JSON.stringify(res));
        if (res.data.success) {
          // console.log("in success handle");
        } else {
          // console.log("in failure handle");
        };
        this.ecModalToggle();
        this.loadGroomRows();
      })
      .catch(err => console.log(err));

  }
  //*************************************/
  // Date Change
  //*************************************/
  handleStartDateChange = () => {
    console.log("in START date change");
  };

  //*************************************/
  // Date Change
  //*************************************/
  handleEndDateChange = () => {
    console.log("in END date change");
  };



  findByAttribute = (array, attr, value) => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  };


  updateByID = (arrayName, id, property, value) => {
    let item = arrayName.find((record) => {
      return record.id === id;
    });
    if (item && item[property]) {
      item[property] = value;
    };
  };


  handleShiftLeft = event => {
    const itemClicked = event.target.id;
    console.log("itemClicked = " + itemClicked);
    if (itemClicked) {
      let identity = itemClicked.split("_");
      let currentRecord = identity[0];
      let currentColumn = identity[1];
      // console.log("currentRecord = " + currentRecord);
      // console.log("currentColumn = " + currentColumn);
      let currentIndex = this.state.columnHeads.indexOf(currentColumn);
      // console.log("currentIndex = " + currentIndex);
      let nextIndex = currentIndex - 1;
      let nextColumn = this.state.columnHeads[nextIndex];
      // console.log("nextColumn = " + nextColumn);

      let query = {
        id: currentRecord,
        newColumn: nextColumn
      };
      API.moveCard(query)
        .then(res => {
          // console.log(res);
          // console.log("in success handle");
        
      if (currentIndex > 0) {
        if (currentColumn === "Grooming") {
          let recordIndex = this.findByAttribute(this.state.cardsGrooming, "id", currentRecord);
          this.loadGroomRows();
          // this.updateByID(this.state.cardsToDo, currentRecord, 'column', 'To-Do');
          // this.state.cardsToDo.push(this.state.cardsGrooming.splice(recordIndex, 1)[0]);
          // this.setState({ renderGrooming: this.state.renderGrooming + 1 });
          // this.setState({ renderToDo: this.state.renderToDo + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsGrooming);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsToDo);
        } else if (currentColumn === "To-Do") {
          let recordIndex = this.findByAttribute(this.state.cardsToDo, "id", currentRecord);
          this.updateByID(this.state.cardsToDo, currentRecord, 'column', 'Grooming');
          this.state.cardsGrooming.push(this.state.cardsToDo.splice(recordIndex, 1)[0]);
          this.loadToDoRows();
          this.loadGroomRows();
          // this.setState({ renderToDo: this.state.renderToDo + 1 });
          // this.setState({ renderGrooming: this.state.renderGrooming + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsGrooming);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsToDo);
        } else if (currentColumn === "Doing") {
          let recordIndex = this.findByAttribute(this.state.cardsDoing, "id", currentRecord);
          this.updateByID(this.state.cardsDoing, currentRecord, 'column', 'To-Do');
          this.state.cardsToDo.push(this.state.cardsDoing.splice(recordIndex, 1)[0]);
          this.loadDoingRows();
          this.loadToDoRows();
          // this.setState({ renderDoing: this.state.renderDoing + 1 });
          // this.setState({ renderToDo: this.state.renderToDo + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsToDo);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDoing);
        } else if (currentColumn === "Done") {
          let recordIndex = this.findByAttribute(this.state.cardsDone, "id", currentRecord);
          this.updateByID(this.state.cardsDone, currentRecord, 'column', 'Doing');
          this.state.cardsDoing.push(this.state.cardsDone.splice(recordIndex, 1)[0]);
          this.loadDoneRows();
          this.loadDoingRows();
          // this.setState({ renderDoing: this.state.renderDoing + 1 });
          // this.setState({ renderDone: this.state.renderDone + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDoing);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDone);
        } else {
          // console.log("Unable to process an unknown column");
        };
      };
    })
    .catch(err => console.log(err));


    };
  };


  handleShiftRight = event => {
    const itemClicked = event.target.id;
    console.log("itemClicked = " + itemClicked);
    if (itemClicked) {
      let identity = itemClicked.split("_");
      let currentRecord = identity[0];
      let currentColumn = identity[1];
      // console.log("currentRecord = " + currentRecord);
      // console.log("currentColumn = " + currentColumn);
      let currentIndex = this.state.columnHeads.indexOf(currentColumn);
      let nextIndex = currentIndex + 1;  //change to minus for move left
      let nextColumn = this.state.columnHeads[nextIndex];
      // console.log("nextColumn = " + nextColumn);

      
      let query = {
        id: currentRecord,
        newColumn: nextColumn
      };
      // console.log("QUERY = " + query);
      API.moveCard(query)
        .then(res => {

      if (currentIndex < 3) {
        if (currentColumn === "Grooming") {
          let recordIndex = this.findByAttribute(this.state.cardsGrooming, "id", currentRecord);
          this.updateByID(this.state.cardsGrooming, currentRecord, 'column', 'To-Do');
          this.state.cardsToDo.push(this.state.cardsGrooming.splice(recordIndex, 1)[0]);
          this.loadGroomRows();
          this.loadToDoRows();
          // this.setState({ renderGrooming: this.state.renderGrooming + 1 });
          // this.setState({ renderToDo: this.state.renderToDo + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsGrooming);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsToDo);
        } else if (currentColumn === "To-Do") {
          let recordIndex = this.findByAttribute(this.state.cardsToDo, "id", currentRecord);
          this.updateByID(this.state.cardsToDo, currentRecord, 'column', 'Doing');
          this.state.cardsDoing.push(this.state.cardsToDo.splice(recordIndex, 1)[0]);
          this.loadToDoRows();
          this.loadDoingRows();
          // this.setState({ renderToDo: this.state.renderToDo + 1 });
          // this.setState({ renderDoing: this.state.renderDoing + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsToDo);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDoing);
        } else if (currentColumn === "Doing") {
          let recordIndex = this.findByAttribute(this.state.cardsDoing, "id", currentRecord);
          this.updateByID(this.state.cardsDoing, currentRecord, 'column', 'Done');
          this.state.cardsDone.push(this.state.cardsDoing.splice(recordIndex, 1)[0]);
          this.loadDoingRows();
          this.loadDoneRows();
          // this.setState({ renderDoing: this.state.renderDoing + 1 });
          // this.setState({ renderDone: this.state.renderDone + 1 });
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDoing);
          // console.log("recordIndex = " + recordIndex);
          // console.log(this.state.cardsDone);
        } else if (currentColumn === "Done") {
          let recordIndex = this.findByAttribute(this.state.cardsDone, "id", currentRecord);
          // this.updateByID(this.state.cardsToDo, currentRecord, 'column', 'To-Do');
          this.loadDoneRows();
          // this.setState({ renderDone: this.state.renderDone + 1 });
          // console.log("Found record index " + recordIndex + " but there nowhere to move this.");
          // console.log(this.state.cardsDone);
        } else {
          // console.log("Unable to process an unknown column");
        };
      };

        })
        .catch(err => console.log(err));
    };
  };


  handleCardCreate = (event) => {
    const columnName = event.target.id;
    // const columnName = event.target.getAttribute('data-column');
    // const columnName = event.target.attributes.getNamedItem('data-column').value;
    console.log("COLUMN NAME: = " + columnName);
    this.setState({
      tgt_column: columnName,
      createCardModal: !this.state.createCardModal
    });
    console.log("State column = " + this.state.tgt_column);
  };


  createCard = query => {
    // console.log("query = " + JSON.stringify(query));
    API.createCard(query)
      .then(res => {
        console.log("API_RES: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          console.log("QUERY = " + JSON.stringify(query));
          // query.map(card => {
          //   let theKey = (card.id);
          //   let theId = (card.id);
          //   let theTitle = (card.title);
          //   let theDesc = (card.desc);
          //   let theStart = (card.start);
          //   let theEnd = (card.end);
          //   let theSteps = (card.steps);
          //   let theLane = (card.lane);
          //   let theColumn = (card.column);
          //   let theIsDeleted = (card.isDeleted);
          //   let theIsClosed = (card.isClosed);
          //   let theIsArchived = (card.isArchived);
          // });
          // events.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
        } else {
          console.log("in failure handle");
        };
        this.setState({
          createCardModal: !this.state.createCardModal
        });
        this.reRenderCards(query);
        // this.reloadCards(this.state.tgt_column);
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
    if (this.state.title) {
      console.log("StepRows" + JSON.stringify(this.state.steprows));
    };
    this.createCard({
      title: this.state.title,
      desc: this.state.desc,
      start: this.state.start,
      end: this.state.end,
      steps: this.state.steprows,
      lane: "Activities",
      column: this.state.tgt_column,
      isDeleted: false,
      isArchived: false,
      isClosed: false
    });
    this.setState({
      createEventModal: !this.state.createEventModal
    });
  };


  render() {
    return (

      <div className="taskboard_Main">
        <MainMenu />


        {/*************************/
 /* Create Card Modal */
 /**************************/}
        <Modal className="newCard_Modal modal-lg" isOpen={this.state.createCardModal} toggle={this.ccModalToggle}>
          <ModalHeader className="newCard_MHeader">Create Task Card</ModalHeader>
          <ModalBody>
            <Form className="newCard_ModalForm">
              <Container>
                <Row className="pb-5">
                  <Col className="form_Col" sm={{ size: 8 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Title">Card Title</Label>
                      <Input type="text" name="title" id="card_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 12 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Desc">Description</Label>
                      <Input type="textarea" rows="4" name="desc" id="card_Desc" placeholder="Card description" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 5, offset: 1 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Start">Start</Label>
                      <Input type="text" name="start" id="card_Start" placeholder="Add start date/time" onChange={this.handleInputChange} />
                      {/* <DatePicker id="card_Start" name="taskStart" timePrecision="minute" value={this.state.start} onChange={this.handleStartDateChange(newDate)} /> */}
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_End">End</Label>
                      <Input type="text" name="end" id="card_End" placeholder="Add end date/time" onChange={this.handleInputChange} />
                      {/* <DatePicker id="card_End" name="taskEnd" timePrecision="minute" value={this.state.end} onChange={this.handleEndDateChange(newDate)} /> */}
                    </FormGroup>
                  </Col>
                  <Col classNAme="form_Col text-center" sm={{ size: 10, offset: 1 }} >
                    <div className="text-center">
                      <Button className="add_EventBtn text-center mt-3 mb-0" size="sm" onClick={this.handleCalendarAdd} >Add to Calendar</Button>
                    </div>
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

        {/*************************/
        /* Edit Card Modal */
        /**************************/}
        <Modal className="editCard_Modal modal-lg" isOpen={this.state.editCardModal} toggle={this.ecModalToggle}>
          <Row>
            <Col className="editCard_MHeader" sm={{ size: 8 }}>
              <ModalHeader className="editCard_MHeader">Edit Task Card</ModalHeader>
            </Col>
            <Col className="col_Button text-right" sm={{ size: 4 }}>
              <Button outline size="sm" className="close_Card align-right mt-3 mr-3" onClick={this.handleCloseCard} ><FontAwesomeIcon className="door_icon text-center mt-0 mr-1" icon="door-closed" size="sm" />Mark Closed</Button>
            </Col>
          </Row>
          <ModalBody>
            <Form className="editCard_ModalForm">
              <Container>
                <Row className="pb-3">
                  <Col className="form_Col" sm={{ size: 8 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Title">Card Title</Label>
                      <Input type="text" name="title" id="card_Title" placeholder="Add a Title" value={this.state.title} onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 12 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Desc">Description</Label>
                      <Input type="textarea" rows="4" name="desc" id="card_Desc" placeholder="Card description" value={this.state.desc} onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 5, offset: 1 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_Start">Start</Label>
                      <Input type="text" name="start" id="card_Start" placeholder="Add start date/time" value={this.state.start} onChange={this.handleInputChange} />
                      {/* <DatePicker id="card_Start" name="taskStart" timePrecision="minute" value={this.state.start} onChange={this.handleStartDateChange(newDate)} /> */}
                    </FormGroup>
                  </Col>
                  <Col className="form_Col" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-2">
                      <Label className="label_Text mb-0" for="card_End">End</Label>
                      <Input type="text" name="end" id="card_End" placeholder="Add end date/time" value={this.state.end} onChange={this.handleInputChange} />
                      {/* <DatePicker id="card_End" name="taskEnd" timePrecision="minute" value={this.state.end} onChange={this.handleEndDateChange(newDate)} /> */}
                    </FormGroup>
                  </Col>
                  <Col classNAme="form_Col text-center" sm={{ size: 10, offset: 1 }} >
                    <div className="text-center">
                      <Button className="add_EventBtn text-center mt-3 mb-0" size="sm" onClick={this.handleCalendarAdd} >Add to Calendar</Button>
                    </div>
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
            <Button className="process_Button mt-0 mb-0" onClick={this.handleUpdateCard} >Save</Button>
            <Button className="process_Button mt-0 mb-0" onClick={this.ecModalToggle} >Cancel</Button>
          </ModalFooter>
        </Modal>


        {/*************************/
       /* Taskboard Screen */
       /**************************/}
        <Container fluid className="mt-5 mb-3">
          <Row className="mx-2">
            <Col className="lane_Title text-center" sm="1">Tracked Events</Col>
            <Col className="gutter" sm="1" />


            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <TB_Groom
                rerender={this.state.renderGrooming}
                cardsGrooming={this.state.cardsGrooming}
                handleCardCreate={this.handleCardCreate}
                handleShiftLeft={this.handleShiftLeft}
                handleShiftRight={this.handleShiftRight}
                handleCardEditRequest={this.handleCardEditRequest}
              />
            </Col>


            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <TB_ToDo
                rerender={this.state.renderToDo}
                cardsToDo={this.state.cardsToDo}
                handleCardCreate={this.handleCardCreate}
                handleShiftLeft={this.handleShiftLeft}
                handleShiftRight={this.handleShiftRight}
                handleCardEditRequest={this.handleCardEditRequest}
              />
            </Col>


            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <TB_Doing
                rerender={this.state.renderDoing}
                cardsDoing={this.state.cardsDoing}
                handleCardCreate={this.handleCardCreate}
                handleShiftLeft={this.handleShiftLeft}
                handleShiftRight={this.handleShiftRight}
                handleCardEditRequest={this.handleCardEditRequest}
              />
            </Col>


            <Col className="col_Box px-3 pb-4 mx-1" sm="2">
              <TB_Done
                rerender={this.state.renderDone}
                cardsDone={this.state.cardsDone}
                handleCardCreate={this.handleCardCreate}
                handleShiftLeft={this.handleShiftLeft}
                handleShiftRight={this.handleShiftRight}
                handleCardEditRequest={this.handleCardEditRequest}
              />
            </Col>


          </Row>
        </Container>

      </div >
    );
  };
};


export default TaskBoard;
