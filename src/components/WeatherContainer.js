import React, { Component } from 'react';

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const currDate = new Date();
let nextDay = currDate.getDay() + 1;
let nextDay2 = currDate.getDay() + 2;
let nextDay3 = currDate.getDay() + 3;

if (currDate.getDay() === 4) {
    nextDay3 = 0;
};
if (currDate.getDay() === 5) {
    nextDay2 = 0;
    nextDay3 = 1;
};
if (currDate.getDay() === 6) {
    nextDay = 0;
    nextDay2 = 1;
    nextDay3 = 2;
};

class WeatherContainer extends Component {

    render() {
        return (
            <div>
            {(typeof this.props.weather.location != "undefined") ? ( 
            <div className="weatherInfo">
                <div className="currentWeather">
                    <div className="searchBar">
                        {this.props.searchBar()}
                    </div>
                    <ul className="headerInfo">
                        <li className="nowDate">{currDate.toDateString()}</li>
                        <li className="yourLocation">{this.props.weather.location.name}, {this.props.weather.location.region}</li>
                    </ul>
                    <div>
                        <span className="yourTemperature">{this.props.weather.current.temp_f}<sup>&#8457;</sup></span>
                        <span className="summary">{this.props.weather.current.condition.text}</span>
                    </div>
                    <div>
                        <dl className="fullSummary" id="topOfFullSummary">
                            <dt>Feels Like</dt>
                            <dd className="feelsLikeTemp">{this.props.weather.current.feelslike_f}<sup>&#8457;</sup></dd>
                        </dl>
                        <dl className="fullSummary">
                            <dt>Humidity</dt>
                            <dd className="humidity">{this.props.weather.current.humidity}%</dd>
                        </dl>
                        <dl className="fullSummary">
                            <dt>Wind Speed</dt>
                            <dd className="windSpeed">{this.props.weather.current.wind_mph}mph</dd>
                        </dl>
                    </div>
                </div>
                <div className="fullForecast">
                    <h2>Weather Forecast</h2>
                    <dl className="fullSummary" id="topOfDailyForecast">
                        <img src={this.props.weather.forecast.forecastday[0].day.condition.icon} id="day1Img" alt="day1Img"></img>
                        <dt id="day1Temp">{this.props.weather.forecast.forecastday[0].day.mintemp_f}/{this.props.weather.forecast.forecastday[0].day.maxtemp_f}</dt>
                        <dd id="day1Date">{weekdays[nextDay]}</dd>
                    </dl>
                    <dl className="fullSummary">
                        <img src={this.props.weather.forecast.forecastday[1].day.condition.icon} id="day2Img" alt="day2Img"></img>
                        <dt id="day2Temp">{this.props.weather.forecast.forecastday[1].day.mintemp_f}/{this.props.weather.forecast.forecastday[1].day.maxtemp_f}</dt>
                        <dd id="day2Date">{weekdays[nextDay2]}</dd>
                    </dl>
                    <dl className="bottomOfSummary">
                        <img src={this.props.weather.forecast.forecastday[2].day.condition.icon} id="day3Img" alt="day3Img"></img>
                        <dt id="day3Temp">{this.props.weather.forecast.forecastday[2].day.mintemp_f}/{this.props.weather.forecast.forecastday[2].day.maxtemp_f}</dt>
                        <dd id="day3Date">{weekdays[nextDay3]}</dd>
                    </dl>
                </div>
            </div>
            ) : (<div/>)
            }
        </div>
        )
    }
};

export default WeatherContainer;