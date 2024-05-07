import { useState, useEffect } from "react";

const Weather = ({ apiKey }) => {
  const [apiData, setApiData] = useState({});
  const [inputValue, setInputValue] = useState("london");
  const [selectedState, setSelectedState] = useState("London");

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedState}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedState, apiKey]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = () => {
    setSelectedState(inputValue);
  };

  const kelvinToFahrenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          onChange={inputHandler}
          value={inputValue}
          className=""
        />
        <button
          type="button"
          onClick={submitHandler}
          className=""
        >
          🔍
        </button>
      </div>
      <div className="">
        {apiData.main ? (
          <div>
            <img
              src={`/weather/${apiData.weather[0].main}.png`}
              alt={`${apiData.weather[0].main} weather status icon`}
              className=""
            />
            <div>
              <h1 className="">
                {kelvinToFahrenheit(apiData.main.temp)}&deg;
              </h1>
              <h1 className="">
                {apiData.name}
                <br />
                {apiData.weather[0].description}
                <br />
                
                <ul>
                  {/* <li>Max Temp: {kelvinToFahrenheit(apiData.main.temp_max)}&deg;</li>
                  <li>Min Temp: {kelvinToFahrenheit(apiData.main.temp_min)}&deg;</li>
                  <li>Humidity: {apiData.main.humidity}%</li>
                  <li>Clouds: {apiData.clouds.all}%</li>
                  <li>Wind: {apiData.wind.speed} m/s</li> */}
                  {/* Add hourly forecast logic here (requires additional API call) */}
                </ul>
              </h1>
            </div>
          </div>
        ) : (
          <h1>not found.</h1>
        )}
      </div>
    </div>
  );
};

export default Weather;