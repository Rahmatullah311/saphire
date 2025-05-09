import React from "react";
import { createBrowserRouter } from "react-router";
import MUIAppProvider from "./providers/MUIAppProvider";
import CustomAuthProvider from "./providers/CustomAuthProvider";
import MUIDashboardLayout from "./layouts/MUIDashboardLayout";
import AccountRoutes from "./apps/account/AccountRoutes";
import OrderRoutes from "./apps/orders/OrderRoutes";
import { AuthRoutes } from "./apps/auth/AuthRoutes";
import ProductRoutes from "./apps/products/ProductRoutes";
import { ToastContainer } from "react-toastify";

const Providers = () => {
  return (
    <React.Fragment>
      <MUIAppProvider />
      <CustomAuthProvider />
      <ToastContainer />
    </React.Fragment>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Providers />,
    children: [
      {
        path: "/",
        element: <MUIDashboardLayout />,
        children: [...AccountRoutes, ...OrderRoutes, ...ProductRoutes],
      },
    ],
  },
  ...AuthRoutes,
]);

export default AppRouter;
