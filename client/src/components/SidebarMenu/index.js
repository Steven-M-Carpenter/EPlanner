import React, { Component } from 'react';
import './style.css';
import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';


class SidebarMenu extends Component {
  render() {
    return (
      <div className="SidebarMenu">
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={true}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
              </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar' />
              Calendar
              </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Snapshot
              </Menu.Item>
          </Sidebar>
      </div>

    );
  };
};
export default SidebarMenu;