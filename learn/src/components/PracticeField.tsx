import React, { useState, useEffect } from "react";
import useTypedBrailleString from "@/hooks/useTypedBrailleString";
import translateBraille from "@/utils/translateBraille";
import { TextField, Typography, Box, Button } from "@mui/material";
import { BrailleArray } from "@dot-tutor/braille";

export default function PracticeField({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): JSX.Element {
  const [typedBrailleString, updateTypedBrailleString] =
    useTypedBrailleString(6);
  const [answered, setAnswered] = useState<boolean>(false);
  const [correctOrNot, setCorrectOrNot] = useState<boolean>(false);
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(new BrailleArray(typedBrailleString, 6)),
    );
  }, [typedBrailleString]);

  return (
    <Box display="flex" alignItems="center">
      <Box m={1}>
        <Typography m={1}>{question}</Typography>
        <TextField
          variant="outlined"
          value={typedBrailleString}
          onKeyDown={(e) => {
            updateTypedBrailleString(e);
          }}
          onKeyUp={(e) => {
            updateTypedBrailleString(e);
          }}
        />
        <Typography style={{ color: "gray", fontSize: "75%" }} m={1}>
          {translatedBrailleString}
        </Typography>
      </Box>
      <Box m={1}>
        <Button
          variant="outlined"
          onClick={() => {
            setCorrectOrNot(false);
            if (typedBrailleString === answer) {
              setCorrectOrNot(true);
            }
            setAnswered(true);
          }}
        >
          答え合わせをする
        </Button>
      </Box>
      <Box m={1}>
        {answered
          ? `${
              correctOrNot ? "正解です！" : "不正解です..."
            } 答えは${answer}です。`
          : " "}
      </Box>
    </Box>
  );
}
