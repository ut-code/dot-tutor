import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import translateSumiji from "@/utils/translateSumiji";
import {
  judge,
  judge_for_read,
  makeQuestion,
} from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import {
  Paper,
  Typography,
  Divider,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { SixDotBraille } from "@/models/BrailleCharacter";
import { SixDotBrailleString } from "@/models/BrailleString";

export default function ReadMain({
  typeOfQuestions,
}: {
  typeOfQuestions: string[];
}): JSX.Element {
  const [question, setQuestion] = useState<string>(
    makeQuestion(typeOfQuestions)
  ); // 問題
  const [typedAns, setTypedAns] = useState<string>("");
  const [rightOrWrong, judgeAnswer] = useState<string>(); // 正誤

  function NextQuestion(): JSX.Element {
    if (rightOrWrong === "正解") {
      return (
        <Button
          variant="contained"
          onClick={() => {
            let next = makeQuestion(typeOfQuestions);
            setQuestion(makeQuestion(typeOfQuestions));
            judgeAnswer("");
          }}
        >
          次の問題
        </Button>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
          {question}
        </Typography>
        <Divider />
        {translateSumiji(question)}
      </Paper>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          解答
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
          judgeAnswer(judge_for_read(typedAns, question));
        }}
      >
        答え合わせ
      </Button>
      <NextQuestion />
    </>
  );
}
