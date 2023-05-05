import React, { useState } from "react";
import useTypedBrailleString from "../hooks/useTypedBrailleString";
import translateBraille from "../utils/translateBraille";
import { TextField, Typography } from "@mui/material";
import { BrailleString } from "@/models/Braille";

export default function PracticeField({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): JSX.Element {
  const [typedBrailleString, setTypedBrailleString] = useTypedBrailleString();
  const [answered, setAnswered] = useState<boolean>(false);
  const [correctOrNot, setCorrectOrNot] = useState<string>("不正解です。");
  if (!answered) {
    return (
      <>
        <div>
          <Typography>{question}</Typography>
          <TextField
            variant="outlined"
            value={typedBrailleString}
            onKeyDown={(e) => {
              setTypedBrailleString(e);
            }}
            onKeyUp={(e) => {
              setTypedBrailleString(e);
            }}
          />
          <Typography style={{ color: "gray", fontSize: "75%" }}>
            {translateBraille(new BrailleString("unicode", typedBrailleString))}
          </Typography>
          <button
            onClick={() => {
              if (typedBrailleString === answer) {
                setCorrectOrNot("正解です！");
              }
              setAnswered(true);
            }}
          >
            答え合わせをする
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <p>
            {correctOrNot}
            {"答えは"}
            {answer}
            {"です。"}
          </p>
        </div>
      </>
    );
  }
}
