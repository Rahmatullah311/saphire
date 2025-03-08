import MUIAuthAppProvider from "../../providers/MUIAuthAppProvider";
import MUILogin from "./pages/MUILogin";
import { ToastContainer } from "react-toastify";
const AuthRouteProviders = () => {
  return (
    <>
      <MUIAuthAppProvider />
      <ToastContainer />
    </>
  );
};
export const AuthRoutes = [
  {
    path: "/auth",
    element: <AuthRouteProviders />,
    children: [
      {
        path: "login",
        element: <MUILogin />, // an auth middleware must be implemented here
        // errorElement: <p>Error occured</p>,
      },
    ],
  },
];
