import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isTokenExpired } from "../../utils";
import { refreshToken } from "../auth/authSlice";
import { useNavigate } from "react-router";
import MUIDashboard from "../../layouts/MUIDashboard";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);
  useEffect(() => {
    if (isTokenExpired(accessToken)) {
      dispatch(refreshToken()).then((result) => {
        if (result.meta.requestStatus === "rejected")
          return navigate("/login/");
      });
    }
  }, []);
  return (
    <div>
    <MUIDashboard />
      <h1>Hello world from account</h1>
    </div>
  );
};

export default Account;
