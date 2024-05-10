import React from "react";
import "../styles/Main.scss";
import Weather from "../components/Weather.jsx";
import SearchBox from "../components/SearchBox.jsx";
import WeatherDetails from "../components/WeatherDetails.jsx";
import HourlyForecast from "../components/HourlyForecast.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Redux/Slices/darkMode";
import Header from "../components/Header.jsx";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRef } from "react";

function Main() {
  const { mode } = useSelector((state) => state.darkmode);
  const forecastRef = useRef(null);
  const currentRef = useRef(null);

  const scrollToForecast = () => {
    forecastRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCurrent = () => {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`main   ${mode ? "main--dark" : ""}`}>
      <Header />

      <div className="main__weather-container  " ref={currentRef}>
        <Weather />
        <div className="hidden md:block absolute -mt-12 ml-[550px] scale-[3.5] hover:cursor-pointer hover:scale-[3.8] transition-all">
          <KeyboardArrowDownOutlinedIcon
            onClick={scrollToForecast}
            className="  -mt- text-center w-full text-white  text-8xl"
          />
        </div>
      </div>
      <div id="forecast" ref={forecastRef} className=" min-h-[100vh]">
        <div className="hidden md:block absolute -mt- ml-[520px] scale-[3.5] hover:cursor-pointer hover:scale-[3.8] transition-all">
          <KeyboardArrowUpIcon
            onClick={scrollToCurrent}
            className=" absolute -mt text-center w-full text-white  text-8xl"
          />
        </div>

        {/* <SearchBox />  */}
        {/* <WeatherDetails /> */}
        <HourlyForecast />
      </div>
    </div>
  );
}

export default Main;
