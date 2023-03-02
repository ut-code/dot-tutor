import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>点字学習ソフトウェア</title>
        <meta name="description" content="点字学習ソフトウェアです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h5" component="h1" flexGrow={1}>
            点字学習ソフトウェア
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Link
              href="/"
              component={NextLink}
              color="inherit"
              underline="hover"
              sx={{ fontSize: "large" }}
            >
              Home
            </Link>
            <IconButton
              color="inherit"
              href="https://github.com/ut-code/learn-braille"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <main>
        <h1>ホーム</h1>
        <NextLink href="/keyboard">点字キーボード</NextLink>
        <br />
        <NextLink href="/touch">Web 点字器</NextLink>
      </main>
    </>
  );
}
