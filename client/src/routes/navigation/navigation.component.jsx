import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartLogo from "../../components/cart-logo/cart-logo.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Navbar, Container } from "react-bootstrap";
import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import "./navigation.style.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, cartCount } = useContext(CartContext);
  const SignInUser = () => {
    return (
      <NavLink
        to="/signin"
        className="signin-register-link"
        style={({ isActive }) => activeLinkHandler(isActive)}
      >
        SignIn
      </NavLink>
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
      <NavLink
        to="/register"
        className="signin-register-link"
        style={({ isActive }) => activeLinkHandler(isActive)}
      >
        Register
      </NavLink>
    );
  };
  const signOutHandler = async () => {
    await signOutUser();
  };
  const activeLinkHandler = (isActive) => {
    return { color: isActive ? "orange" : "" };
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
            <NavLink
              to="/home"
              style={({ isActive }) => activeLinkHandler(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              style={({ isActive }) => activeLinkHandler(isActive)}
            >
              Products
            </NavLink>
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
