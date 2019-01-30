import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { DateTimeInput, TimePicker } from '@opuscapita/react-datetime';
import { DatePicker } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
// import DateTimePicker from 'react-date-and-time-picker';
// import 'react-date-and-time-picker/dist/main.css';
// import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
// import events from './events'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Container, Row, Col, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../MainMenu';


const localizer = BigCalendar.momentLocalizer(moment);
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);


class Calendar extends Component {
  state = {
    activeItem: 'Calendar',
    events: [],
    createEventModal: false,
    editEventModal: false,
    popoverOpen: false,
  };

  componentDidMount = () => {
    let readToken = window.sessionStorage.getItem("SMC_authkey");
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

    API.loadEvents()
      .then(res => {
        console.log("RES: " + JSON.stringify(res));
        console.log("EVENTS BEFORE: " + JSON.stringify(this.state.events));

        res.data.map(event => {
          let v_isDeleted = (event.isDeleted);
          let v_title = (event.title);
          let v_start = new Date(event.start);
          // console.log("v_start: " + JSON.stringify(res));
          let v_end = new Date(event.end);
          let v_id = (event._id);

          let events = [...this.state.events];
          events.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
          this.setState({ events });

          // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });

          // this.setState({ events: res.data });
          console.log("EVENTS AFTER: " + JSON.stringify(this.state.events));
        })
      })
      .catch(err => console.log(err));
  };


  reloadEvents = () => {
    this.setState({ events: [] });
    API.loadEvents()
      .then(res => {
        // console.log("RES: " + JSON.stringify(res));
        console.log("EVENTS BEFORE: " + JSON.stringify(this.state.events));

        res.data.map(event => {
          let v_isDeleted = (event.isDeleted);
          let v_title = (event.title);
          let v_start = new Date(event.start);
          // console.log("v_start: " + JSON.stringify(res));
          let v_end = new Date(event.end);
          let v_id = (event._id);

          let events = [...this.state.events];
          events.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
          this.setState({ events });

          // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });

          // this.setState({ events: res.data });
          console.log("EVENTS AFTER: " + JSON.stringify(this.state.events));
        })
      })
      .catch(err => console.log(err));
  };


  ceModalToggle = () => {
    this.setState({
      createEventModal: !this.state.createEventModal
    });
  };


  eeModalToggle = () => {
    this.setState({
      editEventModal: !this.state.editEventModal
    });
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const id = event.target.id;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
    console.log("id = " + id);
  };


  handleEventSelect = event => {
    console.log("EVENT_SELECTED: " + JSON.stringify(event));
    let theStart = new Date(event.start);
    console.log("Start: " + theStart);
    // this.setState({
    //   tempEventTitle: event.title,
    //   tempEventStart: event.start,
    //   tempEventEnd: event.end,
    //   editEventModal: !this.state.editEventModal
    // });
    this.setState({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      editEventModal: !this.state.editEventModal
    });
  };

  handleDateChange = date => {
    const newTitle = this.state.title;
    const newStart = new Date(this.state.start).toISOString();
    const newEnd = new Date(this.state.end).toISOString();

    console.log("Returned Title = " + newTitle);
    console.log("Returned SDate = " + newStart);
    console.log("Returned EDate = " + newEnd);
    console.log("Returned id = " + this.state.id);
    const chgEvent = {
      id: this.state.id,
      title: newTitle,
      start: newStart,
      end: newEnd
    };
    API.chgEvent(chgEvent)
      .then(res => {
        console.log("API_RES: " + JSON.stringify(res));
        this.eeModalToggle();
        this.reloadEvents();
      })
      .catch(err => console.log(err));
    // console.log(date);
    // console.log("Stringified Date = " + JSON.stringify(date));
    // API.loadEvents()
    // .then(res => {
    //   console.log("RES: " + JSON.stringify(res));
    //   console.log("EVENTS BEFORE: " + JSON.stringify(this.state.events));
  };

  handleNewEvent = event => {
    console.log("handling new event for you");
    if (this.state.title) {
      console.log("We've got an event to post " + this.state.title + " " + this.state.start + " " + this.state.end);
    };
    this.createEvent({
      title: this.state.title,
      start: this.state.start,
      end: this.state.end,
    });
    this.setState({
      createEventModal: !this.state.createEventModal
    });
    // this.setState({
    //   events: [
    //     ...this.state.events,
    //     {
    //       start,
    //       end,
    //       title,
    //     },
    //   ],
    // })
  };

  handleDeleteEvent = event => {
    console.log("Delete Event Triggered");
    console.log("Returned id = " + this.state.id);
    const toDelete = {
      id: this.state.id
    };
    API.deleteEvent(toDelete)
      .then(res => {
        console.log("API_RES: " + JSON.stringify(res));
        this.eeModalToggle();
        this.reloadEvents();
      })
      .catch(err => console.log(err));
  };

  handleSelectSlot = ({ start, end }) => {
    let newDate = moment(start, 'ddd MMM DD YYYY HH mm ss ZZ').format('MM-DD-YY HH:mm:ss');
    //prompt for name and details as required
    this.setState({
      start: start,
      end: end,
      createEventModal: !this.state.createEventModal
    });
    //prompt for name and details as required
    // const title = window.prompt('New Event name')
    //if you get the detail save the event
    console.log("already moved on " + newDate);
    // if (this.state.title) {
    // console.log("We've got an event to post" + this.state.title + " " + start + " " + end);
    // }
    // this.createEvent({
    //   title: this.state.title,
    //   start: start,
    //   end: end,
    // });
    // this.setState({
    //   events: [
    //     ...this.state.events,
    //     {
    //       start,
    //       end,
    //       title,
    //     },
    //   ],
    // })
    console.log("leaving this function");
  };

  createEvent = query => {
    // console.log("query = " + JSON.stringify(query));
    API.createEvent(query)
      .then(res => {
        // console.log("EVENT: res = " + JSON.stringify(res));
        if (res.data.success) {
          // console.log("in success handle");
        } else {
          // console.log("in failure handle");
        };
        this.reloadEvents();
      })
      .catch(err => console.log(err));
  };

  // <div className="newEvent_MHeader">Create Event</div>      toggle={this.modalToggle}

  render() {
    return (

      <div className="calendar_Main">
        <MainMenu />

        <Modal className="newEvent_Modal" isOpen={this.state.createEventModal} toggle={this.ceModalToggle}>
          <ModalHeader className="newEvent_MHeader">Create Event</ModalHeader>
          <ModalBody>
            <Form className="newEvent_ModalForm">
              <FormGroup className="mt-4">
                <Label className="label_Text mb-0" for="event_Title">Event Title</Label>
                <Input type="text" name="title" id="event_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter className="text-center">
            <Button className="process_Button mt-0 mb-0" onClick={this.handleNewEvent} >Save</Button>
            <Button className="process_Button mt-0 mb-0" onClick={this.ceModalToggle} >Cancel</Button>
          </ModalFooter>
        </Modal>


        <Modal className="editEvent_Modal modal-lg" isOpen={this.state.editEventModal} toggle={this.eeModalToggle}>
          <Container>
            <Row>
              <Col className="col_Title pr-0" sm={{ size: 10 }}>
                <ModalHeader className="editEvent_MHeader">Edit Event</ModalHeader>
              </Col>
              <Col className="col_Button text-right" sm={{ size: 2 }}>
                <Button outline size="sm" className="delete_Event align-right mt-3" onClick={this.handleDeleteEvent} ><FontAwesomeIcon className="trash_Alt mt-0 mr-1" icon="trash-alt" size="sm" />Delete</Button>
              </Col>
            </Row>
          </Container>
          <ModalBody>
            <Form className="editEvent_ModalForm">
              <Container>
                <Row>
                  <Col className="col_Title" sm={{ size: 12 }}>
                    <FormGroup className="mt-2">
                      <Label className="label_Text mb-0" for={this.state.id}>Event Title</Label>
                      <Input type="text" name="title" value={this.state.title} id={this.state.id} placeholder="Add a Title" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col_Start" sm={{ size: 5 }}>
                    <FormGroup className="mt-2">
                      <Label className="label_Text mb-0" for={this.state.id}>Event Start</Label>
                      <Input type="text" name="start" value={this.state.start} id={this.state.id} data-rec={this.state.id} placeholder="Add a Title" onChange={this.handleInputChange} />
                      {/* <DatePicker id="event_Start" name="start" timePrecision="minute" value={this.state.date} onChange={this.handleInputChange} /> */}
                      {/* <DateTimeInput
                        value={this.state.start}
                        onChange={this.handleDateChange}
                      />
                      <TimePicker
                        time={this.state.time}
                        onChange={this.handleDateChange}
                        minutesInterval={15}
                      /> */}
                    </FormGroup>
                  </Col>
                  <Col className="col_Start" sm={{ size: 5, offset: 1 }}>
                    <FormGroup className="mt-2">
                      <Label className="label_Text mb-0" for={this.state.id}>Event End</Label>
                      <Input type="text" name="end" value={this.state.end} id={this.state.id} data-rec={this.state.id} placeholder="Add a Title" onChange={this.handleInputChange} />
                      {/* <DatePicker id="event_End" name="end" useAmPm="true" timePrecision="minute" value={this.state.date} onChange={this.handleInputChange} /> */}
                      {/* <DateTimeInput
                        value={this.state.dateTime}
                        onChange={this.handleDateChange}
                      />
                      <TimePicker
                        time={this.state.time}
                        onChange={this.handleDateChange}
                        minutesInterval={15}
                      /> */}
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </Form>
          </ModalBody>
          <ModalFooter className="text-center">
            <Button className="process_Button mt-0 mb-0" onClick={this.handleDateChange} >Save</Button>
            <Button className="process_Button mt-0 mb-0" onClick={this.eeModalToggle} >Cancel</Button>
          </ModalFooter>
        </Modal>


        <Container>
          <div className="bc_Block mt-4 mb-4">
            {/* <Basic className="big_Cal_Comp"/> */}
            <BigCalendar className="big_Cal_Comp"
              selectable
              localizer={localizer}
              events={this.state.events}
              views={["month", "week", "day"]}
              step={30}
              showMultiDayTimes
              startAccessor="start"
              endAccessor="end"
              onSelectSlot={this.handleSelectSlot}
              onSelectEvent={this.handleEventSelect}
            />
          </div>
        </Container>

        {/* <Container className="my-5">
          <CalWHeader />
          <CalWeek
            SuDt="12"
            MoDt="13"
            TuDt="14"
            WeDt="15"
            ThDt="16"
            FrDt="17"
            SaDt="18"
          />
          <CalWeek
            SuDt="19"
            MoDt="20"
            TuDt="21"
            WeDt="22"
            ThDt="23"
            FrDt="24"
            SaDt="25"
          />
        </Container> */}


        {/* <Container className="fluid mt-5">
          <Row className="mx-2">
            <Col className="day_Head border mx-2" sm="1">Head</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">A</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">B</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">C</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">D</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">E</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">F</Col>
            <Col className="day_Block border ml-3 px-1" sm="1">G</Col>
            <Col className="day_Head border ml-3 px-1" sm="3">Tail</Col>
          </Row>
        </Container> */}
        {/* <Col className="col_Box px-3 pb-4 mx-3" sm="3">
          <Row><Col className="col_Lane text-center my-3" sm={{ size: 10, offset: 1 }}>Resourced</Col></Row>
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
          </Col></Row>
        </Col>


        <Col className="col_Box px-3 pb-4 mx-3" sm="3">
          <Row><Col className="col_Lane text-center my-3" sm={{ size: 10, offset: 1 }}>Funded</Col></Row>
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

        <Col className="col_Box px-3 pb-4 mx-3" sm="3">
          <Row><Col className="col_Lane text-center my-3" sm={{ size: 10, offset: 1 }}>Closed</Col></Row>
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
          </Row>
        </Container > */}

      </div >
    );
  };
};


export default Calendar;
