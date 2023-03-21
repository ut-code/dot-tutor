import { type BrailleChar } from "./brailleDefinitions";
import translateBraille from "./translateBraille";

export function makeQuestion(): string {
  const questions = ["あい", "あう", "あお"];
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(typedBrailleStrings: BrailleChar[], question: string) {
  let typedAnswer = translateBraille(typedBrailleStrings);
  if (typedAnswer == question) {
    return "正解";
  } else {
    return "不正解";
  }
}
