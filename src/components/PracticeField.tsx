import React, { useState } from "react";
import useTypedBrailleStrings from "./useTypedBrailleStrings";
import { TextField } from "@mui/material";

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
  function clickedAnswered(typedBrailleStrings: string, answer: string): void {
    if (typedBrailleStrings === answer) {
      setCorrectOrNot("正解です！");
    }
    setAnswered(true);
  }
  if (!answered) {
    return (
      <>
        <div>
          {question}
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
          </p>
        </div>
      </>
    );
  }
}
