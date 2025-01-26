import { useSelector } from "react-redux";
import "./EstimatedCost.css";

function EstimatedCost() {
  const rent = parseFloat(useSelector((state) => state.rentCalculator.rent));
  const petRent = parseFloat(useSelector((state) => state.rentCalculator.petRent));
  const water = parseFloat(useSelector((state) => state.rentCalculator.water));
  const electricity = parseFloat(useSelector((state) => state.rentCalculator.electricity));
  const gas = parseFloat(useSelector((state) => state.rentCalculator.gas));
  const internet = parseFloat(useSelector((state) => state.rentCalculator.internet));
  const trash = parseFloat(useSelector((state) => state.rentCalculator.trash));
  const sewer = parseFloat(useSelector((state) => state.rentCalculator.sewer));
  const pestControl = parseFloat(useSelector((state) => state.rentCalculator.pestControl));

  const estimatedCost = rent + petRent + water + electricity + gas + internet + trash + sewer + pestControl;

  return (
    <div className="estimated-cost"><strong>Estimated Cost = {estimatedCost}</strong></div>
  );
}

export default EstimatedCost;