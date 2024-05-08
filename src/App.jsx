import React from 'react';
import './styles/App.scss';
import { ThemeContext, WeatherDataContext } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Weather from './components/Weather.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';
import AppRoutes from './routes/Routes.jsx'; // Import Routes.js

function App() {
  const { toggleTheme } = useContext(ThemeContext); // Access toggleTheme from context

  return (
    <ThemeContext.Provider>
    <AppRoutes />
      <div className="" style={{ padding: '10px', margin: '10px' }}>
        <Header onToggleTheme={toggleTheme} /> {/* Pass toggleTheme function to Header */}
        <WeatherDataContext>
          <Weather />
          <WeatherInfo />
        </WeatherDataContext>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;