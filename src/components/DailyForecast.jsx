import React from 'react';
import '../styles/DailyForecast.scss';

function DailyForecast({ forecastData }) {
  if (!forecastData) return null;

  return (
    <div className="daily-forecast">
      <h2>Daily Breakdown</h2>
      {forecastData.map((day) => (
        <DailyForecastCard key={day.date} day={day} />
      ))}
    </div>
  );
}

const DailyForecastCard = ({ day }) => {
  return (
    <div className="daily-forecast__card">
      <h3>{day.date}</h3>
      <p>
        <span className="daily-forecast__card__icon">☀️</span> {day.weather}
      </p>
      <p>
        <span className="daily-forecast__card__icon">️</span> Max: {day.temp_max}°C,
        Min: {day.temp_min}°C
      </p>
    </div>
  );
};

export default DailyForecast;
