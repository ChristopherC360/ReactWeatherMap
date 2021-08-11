import React, { useState, useEffect } from 'react';
import MapContainer from "./MapContainer";
import WeatherContainer from "./WeatherContainer";

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function MainComponent() {
    const [query, setQuery] = useState("Chicago");
    const [weather, setWeather] = useState({});

    // useEffect(() => {
    //     defaultLocation();
    // });

    const defaultLocation = () => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}${query}&days=3&aqi=no`)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data); 
                setQuery("");
            });
    };

    const getLocation = (evt) => {
        if (evt.key === "Enter") {defaultLocation()};
    };

    return (
        <div>
            <div>
                <input 
                type="text" 
                className="searchLocation" 
                placeholder="City, State or Zip Code"
                onChange={evt => setQuery(evt.target.value)}
                value={query}
                onKeyPress={getLocation}
                />
            </div>
            <div>
            <MapContainer weather={weather}/>
            </div>
            <WeatherContainer weather={weather}/>
        </div>
    )
    
};

export default MainComponent;