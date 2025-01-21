import { useSelector } from "react-redux";

function EstimatedCost() {
  const rent = parseFloat(useSelector((state) => state.rentCalculator.rent));
  const electricity = parseFloat(useSelector((state) => state.rentCalculator.electricity));

  const estimatedCost = rent + electricity;

  return (
    <div>Estimated Cost = {estimatedCost}</div>
  );
}

export default EstimatedCost;