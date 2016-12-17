import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const SearchRightButtons = (props) => {

  const style = {
    marginLeft: '25px',
  };

  const buttonStyle = {
    marginTop: '3px',
  };

  return (
      <span style={style}>
        <FlatButton
          label="Create a Trip"
          href="/"
          style={buttonStyle}
        />
        <FlatButton
          label="Sign In"
          href="/"
          style={buttonStyle}
        />
      </span>
  );
};

export default SearchRightButtons;
