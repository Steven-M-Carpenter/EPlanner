import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
// import events from './events'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Container, Label } from 'reactstrap';
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

    API.loadEvents()
      .then(res => {
        console.log("RES: " + JSON.stringify(res));

        // res.data.map(event => {
        //   let v_isDeleted = (event.isDeleted);
        //   let v_title = (event.title);
        //   let v_start = (event.start.toDate());
        //   let v_end = (event.end.toDate());
        //   let v_id = (event._id);

        //   let events = [...this.state.events];
        //   events.push({ isDeleted: v_isDeleted, title: v_title, start: v_start, end: v_end, id: v_id });
        //   this.setState({ events });

          // this.setState({ events: res.data, key: "", title: "", start: "", end: "", isDeleted: "" });
          this.setState({ events: res.data });
          console.log("EVENTS: " + JSON.stringify(this.state.events));
        // })
      })
      .catch(err => console.log(err));
  };


  ceModalToggle = () => {
    this.setState({
      createEventModal: !this.state.createEventModal
    });
  }


  eeModalToggle = () => {
    this.setState({
      editEventModal: !this.state.editEventModal
    });
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };


  handleEventSelect = event => {
    console.log("EVENT_SELECTED: " + JSON.stringify(event));
    this.setState({
      tempEventTitle: event.title,
      tempEventStart: event.start,
      tempEventEnd: event.end,
      editEventModal: !this.state.editEventModal
    });
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
    console.log("query = " + JSON.stringify(query));
    API.createEvent(query)
      .then(res => {
        console.log("EVENT: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          // window.location.assign('/login');
          // this.setState({ loginStatus: true, });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: true, });
          // this.setState({ loginMsg: res.data.message });
        } else {
          console.log("in failure handle");
          // window.location.assign('/signup');
          // this.setState({ loginStatus: false });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: false });
          // this.setState({ loginMsg: res.data.message });
        }
        // console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  }

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


        <Modal className="newEvent_Modal" isOpen={this.state.editEventModal} toggle={this.eeModalToggle}>
          <ModalHeader className="newEvent_MHeader">Edit Event</ModalHeader>
          <ModalBody>
            <Form className="newEvent_ModalForm">
              <FormGroup className="mt-2">
                <Label className="label_Text mb-0" for="event_Title">Event Title</Label>
                <Input type="text" name="title" value={this.state.tempEventTitle} id="event_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label className="label_Text mb-0" for="event_Start">Event Start</Label>
                <Input type="text" name="start" value={this.state.tempEventStart} id="event_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label className="label_Text mb-0" for="event_End">Event End</Label>
                <Input type="text" name="end" value={this.state.tempEventEnd} id="event_Title" placeholder="Add a Title" onChange={this.handleInputChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter className="text-center">
            <Button className="process_Button mt-0 mb-0" onClick={this.handleNewEvent} >Save</Button>
            <Button className="process_Button mt-0 mb-0" onClick={this.eeModalToggle} >Cancel</Button>
          </ModalFooter>
        </Modal>


        <Container>
          <div className="bc_Block mt-4">
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
