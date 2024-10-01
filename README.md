# React Weather Application

This project is a weather application built using React. The application allows users to check the current weather, hourly forecast, and 5-day forecast for a specific location. Users can search for weather data by city and toggle between Celsius and Fahrenheit units.

## Features

- **Current Weather:** Displays the current weather conditions, including temperature, weather description, and icon based on the user's location.
- **Hourly Forecast:** Shows the hourly weather forecast for the day, including temperature, weather condition, and time for each hour.
- **5-Day Forecast:** Displays the weather forecast for the next 5 days, including high and low temperatures and relevant icons.
- **Search by City:** Allows users to search for weather data by entering a city name.
- **Unit Conversion:** Toggle between Celsius and Fahrenheit for temperature display.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Router:** Handles navigation between different pages.
- **Axios:** Library for making HTTP requests to fetch weather data from an external API.
- **CSS:** Styling for the user interface.

## Setup Instructions

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/react-weather-app.git
   cd react-weather-app
2. Install Dependencies: 
   npm install

3. Add Your API Key:
   Replace YOUR_API_KEY in the API request URLs with your actual API key from the weather service you choose to use.
4. Run the Application:
   npm start
5. Open the App in Your Browser:
   Go to http://localhost:3000


## Project Structure:

   react-weather-app/
├── public/
│   ├── images/
│   │   └── w.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CurrentWeather.js
│   │   ├── HourlyForecast.js
│   │   ├── FiveDayForecast.js
│   │   ├── Search.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

## Usage
  - Search for a City:
      Enter the city name in the search bar and click the "Search" button.
      The current weather for the entered city will be displayed.
  - View Hourly Forecast:
      Navigate to the "Hourly Forecast" page using the navigation menu.
      The hourly weather forecast for the selected city will be displayed.
  -  View 5-Day Forecast:
      Navigate to the "5-Day Forecast" page using the navigation menu.
      The 5-day weather forecast for the selected city will be displayed.
  - Toggle Temperature Units:
      Use the toggle button to switch between Celsius and Fahrenheit for temperature display.

## Credits:
   - Weather data provided by WeatherAPI.
   - Background images from Unsplash.

