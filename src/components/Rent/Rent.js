import { useDispatch, useSelector } from 'react-redux';
import { setRent } from '../../redux/slices/rentCalculatorSlice';
import DecimalInput from '../DecimalInput/DecimalInput';

function Rent() {
  const rent = useSelector((state) => state.rentCalculator.rent);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(setRent(value));
  }

  return (
    <DecimalInput name="Rent" value={rent} onChange={onChange} placeholder={1591.21}/>
  )
}

export default Rent;