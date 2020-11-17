import GoogleMapReact from 'google-map-react';
import React from 'react';
import MapPin from './pin';

const apiKey = 'AIzaSyAoV6Q1CZGGGahEeCKSjTJpnHzRvf9vDBE';
const Map = ({ center }) => {
    const pins = () => {
        return;
    };
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '90vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                center={
                    center
                        ? center
                        : {
                              lat: 59.95,
                              lng: 30.33,
                          }
                }
                defaultZoom={12}
            >
                {center && <MapPin lat={center.lat} lng={center.lng}></MapPin>}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
