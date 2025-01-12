import { useSelector } from "react-redux";

function EstimatedCost() {
  const rent = useSelector((state) => state.rentCalculator.rent);
  const estimatedCost = rent;
  return (
    <span>Estimated Cost = {estimatedCost}</span>
  );
}

export default EstimatedCost;