import React, { Component } from 'react';
import './style.css';
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';


const SidebarMenu = (props) => (

        <div className="SidebarMenu">
        <h2>{props.visible}</h2>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={props.action}
            vertical
            visible={props.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Dashboard
              </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar' />
              Calendar
              </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='columns' />
              Task Board
              </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>{props.visible}</Header>
              {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );

export default SidebarMenu;