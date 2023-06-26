import { type SixDotBrailleString } from "@/models/BrailleString";
import translateBraille from "@/utils/translateBraille";

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: SixDotBrailleString,
  question: string
): boolean {
  let typedAnswer = translateBraille(typedBrailleStrings);

  let begin = 0;
  let end = typedAnswer.length;

  for (let i = 0; i < typedAnswer.length; i++) {
    if (typedAnswer[i] === "　") {
      begin = i;
    } else {
      break;
    }
  }

  for (let i = typedAnswer.length - 1; i >= 0; i--) {
    if (typedAnswer.charAt(i) === "　") {
      end = i;
    } else {
      break;
    }
  }

  typedAnswer = typedAnswer.substring(begin, end);

  return typedAnswer === question;
}
