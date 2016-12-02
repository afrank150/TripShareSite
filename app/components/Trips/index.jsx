import React from 'react';
import { Link } from 'react-router';


const Trips = (props) => {
  return (
     <div>
       <Link to="/trips/afrank">afrank</Link>
       {props.children}
     </div>
  );
};

export default Trips;
