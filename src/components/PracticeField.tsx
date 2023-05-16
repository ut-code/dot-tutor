import React, { useState, useEffect } from "react";
import useTypedBrailleString from "../hooks/useTypedBrailleString";
import translateBraille from "../utils/translateBraille";
import { TextField, Typography, Box, Button } from "@mui/material";
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
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(new BrailleString("unicode", typedBrailleString))
    );
  }, [typedBrailleString]);

  if (!answered) {
    return (
      <>
        <Box marginBottom={4}>
          <Typography m={1}>{question}</Typography>
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
          <Typography style={{ color: "gray", fontSize: "75%" }} m={1}>
            {translatedBrailleString}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              if (typedBrailleString === answer) {
                setCorrectOrNot("正解です！");
              }
              setAnswered(true);
            }}
          >
            答え合わせをする
          </Button>
        </Box>
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
