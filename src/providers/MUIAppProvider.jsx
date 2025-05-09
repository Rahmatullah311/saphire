import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestLogout } from "../apps/auth/authSlice";
import { StoreMallDirectoryOutlined } from "@mui/icons-material";
import AddOutlined from '@mui/icons-material/AddOutlined'
import ListOutlined from '@mui/icons-material/ListOutlined'
import CategoryOutlined from '@mui/icons-material/CategoryOutlined'
import BrandingWatermarkOutlined from '@mui/icons-material/BrandingWatermarkOutlined'


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
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ListAltOutlinedIcon />,
  },
  {
    segment: "products",
    title: "Products",
    icon: <StoreMallDirectoryOutlined />,
    children: [
      {
        segment: 'list',
        title: 'Products List',
        icon: <ListOutlined />
      },
      {
        segment: 'new',
        title: 'New Product',
        icon: <AddOutlined />
      },
      {
        segment: 'categories',
        title: 'Product Categories',
        icon: <CategoryOutlined />,
        children: [
          {
            segment: 'list',
            title: 'Product Categories List',
            icon: <ListOutlined />
          },
          {
            segment: 'new',
            title: 'New Product Category',
            icon: <AddOutlined />
          },
        ]
      },
      {
        segment: 'brands',
        title: 'Product Brands',
        icon: <BrandingWatermarkOutlined />,
        children: [
          {
            segment: 'list',
            title: 'Product Brands List',
            icon: <ListOutlined />
          },
          {
            segment: 'new',
            title: 'New Product Brand',
            icon: <AddOutlined />
          },
        ]
      },
    ]
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <SettingsOutlinedIcon />,
    children: [
      {
        title: "General",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Security",
        icon: <SettingsOutlinedIcon />,
      },
    ],
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
