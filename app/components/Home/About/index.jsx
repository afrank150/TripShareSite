import React from 'react';


const About = (props) => {
  const divStyle = {
    height: '200px',
    display: 'block',
    color: '#ffffff',
    textAlign: 'center',
  };

  const titleStyle = {
    paddingTop: '25px',
    textTransform: 'uppercase',
    fontSize: '30px',
  };

  const textStyle = {
    paddingTop: '10px',
    fontSize: '22px',
  };


  return (
     <div style={divStyle}>
       <h1 style={titleStyle}>Mapception, for those who<br/> love to explore</h1>
       <div style={textStyle}>Browse through all the experiences, plan your trip, and share it with friends.</div>
     </div>
  );
};

export default About;
