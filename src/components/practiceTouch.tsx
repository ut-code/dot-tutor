import React, { useState } from "react";
import { Braille, BrailleString } from "@/models/Braille";
import { judge } from "./questionAndJudge";
import EdittableBraille from "./EdittableBraille";
import { Button } from "@mui/material";

export default function PracticeTouch({
  question,
  answer,
  length,
}: {
  question: string;
  answer: string;
  length: number;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<Braille[]>(
    [...Array(length)].map((_) => new Braille("unicode", "⠀"))
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
            braille={brailleChar}
            updateBraille={(braille) => {
              setBrailleStrings(
                brailleStrings.map((_, j) => (j === i ? braille : _))
              );
            }}
          />
        ))}

        <br />
        <Button
          variant="contained"
          onClick={() => {
            judgeAnswer(
              judge(new BrailleString("braille array", brailleStrings), answer)
            );
          }}
        >
          答え合わせ
        </Button>

        {rightOrWrong}
      </div>
    </>
  );
}
