import { type BrailleString } from "@/models/Braille";
import translateBraille from "../utils/translateBraille";

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: BrailleString,
  question: string
): string {
  const typedAnswer = translateBraille(typedBrailleStrings);
  if (typedAnswer === question) {
    return "正解";
  } else {
    return "不正解";
  }
}
