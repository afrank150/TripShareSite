import React, { Component } from 'react';
import NavBar from 'components/_shared/NavBar';
import Title from 'components/_shared/Title';
import SearchBox from 'components/Trips/SearchBox';
import SearchRightButtons from 'components/Trips/SearchRightButtons';
import { Link } from 'react-router';


const Trips = (props) => {
  return (
     <div>
       <NavBar
         initialDisplay={true}
         iconElementRight={<SearchRightButtons />}
         title={<span><Title /><SearchBox /></span>}
      />
     </div>
  );
};

export default Trips;
