import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";

import AppRouter from "./AppRouter.jsx";
import store from "./apps/store.js";
import createAppTheme from "./themes/baseTheme.js";
import { createEmotionCache } from "./themes/rtlCache.js";
import { useSelector } from "react-redux";


function AppContent() {
  const localeData = useSelector((state) => state.app.defaultAppLocale);
  const isRTL = localeData.direction === "rtl";

  useEffect(() => {
    document.body.setAttribute("dir", localeData.direction);
  }, [localeData.direction]);

  const theme = React.useMemo(() => createAppTheme(localeData.direction), [localeData.direction]);
  const emotionCache = React.useMemo(() => createEmotionCache(isRTL), [isRTL]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </CacheProvider>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
