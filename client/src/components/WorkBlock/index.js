import React from 'react'
import './style.css';
// import { Grid, Image } from 'semantic-ui-react'
// import { Button, Header, Grid, Icon, Label, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
// import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { Button, Header, Card, Grid, Step, Icon, Image, Label, Menu, Segment, Sidebar, Container, GridColumn } from "semantic-ui-react";
import TaskCard from "../TaskCard";


export function WorkBlock() {
  return (
    <div>
      <Grid columns={16} >
        <Grid.Row className="laneRow">

          {/**********************************************************************************************************/}

          {/* <Grid.Column className="blankLanes" width={1}>
          </Grid.Column> */}

          {/**********************************************************************************************************/}

          <Grid.Column verticalAlign="top" textAlign="right" className="laneCol" width={2}>
            <Header as="h2">Lane Name</Header>
            {/* <Step.Group vertical>
              <Step active>
                <Step.Content>
                  <Step.Title>Lane Name</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group> */}

          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="blankLanes" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="changed_this_name" width={3} as={Segment}>

            <div>
              <Segment className="column_Title_Block">
                <Header textAlign="center" className="header_title" as="h2">
                  Column Name 1
                </Header>
              </Segment>
            </div>
            <TaskCard
              title='Card Title1'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title2'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title3'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title4'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title5'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title6'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title7'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title8'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="blankLanes" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

          {/* <Grid.Column className="task_Col" width={3} as={Segment}> */}
          <Grid.Column className="changed_this_name" width={3} as={Segment}>

            <Grid centered columns={1} >
              <div>
                <Segment className="undeclared_Segment_Name">
                  <Header textAlign="center" className="undeclared_Header_Title" as="h2">
                    Column Name 2
                    </Header>
                </Segment>
              </div>
              <Grid.Row className="unnamed_detail_row">
                <Grid.Column centered="true" className="changed_this_name_as_well" width={15}>
                  <TaskCard
                    title='Card Title9'
                    description='This is a sample description included for demonstration purposes'
                    user='SC'>
                  </TaskCard>
                  <Grid.Row className="unnamed_detail_row">
                  <Grid.Column>

                  </Grid.Column>
                  </Grid.Row>
                  <TaskCard
                    title='Card Title10'
                    description='This is a sample description included for demonstration purposes'
                    user='SC'>
                  </TaskCard>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <div>
              <Segment className="column_Title_Block">
                <Header textAlign="center" className="header_title" as="h2">
                  Column Name 2
                </Header>
              </Segment>
            </div>
            <TaskCard
              title='Card Title9'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title10'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard> */}

          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="blankLanes" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="task_Col" width={3} as={Segment}>

            <div>
              <Segment className="column_Title_Block">
                <Header textAlign="center" className="header_title" as="h2">
                  Column Name 3
                </Header>
              </Segment>
            </div>
            <div>
            <TaskCard
              title='Card Title11'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title12'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title13'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>

            <TaskCard
              title='Card Title14'
              description='This is a sample description included for demonstration purposes'
              user='SC'>
            </TaskCard>
            </div>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="blankLanes" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

        </Grid.Row>
      </Grid>


    </div>
  );
};


export default WorkBlock;


