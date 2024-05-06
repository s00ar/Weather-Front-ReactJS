import React, { useState } from 'react';
import '../styles/SearchBox.scss';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
    {/* Show the results from the search done in thebox from the openweathermap service api */}
    </div>
  );
};

export default SearchBox;
