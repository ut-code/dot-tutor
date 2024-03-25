import { autocompleteClasses, createTheme } from "@mui/material";

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#2683DA",
    },
    secondary: {
      main: "#EAF4FD",
    },
  },
  typography: {
    fontFamily: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#2683DA",
          color: "#2683DA",
          "&:hover": {
            backgroundColor: "#2683DA",
            color: "white",
          },
        },
      },
    },
  },
});

export default MuiTheme;
