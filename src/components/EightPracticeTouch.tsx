import React, { useState } from "react";
import { EightDotBraille } from "@/models/BrailleCharacter";
import { EightDotBrailleString } from "@/models/BrailleString";
import { eightJudge } from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Button } from "@mui/material";

export default function EightPracticeTouch({
  question,
  answer,
  length,
}: {
  question: string;
  answer: string;
  length: number;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<EightDotBraille[]>(
    [...Array(length)].map((_) => new EightDotBraille("unicode", "⠀"))
  );
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤

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
              eightJudge(
                new EightDotBrailleString("braille array", brailleStrings),
                answer
              )
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
