import React, { useState } from "react";
import translateBraille from "../../../../utils/translateBraille";
import { judge, makeQuestion } from "../../../../components/questionAndJudge";
import EdittableBraille from "../../../../components/EdittableBraille";
import { Paper, Typography, Divider, Button } from "@mui/material";
import { Braille, BrailleString } from "@/models/Braille";

export default function Tutorial1({
  typeOfQuestions,
}: {
  typeOfQuestions: string[];
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<Braille[]>(
    [...Array(10)].map((_) => new Braille("unicode", "⠀"))
  );
  const [hiraganaStrings, setHiraganaStrings] = useState<string>("");
  const [question, setQuestion] = useState<string>("あ"); // 問題
  const [rightOrWrong, judgeAnswer] = useState<string>(); // 正誤

  function NextQuestion(): JSX.Element {
    if (rightOrWrong === "正解") {
      return (
        <Button
          variant="contained"
          onClick={() => {
            setQuestion(makeQuestion(typeOfQuestions));
            setHiraganaStrings("");
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
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          点字
        </Typography>
        <Divider />
        {brailleStrings.map((brailleChar, i) => (
          <EdittableBraille
            key={i}
            height={"100"}
            width={"60"}
            brailleCharacter={brailleChar}
            updateBrailleCharacter={(brailleCharacter) => {
              setBrailleStrings(
                brailleStrings.map((_, j) => (j === i ? brailleCharacter : _))
              );
            }}
          />
        ))}
      </Paper>
      <Button
        variant="contained"
        onClick={() => {
          judgeAnswer(
            judge(new BrailleString("braille array", brailleStrings), question)
          );
          setHiraganaStrings(
            translateBraille(new BrailleString("braille array", brailleStrings))
          );
        }}
      >
        答え合わせ
      </Button>
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
          {rightOrWrong}
        </Typography>
      </Paper>

      <NextQuestion />
    </>
  );
}
