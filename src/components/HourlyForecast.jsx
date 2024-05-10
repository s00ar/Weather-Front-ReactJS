import { useDispatch, useSelector } from "react-redux";
import "../styles/HourlyForecast.scss";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import {
  selectInputValue,
  selectApiKey,
} from "../Redux/Slices/weatherSlice";
import { useState, useEffect } from "react";

const HourlyForecast = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);
  const weatherData = useSelector((state) => state.weather.data);
  const [daysForecasted, setDaysForecasted] = useState(14);
  const apiKey = useSelector(selectApiKey);
  

  let backgroundImage;

  if (weatherData) {
    const weatherType = weatherData.weather[0].main.toLowerCase();
    backgroundImage = `url('/backgrounds/${weatherType}.png')`;
  } else {
    backgroundImage = "url('/backgrounds/default.jpg')";
  }
  const newForecastData = useSelector((state) => state.weather.forecastData);
  const hourlyData = newForecastData?.list;

  useEffect(() => {
    if (inputValue) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=${daysForecasted}&units=metric&appid=${apiKey}`
      )
      .then((res) => res.json())
      .then((newForecastData) => {         
        console.log("New forecast data", newForecastData);
       });
      }
  }, [daysForecasted]);

  if (!hourlyData) return null;

  const formatTime = (timestamp) => {
    const time = new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  const kelvinToFahrenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  const getWindDirection = (deg) => {
    const directions = [
      "North",
      "NorthEast",
      "East",
      "SouthEast",
      "South",
      "SouthWest",
      "West",
      "NorthWest",
    ];

    const index = Math.round(deg / 45) % 8;

    return directions[index];
  };

  const formattedWind = `${getWindDirection(weatherData.wind.deg)}, ${
    weatherData.wind.speed
  } km/h`;

  const getCurrentDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const currentDay = currentDate.getDate().toString().padStart(2, "0");
    return `${currentYear}-${currentMonth}-${currentDay}`;
  };

  const currentDate = getCurrentDate();

  const filterForecastData = () => {
    const nextDayForecastData = newForecastData.list.filter((item) =>
      item.dt_txt.includes(currentDate)
    );
    return nextDayForecastData;
  };

  const nextDayForecastData = filterForecastData();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  };

  const handleButtonClick = (days) => {
    setDaysForecasted(days);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-[100vh] "
      style={{ backgroundImage }}
    >
      <div className=" flex-[3] md:flex-[6] ">
        <div className="p-6">
          <h1 className="text-center md:text-right text-gray-200">
            21 April 2023 | 11:00
          </h1>
        </div>
        {/* cc */}
        <div className="md:mt-96 text-center md:text-right px-12 ">
          <div className="my-2 p-3">
            <h2 className="text-white  text-3xl md:text-7xl">
              {hourlyData[0].weather[0].main}
            </h2>
            <Divider className="bg-white " />
          </div>

          {/* hourly data */}
          <div className=" ">
            <div className="flex flex-col md:flex-row h-48    overflow-x-scroll overflow-y-scroll ml-8">
              {hourlyData.slice(0, 6).map((hour) => (
                <div key={hour.dt}>
                  <div className="hourly-forecast__item glass flex flex-col scale-[0.75] md:scale-100 rounded-xl mx-3 ">
                    <p>{formatTime(hour.dt)}</p>
                    <br />
                    <img
                      src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                      alt={hour.weather[0].main}
                      className="scale-[2] pl-2"
                    />
                    <br />
                    <p className="ml-3">
                      {Math.floor(kelvinToFahrenheit(hour.main.temp))}°C
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-[7] md:flex-[4] ">
        <div className="div-2  p-8 md:sticky  md:flex-3    md:top-0 md:p-4  glass md:right-0 md:min-h-[100vh]   md:ml-0 overflow-y-scroll max-h-[100vh] bg-red-500 ">
          <div className="hidden md:block ml-12">
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
              <IconButton
                type="button"
                sx={{ p: "10px", color: "#fff" }}
                aria-label="search"
              >
                <LocationOnIcon />
              </IconButton>
            </Paper>
          </div>

          <div className="text-center ">
            {weatherData ? (
              <div>
                {" "}
                <h1 className="text-5xl text-white mt-10 ">
                  {" "}
                  {Math.floor(kelvinToFahrenheit(weatherData.main.temp))}&deg; C
                </h1>
                <div className="flex  justify-center my-3 mb-10 ">
                  <AirOutlinedIcon className="-ml-1 text-sm text-opacity-60 text-gray-100" />
                  <p className="text-sm text-opacity-60 text-gray-100">
                    {formattedWind}
                  </p>
                </div>
                <Divider className=" mx-4 my-4 bg-white mt-16 bg-opacity-50" />
                <div className="sidecard text-left  text-white pl-4">
                  <h2 className="mt-6 text-center my-3 text-lg font-semibold">
                    The Next Days Forecast
                  </h2>
                  <div className="flex justify-around">
                    <button
                      className="bg-gray-200 bg-opacity-30 rounded-md grid place-items-center justify-center p-1"
                      onClick={() => handleButtonClick(5)}
                    >
                      5 Days
                    </button>
                    <button
                      className="bg-gray-200 bg-opacity-30 rounded-md grid place-items-center justify-center p-1"
                      onClick={() => handleButtonClick(14)}
                    >
                      14 Days
                    </button>
                    <button
                      className="bg-gray-200 bg-opacity-30 rounded-md grid place-items-center justify-center p-1"
                      onClick={() => handleButtonClick(30)}
                    >
                      30 Days
                    </button>
                  </div>
                  <div>
                  </div>
                  <div className="">
                    {newForecastData.list.length > 0 ? (
                      <ul>
                        {newForecastData.list.map((item, index) => (
                          <li key={index} className="flex justify-around mt-6">
                            <div className="flex">
                              <div className="bg-gray-200 bg-opacity-30 rounded-md grid place-items-center justify-center">
                                <img
                                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                  alt="Weather Icon"
                                  width="40"
                                />
                              </div>
                              <div className="ml-2">
                                <h5 className="text-opacity-50">
                                  {formatDate(item.dt_txt)}
                                </h5>
                                <p className="text-white text-opacity-60">
                                  {item.weather[0].description}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row">
                              <div className="bg-white w-[1px] h-full bg-opacity-20 mt- text-white"></div>
                              <div className="ml-2 -mt-1">
                                <h5 className="my-1">
                                  {Math.round(
                                    kelvinToFahrenheit(item.main.temp_max)
                                  )}
                                  &deg;
                                </h5>
                                <h5>
                                  {Math.round(
                                    kelvinToFahrenheit(item.main.temp_min)
                                  )}
                                  &deg;
                                </h5>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <h1 className="text-lg text-white">
                        No weather data available
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <h1 className="text-lg text-white">No weather data available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;