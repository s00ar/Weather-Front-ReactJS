// Import createSlice function from @reduxjs/toolkit for creating slices
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the dark mode slice
const initialState = {
  mode: JSON.parse(localStorage.getItem('darkMode')) || false, // Check localStorage for dark mode setting, or default to false
};

// Create a slice named 'darkmode' with the initial state and reducers
export const darkModeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => { // Reducer function for toggling dark mode
      state.mode = !state.mode; // Flip the current mode value (true -> false, false -> true)
      localStorage.setItem("darkMode", JSON.stringify(state.mode)); // Update localStorage with the new mode
    },
  },
});

// Export the toggleDarkMode action creator from the slice
export const { toggleDarkMode } = darkModeSlice.actions;

// Export the reducer function of the slice as the default export
export default darkModeSlice.reducer;
