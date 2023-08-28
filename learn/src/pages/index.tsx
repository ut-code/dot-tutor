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
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea
        onClick={async () => {
          await router.push(linkUrl);
        }}
      >
        <CardMedia component="img" image={imgPath} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
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
          <NavigationCard
            title="点字キーボード"
            linkUrl="/keyboard"
            imgPath={url("/logo.svg")}
            description="パソコンのキーボードを用いて ⠿ のような 6 点式点字を入力する練習ツールです。"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavigationCard
            title="Web 点字器"
            linkUrl="/touch"
            imgPath={url("/logo.svg")}
            description="点字から墨字（ひらがな表記）への翻訳をクイズを通して学びます。"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavigationCard
            title="漢点字学習コーナー"
            linkUrl="/kanji"
            imgPath={url("/logo.svg")}
            description="点字の漢字バージョンを「Web点字器」の形式で学びます。"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavigationCard
            title="点字読みコーナー"
            linkUrl="/read"
            imgPath={url("/logo.svg")}
            description="点字の読み方をクイズで学びます。"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}