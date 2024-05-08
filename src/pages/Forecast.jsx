import React from 'react';
import './styles/forecast.scss';
import { useTheme } from './context/ThemeContext.jsx';
import ForecastSelector from '../components/ForecastSelector';
import DailyForecast from '../components/DailyForecast';

function Forecast() {
  const { darkTheme } = useTheme();

  return (
    <div className={`forecast ${darkTheme ? 'forecast--dark' : ''}`}>
      <div className="forecast__location">
        <h1>Location</h1>
      </div>
      <div className="forecast__current-weather">
        <h2>Temperature</h2>
        <p>18°C</p>
        <p>Wind: 5 m/s (North)</p>
      </div>
      <div className="forecast__next-days">
        <h2>Forecast</h2>
        <ForecastSelector />
        <DailyForecast />
      </div>
    </div>
  );
}

export default Forecast;
