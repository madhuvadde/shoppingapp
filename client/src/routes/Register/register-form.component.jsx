import SignUpForm from "../../components/signup/signup-form.component";
import "./register-form.style.css";
const Register = () => {
  return (
    <div className="register-form-container">
      <div className="register-form-description">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="register-form">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
