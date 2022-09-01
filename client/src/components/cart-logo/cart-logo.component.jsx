import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "./../../store/cart";
import Cart from "./cart.svg";
import "./cart-logo.style.css";
const CartLogo = () => {
  const dispatch = useDispatch();
  const {
    cart: { isCartOpen },
  } = useSelector((store) => store);

  const toggleIsCartOpen = () => {
    dispatch(toggleCart(!isCartOpen));
  };
  return (
    <div className='cart-logo' onClick={toggleIsCartOpen}>
      <img src={Cart} alt='Cart' width='50' height='50' />
    </div>
  );
};
export default CartLogo;
