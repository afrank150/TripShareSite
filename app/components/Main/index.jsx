import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from 'utils/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from 'components/NavBar';
import Splash from 'components/Splash';
import About from 'components/About';
import Landing from 'components/Landing';
import Footer from 'components/Footer';

import styles from "./styles.css";


export class Main extends Component {
  render () {

    const muiTheme = getMuiTheme(CustomTheme);
    // Place color changes to components here, like below...
    // muiTheme.appBar.color = CustomTheme.palette.primary2Color;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar initialDisplay={false}/>
          <Splash />
          <About />
          <Landing />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
