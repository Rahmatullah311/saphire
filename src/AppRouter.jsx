import { createBrowserRouter } from "react-router";
import MUIAppProvider from "./providers/MUIAppProvider";
import MUIDashboardLayout from "./layouts/MUIDashboardLayout";
import AccountRoutes from "./apps/account/AccountRoutes";
import { AuthRoutes } from "./apps/auth/AuthRoutes";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MUIAppProvider/>,
    children: [
      {
        path: "/",
        element: <MUIDashboardLayout />,
        children: [...AccountRoutes],
      },
    ],
  },
  ...AuthRoutes,
]);

export default AppRouter;
