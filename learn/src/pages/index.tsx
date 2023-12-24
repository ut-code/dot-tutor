import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";

function NavigationCard({
  title,
  linkUrl,
  imgPath,
  description,
}: {
  title: string;
  linkUrl: string;
  imgPath: string;
  description: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea
        onClick={async () => {
          await router.push(linkUrl);
        }}
        sx={{ height: "100%" }}
      >
        <CardContent sx={{ padding: "50px" }}>
          <Box
            sx={{ display: "flex", marginBottom: "40px", alignItems: "center" }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <CardMedia
              component="img"
              image={imgPath}
              sx={{ width: 100, marginLeft: "auto" }}
            />
          </Box>
          <Typography variant="body1" component="div" p={1}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container sx={{ width: "75%", maxWidth: "1000px" }}>
        <Box m={2}>
          <Typography variant="h5" component="h1">
            ようこそ
          </Typography>
          <Typography variant="body1" component="p">
            ここでは、チュートリアル形式で点字について学ぶことができます。
          </Typography>
        </Box>
        <Grid container spacing={10}>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="Web点字器"
              linkUrl="/touch"
              imgPath="/logo_touch.svg"
              description="平仮名から点字への翻訳を、画面上で点を打つ練習を通して学べます。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="点字を読む"
              linkUrl="/read"
              imgPath="/logo_read.svg"
              description="点字から平仮名への翻訳を練習しながら学べます。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="点字キーボード"
              linkUrl="/keyboard"
              imgPath="/logo_keyboard.svg"
              description="点字の訳や文法を学びながら、パソコンのキーボードで6点式点字を入力する練習ができます。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="漢点字を書く"
              linkUrl="/kanji"
              imgPath="/logo_kanji.svg"
              description="漢字から漢点字への翻訳を実際に画面上で点を打つ練習を通して学べます。"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
