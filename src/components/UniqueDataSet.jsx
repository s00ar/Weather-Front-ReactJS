import React from "react";

const UniqueDataSet = ({ uniqueDates }) => {
  return (
    <div>
      <h2>Unique Dates:</h2>
      <ul>
        {Array.from(uniqueDates).map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default UniqueDataSet;
