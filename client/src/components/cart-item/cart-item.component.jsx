import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-item.style.css";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageURL} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          <Button className="quantity-btn" onClick={removeItemHandler}>
            -
          </Button>
          <span>{quantity}</span>
          <Button className="quantity-btn" onClick={addItemHandler}>
            +
          </Button>{" "}
          <span>X</span>
          <span> Rs.{price}</span>
        </span>
      </div>
    </div>
  );
};
export default CartItem;
