import { Box, CardMedia, Grid, Link, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography variant="h1" align="center">
                Dot Tutor
              </Typography>

              <Box display={"flex"} alignItems="center" justifyContent="center">
                <Box display={"flex"}>
                  <Typography variant="h5" mr={5}>
                    点字を身近に。
                  </Typography>
                  <Typography variant="h5" mr={1}>
                    by
                  </Typography>
                  <img src="/logo.svg" height="38em"></img>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardMedia component="img" image="/image_pic.svg"></CardMedia>
          </Grid>
        </Grid>
        <Box>
          <Link href="https://translate.dot-tutor.com/">
            Dot Tutor Translate (翻訳サイト) はこちら
          </Link>
        </Box>
        <Box>
          <Link href="https://learn.dot-tutor.com/">
            Dot Tutor Learn (学習サイト) はこちら
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default App;
