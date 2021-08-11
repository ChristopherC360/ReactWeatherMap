import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapsApiKey = process.env.REACT_APP_MAP_API_KEY;

function MapContainer(props) {


    return (
        <div>
            {(typeof props.weather.location != "undefined") ? (
            <Map
                google={props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={
                {
                    lat: props.weather.location.lat,
                    lng: props.weather.location.lon
                }
                }
            />
            ) : (<div/>)}
        </div>
    );
}

const mapStyles = {
    width: '25%',
    height: '100%'
};

export default GoogleApiWrapper({apiKey: `${mapsApiKey}`})(MapContainer);