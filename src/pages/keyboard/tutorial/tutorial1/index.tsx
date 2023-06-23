import useTypedBrailleString from "@/hooks/useTypedBrailleString";
import React, { useState, useEffect } from "react";
import {
  Paper,
  Divider,
  Box,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { SixDotBrailleString } from "@/models/BrailleString";
import translateBraille from "@/utils/translateBraille";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

interface Question {
  question: string;
  answer?: string;
}
type QuestionList = Question[];
export const questionList1: QuestionList = [
  { question: "て" },
  { question: "ん" },
  { question: "じ" },
];
export const questionList2: QuestionList = [
  { question: "弟は 算数を 習う", answer: "おとーとわ さんすーを ならう" },
];
export const questionList3: QuestionList = [
  { question: "2023" },
  { question: "9と 4分の3番 線", answer: "9と 4ぶんの3ばん せん" },
];
export const questionList4: QuestionList = [{ question: "Tokyo" }];
export const questionList5: QuestionList = [
  {
    question: "今日の 天気は、 雨 のち 曇りです。",
    answer: "きょーの てんきわ、 あめ のち くもりです。",
  },
];

export default function Tutorial1({
  questionList,
}: {
  questionList: QuestionList;
}): JSX.Element {
  const [
    typedBrailleString,
    setTypedBrailleString,
    setTypedBrailleStringFromString,
  ] = useTypedBrailleString();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [goNextQuestion, setGoNextQuestion] = useState<boolean>(false);
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(new SixDotBrailleString("unicode", typedBrailleString))
    );
  }, [typedBrailleString]);
  useEffect(() => {
    if (questionList !== undefined && questionIndex < questionList.length) {
      if ("answer" in questionList[questionIndex]) {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].answer
        );
      } else {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].question
        );
      }
    }
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
              : `「${questionList[questionIndex].question}」を入力してください。`)}
        </Typography>
      </Paper>

      <Paper elevation={2} sx={{ my: 2 }}>
        <Stack direction="row" p={2} spacing={2}>
          <Typography variant="h6" component="h2" color="inherit">
            点字を入力
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setTypedBrailleStringFromString("");
            }}
            startIcon={<RefreshIcon />}
          >
            リセット
          </Button>
        </Stack>
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
            setGoNextQuestion(false);
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
