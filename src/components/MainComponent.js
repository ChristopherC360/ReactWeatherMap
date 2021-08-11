import React, { useState } from 'react';
import { Col, Row, Card } from 'reactstrap';
import MapContainer from "./MapContainer";
import WeatherContainer from "./WeatherContainer";
import LandingPage from './LandingPage';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function MainComponent() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const [display, setDisplay] = useState(true)

    const defaultLocation = () => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}${query}&days=3&aqi=no`)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data); 
                setQuery("");
            });
    };

    const getLocation = () => {defaultLocation(); setDisplay(false); }

    const searchBar = () => {
        return (
            <input 
                type="text" 
                className="searchLocation" 
                placeholder="City, State or Zip Code"
                onChange={evt => setQuery(evt.target.value)}
                value={query}
                onKeyPress={(evt) => evt.key === "Enter" ? getLocation() : null}
                
            />
        );
    };

    return (
        <div>
            {display ? <LandingPage searchBar={searchBar}/> : null}
            <Row>
                <Col>
                    <MapContainer weather={weather}/>
                </Col>
                <Col lg="3">
                    {!display ? 
                        <Card>
                            <WeatherContainer weather={weather} searchBar={searchBar}/>
                        </Card> : null
                    }
                </Col>
            </Row>
        </div>
    )
    
};

export default MainComponent;