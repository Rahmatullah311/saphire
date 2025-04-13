import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestLogout } from "../apps/auth/authSlice";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "account",
    title: "Account",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: "Rahmatullah",
};


export default function MUIAppProvider() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user)

  const [session, setSession] = useState({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });
  React.useEffect(() => {
    console.log("user", user);
    if (user) {
      setSession({
        user: {
          name: user.fullname,
          email: user.email,
          image: user.image,
        },
      });
    } else {
      setSession(null);
    }
  }, [user])

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        dispatch(requestLogout());
        setSession(null);
      },
    };
  }, []);

  return (
    <ReactRouterAppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={BRANDING}
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
