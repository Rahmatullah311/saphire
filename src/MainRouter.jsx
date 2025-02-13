import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoginForm from "./apps/auth/LoginForm";
import RegisterForm from "./apps/auth/RegisterForm";
import AccountRoutes from "./apps/account/AccountRoutes";
const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login/" element={<LoginForm />} />
        <Route path="/register/" element={<RegisterForm />} />
      </Routes>
      <AccountRoutes />
    </Router>
  );
};

export default MainRouter;
