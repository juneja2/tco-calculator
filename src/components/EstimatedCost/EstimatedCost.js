import { useSelector } from "react-redux";

function EstimatedCost() {
  const rent = parseFloat(useSelector((state) => state.rentCalculator.rent));
  const electricity = parseFloat(useSelector((state) => state.rentCalculator.electricity));
  const gas = parseFloat(useSelector((state) => state.rentCalculator.gas));
  const internet = parseFloat(useSelector((state) => state.rentCalculator.internet));

  const estimatedCost = rent + electricity + gas + internet;

  return (
    <div>Estimated Cost = {estimatedCost}</div>
  );
}

export default EstimatedCost;