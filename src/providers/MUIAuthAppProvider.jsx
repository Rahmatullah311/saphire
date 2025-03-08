import React from "react";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router-dom";

const MUIAuthAppProvider = () => {
  return (
    <ReactRouterAppProvider>
      <Outlet />
    </ReactRouterAppProvider>
  );
};

export default MUIAuthAppProvider;
