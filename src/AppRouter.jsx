import React from "react";
import { createBrowserRouter } from "react-router";
import MUIAppProvider from "./providers/MUIAppProvider";
import CustomAuthProvider from "./providers/CustomAuthProvider";
import MUIDashboardLayout from "./layouts/MUIDashboardLayout";
import AccountRoutes from "./apps/account/AccountRoutes";
import OrderRoutes from "./apps/orders/OrderRoutes";
import { AuthRoutes } from "./apps/auth/AuthRoutes";

const Providers = () => {
  return (
    <React.Fragment>
      <MUIAppProvider />
      <CustomAuthProvider />
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
        children: [...AccountRoutes, ...OrderRoutes],
      },
    ],
  },
  ...AuthRoutes,
]);

export default AppRouter;
