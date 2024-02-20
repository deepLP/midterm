import React, { Component } from 'react';

class CarDetails extends Component {
  render() {
    const { selectedCar } = this.props;
    if (!selectedCar) { 
      // it will Check if selectedCar is null
      return <div className="car-details">Please select a car to view its details.</div>;
    }

    return (
      <div className="car-details">
        <h2>{selectedCar.name}</h2>
        <p>Model: {selectedCar.model}</p>
        <p>Year: {selectedCar.year}</p>
        <p>Color: {selectedCar.color}</p>
        <img src={selectedCar.imageUrl} alt={selectedCar.name} className="car-image" />
      </div>
    );
  }
}

export default CarDetails;
