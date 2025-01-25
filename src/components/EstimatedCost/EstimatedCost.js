import { useSelector } from "react-redux";

function EstimatedCost() {
  const rent = parseFloat(useSelector((state) => state.rentCalculator.rent));
  const water = parseFloat(useSelector((state) => state.rentCalculator.water));
  const electricity = parseFloat(useSelector((state) => state.rentCalculator.electricity));
  const gas = parseFloat(useSelector((state) => state.rentCalculator.gas));
  const internet = parseFloat(useSelector((state) => state.rentCalculator.internet));
  const trash = parseFloat(useSelector((state) => state.rentCalculator.trash));

  const estimatedCost = rent + water + electricity + gas + internet + trash;

  return (
    <div>Estimated Cost = {estimatedCost}</div>
  );
}

export default EstimatedCost;