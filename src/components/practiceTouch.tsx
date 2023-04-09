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
