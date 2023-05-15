import useTypedBrailleString from "../../../../hooks/useTypedBrailleString";
import React, { useState, useEffect } from "react";
import {
  Paper,
  Divider,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { BrailleString } from "@/models/Braille";
import translateBraille from "../../../../utils/translateBraille";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const QUESTIONS: string[][] = [
  ["て", "ん", "じ"],
  ["て", "ん", "じ"],
  ["て", "ん", "じ"],
  ["て", "ん", "じ"],
  ["て", "ん", "じ"],
];

export default function Tutorial1({
  questionListIndex,
}: {
  questionListIndex: number;
}): JSX.Element {
  const [typedBrailleString, setTypedBrailleString] = useTypedBrailleString();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [goNextQuestion, setGoNextQuestion] = useState<boolean>(false);
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(new BrailleString("unicode", typedBrailleString))
    );
  }, [typedBrailleString]);
  useEffect(() => {
    setGoNextQuestion(
      translatedBrailleString === QUESTIONS[questionListIndex][questionIndex]
    );
  }, [translatedBrailleString, questionIndex, questionListIndex]);

  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
        </Typography>
        <Divider />
        <Typography sx={{ minHeight: 100 }} p={2}>
          {questionIndex === QUESTIONS[questionListIndex].length
            ? "すべての問題を解きました！"
            : `「${QUESTIONS[questionListIndex][questionIndex]}」を入力してください。`}
        </Typography>
      </Paper>

      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          点字を入力
        </Typography>
        <Divider />
        <Box sx={{ minHeight: 100 }} p={2}>
          <TextField
            variant="outlined"
            value={typedBrailleString}
            onKeyDown={(e) => {
              setTypedBrailleString(e);
            }}
            onKeyUp={(e) => {
              setTypedBrailleString(e);
            }}
            style={{ width: "100%" }}
          />
        </Box>
      </Paper>

      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          翻訳
        </Typography>
        <Divider />
        <Box display="flex" sx={{ minHeight: 100 }} p={2}>
          {translatedBrailleString}
          {goNextQuestion ? <CheckCircleOutlineIcon color="success" /> : ""}
        </Box>
      </Paper>

      <Button
        onClick={() => {
          if (questionIndex < QUESTIONS[questionListIndex].length) {
            setQuestionIndex(questionIndex + 1);
          }
        }}
        disabled={!goNextQuestion}
        variant="contained"
      >
        次の問題へ
      </Button>
    </>
  );
}
