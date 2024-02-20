import React, { useState } from 'react';
import CarList from './Components/carList';
import CarDetails from './Components/carDetails';
import cars from './data/data'; 
import './App.css';


function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="container">
        <h1>Welcome To 23G Motors</h1>
      <CarList cars={cars} onSelectCar={setSelectedCar} />
      <CarDetails selectedCar={selectedCar} />
    </div>
  );
}

export default App;
