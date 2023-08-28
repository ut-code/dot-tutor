import React, { useState } from "react";
import { BrailleString } from "@/models/BrailleString";
import { judge, eightJudge } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Button } from "@mui/material";
import { SixDotBraille } from "@/models/BrailleCharacter";

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
  const [visible, setVisible] = useState<boolean>(false); // 正誤の可視化
  const answerMessage = rightOrWrong ? "正解" : "不正解";

  return (
    <>
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
          judgeAnswer(
            brailleDotCount === 6
              ? judge(brailleStrings, answer)
              : eightJudge(brailleStrings, answer),
          );
          setVisible(!visible);
        }}
      >
        {visible ? "答え非表示" : "答え合わせ"}
      </Button>
      {visible === true && answerMessage}
    </>
  );
}

export function TouchPlayground(): JSX.Element {
  const [brailleChar, setBrailleChar] = useState<SixDotBraille>(
    new SixDotBraille("unicode", "⠀"),
  );

  return (
    <EdittableBraille
      height="100"
      width="60"
      braille={brailleChar}
      setBraille={(braille) => {
        setBrailleChar(braille);
      }}
    />
  );
}