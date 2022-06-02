import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./checkout-item.style.css";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="checkout-details-container">
        <img src={imageURL} alt={name} />
        <span className="name">{name}</span>
      </div>

      <div className="checkout-item-details">
        <div className="quantity-container">
          <Button className="quantity-btn" onClick={removeItemHandler}>
            -
          </Button>
          <span className="quantity">{quantity}</span>
          <Button className="quantity-btn" onClick={addItemHandler}>
            +
          </Button>
        </div>
        <div className="price-container">
          <span className="price">{price * quantity}</span>
        </div>
        <div className="remove-container">
          <span className="remove-button" onClick={clearItemHandler}>
            &#10005;
          </span>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
