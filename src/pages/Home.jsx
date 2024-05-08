import React from 'react';
import './styles/main.scss';
import { useTheme } from './context/ThemeContext.jsx';
import Weather from './components/Weather.jsx';

function Main() {
  const { darkTheme } = useTheme();

  return (
    <div className={`main ${darkTheme ? 'main--dark' : ''}`}>
      <div className="main__weather-container">
        <Weather />
      </div>
      <div className="main__details-container">
        <SearchBox /> 
        <WeatherDetails />
        <HourlyForecast />
      </div>
    </div>
  );
}

export default Main;
