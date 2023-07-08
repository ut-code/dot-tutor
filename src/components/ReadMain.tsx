import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import translateSumiji from "@/utils/translateSumiji";
import { judge, makeQuestion } from "@/components/questionAndJudge";
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
  const [questionInBraille, setQuestionInBraille] = useState<SixDotBraille[]>(
    translateSumiji(question)
  ); // 問題
  const [typedAns, setTypedAns] = useState<string>("");
  const [rightOrWrong, judgeAnswer] = useState<string>(); // 正誤

  function NextQuestion(): JSX.Element {
    if (rightOrWrong === "正解") {
      return (
        <Button
          variant="contained"
          onClick={() => {
            setQuestion(makeQuestion(typeOfQuestions));
            setQuestionInBraille(translateSumiji(question));
            judgeAnswer("");
            console.log("updated", question);
            console.log(
              "updated",
              translateSumiji(
                new SixDotBrailleString("braille array", questionInBraille)
              )
            );
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
      {console.log("first", question)}
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
          {question}
        </Typography>
        <Divider />
        {questionInBraille.map((brailleChar, i) => (
          <EdittableBraille
            key={i}
            height={"100"}
            width={"60"}
            braille={brailleChar}
            updateBraille={(braille) => {}}
          />
        ))}
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
          judgeAnswer(
            judge(
              new SixDotBrailleString("braille array", questionInBraille),
              typedAns
            )
          );
        }}
      >
        答え合わせ
      </Button>
      <NextQuestion />
    </>
  );
}
