import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#19857b",
    },
    secondary: {
      main: "#D5E7EB",
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
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        input: {
          fontSize: 25,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: 15,
          fontWeight: "normal",
          marginLeft: "10px",
          paddingBottom: 0,
          border: 0,
          borderRadius: 0,
          borderBottom: "3px solid white",
          "&.Mui-selected": {
            fontWeight: "bold",
            color: "#19857b",
            backgroundColor: "white",
            borderBottom: "2px solid #19857b",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
