import React, { Component } from 'react';
import './style.css';
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';


class App extends Component {
  state = { activeItem: 'one' }


  render() {
    const { activeItem } = this.state

    return (
      <div className="TestWide">
        <Grid>
          <Grid.Row className="bannerRow">
            <Grid.Column className="bannerCol" width={16}>
              <div className="AppTitle">
                <Image className="titleImage" circular floated='left' src="http://placehold.it/50x50" />
                <h1 className="titleName">Name Goes Here</h1>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid >


        <Container className="TestWideContainer">
          <Grid textAlign="left" className="TestWideGrid" columns={11}>
            <Grid.Row className="TestWideRow">
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>1</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>2</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>3</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>4</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>5</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>6</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>7</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>8</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>9</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>10</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>11</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>12</Grid.Column>
              {/* <Grid.Column className="TestWideColumn" width={1} as={Segment}>13</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>14</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>15</Grid.Column>
              <Grid.Column className="TestWideColumn" width={1} as={Segment}>16</Grid.Column> */}
            </Grid.Row>
          </Grid >
        </Container>



      </div >
    );
  }
}

export default App;
