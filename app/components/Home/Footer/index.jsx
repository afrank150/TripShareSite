import React from 'react';


const Footer = (props) => {
  const divStyle = {
    height: '175px',
    display: 'block',
  };

  const textStyle = {
    lineHeight: '175px',
    color: '#ffffff',
    fontSize: '22px',
    textAlign: 'center',
    verticalAlign: 'middle',
  };


  return (
     <div style={divStyle}>
       <div style={textStyle}>&copy; Mapception 2016</div>
     </div>
  );
};

export default Footer;
