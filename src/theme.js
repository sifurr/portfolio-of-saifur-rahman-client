import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: 'Roboto Mono, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Roboto Mono';
            
          }
        `,
      },
    },
  });