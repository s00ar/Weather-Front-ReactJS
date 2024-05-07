import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
const WeatherDataContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useWeatherData() {
  return useContext(WeatherDataContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function toggleTheme() {
    setDarkTheme(prev => !prev);
  }
// 

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <WeatherDataContext.Provider value={{ weatherData }}>
        {children}
      </WeatherDataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;