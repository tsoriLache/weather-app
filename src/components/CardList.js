import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from './WeatherCard';

export default function CardList() {
  const list = useSelector((state) => state.list);
  return (
    <div className="card-list">
      {list.map((cardData) => (
        <WeatherCard key={cardData.city} data={cardData} />
      ))}
    </div>
  );
}
