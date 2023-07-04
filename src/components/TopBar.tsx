import { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { url } from "@/utils/config";
import TutorialDialog from "@/components/TutorialDialog";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { type TutorialDialogSteps } from "../types/Tutorial";

export default function TopBar({
  tutorialDialogSteps,
}: {
  tutorialDialogSteps?: TutorialDialogSteps;
}): JSX.Element {
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(true);
  useEffect(() => {
    setIsTutorialOpen(true);
  }, [tutorialDialogSteps]);
  return (
    <>
      <Head>
        <title>点字学習ソフトウェア</title>
        <meta name="description" content="点字学習ソフトウェアです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={url("/favicon.svg")} />
      </Head>
      <AppBar component="nav">
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
            <Image
              src={url("/logo-black-background.svg")}
              alt="ロゴ"
              width="150"
              height="40"
            />
            <Typography variant="h5" component="div">
              点字学習ソフトウェア
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {tutorialDialogSteps !== undefined && (
              <>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setIsTutorialOpen(true);
                  }}
                >
                  スライドで確認
                </Button>
                <TutorialDialog
                  open={isTutorialOpen}
                  setOpen={setIsTutorialOpen}
                  tutorialDialogSteps={tutorialDialogSteps}
                />
              </>
            )}
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
    </>
  );
}
