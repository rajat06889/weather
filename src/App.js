import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import FiveDayForecast from './components/FiveDayForecast';
import Search from './components/Search';
import './App.css';

function App() {
    const [location, setLocation] = useState('New Delhi');
    const [cityName, setCityName] = useState('New Delhi');

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Current Weather</Link></li>
                        <li><Link to="/hourly">Hourly Forecast</Link></li>
                        <li><Link to="/five-day">5-Day Forecast</Link></li>
                        <li><Link to="/search">Search by City</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<CurrentWeather setLocation={setLocation} setCityName={setCityName} />} />
                    <Route path="/hourly" element={<HourlyForecast location={location} cityName={cityName} />} />
                    <Route path="/five-day" element={<FiveDayForecast location={location} cityName={cityName} />} />
                    <Route path="/search" element={<Search setLocation={setLocation} setCityName={setCityName} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
