import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapsApiKey = process.env.REACT_APP_MAP_API_KEY;

function MapContainer(props) {

    return (
        <div style={{ height: '100vh', width: '70%' }}>
            {(typeof props.weather.location != "undefined") ? (
            <Map
                google={props.google}
                zoom={12}
                center={
                {
                    lat: props.weather.location.lat,
                    lng: props.weather.location.lon
                }
                }
                style={{ height: '98vh', width: '75vw' }}
            />
            ) : (<div/>)}
        </div>
    );
}

export default GoogleApiWrapper({apiKey: `${mapsApiKey}`})(MapContainer);