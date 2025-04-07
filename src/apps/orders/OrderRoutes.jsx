import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import MUIDashboardLayout from "../../layouts/MUIDashboardLayout";
function OrderRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MUIDashboardLayout/>}>
          <Route path="/orders/" element={<Orders />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default OrderRoutes;
