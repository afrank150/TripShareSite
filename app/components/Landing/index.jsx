import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import MapIcon from 'material-ui/svg-icons/maps/map';
import TripIcon from 'material-ui/svg-icons/maps/add-location';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import WorldIcon from 'material-ui/svg-icons/social/public';

import LandingButton from 'components/Landing/LandingButton';


const Landing = (props) => {
  const divStyle = {
    height: '350px',
    color: '#ffffff',
    backgroundColor: '#337ab7',
  };

  const titleStyle = {
    paddingTop: '50px',
    textAlign: 'center',
  };

  const dividerStyle = {
    marginTop: '30px',
    marginLeft: '150px',
    marginRight: '150px',
  };

  const columnStyle = {
    marginTop: '25px',
    marginLeft: '140px',
    marginRight: '140px',
    WebkitColumnCount: 4, /* Chrome, Safari, Opera */
    MozColumnCount: 4, /* Firefox */
    columnCount: 4,
    MozColumnFill: 'balance', /* Firefox */
    columnFill: 'balance',
  };


  return (
     <div style={divStyle}>
        <h1 style={titleStyle}>GET STARTED!</h1>
        <Divider style={dividerStyle}/>
        <div style={columnStyle}>
          <LandingButton
            svgIcon={<TripIcon />}
            iconTitle="Create a Trip"
          />
          <LandingButton
            svgIcon={<MapIcon />}
            iconTitle="Browse Trips"
          />
          <LandingButton
            svgIcon={<CameraIcon />}
            iconTitle="Photo Galleries"
          />
          <LandingButton
            svgIcon={<WorldIcon />}
            iconTitle="Top Locations"
          />
        </div>
     </div>
  );
};

export default Landing;
