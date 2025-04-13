import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
const OrderRoutes = [
  {
    path: "/orders",
    element: <Orders />,
  }
]


export default OrderRoutes;