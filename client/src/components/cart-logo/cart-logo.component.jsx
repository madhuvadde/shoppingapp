import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-logo.style.css";
import Cart from "./cart.svg";
const CartLogo = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-logo" onClick={toggleIsCartOpen}>
      <img src={Cart} alt="Cart" width="50" height="50" />
    </div>
  );
};
export default CartLogo;
