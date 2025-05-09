import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, logout } from "../apps/auth/authSlice";
import { isTokenExpired } from "../utils/customTokenValidator";

const CustomAuthProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkTokenValidation = async () => {
      if (isTokenExpired(accessToken)) {
        try {
          const resultAction = await dispatch(refreshToken()).unwrap();
          if (!resultAction.access) {
            throw new Error("Failed to refresh token");
          }
        } catch (error) {
          dispatch(logout());
          navigate("/auth/login");
        }
      }
    };

    checkTokenValidation();
    const interval = setInterval(checkTokenValidation, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(interval);
  }, [dispatch, navigate, accessToken]);

  if (!isAuthenticated) {
    navigate("/auth/login");
    return null;
  }
};

export default CustomAuthProvider;
