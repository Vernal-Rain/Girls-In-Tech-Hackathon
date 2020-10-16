import React, { Component } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 30.332186143422703,
  lng:  -97.97139225993722
};

const position = {
  lat: 30.332186143422703,
  lng:  -97.97139225993722
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

class Map extends Component {
  render() {
    return (
      <Container>
        <Row className="Map justify-content-center">
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
            <Marker
              onLoad={onLoad}
              position={position}
            />
              <></>
            </GoogleMap>
          </LoadScript>
        </Row>
      </Container>
    )
  }
}

export default Map;
