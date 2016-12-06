import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import NavBar from 'components/_shared/NavBar';

export class TripMap extends Component {
  render () {
    const position = [15, 0];

    const mapStyle = {
      position: 'absolute',
      top: '56px',
      bottom: '0px',
      right: '0px',
      left: '0px',
    };

    return (
      <div>
        <NavBar initialDisplay={true}/>
        <Map style={mapStyle} center={position} zoom={3}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div>
    );
  }
}

export default TripMap;
