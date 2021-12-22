import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = ({ target }) => {
    setCity(target.value);
  };

  const handleSearch = () =>
    dispatch({ type: 'CHANGE_WEATHER', payload: { city } });

  return (
    <div className="Search">
      <input
        type="text"
        className="Searchbar"
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        🔎
      </button>
    </div>
  );
}
