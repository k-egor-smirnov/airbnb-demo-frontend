import React from 'react';
import GoogleMapReact from 'google-map-react';

class MapView extends React.Component {
  render() {
    return (
      <GoogleMapReact
        key={process.env.REACT_APP_GOOGLE_API_KEY}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          language: 'ru'
        }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    );
  }
}

export default MapView;
