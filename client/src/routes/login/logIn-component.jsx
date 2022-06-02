import SignIn from "../../components/signin/sign-in.component";
import "./login-style.css";

const LogIn = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-description">
        <h1>Login</h1>
        <p>Get Access to your Orders,Wishlist and Recommendations</p>
      </div>
      <div className="login-form-container">
        <SignIn />
      </div>
    </div>
  );
};

export default LogIn;
