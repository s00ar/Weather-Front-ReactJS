import React from 'react';
import './styles/hourlyForecast.scss';

function HourlyForecast({ hourlyData }) {
  if (!hourlyData) return null;

  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast__list">
        {hourlyData.map((hour) => (
          <HourlyForecastItem key={hour.dt} hour={hour} />
        ))}
      </div>
    </div>
  );
}

const HourlyForecastItem = ({ hour }) => {
  const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="hourly-forecast__item">
      <p>{time}</p>
      <img
        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
        alt={hour.weather[0].main}
      />
      <p>{hour.temp}°C</p>
    </div>
  );
};

export default HourlyForecast;
