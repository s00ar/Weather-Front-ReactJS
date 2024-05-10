import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../Slices/darkMode';
import weatherReducer from '../Slices/weatherSlice'
export const store=configureStore({
    reducer:{
        darkmode:darkModeReducer,
        weather: weatherReducer,
    }
});