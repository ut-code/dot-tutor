import React, { useState } from "react";
import EdittableBraille from "@/components/EdittableBraille";
import { Button, TextField } from "@mui/material";
import translateSumiji from "@/utils/translateSumiji";
import { judgeForRead } from "@/components/QuestionAndJudge";

export default function PracticeRead({
  question,
  brailleDotCount,
}: {
  question: string;
  brailleDotCount: 6 | 8;
}): JSX.Element {
  const questionInBraille = translateSumiji(question);
  const [typedAns, setTypedAns] = useState<string>("");
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤
  const [visible, setVisible] = useState<boolean>(false); // 正誤の可視化
  const answerMessage = rightOrWrong ? "正解" : "不正解";

  return (
    <>
      {questionInBraille.map((brailleChar, i) => (
        <EdittableBraille
          key={i}
          height="100"
          width="60"
          braille={brailleChar}
          setBraille={(braille) => {}}
        />
      ))}
      <br />
      <TextField
        variant="outlined"
        value={typedAns}
        style={{ width: "100%" }}
        onChange={(e) => {
          setTypedAns(e.target.value);
        }}
      />

      <Button
        variant="contained"
        onClick={() => {
          judgeAnswer(judgeForRead(typedAns, question));
          setVisible(!visible);
        }}
      >
        {visible ? "答え非表示" : "答え合わせ"}
      </Button>
      {visible === true && answerMessage}
    </>
  );
}
