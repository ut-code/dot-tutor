import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import { judge, makeQuestion } from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Paper, Typography, Divider, Button, Stack, Box } from "@mui/material";
import { BrailleString } from "@/models/BrailleString";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function TouchMain({
  typeOfQuestions,
  brailleDotCount,
}: {
  typeOfQuestions: string[];
  brailleDotCount: 6 | 8;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleString>(
    new BrailleString(
      "unicode",
      [...Array(10)].map((_) => "⠀").join(""),
      brailleDotCount,
    ),
  );
  const [hiraganaStrings, setHiraganaStrings] = useState<string>("");
  const [question, setQuestion] = useState<string>(typeOfQuestions[0]); // 問題
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤

  useEffect(() => {
    setHiraganaStrings(translateBraille(brailleStrings));
  }, [brailleStrings]);

  useEffect(() => {
    judgeAnswer(judge(brailleStrings, question));
  }, [brailleStrings, question]);

  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          component="div"
          color="inherit"
          p={2}
          sx={{ minHeight: 100 }}
        >
          「{question}」を点字に直してください。
        </Typography>
      </Paper>

      <Paper elevation={2} sx={{ my: 2 }}>
        <Stack direction="row" p={2} spacing={2}>
          <Typography variant="h6" component="h2" color="inherit">
            点字
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setBrailleStrings(
                new BrailleString(
                  "unicode",
                  [...Array(10)].map((_) => "⠀").join(""),
                  brailleDotCount,
                ),
              );
            }}
            startIcon={<RefreshIcon />}
          >
            リセット
          </Button>
        </Stack>
        <Divider />
        {brailleStrings.brailleArray.map((brailleChar, i) => (
          <EdittableBraille
            key={i}
            height="100"
            width="60"
            braille={brailleChar}
            setBraille={(braille) => {
              setBrailleStrings(
                new BrailleString(
                  "braille array",
                  brailleStrings.brailleArray.map((_, j) =>
                    j === i ? braille : _,
                  ),
                  brailleDotCount,
                ),
              );
            }}
          />
        ))}
      </Paper>
      <Paper elevation={2} sx={{ my: 2 }}>
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
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          正誤
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          component="div"
          color="inherit"
          p={2}
          sx={{ minHeight: 100 }}
        >
          {rightOrWrong ? (
            <Box display="flex">
              正解 <CheckCircleOutlineIcon color="success" />
            </Box>
          ) : (
            "不正解"
          )}
        </Typography>
      </Paper>

      {rightOrWrong && (
        <Button
          variant="contained"
          onClick={() => {
            setQuestion(makeQuestion(typeOfQuestions));
            setBrailleStrings(
              new BrailleString(
                "unicode",
                [...Array(10)].map((_) => "⠀").join(""),
                brailleDotCount,
              ),
            );
            judgeAnswer(false);
          }}
        >
          次の問題
        </Button>
      )}
    </>
  );
}
