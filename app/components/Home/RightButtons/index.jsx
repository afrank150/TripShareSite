import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';


const RightButtons = (props) => {
  const style = {
    marginTop: '3px',
  };

  return (
     <span>
      <FlatButton
        label="Create a Trip"
        href="/"
        style={style}/>
      <FlatButton
        href="/trips/"
        label="Search Trips"
        style={style}
      />
      <FlatButton
        label="Sign In"
        href="/"
        style={style}/>
     </span>
  );
};

export default RightButtons;
