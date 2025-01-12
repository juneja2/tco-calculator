import React, { useState } from 'react';
import Rent from '../Rent/Rent';
import EstimatedCost from '../EstimatedCost/EstimatedCost';

function RentCalculatorForm() {
  const [showEstimatedCost, setShowEstimatedCost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setShowEstimatedCost(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Rent />
      {!showEstimatedCost && <button type="Submit">Submit</button>}
      {showEstimatedCost && <EstimatedCost />}
    </form>
   ) 
}

export default RentCalculatorForm;