//import npm package
  import React from 'react';
// import GoogleMapReact from 'google-map-react';
import {GoogleMapReact,AnyReactComponent} from 'google-map-react';
//import components and containers

//import assets


export default class ContactMap extends React.Component {
    // componentDidMount() {
    //     const map = new window.google.maps.Map(document.getElementById('map'), {
    //       center: { lat: 41.0082, lng: 28.9784 },
    //       zoom: 8
    //     });
    //   }

      static defaultProps = {
        center: {
          lat: 41.00,
          lng: 28.97
        },
        zoom: 11
      };
    render(){
        return(
            // <div style={{ height: '100vh', width: '100%' }}>
            //  <div style={{ width: 500, height: 500 }} id="map" />
            // </div>
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'HqSQk1RQt5QW1VZoQL0L' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.0082}
            lng={28.9784}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
        );
    }
}
