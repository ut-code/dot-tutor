import { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import TutorialDialog from "@/components/TutorialDialog";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { type TutorialDialogSteps } from "../types/Tutorial";
import CommonButton from "./CommonButton";

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
        <title>Dot Tutor Learn</title>
        <meta
          name="description"
          content="チュートリアルを通して点字について学ぶことのできる、体験型点字学習ソフトウェアです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon-learn.svg" />
      </Head>
      <AppBar component="nav">
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
            <Image
              src="/learn-logo-blue.svg"
              alt="ロゴ"
              width="40"
              height="40"
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: 550 }}>
              <Link
                href="/"
                component={NextLink}
                color="inherit"
                underline="hover"
              >
                Dot Tutor Learn
              </Link>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {tutorialDialogSteps !== undefined && (
              <>
                <CommonButton
                  variant="contained"
                  onClick={() => {
                    setIsTutorialOpen(true);
                  }}
                >
                  スライドで確認
                </CommonButton>
                <TutorialDialog
                  open={isTutorialOpen}
                  setOpen={setIsTutorialOpen}
                  tutorialDialogSteps={tutorialDialogSteps}
                />
              </>
            )}
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
