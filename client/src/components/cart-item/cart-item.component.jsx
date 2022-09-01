import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cart";
import "./cart-item.style.css";

const CartItem = ({ cartItem }) => {
  const { id, name, imageURL, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(id));

  return (
    <div className='cart-item-container'>
      <img src={imageURL} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          <Button className='quantity-btn' onClick={removeItemHandler}>
            -
          </Button>
          <span>{quantity}</span>
          <Button className='quantity-btn' onClick={addItemHandler}>
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
