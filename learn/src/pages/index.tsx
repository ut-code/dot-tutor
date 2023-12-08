import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import url from "@/utils/config";
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
              title="点字キーボード"
              linkUrl="/keyboard"
              imgPath={url("/logo_keyboard.svg")}
              description="パソコンのキーボードを用いて ⠿ のような 6 点式点字を入力する練習ツールです。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="Web 点字器"
              linkUrl="/touch"
              imgPath={url("/logo_touch.svg")}
              description="点字から墨字（ひらがな表記）への翻訳をクイズを通して学びます。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="漢点字学習コーナー"
              linkUrl="/kanji"
              imgPath={url("/logo_kanji.svg")}
              description="点字の漢字バージョンを「Web点字器」の形式で学びます。"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NavigationCard
              title="点字読みコーナー"
              linkUrl="/read"
              imgPath={url("/logo_read.svg")}
              description="点字の読み方をクイズで学びます。"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
