// theme.js
import { createTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

// Base design tokens (e.g., colors, typography)
const baseTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  },
};

// Function to create the final theme with locale
export default function createAppTheme(locale = 'enUS') {
  const localeSetting = locales[locale] || locales.enUS; // fallback
  return createTheme(baseTheme, localeSetting);
}
