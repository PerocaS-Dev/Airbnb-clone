import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login_title">
        <p>Login</p>
      </div>

      <div className="input_section">
        <p>Username</p>
        <input type="text" />
      </div>

      <div className="input_section">
        <p>Password</p>
        <input type="password" />
      </div>

      <div className="forgot_password">
        <p>Forgot Password ?</p>
      </div>

      <div className="login_button">
        <p>Login</p>
      </div>
    </div>
  );
};

export default Login;
