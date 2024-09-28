import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = ({ setWeatherData, unit, setUnit }) => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiKey = '115b85e790824228be8174623242709'; // Replace with your WeatherAPI key

  const handleSearch = async () => {
    if (city) {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&hour=24`;
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Log the response data for debugging
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="search-page">
      <h2>Search for a City</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Could not fetch weather data. Please try again later.</p>}
    </div>
  );
};

export default SearchPage;
