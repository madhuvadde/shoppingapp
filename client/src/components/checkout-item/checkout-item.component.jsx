import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart";

import Button from "../button/button.component";
import "./checkout-item.style.css";
const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageURL, price, quantity } = cartItem;
  const disptach = useDispatch();

  const addItemHandler = () => disptach(addItemToCart(cartItem));
  const removeItemHandler = () => disptach(removeItemFromCart(id));
  const clearItemHandler = () => disptach(clearItemFromCart(id));
  return (
    <div className='checkout-item-container'>
      <div className='checkout-details-container'>
        <img src={imageURL} alt={name} />
        <span className='name'>{name}</span>
      </div>

      <div className='checkout-item-details'>
        <div className='quantity-container'>
          <Button className='quantity-btn' onClick={removeItemHandler}>
            -
          </Button>
          <span className='quantity'>{quantity}</span>
          <Button className='quantity-btn' onClick={addItemHandler}>
            +
          </Button>
        </div>
        <div className='price-container'>
          <span className='price'>{price * quantity}</span>
        </div>
        <div className='remove-container'>
          <span className='remove-button' onClick={clearItemHandler}>
            &#10005;
          </span>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
