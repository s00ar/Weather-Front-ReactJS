import React from 'react';
import '../styles/WeatherDetails.scss';

function WeatherDetails({ weatherData }) {
    if (!weatherData) return null;

    return (
      <div className="weather-details">
        <h2>Weather Details</h2>
        <p>
          <span className="weather-details__icon">️</span> Feels Like: {weatherData.feels_like}°C
        </p>
        <p>
          <span className="weather-details__icon"></span> Humidity: {weatherData.humidity}%
        </p>
        <p>
          <span className="weather-details__icon"></span> Wind: {weatherData.wind_speed} m/s ({weatherData.wind_deg}°)
        </p>
        <p>
          <span className="weather-details__icon">☁️</span> Clouds: {weatherData.clouds}%
        </p>
      </div>
    );
  }
  
  export default WeatherDetails;
  