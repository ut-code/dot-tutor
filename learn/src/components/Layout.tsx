import TopBar from "@/components/TopBar";
import { Toolbar, Box, ThemeProvider } from "@mui/material";
import MuiTheme from "./MuiTheme";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme={MuiTheme}>
      <TopBar />
      <Toolbar />
      <Box m={2}>
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
}
