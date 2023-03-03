import { useRouter } from "next/router";
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
}): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => await router.push(props.linkUrl)}
        >
          <CardMedia component="img" image={props.imgPath} />
          <CardContent>
            <Typography variant="h5" component="div">
              {props.title}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavigationCard
            title="Web 点字器"
            linkUrl="/touch"
            imgPath={url("/logo.svg")}
          />
        </Grid>
      </Grid>
    </>
  );
}
