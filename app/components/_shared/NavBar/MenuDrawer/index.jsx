import React, { Component } from 'react';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import Account from 'material-ui/svg-icons/action/account-circle';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';



export default class MenuDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const menuStyle = {
      color: '#ffffff',
      paddingTop: '12px',
      cursor: 'pointer',
    };

    const containerStyle = {
      backgroundColor: '#ffffff',
    };

    const itemStyle = {
      color: '#000000',
      paddingLeft: '15px',
    };

    const appBarStyle = {
      backgroundColor: '#337ab7',
    };

    const accountStyle = {
      color: '#ffffff',
      width: '50px',
      height: '50px',
      paddingLeft: '6px',
    };

    return (
      <div>
        <MenuButton
          style={menuStyle}
          onTouchTap={this.handleToggle}
        />
        <Drawer
          containerStyle={containerStyle}
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            style={appBarStyle}
            iconElementLeft={<Account style={accountStyle}/>}
          />
        <Subheader style={{paddingTop: '15px'}}>Search</Subheader>
          <MenuItem style={itemStyle} onTouchTap={this.handleClose}>Trips</MenuItem>
          <MenuItem style={itemStyle} onTouchTap={this.handleClose}>Places</MenuItem>
          <Divider />
        </Drawer>
      </div>
    );
  }
}
