import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  IconButton,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>点字学習ソフトウェア</title>
        <meta name="description" content="点字学習ソフトウェアです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AppBar component="nav">
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
            <Image
              src="/logo-black-background.svg"
              alt="ロゴ"
              width="150"
              height="40"
            />
            <Typography variant="h5" component="div">
              点字学習ソフトウェア
            </Typography>
          </Stack>
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
      <Box m={2}>
        <main>
          <Box m={2}>
            <Typography variant="h5" component="h1">
              ようこそ
            </Typography>
            <Typography variant="body1" component="p">
              ここでは、チュートリアル形式で点字について学ぶことができます。
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={async () => await router.push("/keyboard")}
                >
                  <CardMedia component="img" image="/logo.svg" />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      点字キーボード
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={async () => await router.push("/touch")}
                >
                  <CardMedia component="img" image="/logo.svg" />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Web 点字器
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </main>
      </Box>
    </>
  );
}
