import React, { useState } from 'react';
import '../styles/WeatherInfo.scss';

const WeatherInfo = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className='sidecard'>
      {/*  */}
    Show the results from the search done in thebox from the openweathermap service api
      <ul className='sidecard__info--list'>
        {/* <li>Max Temp: {kelvinToFahrenheit(apiData.main.temp_max)}&deg;</li>
        <li>Min Temp: {kelvinToFahrenheit(apiData.main.temp_min)}&deg;</li>
        <li>Humidity: {apiData.main.humidity}%</li>
        <li>Clouds: {apiData.clouds.all}%</li>
        <li>Wind: {apiData.wind.speed} m/s</li> */}
        <li>Max Temp: </li>
        <li>Min Temp:</li>
        <li>Humidity:%</li>
        <li>Clouds:%</li>
        <li>Wind:  m/s</li>
      </ul>
    </div>
  );
};

export default WeatherInfo;
