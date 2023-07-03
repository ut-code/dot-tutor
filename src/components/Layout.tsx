import TopBar from "@/components/TopBar";
import { Toolbar, Box } from "@mui/material";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <TopBar />
      <Toolbar />
      <Box m={2}>
        <main>{children}</main>
      </Box>
    </>
  );
}
