import React from "react";
import { createTheme } from "@mui/material/styles";
import createCache from '@emotion/cache'



const MUIRTLTheme = (outerTheme) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: outerTheme.palette.mode,
    },
  });

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default MUIRTLTheme;
