import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRent, setPetRent, setWater, setElectricity, setGas, setInternet, setTrash, setSewer, setPestControl } from '../../redux/slices/rentCalculatorSlice';
import DecimalInput from '../DecimalInput/DecimalInput';
import EstimatedCost from '../EstimatedCost/EstimatedCost';
import "./RentCalculatorForm.css";

function RentCalculatorForm() {
  const [showEstimatedCost, setShowEstimatedCost] = useState(false);

  const rent = useSelector((state) => state.rentCalculator.rent);
  const petRent = useSelector((state) => state.rentCalculator.petRent);
  const water = useSelector((state) => state.rentCalculator.water);
  const electricity = useSelector((state) => state.rentCalculator.electricity);
  const gas = useSelector((state) => state.rentCalculator.gas);
  const internet = useSelector((state) => state.rentCalculator.internet);
  const trash = useSelector((state) => state.rentCalculator.trash);
  const sewer = useSelector((state) => state.rentCalculator.sewer);
  const pestControl = useSelector((state) => state.rentCalculator.pestControl);

  const dispatch = useDispatch();

  const onRentChange = (value) => dispatch(setRent(value));
  const onPetRentChange = (value) => dispatch(setPetRent(value));
  const onWaterChange = (value) => dispatch(setWater(value));
  const onElectricityChange = (value) => dispatch(setElectricity(value));
  const onGasChange = (value) => dispatch(setGas(value));
  const onInternetChange = (value) => dispatch(setInternet(value));
  const onTrashChange = (value) => dispatch(setTrash(value));
  const onSewerChange = (value) => dispatch(setSewer(value));
  const onPestControlChange = (value) => dispatch(setPestControl(value));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setShowEstimatedCost(true);
  }

  return (
    <form className="rent-calculator-form-container" onSubmit={handleSubmit} >
      <DecimalInput name="Rent" value={rent} onChange={onRentChange} placeholder={1591.21} />
      <DecimalInput name="Pet Rent" value={petRent} onChange={onPetRentChange} placeholder={50.37} />
      <DecimalInput name="Water" value={water} onChange={onWaterChange} placeholder={31.21} />
      <DecimalInput name="Electricity" value={electricity} onChange={onElectricityChange} placeholder={100.57} />
      <DecimalInput name="Gas" value={gas} onChange={onGasChange} placeholder={50.62} />
      <DecimalInput name="Internet" value={internet} onChange={onInternetChange} placeholder={80.32} />
      <DecimalInput name="Trash" value={trash} onChange={onTrashChange} placeholder={50.92} />
      <DecimalInput name="Sewer" value={sewer} onChange={onSewerChange} placeholder={20.46} />
      <DecimalInput name="Pest Control" value={pestControl} onChange={onPestControlChange} placeholder={20.12} />
      {!showEstimatedCost && <button className="rent-calculator-submit-button" type="Submit">Submit</button>}
      {showEstimatedCost && <EstimatedCost />}
    </form>
   ) 
}

export default RentCalculatorForm;