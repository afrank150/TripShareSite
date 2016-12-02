import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';


const LandingButton = (props) => {

  const divStyle = {
    marginReft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    height: '210px',
    textAlign: 'center',
    fontSize: '22px',
  };

  const circleStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    width: '100px',
    height: '100px',
    backgroundColor: '#ffffff',
    WebkitBorderRadius: '50px',
    MozBorderBadius: '50px',
    borderRadius: '50px',
  };

  const iconStyle = {
    style: {
      display: 'block',
      margin: 'auto',
      paddingTop: '15px',
      width: '100px',
      height: '100px',
    },
    icon: {
      color: '#337ab7',
      width: '75px',
      height: '75px',
    }
  };

  return (
    <div style={divStyle}>
      <div style={circleStyle}>
        <IconButton style={iconStyle.style} iconStyle={iconStyle.icon} href={props.href}>
          {props.svgIcon}
        </IconButton>
      </div>
      <span>{props.iconTitle}</span>
    </div>
  );
};

export default LandingButton;
