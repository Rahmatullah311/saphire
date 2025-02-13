import React, { useState } from "react";
import { Visibility, VisibilityOff, Pending, SpaceBarOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Fixed import
import { useDispatch, useSelector } from "react-redux";
import { requestRegister } from "./authSlice";

function RegisterForm() {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    const userCredentials = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      repeat_password: event.target.repeat_password.value,
    };
    dispatch(requestRegister(userCredentials));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Create an Account</h2>
          <form onSubmit={handleRegisterFormSubmit}>
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="••••••••"
                  required
                />
                <span
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="repeat_password" className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="repeat_password"
                  name="repeat_password"
                  className="form-control"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-100">
              {isLoading ? <Pending /> : "Register"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
