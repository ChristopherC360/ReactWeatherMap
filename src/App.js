import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';

// const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${state}`;

class App extends Component {

    render() {
        return (
            <div>
                <MainComponent />
            </div>
        );
    }
}

export default App;