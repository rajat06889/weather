import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrentWeather.css';

function CurrentWeather({ setLocation, setCityName }) {
    const [weather, setWeather] = useState(null);
    const [unit, setUnit] = useState('C');
    const [inputLocation, setInputLocation] = useState('Current Location');

    useEffect(() => {
        const fetchWeatherData = async (location) => {
            console.log("location", location)
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=115b85e790824228be8174623242709&q=${location}`);
                console.log("ccccccccccccccccccccccccccccc", response)
                setWeather(response.data);
                setCityName(response.data.location.name);
            } catch (err) {
                console.error('Failed to fetch weather data', err);
            }
        };

        if (inputLocation === 'Current Location') {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(`${latitude},${longitude}`);
                setLocation(`${latitude},${longitude}`);
            }, error => {
                console.error('Geolocation error:', error);
                fetchWeatherData('New Delhi'); // Fallback to default location
                setLocation('New Delhi');
                setCityName('New Delhi');
            });
        } else {
            fetchWeatherData(inputLocation);
            setLocation(inputLocation);
            setCityName(inputLocation);
        }
    }, [inputLocation, setLocation, setCityName]);

    const toggleUnit = () => {
        setUnit(unit === 'C' ? 'F' : 'C');
    };

    return (
        <div className="current-weather">
            {/* <input type="text" placeholder="Enter city" onChange={(e) => setInputLocation(e.target.value)} />
            <button onClick={() => setInputLocation(inputLocation)}>Get Weather</button> */}
            {weather && (
                <div>
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

export default CurrentWeather;
