import React from 'react'
import './style.css';
import Owner from "../Owner";
// import { Grid, Image } from 'semantic-ui-react'
// import { Button, Header, Grid, Icon, Label, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
// import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { Button, Header, Card, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container, GridColumn, GridRow } from "semantic-ui-react";

export function TaskCard(props) {
  return (
    // <div className="task_Card_Div">
      <Card className="card_Body_Unit">
          <Card.Content className="card_Block_Header" header={props.title} />
          <Card.Content className="card_content_body" description={props.description} />
        <Card.Content extra>
          <Grid columns={16} >
            <GridRow>
              <GridColumn className="directColumnL" width={4}>
                <Icon color="black" size="large" className="directIcon" name="arrow circle left" />
              </GridColumn>
              <GridColumn verticalAlign="middle" textAlign="center" className="directColumnL" width={8}>
                <Owner
                  user={props.user}>
                </Owner>
              </GridColumn>
              <GridColumn textAlign="right" className="directColumnR" width={4}>
                <Icon color="black" size="large" className="directIcon" name="arrow circle right" />
              </GridColumn>
            </GridRow>
          </Grid>
        </Card.Content>
      </Card>
    // </div>
  )
};

export default TaskCard;
