import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { url } from "@/utils/config";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Grid,
} from "@mui/material";

function NavigationCard(props: {
  title: string;
  linkUrl: string;
  imgPath: string;
  Introduction: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => await router.push(props.linkUrl)}
        >
          <Typography padding={2}>
            <CardMedia component="img" image={props.imgPath} />
          </Typography>
          <CardContent>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body1" component="div" padding={1}>
              {props.Introduction}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
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
              Introduction="パソコンのキーボードを用いて ⠿ のような 6 点式点字を入力する練習ツールです。"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NavigationCard
              title="Web 点字器"
              linkUrl="/touch"
              imgPath={url("/logo.svg")}
              Introduction="点字から墨字（ひらがな表記）への翻訳をクイズを通して学びます。"
            />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
