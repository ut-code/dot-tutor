import React, { useState } from "react";
import { SixDotBraille } from "@/models/BrailleCharacter";
import { BrailleString } from "@/models/BrailleString";
import { judge } from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Button } from "@mui/material";

export default function PracticeTouch({
  question,
  answer,
  length,
  brailleDotCount,
}: {
  question: string;
  answer: string;
  length: number;
  brailleDotCount: 6 | 8;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleString>(
    new BrailleString(
      "unicode",
      [...Array(length)].map((_) => "⠀").join(""),
      brailleDotCount,
    ),
  );
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤

  return (
    <div>
      {question}
      <br />
      {brailleStrings.brailleArray.map((brailleChar, i) => (
        <EdittableBraille
          key={i}
          height="100"
          width="60"
          braille={brailleChar}
          setBraille={(braille) => {
            setBrailleStrings(
              new BrailleString(
                "braille array",
                brailleStrings.brailleArray.map((_, j) =>
                  j === i ? braille : _,
                ),
                brailleDotCount,
              ),
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
  );
}
