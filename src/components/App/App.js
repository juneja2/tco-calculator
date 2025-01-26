import RentCalculatorForm from '../RentCalculatorForm/RentCalculatorForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rent calculator</h1>
      <hr className="hr-margin-bottom" />
      <ErrorMessage />
      <RentCalculatorForm />
    </div>
  );
}

export default App;
