import React, { useState } from "react";
import "../styles/ForecastSelector.scss";

function ForecastSelector({ onSelect }) {
  const [selectedDays, setSelectedDays] = useState(5);

  const handleSelectChange = (event) => {
    const days = parseInt(event.target.value);
    setSelectedDays(days);
    if (onSelect) onSelect(days);
  };

  return (
    <div className="forecast-selector">
      <h3>Select Forecast Duration:</h3>
      <select
        className="bg-black"
        value={selectedDays}
        onChange={handleSelectChange}
      >
        <option value="5">5 Days</option>
        <option value="14">14 Days</option>
        <option value="30">30 Days</option>
      </select>
    </div>
  );
}

export default ForecastSelector;
