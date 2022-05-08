import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // confirm password
    if (password !== confirmPassword) {
      alert("password doe not match");
      return;
    }
    try {
      console.log(email, password);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
    } catch (err) {
      console.log("signup error", err);
      if (err.code === "aut/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", err);
      }
    }
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <Button type="inverted">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
