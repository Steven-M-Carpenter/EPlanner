import _ from 'lodash'
import React from 'react'
import './style.css';
// import { Grid, Image } from 'semantic-ui-react'
// import { Button, Header, Grid, Icon, Label, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';


export function WeekBlock() {
  return (
    <div>


      <Grid columns={14} >
        <Grid.Row className="laneRow">

          {/**********************************************************************************************************/}
          <Grid.Column className="laneCol" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            {/* <Label> */}
            <span>11</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* <Icon name="ellipsis horizontal" size="large" link /> */}
            {/* </Label> */}
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>12</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>13</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
            <Grid.Row>
              <Segment.Group className="laneSegGrp">
                <Segment className="laneDaySeg" size="small">High
                  <Label floating color="red" size="mini">3</Label>
                </Segment>
                <Segment className="laneDaySeg" size="small">Medium
                <Label floating color="orange" size="mini">4</Label>
                </Segment>
                <Segment className="laneDaySeg" size="small">Low
                <Label floating color="brown" size="mini">11</Label>
                </Segment>
              </Segment.Group>
            </Grid.Row>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>14</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              . . .
            </Button>
            {/* </Segment> */}
            <Grid.Row>
              <Label.Group className="laneLGrp3">
                <Label circular as="a" color="red">2</Label>
                <Label circular as="a" color="orange">10</Label>
                <Label circular as="a" color="brown">7</Label>
              </Label.Group>
            </Grid.Row>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>15</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>16</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
            <Grid.Row>
              <Label.Group tag className="laneLGrp">
              <Grid.Row>
                High <Label color="blue" align="center">12
                  {/* <Icon  color="red" name='dot circle' /> 3 */}
                </Label>
                </Grid.Row>
                <Grid.Row>
                Med <Label color="teal" align="center">1
                  {/* <Icon color="yellow" name='dot circle' /> 15 */}
                </Label>
                </Grid.Row>
                <Grid.Row>
                Low <Label align="center">10
                  {/* <Icon color="green" name='dot circle' /> 7 */}
                </Label>
                </Grid.Row>
              </Label.Group>
            </Grid.Row>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>17</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}
          {/**********************************************************************************************************/}

        </Grid.Row>
        <Grid.Row className="laneRow">

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={1}>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            {/* <Label> */}
            <span>18</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* <Icon name="ellipsis horizontal" size="large" link /> */}
            {/* </Label> */}
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>19</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* <Grid.Row> */}
            {/* <Grid.Column className="laneCol" width={2} > */}
            <Label.Group tag className="laneLGrp">
              <Grid.Row>
                High <Label color="blue" align="center">12
                  {/* <Icon  color="red" name='dot circle' /> 3 */}
                </Label>
              </Grid.Row>
              <Grid.Row>
                Med <Label color="teal" align="center">1
                  {/* <Icon color="yellow" name='dot circle' /> 15 */}
                </Label>
              </Grid.Row>
              <Grid.Row>
                Low <Label align="center">10
                  {/* <Icon color="green" name='dot circle' /> 7 */}
                </Label>
              </Grid.Row>
            </Label.Group>
            {/* </Grid.Column> */}
            {/* </Grid.Row> */}
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>20</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>21</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              . . .
            </Button>
            {/* </Segment> */}
            <Grid.Row>
              <Label.Group className="laneLGrp3">
                <Label circular as="a" color="red">2</Label>
                <Label circular as="a" color="orange">10</Label>
                <Label circular as="a" color="brown">7</Label>
              </Label.Group>
            </Grid.Row>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>22</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>23</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
            <Grid.Row>
              <Segment.Group className="laneSegGrp">
                <Segment className="laneDaySeg" size="small">High
                  <Label floating color="red" size="mini">3</Label>
                </Segment>
                <Segment className="laneDaySeg" size="small">Medium
                <Label floating color="orange" size="mini">4</Label>
                </Segment>
                <Segment className="laneDaySeg" size="small">Low
                <Label floating color="brown" size="mini">11</Label>
                </Segment>
              </Segment.Group>
            </Grid.Row>
          </Grid.Column>

          {/**********************************************************************************************************/}

          <Grid.Column className="laneCol" width={2} as={Segment}>
            {/* <Segment raised floated="left" className="laneSeg"> */}
            <span>24</span>
            <Button className="laneButton" size="mini" floated="right" icon >
              <Icon name="ellipsis horizontal" size="small" link />
            </Button>
            {/* </Segment> */}
          </Grid.Column>

          {/**********************************************************************************************************/}

        </Grid.Row>

      </Grid>


    </div>
  );
};


export default WeekBlock;


