import React, { useEffect, useState } from "react";
import translateSumiji from "@/utils/translateSumiji";
import { judgeForRead, makeQuestion } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import {
  Paper,
  Typography,
  Divider,
  Button,
  Box,
  TextField,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Braille from "@/domain/Braille";

export default function ReadMain({
  typeOfQuestions,
}: {
  typeOfQuestions: string[];
}): JSX.Element | null {
  const [question, setQuestion] = useState<string>(""); // 問題
  const [questionInBraille, setQuestionInBraille] = useState<Braille[]>(
    translateSumiji(question),
  );
  const [typedAns, setTypedAns] = useState<string>("");
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤

  useEffect(() => {
    setQuestionInBraille(translateSumiji(question));
  }, [question]);

  if (question === "") {
    setQuestion(makeQuestion(typeOfQuestions));
    return null;
  }

  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
        </Typography>
        <Divider />
        {questionInBraille.map((brailleChar, i) => (
          <EdittableBraille
            key={i}
            height="100"
            width="60"
            braille={brailleChar}
            setBraille={(braille) => {}}
          />
        ))}
      </Paper>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          解答（ひらがな）
        </Typography>
        <Divider />
        <Box sx={{ minHeight: 100 }} p={2}>
          <TextField
            variant="outlined"
            value={typedAns}
            style={{ width: "100%" }}
            onChange={(e) => {
              setTypedAns(e.target.value);
            }}
          />
        </Box>
      </Paper>
      <Button
        variant="contained"
        onClick={() => {
          judgeAnswer(judgeForRead(typedAns, question));
        }}
      >
        答え合わせ
      </Button>
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
            judgeAnswer(false);
          }}
        >
          次の問題
        </Button>
      )}
    </>
  );
}
