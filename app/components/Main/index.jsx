import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from 'utils/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import styles from "./styles.css";


export class Main extends Component {
  render () {
    const muiTheme = getMuiTheme(CustomTheme);
    // Place color changes to components here, like below...
    // muiTheme.appBar.color = CustomTheme.palette.primary2Color;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Main;
