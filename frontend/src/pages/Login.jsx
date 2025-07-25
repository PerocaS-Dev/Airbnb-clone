import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../src/context/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { isLoggedIn, user, logout, login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath =
    location.state?.from === "host" ? "/admin" : location.state?.from || "/";

  const logginButtonHandler = () => {
    if (username.trim() === "" || password.length < 8) {
      alert("Incorrect username or password");
    } else {
      login({ name: username });
      navigate(redirectPath);
    }
  };

  return (
    <div className="login">
      <div className="login_title">
        <p>Login</p>
      </div>

      <div className="input_section">
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

      <button className="login_button" onClick={logginButtonHandler}>
        Login
      </button>
    </div>
  );
};

export default Login;
