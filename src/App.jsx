import React, { useState } from 'react'
import Weather from "./pages/Weather";
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import './styles/App.scss'
import {ThemeProvider} from './ThemeContext';

export const ThemeContext = React.createContext()

function App() {
  const maxLength = 32;
  const [inputValue, setInputValue] = useState("");
  const [showWeather, setShowWeather] = useState(false);
 
  const apiKey = "60a7370e0d26c3ce74a68b7dcad162f5"
  console.log('API Key:', apiKey);
  // Print environment variables
  console.log('All Env Variables:', import.meta.env);
  
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
  return (
    <>
      <ThemeProvider>
        <button onClick={toggleTheme}>Dark/Light mode</button>
        <div className="">
          <Header />
          <Weather apiKey={apiKey} />
          <SearchResults apiKey={apiKey} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App
