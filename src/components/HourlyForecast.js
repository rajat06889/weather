import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HourlyForecast.css';

function HourlyForecast({ location, cityName }) {
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHourlyData = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=115b85e790824228be8174623242709&q=${location}&hours=24`);
                if (response.data && response.data.forecast && response.data.forecast.forecastday && response.data.forecast.forecastday[0]) {
                    setHourlyData(response.data.forecast.forecastday[0].hour);
                } else {
                    setError('Invalid response from API');
                }
            } catch (err) {
                setError('Failed to fetch hourly data.');
                console.error(err);
            }
        };

        if (location) {
            fetchHourlyData();
        }
    }, [location]);

    return (
        <div className="hourly-forecast">
            <h1>Hourly Forecast for {cityName}</h1>
            {error && <p>{error}</p>}
            <ul>
                {hourlyData.map(hour => (
                    <li key={hour.time}>
                        <p>Time: {hour.time.split(' ')[1]}</p>
                        <p>Temp: {hour.temp_c}°C</p>
                        <p>Condition: {hour.condition.text}</p>
                        <img src={`https:${hour.condition.icon}`} alt="Weather icon" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HourlyForecast;
