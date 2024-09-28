import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WeatherComponent.css';  // Ensure the CSS file is linked

const WeatherComponent = ({ weatherData, unit, setWeatherData, setUnit }) => {
  // Log weather data whenever it updates to help with debugging
  useEffect(() => {
    console.log("Weather Data Updated:", weatherData);
  }, [weatherData]);

  // Toggle between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className="weather-app">
      <h2>Weather App</h2>

      {/* Button to go to Search Page */}
      <Link to="/search">
        <button className="search-button">Go to Search Page</button>
      </Link>

      {/* Toggle for Unit Conversion */}
      <button onClick={toggleUnit}>
        Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
      </button>

      {/* Loading and Error Messages */}
      {!weatherData && <p className="loading-message">No weather data available.</p>}

      {/* Display Weather Data */}
      {weatherData && (
        <div className="weather-data">
          <h3>Weather in {weatherData.location.name}</h3>
          <p>
            Temperature: {unit === 'C' 
              ? `${weatherData.current.temp_c}°C` 
              : `${weatherData.current.temp_f}°F`}
          </p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt="Weather icon" />

          {/* Hourly Forecast */}
          <div className="hourly-forecast">
            <h3>Hourly Forecast</h3>
            <div className="hourly-list">
              {weatherData.forecast.forecastday[0].hour.map((hourData, index) => (
                <div key={index} className="hour">
                  <p>{hourData.time.split(' ')[1]}</p>  {/* Display only the time */}
                  <p>{unit === 'C' ? `${hourData.temp_c}°C` : `${hourData.temp_f}°F`}</p>
                  <img src={hourData.condition.icon} alt="Weather icon" />
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="five-day-forecast">
            <h3>5-Day Forecast</h3>
            {weatherData.forecast.forecastday.map((dayData, index) => (
              <div key={index} className="day">
                <p>{dayData.date}</p>
                <p>
                  High: {unit === 'C' ? `${dayData.day.maxtemp_c}°C` : `${dayData.day.maxtemp_f}°F`}, 
                  Low: {unit === 'C' ? `${dayData.day.mintemp_c}°C` : `${dayData.day.mintemp_f}°F`}
                </p>
                <img src={dayData.day.condition.icon} alt="Weather icon" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
