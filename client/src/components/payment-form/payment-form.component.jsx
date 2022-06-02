import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import "./payment-form.styles.css";

const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <h2>Credit Card Payment: </h2>
      <CardElement />
      <Button>Pay now</Button>
    </div>
  );
};
export default PaymentForm;
// className="payment-form-container"
//className="form-container"
