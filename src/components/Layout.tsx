import TopBar from "./TopBar";
import { Toolbar, Box } from "@mui/material";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <TopBar />
      <Toolbar />
      <Box m={2}>
        <main>{props.children}</main>
      </Box>
    </>
  );
}
