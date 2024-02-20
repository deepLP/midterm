import React, { useState } from 'react';
import CarList from './Components/carList';
import CarDetails from './Components/carDetails';
import cars from './data/data'; 
import './App.css';


function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="main-container" style={{ textAlign: 'center' }}>
    <h1 style={{ color: '#ffffff' }}>Welcome To 23G Motors</h1>
    <div className="content">
      <CarList cars={cars} onSelectCar={setSelectedCar} />
      {selectedCar && <CarDetails selectedCar={selectedCar} />}
    </div>
  </div>
  );
}

export default App;
