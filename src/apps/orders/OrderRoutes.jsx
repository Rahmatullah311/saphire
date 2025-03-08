import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import MUIDashboardLayout from "../../layouts/MUIDashboardLayout";
function OrderRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MUIDashboardLayout/>}>
          <Route path="/orders/" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default OrderRoutes;
