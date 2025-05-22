import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import MUIRTLTheme from "../themes/MUIRTLTheme";


const MUIThemeProvider = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
