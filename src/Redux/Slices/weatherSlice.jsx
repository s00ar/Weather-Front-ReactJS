import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    apiKey: import.meta.env?.VITE_REACT_APP_API_KEY,
    data: null,
    forecastData: null, // Add forecastData field
    inputValue: "London",
    formattedDate: "",
    isLoading: false,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
    setForecastData: (state, action) => {
      state.forecastData = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setFormattedDate: (state, action) => {
      state.formattedDate = action.payload;
    },
    setDaysForecasted: (state, action) => {
      state.daysForecasted = action.payload;
    },
  },
});

export const fetchForecastData = createAsyncThunk(
  "weather/fetchForecastData",
  async (days) => {
    const response = await fetch();
    // ... your API call with days parameter
    const data = await response.json();
    return data;
  }
);

export const setDaysForecasted = createAsyncThunk(
  "weather/setDaysForecasted",
  (days) => days
);

export const {
  setWeatherData,
  setForecastData,
  setInputValue,
  setFormattedDate,
} = weatherSlice.actions;

export const selectWeatherData = (state) => state.weather.data;
export const selectForecastData = (state) => state.weather.forecastData; // Add selector
export const selectInputValue = (state) => state.weather.inputValue;
export const selectApiKey = (state) => state.weather.apiKey;
export const selectFormattedDate = (state) => state.weather.formattedDate;
export const selectDaysForecasted = (state) => state.weather.daysForecasted;
export const selectLoading = (state) => state.weather.isLoading;
export default weatherSlice.reducer;
