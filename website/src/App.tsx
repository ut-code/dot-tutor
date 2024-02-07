import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

function TopNavigationCard({
  title,
  subTitle,
  linkUrl,
  imgPath,
  backgroundColor,
  textColor,
}: {
  title: string;
  subTitle: string;
  linkUrl: string;
  imgPath: string;
  backgroundColor: string;
  textColor: string;
}): JSX.Element {
  return (
    <Card
      sx={{
        height: "290px",
        backgroundColor: backgroundColor,
        borderRadius: "7px",
      }}
    >
      <CardActionArea component={Link} href={linkUrl} sx={{ height: "100%" }}>
        <CardContent sx={{ padding: "30px" }}>
          <Box
            sx={{
              display: "flex",
              marginBottom: "200px",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ color: textColor }}>
              <Typography
                variant="h2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography variant="h6" component="div">
                {subTitle}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              image={imgPath}
              sx={{
                width: "50%",
                maxWidth: "320px",
                position: "absolute",
                bottom: "30px",
                right: "30px",
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function App() {
  return (
    <>
      <Box
        sx={{
          width: "85%",
          maxWidth: "1300px",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography variant="h1" align="center">
                Dot Tutor
              </Typography>
              <Box
                mb={"5%"}
                display={"flex"}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h5" component="div" mr={5}>
                  点字を身近に。
                </Typography>
                <Typography variant="h5" component="div" mr={1}>
                  by
                </Typography>
                <img src="/logo.svg" height="38em" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              src="/image_pic.svg"
              style={{
                filter: "drop-shadow(3px 3px 3px #d9d9d9)",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={6} mt={"20px"}>
          <Grid item xs={12} lg={6}>
            <TopNavigationCard
              title="Translate"
              subTitle="点字翻訳アプリ"
              linkUrl="https://translate.dot-tutor.com/"
              imgPath="/translate_icon.svg"
              backgroundColor="#19857E"
              textColor="#fff"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TopNavigationCard
              title="Learn"
              subTitle="体験型点字学習アプリ"
              linkUrl="https://learn.dot-tutor.com/"
              imgPath="/learn_icon.svg"
              backgroundColor="#1977D2"
              textColor="#fff"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
