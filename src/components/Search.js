import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

function Search({ setLocation, setCityName }) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [unit, setUnit] = useState('C');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=115b85e790824228be8174623242709&q=${city}`);
            console.log('ssssssssssssss', response, city)
            setWeather(response.data);
            setLocation(city); // Set the location in App.js
            setCityName(response.data.location.name);
        } catch (error) {
            console.error('City not found or API request failed');
        }
    };

    const toggleUnit = () => {
        setUnit(unit === 'C' ? 'F' : 'C');
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
                <button onClick={handleSearch}>Search</button>
            </div>
            {weather && (
                <div className="weather-result">
                    <h1>{weather.location.name}</h1>
                    <p>{unit === 'C' ? weather.current.temp_c : weather.current.temp_f}°{unit}</p>
                    <p>{weather.current.condition.text}</p>
                    <img src={`https:${weather.current.condition.icon}`} alt="Weather icon" />
                    <button onClick={toggleUnit}>
                        Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Search;
