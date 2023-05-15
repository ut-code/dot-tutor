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

export const questionList1: string[] = ["て", "ん", "じ"];
export const questionList2: string[] = ["あ"];
export const questionList3: string[] = ["い"];
export const questionList4: string[] = ["う"];
export const questionList5: string[] = ["え"];

export default function Tutorial1({
  questionList,
}: {
  questionList: string[];
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
    setGoNextQuestion(translatedBrailleString === questionList[questionIndex]);
  }, [translatedBrailleString, questionIndex, questionList]);
  useEffect(() => {
    setQuestionIndex(0);
  }, [questionList]);

  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
        </Typography>
        <Divider />
        <Typography sx={{ minHeight: 100 }} p={2}>
          {questionList !== undefined &&
            (questionIndex >= questionList.length
              ? "すべての問題を解きました！"
              : `「${questionList[questionIndex]}」を入力してください。`)}
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
          if (questionList !== undefined) {
            if (questionIndex < questionList.length) {
              setQuestionIndex(questionIndex + 1);
            }
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
