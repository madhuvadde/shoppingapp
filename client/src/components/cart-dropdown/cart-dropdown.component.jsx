import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.style.css";

const CartDropdown = () => {
  const { cartItems, cartCount, cartTotal, isCartOpen, setIsCartOpen } =
    useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPageHandler = (e) => {
    if (e.target.textContent === "Start Shopping") {
      navigate("/products");
      setIsCartOpen(!isCartOpen);
    } else {
      navigate("/checkout");
      setIsCartOpen(!isCartOpen);
    }
  };
  const cartCloseHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  const CheckoutButton = () => {
    return (
      <div className="checkout-context">
        <span>Proceed to Checkout</span>
        <div className="checkout-proceed">
          <span>Rs.{cartTotal}</span>
          <span>&gt;</span>
        </div>
      </div>
    );
  };
  const EmptyCartPage = () => {
    return (
      <div className="cart-empty-message">
        <span className="title">No items in your cart</span>
        <span className="description">
          Your favourite items are just a click away
        </span>
      </div>
    );
  };
  const DisplayCartItems = () => {
    return (
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
    );
  };
  const ImageContainer = () => {
    return (
      <div className="lowest-price-container">
        <img src={require("./lowest-price.png")} alt="lowest price" />
        <span>You Won't find it cheaper anywhere</span>
      </div>
    );
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item-count">
        <span className="cart-title">
          My Cart
          {cartCount !== 0
            ? cartCount > 1
              ? `(${cartCount} items)`
              : `(${cartCount} item)`
            : ""}
        </span>
        <span className="cart-close" onClick={cartCloseHandler}>
          &#10005;
        </span>
      </div>
      {cartCount === 0 ? (
        <EmptyCartPage />
      ) : (
        <>
          <DisplayCartItems />
          <ImageContainer />
        </>
      )}
      <div className="card-dropdown-footer">
        {cartCount !== 0 ? (
          <span className="promo-code-message">
            Promo code can be applied on payment page
          </span>
        ) : (
          ""
        )}
        <Button className="checkout-btn" onClick={goToCheckoutPageHandler}>
          {cartCount === 0 ? "Start Shopping" : <CheckoutButton />}
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
