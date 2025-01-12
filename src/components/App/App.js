import RentCalculatorForm from '../RentCalculatorForm/RentCalculatorForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Rent calculator</header>
      <ErrorMessage />
      <RentCalculatorForm />
    </div>
  );
}

export default App;
