import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import {useSignup} from '../hooks/useSignup'
import {useLogin} from '../hooks/useLogin'
import { Link } from "react-router-dom";
import "./Authenticate.css";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup("");
  const { login, error: login_error, isLoading:login_isLoading } = useLogin("");
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath =
    location.state?.from === "host" ? "/admin" : location.state?.from || "/";

  const loginHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
    // navigate(redirectPath);

  };

  const signupHandler = async (e) => {
    e.preventDefault();
    await signup(email, password);
    // navigate(redirectPath);
  };

  return (
    <div className="login">
      <div className="login_title">
        <p>Login</p>
      </div>

      <div className="input_section">
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input_section">
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="forgot_password">
        <p>Forgot Password ?</p>
      </div>
      <div className="login_or_signup">
        <button className="buttons login_button" disabled={login_isLoading} onClick={loginHandler}>
          Login
        </button>

        <button
          className="buttons signup_button"
          disabled={isLoading}
          onClick={signupHandler}
        >
          Sign Up
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      {error && <div className="error">{login_error}</div>}
    </div>
  );
};

export default Authenticate;
