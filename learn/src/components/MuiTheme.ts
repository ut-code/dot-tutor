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
});

export default MuiTheme;
