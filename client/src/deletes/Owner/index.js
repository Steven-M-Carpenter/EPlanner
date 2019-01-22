import React from 'react'
import './style.css';
// import { Grid, Image } from 'semantic-ui-react'
// import { Button, Header, Grid, Icon, Label, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
// import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { Button, Header, Card, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container, GridColumn, GridRow } from "semantic-ui-react";

export function Owner(props) {
  return (
    <div className="levelX">
      <Header color="black" as="h5">{props.user}<Icon color="black" name='user' /></Header> 
    </div>
  )
};

export default Owner;
