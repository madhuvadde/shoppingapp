import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../forminput/form-input.component";
import Button from "../button/button.component";

import "./signup-form.style.css";
const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();

    navigate("/products");
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const displayName = `${firstName} ${lastName}`;
      await createUserDocumentFromAuth(user, { displayName });

      navigate("/products");
      resetFormFields();
    } catch (error) {
      const { code } = error;
      switch (code) {
        case "auth/email-already-in-use":
          return alert("Cannot create user, email already in use");
        case "auth/weak-password":
          return alert("Password must contain alteast 6 characters");
        default:
          alert("User creation encountered an error", error);
      }
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit" className="signUp-btn">
          Signup
        </Button>
        <Button
          className="signUp-btn"
          onClick={logGoogleUser}
          style={{ backgroundColor: "blue" }}
        >
          Signup with Google
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
