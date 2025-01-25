import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRent, setWater, setElectricity, setGas, setInternet, setTrash } from '../../redux/slices/rentCalculatorSlice';
import DecimalInput from '../DecimalInput/DecimalInput';
import EstimatedCost from '../EstimatedCost/EstimatedCost';

function RentCalculatorForm() {
  const [showEstimatedCost, setShowEstimatedCost] = useState(false);

  const rent = useSelector((state) => state.rentCalculator.rent);
  const water = useSelector((state) => state.rentCalculator.water);
  const electricity = useSelector((state) => state.rentCalculator.electricity);
  const gas = useSelector((state) => state.rentCalculator.gas);
  const internet = useSelector((state) => state.rentCalculator.internet);
  const trash = useSelector((state) => state.rentCalculator.trash);

  const dispatch = useDispatch();

  const onRentChange = (value) => dispatch(setRent(value));
  const onWaterChange = (value) => dispatch(setWater(value));
  const onElectricityChange = (value) => dispatch(setElectricity(value));
  const onGasChange = (value) => dispatch(setGas(value));
  const onInternetChange = (value) => dispatch(setInternet(value));
  const onTrashChange = (value) => dispatch(setTrash(value));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setShowEstimatedCost(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <DecimalInput name="Rent" value={rent} onChange={onRentChange} placeholder={1591.21} />
      <DecimalInput name="Water" value={water} onChange={onWaterChange} placeholder={31.21} />
      <DecimalInput name="Electricity" value={electricity} onChange={onElectricityChange} placeholder={100.57} />
      <DecimalInput name="Gas" value={gas} onChange={onGasChange} placeholder={50.62} />
      <DecimalInput name="Internet" value={internet} onChange={onInternetChange} placeholder={80.32} />
      <DecimalInput name="Trash" value={trash} onChange={onTrashChange} placeholder={50.92} />
      {!showEstimatedCost && <button type="Submit">Submit</button>}
      {showEstimatedCost && <EstimatedCost />}
    </form>
   ) 
}

export default RentCalculatorForm;