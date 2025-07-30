import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import "./Authenticate.css";

const Authenticate = ({ isHostFlow = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("guest");
  const { signup, error, isLoading } = useSignup("");
  const { login, error: login_error, isLoading: login_isLoading } = useLogin();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = role === "Host" ? "/admin" : location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password, role);
    if (success) {
      // Get the original path or use home as fallback
      const fromPath = location.state?.from?.pathname || "/";
      // Redirect hosts to admin, others to their original path
      navigate(role === "host" ? "/admin" : fromPath);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const success = await signup(email, password, role);
    if (success) navigate(redirectPath);
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

      <div className="input_section">
        <p>Sign-Up/Login as a:</p>
        <select
          name="role"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="guest">Guest</option>
          <option value="host">Host</option>
        </select>
      </div>

      <div className="forgot_password">
        <p>Forgot Password ?</p>
      </div>
      <div className="login_or_signup">
        <button
          className="buttons login_button"
          disabled={login_isLoading}
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="buttons signup_button"
          disabled={isLoading}
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
      {(error || login_error) && (
        <div className="error">{error || login_error}</div>
      )}
    </div>
  );
};

export default Authenticate;
