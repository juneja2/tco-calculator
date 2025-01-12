import { useSelector } from "react-redux";

function ErrorMessage() {
  const message = useSelector((state) => state.error.message);
  if (message.length !== 0) {
    return (<div>{message}</div>);
  }
  return (<></>);
}

export default ErrorMessage;