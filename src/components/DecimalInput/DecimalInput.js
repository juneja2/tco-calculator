import { useDispatch } from 'react-redux';
import { setErrorMessage, resetErrorMessage } from '../../redux/slices/errorSlice';
import './DecimalInput.css';

function DecimalInput(props) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e);
    const inputValue = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;

    if (inputValue.length !== 0 && regex.test(inputValue)) {
      dispatch(resetErrorMessage());
    } else {
      dispatch(setErrorMessage("Invalid decimal value. Only two decimal places allowed. Valid example: 123.21, Invalid example: 123.213"))
    }

    props.onChange(inputValue);
  }

  return (
    <div className="decimal-input-container">
      <label className="decimal-input-label"><strong>{props.name}</strong></label>
      <input className="decimal-input" type="text" value={props.value} onChange={handleChange} placeholder={props.placeholder} />
    </div>
  )
}

export default DecimalInput;