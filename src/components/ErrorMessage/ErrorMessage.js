import { useSelector } from "react-redux";
import "./ErrorMessage.css";

function ErrorMessage() {
  const message = useSelector((state) => state.error.message);
  if (message.length !== 0) {
    return (<div className="error-message">{message}</div>);
  }
  return (<></>);
}

export default ErrorMessage;