import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const LaneCard = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        {/* <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' /> */}
        <Card.Header textAlign='center'>{props.title}</Card.Header>
        <Card.Meta textAlign='center'>{props.mdesc}</Card.Meta>
        <Card.Description>
          {props.ldesc}
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content> */}
    </Card>
  </Card.Group>
)

export default LaneCard
