import React, { useState } from 'react';
import './styles/forecastSelector.scss';

function ForecastSelector({ onSelect }) {
  const [selectedDays, setSelectedDays] = useState(5);

  const handleSelectChange = (event) => {
    setSelectedDays(parseInt(event.target.value));
    if (onSelect) onSelect(selectedDays);
  };

  return (
    <div className="forecast-selector">
      <h3>Select Forecast Duration:</h3>
      <select value={selectedDays} onChange={handleSelectChange}>
        <option value="5">5 Days</option>
        <option value="14">14 Days</option>
        <option value="30">30 Days</option>
      </select>
    </div>
  );
}

export default ForecastSelector;
