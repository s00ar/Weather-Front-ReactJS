import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWeatherData,
  selectInputValue,
  setWeatherData,
  setInputValue,
  selectApiKey,
  selectFormattedDate,
  setFormattedDate,
  selectDaysForecasted,
  setDaysForecasted,
  setForecastData,
  selectForecastData,
} from "../Redux/Slices/weatherSlice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/WeatherInfo.scss";

const Weather = () => {
  const defaultWeatherData = {
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0,
    },
    weather: [{ main: "", description: "" }],
    clouds: { all: 0 },
    wind: { speed: 0 },
  };
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData) || defaultWeatherData;
  const formattedDate = useSelector(selectFormattedDate);
  const forecastData = useSelector(selectForecastData); // Added selector
  const inputValue = useSelector(selectInputValue);
  const apiKey = useSelector(selectApiKey);
  const daysForecasted = useSelector(selectDaysForecasted);

  useEffect(() => {
    const firstApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;

    fetch(firstApiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        const { lon, lat } = data.coord;
        const secondApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`;

        fetch(secondApiUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch");
            }
            return res.json();
          })
          .then((forecastData) => {
            dispatch(setForecastData(forecastData)); // Dispatch forecast data
            dispatch(setWeatherData(data));

            console.log("forecast data", forecastData);

            // Format date and dispatch
            const unixTimestamp = data.dt;
            const date = new Date(unixTimestamp * 1000);
            const months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            const formattedDate = `${date
              .getHours()
              .toString()
              .padStart(2, "0")}:${date
              .getMinutes()
              .toString()
              .padStart(2, "0")}-${days[date.getDay()]},${date.getDate()} ${
              months[date.getMonth()]
            }'${date.getFullYear().toString().substr(-2)}`;
            dispatch(setFormattedDate(formattedDate));
            console.log("Weather ", weatherData);
          })
          .catch((error) =>
            console.error("Error fetching forecast data:", error)
          );
      })
      .catch((error) => console.error("Error fetching current data:", error));
  }, [inputValue]);
  const inputHandler = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  const kelvinToFahrenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  function formatTime(dateTimeString) {
    const timeString = dateTimeString.split(" ")[1].slice(0, 5);
    return timeString;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh]">
      <div className="flex-[3] md:flex-[6] ">
        <div className="w-48 float-right m-2 mt-8 md:hidden">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={inputHandler}
              value={inputValue}
            />
            <IconButton
              type="button"
              sx={{ p: "10px", color: "#fff" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        <div className="flex justify-center pt-48  scale-[0.8] sm:scale-100 md:mt-72 ">
          {weatherData ? (
            <div className="flex  ml-40 md:ml-0  h-24">
              <h1 className="text-center text-7xl mt-2 font-semibold text-white">
                {Math.floor(kelvinToFahrenheit(weatherData.main.temp))}&deg;
              </h1>
              <div className="flex ">
                <h1 className="text-4xl pt-4 ml-4  text-white ">
                  {weatherData.name}
                  <span className="block w-44 text-sm">{formattedDate}</span>
                </h1>
                <img
                  src={`/weather/${weatherData.weather[0].main}.png`}
                  alt={`${weatherData.weather[0].main} weather status icon`}
                  className=" -ml-4 -mt-1 scale-[0.8]"
                />
              </div>
            </div>
          ) : (
            <h1 className="text-lg text-white">No weather data available</h1>
          )}
        </div>
      </div>
      <div className="flex-[7] md:flex-[4] glass flex flex-col justify-center">
        <div className="hidden md:block mt-6 ml-12">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              backgroundColor: "transparent",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={inputHandler}
              value={inputValue}
            />
            <IconButton
              type="button"
              sx={{ p: "10px", color: "#fff" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        <div className="text-center flex justify-center mt-6 md:mt-0 max-h-[60vh] md:max-h-[88vh] overflow-scroll">
          {weatherData ? (
            <div>
              {" "}
              <p className=" text-white text-opacity-70 md:mt-12 md:text-left  ">
                {" "}
                Weather Details...
              </p>
              <div className="sidecard text-left  text-white pl-4 ">
                <h2 className="mt-4 text-sm md:-ml-2">
                  {weatherData.weather[0].description.toUpperCase()}
                </h2>
                <ul className="sidecard__info--list text-gray-100  text-xs gap-y-4 sm:w-72 md:-ml-2">
                  <li className="flex justify-between mt-6 ">
                    <h5 className="text-opacity-50"> Temp max</h5>{" "}
                    <div className="flex">
                      <h5>
                        {kelvinToFahrenheit(weatherData.main.temp_max)}&deg;
                      </h5>
                      <DeviceThermostatOutlinedIcon className="text-red-300 -mt-1" />
                    </div>
                  </li>

                  <li className="flex justify-between mt-6 ">
                    <h5 className="text-opacity-50 ">Temp min</h5>{" "}
                    <div className="flex">
                      <h5>
                        {kelvinToFahrenheit(weatherData.main.temp_min)}
                        &deg;
                      </h5>
                      <DeviceThermostatOutlinedIcon className="text-blue-300 -mt-1" />
                    </div>
                  </li>
                  <li className="flex justify-between mt-6 ">
                    <h5 className="text-opacity-50 ">Humidity</h5>{" "}
                    <div className="flex">
                      <h5>{weatherData.main.humidity}%</h5>
                      <WaterDropOutlinedIcon className=" -mt-1" />
                    </div>
                  </li>
                  <li className="flex justify-between mt-6 ">
                    <h5 className="text-opacity-50 ">Cloudy</h5>{" "}
                    <div className="flex">
                      <h5>{weatherData.clouds.all}%</h5>
                      <FilterDramaOutlinedIcon className=" -mt-1 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between mt-6 mb-12 ">
                    <h5 className="text-opacity-50 ">Wind</h5>{" "}
                    <div className="flex">
                      <h5>{weatherData.wind.speed} m/s</h5>
                      <AirOutlinedIcon className=" -mt-1 ml-1" />
                    </div>
                  </li>
                  <Divider className="hidden md:block text-white bg-white mt-8" />
                </ul>
              </div>
              {/*  */}
              <div className="overflow-scroll md:block sidecard text-left  text-white pl-4">
                <p className="text-left p-4 text-white text-opacity-70 mt-6  ">
                  {" "}
                  Today&apos;s weather forecast...
                </p>
                {forecastData && forecastData.list && (
                  <div>
                    {forecastData.list.slice(0, 5).map((item, index) => (
                      <div
                        className="flex justify-between w-72 my-4"
                        key={index}
                      >
                        <div>
                          {" "}
                          <p> {formatTime(item.dt_txt)}</p>
                          <p>{item.weather[0].main}</p>
                        </div>
                        <div>
                          <p>
                            {" "}
                            {Math.floor(
                              kelvinToFahrenheit(item.main.temp)
                            )}{" "}
                            &deg;
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/*  */}
            </div>
          ) : (
            <h1 className="text-lg text-white">No weather data available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
