import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "./authSlice";
import { Pending } from "@mui/icons-material";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginCredentials = {
      email: email,
      password: password,
    };
    dispatch(requestLogin(loginCredentials)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/account/')
      }
    })
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="you@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input type={passwordVisible ? "text" : "password"} id="password" className="form-control" placeholder="••••••••" required />
              <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" id="remember-me" className="form-check-input" />
              <label htmlFor="remember-me" className="form-check-label">Remember me</label>
            </div>
            <a href="#" className="text-decoration-none">Forgot your password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isLoading ? <Pending /> : "Sign In"}
          </button>
        </form>
        <p className="mt-3 text-center">
          Don’t have an account? <Link to="/register" className="text-primary">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
