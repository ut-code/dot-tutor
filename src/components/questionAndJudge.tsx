import { type BrailleChar } from "./brailleDefinitions";
import translateBraille from "./translateBraille";
//import { rightOrWrong, setQuestion, setHiraganaStrings, judgeAnswer } from "../../pages/touch/tutorial/tutorial1/index.tsx";
//import { Paper, Typography, Divider, Button } from "@mui/material";

export const vowelQuestions = [
  "あい",
  "あう",
  "あお",
  "いう",
  "いえ",
  "おい",
  "おう",
  "おお",
];
export const gojyuonQuestions1 = [
  "かき",
  "かこ",
  "かう",
  "かお",
  "きあい",
  "きおう",
  "きく",
  "くい",
  "くう",
  "くき",
  "くく",
  "こい",
  "こうくう",
]; // 「あいうえおかきくけこ」で構成される
export const dakuonHandakuonQuestions = ["がんばれ", "だんべる", "ざるそば"];

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: BrailleChar[],
  question: string
): string {
  const typedAnswer = translateBraille(typedBrailleStrings);
  if (typedAnswer === question) {
    return "正解";
  } else {
    return "不正解";
  }
}

/*
export function NextQuestion(rightOrWrong, ): JSX.Element {
  if (rightOrWrong === "正解") {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setQuestion(makeQuestion(vowelQuestions));
          setHiraganaStrings("");
          judgeAnswer("");
        }}
      >
        次の問題
      </Button>
    );
  } else {
    return <></>;
  }
}
*/
