import React from 'react';
import { Link } from 'react-router';


const MyTrips = (props) => {
  return (
     <div>
       <span>test</span>
       <h2>{props.params.userName}</h2>
       <Link to="/trips/afrank/croatia">croatia</Link>
     </div>
  );
};

export default MyTrips;
