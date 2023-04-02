import { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { url } from "@/utils/config";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TutorialDialog, type TutorialDialogSteps } from "./TutorialDialog";
import BottomNavigationBar from "./BottomStepper";

interface TutorialStep {
  dialog: TutorialDialogSteps;
  content: JSX.Element;
}

type TutorialSteps = TutorialStep[];

export default function Layout({
  children,
  tutorialSteps,
}: {
  children?: React.ReactNode;
  tutorialSteps?: TutorialSteps;
}): JSX.Element {
  const [open, setOpen] = useState(true);
  const [selectedStep, setSelectedStep] = useState<number>(0);
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
            {tutorialSteps?.[selectedStep].dialog != null && (
              <>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  スライドで確認
                </Button>
                <TutorialDialog
                  open={open}
                  setOpen={setOpen}
                  tutorialDialogSteps={tutorialSteps[selectedStep].dialog}
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
      <Toolbar />
      <Box m={2}>
        <main>
          {children === null ? tutorialSteps?.[selectedStep].content : children}
        </main>
      </Box>
      {tutorialSteps != null && (
        <BottomNavigationBar
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
          length={tutorialSteps.length}
        />
      )}
    </>
  );
}
