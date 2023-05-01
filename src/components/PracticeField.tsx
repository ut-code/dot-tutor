import React, { useState } from "react";
import useTypedBrailleStrings from "./useTypedBrailleStrings";
import translateBraille from "./translateBraille";
import { TextField, Typography } from "@mui/material";
import { type BrailleChar } from "./brailleDefinitions";

export default function PracticeField({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): JSX.Element {
  const [typedBrailleStrings, setTypedBrailleStrings] =
    useTypedBrailleStrings();
  const [answered, setAnswered] = useState<boolean>(false);
  const [correctOrNot, setCorrectOrNot] = useState<string>("不正解です。");
  if (!answered) {
    return (
      <>
        <div>
          <Typography>{question}</Typography>
          <TextField
            variant="outlined"
            value={typedBrailleStrings}
            onKeyDown={(e) => {
              setTypedBrailleStrings(e);
            }}
            onKeyUp={(e) => {
              setTypedBrailleStrings(e);
            }}
          />
          <Typography style={{ color: "gray", fontSize: "75%" }}>
            {translateBraille(Array.from(typedBrailleStrings) as BrailleChar[])}
          </Typography>
          <button
            onClick={() => {
              if (typedBrailleStrings === answer) {
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
