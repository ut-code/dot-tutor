import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import { judge, makeQuestion } from "@/components/questionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Paper, Typography, Divider, Button } from "@mui/material";
import { SixDotBraille } from "@/models/BrailleCharacter";
import { SixDotBrailleString } from "@/models/BrailleString";

export default function ReadMain({
  typeOfQuestions,
}: {
  typeOfQuestions: string[];
}): JSX.Element {
  let brailleStrings = makeQuestion(typeOfQuestions);
  return (
    <>
      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          問題
        </Typography>
        <Divider />
        {brailleStrings}を点字にしよう
      </Paper>

      <Paper elevation={2} sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" color="inherit" p={2}>
          解答
        </Typography>
        <Divider />
      </Paper>
    </>
  );
}
