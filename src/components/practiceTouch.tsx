import React, { useState } from "react";
import { SixDotBraille } from "@/models/BrailleCharacter";
import { SixDotBrailleString } from "@/models/BrailleString";
import { judge } from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
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
  const [brailleStrings, setBrailleStrings] = useState<SixDotBraille[]>(
    [...Array(length)].map((_) => new SixDotBraille("unicode", "⠀"))
  );
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤

  return (
    <div>
      {question}
      <br />
      {brailleStrings.map((brailleChar, i) => (
        <EdittableBraille
          key={i}
          height="100"
          width="60"
          braille={brailleChar}
          setBraille={(braille) => {
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
            judge(
              new SixDotBrailleString("braille array", brailleStrings),
              answer
            )
          );
        }}
      >
        答え合わせ
      </Button>

      {rightOrWrong}
    </div>
  );
}
