import React from 'react';

function CarList({ cars, onSelectCar }) {
  return (
    <ul className="car-list">
      <h1>Menu</h1>
      {cars.map((car) => (
        <li key={car.id} onClick={() => onSelectCar(car)}>
          {car.name}
        </li>
      ))}
    </ul>
  );
}

export default CarList;
