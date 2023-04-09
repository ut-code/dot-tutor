import React, { useState } from "react";
import { type BrailleChar } from "./brailleDefinitions";
import { judge } from "./questionAndJudge";
import EdittableBraille from "./EdittableBraille";
import { Paper, Typography, Divider, Button } from "@mui/material";
import Layout from "./Layout";

export default function PracticeTouch({
  question,
  answer,
  length,
}: {
  question: string;
  answer: string;
  length: number;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleChar[]>(
    [...Array(length)].map((_) => "⠀")
  );
  const [rightOrWrong, judgeAnswer] = useState<string>(); // 正誤

  return (
    <>
      <div>
        {question}
        <br />
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

        <br />
        <Button
          variant="contained"
          onClick={() => {
            judgeAnswer(judge(brailleStrings, answer));
          }}
        >
          答え合わせ
        </Button>

        {rightOrWrong}
      </div>
    </>
  );
}

{
  /*
export default function PracticeTouch()({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }): JSX.Element (
{
  const [brailleStrings, setBrailleStrings] = useState<BrailleChar[]>(
    [...Array(10)].map((_) => "⠀")
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
            setQuestion(makeQuestion(vowelQuestions));
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

        <Paper elevation={2} sx={{ mt: 2, mb: 2 }}>
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
            {question}
          </Typography>
        </Paper>

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
            judgeAnswer(judge(brailleStrings, question));
            setHiraganaStrings(translateBraille(brailleStrings));
          }}
        >
          答え合わせ
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
        <Paper elevation={2} sx={{ mt: 2, mb: 2 }}>
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

        <NextQuestion/>
    </>
  );
}
*/
}
