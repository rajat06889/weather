import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FiveDayForecast.css';

function FiveDayForecast({ location, cityName }) {
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=115b85e790824228be8174623242709&q=${location}&days=5`);
                if (response.data && response.data.forecast && response.data.forecast.forecastday) {
                    setForecast(response.data.forecast.forecastday);
                } else {
                    setError('Invalid response from API');
                }
            } catch (err) {
                setError('Failed to fetch forecast data.');
                console.error(err);
            }
        };

        if (location) {
            fetchForecast();
        }
    }, [location]);

    return (
        <div className="five-day-forecast">
            <h1>5-Day Forecast for {cityName}</h1>
            {error && <p>{error}</p>}
            <ul>
                {forecast.map(day => (
                    <li key={day.date}>
                        <p>Date: {day.date}</p>
                        <p>Max Temp: {day.day.maxtemp_c}°C</p>
                        <p>Min Temp: {day.day.mintemp_c}°C</p>
                        <p>Condition: {day.day.condition.text}</p>
                        <img src={`https:${day.day.condition.icon}`} alt="Weather icon" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FiveDayForecast;
