import React, { Component } from 'react';
import NavBar from 'components/_shared/NavBar';
import Title from 'components/_shared/Title';
import Splash from 'components/Home/Splash';
import About from 'components/Home/About';
import Landing from 'components/Home/Landing';
import Footer from 'components/Home/Footer';
import RightButtons from 'components/Home/RightButtons';


export class Home extends Component {
  render () {
    return (
      <div>
        <NavBar
          initialDisplay={false}
          iconElementRight={<RightButtons />}
          title={<Title />}
        />
        <Splash />
        <About />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default Home;
