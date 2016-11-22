import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from 'utils/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from 'components/_shared/NavBar';
import Splash from 'components/Home/Splash';
import About from 'components/Home/About';
import Landing from 'components/Home/Landing';
import Footer from 'components/Home/Footer';

import styles from "./styles.css";


export class Home extends Component {
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

export default Home;
