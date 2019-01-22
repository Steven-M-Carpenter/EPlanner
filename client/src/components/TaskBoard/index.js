import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";

import { Button, ButtonDropdown, Card, CardHeader, CardText, CardFooter, Dropdowns, Forms, Container, Row, Col, Images, Label } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskCard from "../TaskCard";
import MainMenu from '../MainMenu';


class TaskBoard extends Component {
  state = {
    activeItem: 'Taskboard',
    columnHeads: [],
    cardData: [],
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


  render() {
    return (

      <div className="taskboard_Main">
        <MainMenu />

        <Container className="mt-5">
          <Row className="mx-2">
            <Col className="lane_Title text-right" sm="2">Lane Title</Col>

          {/* <TBColumn>
            {this.state.columnHeads.map(col => {
              let colTitle = (col.PhaseName);
              let colOrder = (col.DispOrder);
              return (
                <div>
                  <TBColDetail
                    colTitle={colTitle}
                    colOrder={colOrder}
                    />
                </div>
              );
            })}
          </TBColumn> */}

            <Col className="col_Box px-3 pb-4 mx-2" sm="3">
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
        </Container>

      </div>
    );
  };
};


export default TaskBoard;
