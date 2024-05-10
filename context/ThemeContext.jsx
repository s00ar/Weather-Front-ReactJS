import React, { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();
export const WeatherDataContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useWeatherData() {
  return useContext(WeatherDataContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedState, setSelectedState] = useState("London");
  const apiKey = import.meta.env?.VITE_REACT_APP_API_KEY;

  const kelvinToFahrenheit = (k) => (k - 273.15).toFixed(2);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = () => {
    setSelectedState(inputValue);
  };

  const fetchWeatherData = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedState}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [selectedState, apiKey]);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  const contextValue = {
    darkTheme,
    toggleTheme,
    weatherData,
    inputValue,
    setInputValue,
    submitHandler,
    kelvinToFahrenheit,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
    <WeatherDataContext.Provider value={weatherData}>
      {children}
    </WeatherDataContext.Provider>
  </ThemeContext.Provider>
  );
}

export default ThemeProvider;
