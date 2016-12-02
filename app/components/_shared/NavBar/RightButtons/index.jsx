import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';


const RightButtons = (props) => {
  const style = {
    color: '#ffffff',
  };

  return (
     <span>
      <FlatButton label="Create a Trip" style={style}/>
      <FlatButton
        href="/trips/"
        label="Search Trips"
        style={style}
      />
      <FlatButton label="Sign In" style={style}/>
     </span>
  );
};

export default RightButtons;
