import React, { useState } from 'react';
import Weather from "./components/Weather";
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import './styles/App.scss';

export const ThemeContext = React.createContext();

function App() {
  const maxLength = 32;
  const [inputValue, setInputValue] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);    
  }

  const apiKey = import.meta.env?.VITE_REACT_APP_API_KEY;
  
  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= maxLength) {
      setInputValue(value);
    } else {
      alert(`Maximo de ${maxLength} caracteres excedido!`);
    }
  };

  const handleButtonClick = () => {
    setShowWeather((prevShowWeather) => !prevShowWeather);
  };

  const themeStyles = {
    // backgroundColor: darkTheme ? '#8585852a' : '#CCC',
    backgroundImage: '/weather/${apiData.weather[0].main}.png',
    color: darkTheme ? '#CCC' : '#fff',
    padding: '10px',
    margin: '10px',
    // backgroundImage: `url(/backgrounds/${apiData.weather[0].main}.png)`
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="" style={themeStyles}>
      <button onClick={toggleTheme}>Dark/Light mode</button>
      <ThemeContext.Provider value={weatherData} >
        <Header />
        <Weather apiKey={apiKey} />
        <WeatherInfo apiKey={apiKey} />
      </ThemeContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
