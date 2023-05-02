import { type Braille, BrailleString } from "@/models/Braille";
import translateBraille from "../utils/translateBraille";

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

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: Braille[],
  question: string
): string {
  const typedAnswer = translateBraille(
    new BrailleString("braille array", typedBrailleStrings)
  );
  if (typedAnswer === question) {
    return "正解";
  } else {
    return "不正解";
  }
}
