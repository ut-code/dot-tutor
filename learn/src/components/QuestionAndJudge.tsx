import { BrailleArray } from "@dot-tutor/braille";
import translateBraille from "@/utils/translateBraille";
import ReverseBraille from "@/utils/ReverseBraille";
import * as tenji from "tenji";

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: BrailleArray,
  question: string,
  reversed: boolean = false,
): boolean {
  if (reversed) {
    typedBrailleStrings = ReverseBraille(typedBrailleStrings);
  }
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
  typedBrailleStrings: BrailleArray,
  question: string,
): boolean {
  let typedAnswer = tenji.fromTenji(
    typedBrailleStrings.map((braille) => braille.getCharacter()).join(""),
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
