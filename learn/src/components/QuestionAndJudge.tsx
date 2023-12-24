import {
  type SixDotBrailleString,
  type EightDotBrailleString,
} from "@/domain/BrailleString";
import translateBraille from "@/utils/translateBraille";
import * as tenji from "tenji";

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: SixDotBrailleString,
  question: string,
): boolean {
  let typedAnswer = translateBraille(typedBrailleStrings);

  let begin = 0;
  let end = typedAnswer.length;

  for (let i = 0; i < typedAnswer.length; i += 1) {
    if (typedAnswer[i] === "　") {
      begin = i;
    } else {
      break;
    }
  }

  for (let i = typedAnswer.length - 1; i >= 0; i -= 1) {
    if (typedAnswer.charAt(i) === "　") {
      end = i;
    } else {
      break;
    }
  }

  typedAnswer = typedAnswer.substring(begin, end);

  return typedAnswer === question;
}

export function eightJudge(
  typedBrailleStrings: EightDotBrailleString,
  question: string,
): boolean {
  let typedAnswer = tenji.fromTenji(
    typedBrailleStrings.brailleArray
      .map((braille) => braille.unicodeBraille)
      .join(""),
    { kanji: true },
  );

  let begin = 0;
  let end = typedAnswer.length;

  for (let i = 0; i < typedAnswer.length; i += 1) {
    if (typedAnswer[i] === " ") {
      begin = i;
    } else {
      break;
    }
  }

  for (let i = typedAnswer.length - 1; i >= 0; i -= 1) {
    if (typedAnswer.charAt(i) === " ") {
      end = i;
    } else {
      break;
    }
  }

  typedAnswer = typedAnswer.substring(begin, end);

  return typedAnswer === question;
}

export function judgeForRead(typedAns: string, question: string): boolean {
  if (typedAns === question) {
    return true;
  }
  return false;
}
