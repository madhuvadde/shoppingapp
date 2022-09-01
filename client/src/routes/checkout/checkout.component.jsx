import { useSelector } from "react-redux";
import { getCartTotal } from "../../store/cart";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.style.css";
const Checkout = () => {
  const {
    cart: { list: cartItems },
  } = useSelector((store) => store);
  const cartTotal = getCartTotal(cartItems);
  return (
    <div>
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>

          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        <div className='checkout-items'>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <span className='total'>Total: Rs.{cartTotal}</span>
      </div>
    </div>
  );
};
export default Checkout;
