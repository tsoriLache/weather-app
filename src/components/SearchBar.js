import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeCity } from '../actions/weatherActions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = ({ target }) => {
    setCity(target.value);
  };

  const handleAdd = () => {
    dispatch(changeCity(city));
    setCity('');
  };

  return (
    <div className="Search">
      <input
        value={city}
        type="text"
        className="Searchbar"
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        ➕
      </button>
    </div>
  );
}
