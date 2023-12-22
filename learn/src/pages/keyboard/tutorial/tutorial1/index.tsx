import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  Divider,
  Box,
  Typography,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { SixDotBrailleString } from "@/domain/BrailleString";
import translateBraille from "@/utils/translateBraille";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TenjiInput from "@/components/TenjiInput";

interface Question {
  question: string;
  answer?: string;
  hint?: string;
}
type QuestionList = Question[];
export const questionList1: QuestionList = [
  { question: "て" },
  { question: "ん" },
  { question: "じ" },
];
export const questionList2: QuestionList = [
  {
    question: "弟は 算数を 習う",
    answer: "おとーとわ　さんすーを　ならう",
    hint: "「弟は」は「オトートワ」と入力します。また、「算数」は「サンスー」と入力します。",
  },
];
export const questionList3: QuestionList = [
  { question: "2023" },
  { question: "9と 4分の3番 線", answer: "9と　4ぶんの3ばん　せん" },
];
export const questionList4: QuestionList = [{ question: "Tokyo" }];
export const questionList5: QuestionList = [
  {
    question: "今日の 天気は、 雨 のち 曇りです。",
    answer: "きょーの　てんきわ、　あめ　のち　くもりです。",
  },
];

export default function Tutorial1({
  questionList,
}: {
  questionList: QuestionList;
}): JSX.Element {
  const [typedBraille, setTypedBraille] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);
  const resetInput = () => {
    inputRef.current.value = "";
    setTypedBraille("");
  };
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [goNextQuestion, setGoNextQuestion] = useState<boolean>(false);
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(
        new SixDotBrailleString(
          "unicode",
          (typedBraille.match(/[⠀-⣿]/g) ?? [""]).join(""),
        ),
      ),
    );
  }, [typedBraille]);
  useEffect(() => {
    if (questionList !== undefined && questionIndex < questionList.length) {
      if ("answer" in questionList[questionIndex]) {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].answer,
        );
      } else {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].question,
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
            onClick={resetInput}
            startIcon={<RefreshIcon />}
          >
            リセット
          </Button>
        </Stack>
        <Divider />
        <Box sx={{ minHeight: 100 }} p={2}>
          <TenjiInput
            brailleDotCount={6}
            inputRef={inputRef}
            setValue={setTypedBraille}
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
          {goNextQuestion && <CheckCircleOutlineIcon color="success" />}
        </Box>
      </Paper>

      {questionList !== undefined &&
        questionList[questionIndex] !== undefined &&
        questionList[questionIndex].hint !== undefined && (
          <Paper elevation={2} sx={{ my: 2 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component="h2" color="inherit">
                  ヒント
                </Typography>
                <Divider />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{questionList[questionIndex].hint}</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        )}

      <Button
        onClick={() => {
          if (questionList !== undefined) {
            if (questionIndex < questionList.length) {
              setQuestionIndex(questionIndex + 1);
            }
            setGoNextQuestion(false);
          }
          resetInput();
        }}
        disabled={!goNextQuestion}
        variant="contained"
      >
        次の問題へ
      </Button>
    </>
  );
}
