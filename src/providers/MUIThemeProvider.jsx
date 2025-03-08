import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const MUIThemeProvider = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
