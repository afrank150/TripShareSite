import React from 'react';

const NotFound = (props) => {
  const divStyle = {
    display: 'block',
  };

  const textStyle = {
    lineHeight: '60vh',
    color: '#ffffff',
    fontSize: '38px',
    textAlign: 'center',
    verticalAlign: 'middle',
  };

  return (
     <div style={divStyle}>
       <div style={textStyle}>404 - Page Not Found</div>
     </div>
  );
};

export default NotFound;
