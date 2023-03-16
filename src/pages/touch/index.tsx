import React, { useState } from "react";
import { type BrailleChar } from "../../components/brailleDefinitions";
import translateBraille from "../../components/translateBraille";
import EdittableBraille from "./EdittableBraille";
import { Paper, Typography, Divider, Button } from "@mui/material";
import Layout from "../../components/Layout";
import Tutorial1 from "./tutorial/tutorial1.mdx";
import Tutorial2 from "./tutorial/tutorial2.mdx";

export default function Touch(): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleChar[]>(
    [...Array(10)].map((_) => "⠀")
  );
  const [hiraganaStrings, setHiraganaStrings] = useState<string>();

  return (
    <>
      <Layout
        tutorialDialogSteps={[
          { title: "点字を打ってみよう", content: <Tutorial1 /> },
          { title: "点字を打ってみよう", content: <Tutorial2 /> },
        ]}
      >
        <Paper elevation={2} sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h6" component="h2" color="inherit" p={2}>
            点字
          </Typography>
          <Divider />
          {brailleStrings.map((brailleChar, i) => (
            <EdittableBraille
              key={i}
              height={"100"}
              width={"60"}
              brailleChar={brailleChar}
              updateBrailleChar={(brailleChar) => {
                setBrailleStrings(
                  brailleStrings.map((_, j) => (j === i ? brailleChar : _))
                );
              }}
            />
          ))}
        </Paper>
        <Button
          variant="contained"
          onClick={() => {
            setHiraganaStrings(translateBraille(brailleStrings));
          }}
        >
          翻訳
        </Button>
        <Paper elevation={2} sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h6" component="h2" color="inherit" p={2}>
            墨字
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            component="div"
            color="inherit"
            p={2}
            sx={{ minHeight: 100 }}
          >
            {hiraganaStrings}
          </Typography>
        </Paper>
      </Layout>
    </>
  );
}
