import React from 'react';
import { browserHistory } from 'react-router';


const Title = (props) => {
  const titleStyle = {
    color: '#ffffff',
    cursor: 'pointer',
  };

  return (
    <span style={titleStyle} onClick={handleClick}>Mapception</span>
  );
};

const handleClick = () => (
  browserHistory.push('/')
);

export default Title;
