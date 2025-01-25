import { useSelector } from "react-redux";

function EstimatedCost() {
  const rent = parseFloat(useSelector((state) => state.rentCalculator.rent));
  const petRent = parseFloat(useSelector((state) => state.rentCalculator.petRent));
  const water = parseFloat(useSelector((state) => state.rentCalculator.water));
  const electricity = parseFloat(useSelector((state) => state.rentCalculator.electricity));
  const gas = parseFloat(useSelector((state) => state.rentCalculator.gas));
  const internet = parseFloat(useSelector((state) => state.rentCalculator.internet));
  const trash = parseFloat(useSelector((state) => state.rentCalculator.trash));
  const sewer = parseFloat(useSelector((state) => state.rentCalculator.sewer));

  const estimatedCost = rent + petRent + water + electricity + gas + internet + trash + sewer;

  return (
    <div>Estimated Cost = {estimatedCost}</div>
  );
}

export default EstimatedCost;