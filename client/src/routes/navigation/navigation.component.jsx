import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartLogo from "../../components/cart-logo/cart-logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Navbar, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import "./navigation.style.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, cartCount } = useContext(CartContext);
  const SignInUser = () => {
    return (
      <Link to="/signin" className="signin-register-link">
        SignIn
      </Link>
    );
  };

  const SignOutUser = () => {
    return (
      <span onClick={signOutHandler} className="signin-register-link">
        Sign Out
      </span>
    );
  };

  const RegisterUser = () => {
    return (
      <Link to="/register" className="signin-register-link">
        Register
      </Link>
    );
  };
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        className="navbar-container"
      >
        <Container fluid>
          <div className="navbar-image-container">
            <Link to="/">
              <img src={require("./logo.png")} alt="Logo of sabka bazaar App" />
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="navbar-links-container">
            <div className="navbar-links-container1">
              {currentUser ? <SignOutUser /> : <SignInUser />}
              {currentUser ? "" : <RegisterUser />}
            </div>
            <div className="navbar-link-container2">
              <CartLogo />
              <span className="cart-count">
                {cartCount}{" "}
                {cartCount > 1 || cartCount === 0 ? "items" : "item"}
              </span>
            </div>
          </div>

          {isCartOpen && <CartDropdown />}
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
