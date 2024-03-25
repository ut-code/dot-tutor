import React, { useState } from "react";
import { judge, eightJudge } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Button } from "@mui/material";
import { Braille, BrailleArray } from "@dot-tutor/braille";

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
  const [brailleStrings, setBrailleStrings] = useState<BrailleArray>(
    new BrailleArray(
      [...Array(length)].map((_) => "⠀").join(""),
      brailleDotCount,
    ),
  );
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤
  const [visible, setVisible] = useState<boolean>(false); // 正誤の可視化
  const answerMessage = rightOrWrong ? "正解" : "不正解";

  return (
    <div className="max-w-xl">
      {question}
      <br />
      <div className="flex flex-row-reverse flex-wrap">
        {brailleStrings.map((brailleChar, i) => (
          <EdittableBraille
            key={i}
            height="150"
            width="90"
            braille={brailleChar}
            setBraille={(braille) => {
              setBrailleStrings(
                new BrailleArray(
                  brailleStrings.map((_, j) => (j === i ? braille : _)),
                ),
              );
            }}
          />
        ))}
      </div>

      {/* <br /> */}
      <Button
        variant="contained"
        onClick={() => {
          judgeAnswer(
            brailleDotCount === 6
              ? judge(brailleStrings, answer, true)
              : eightJudge(brailleStrings, answer),
          );
          setVisible(!visible);
        }}
      >
        {visible ? "答え非表示" : "答え合わせ"}
      </Button>
      {visible === true && answerMessage}
    </div>
  );
}

export function TouchPlayground(): JSX.Element {
  const [brailleChar, setBrailleChar] = useState<Braille>(new Braille("⠀", 6));

  return (
    <EdittableBraille
      height="150"
      width="90"
      braille={brailleChar}
      setBraille={(braille) => {
        setBrailleChar(braille);
      }}
    />
  );
}
