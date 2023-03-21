import { type BrailleChar } from "./brailleDefinitions";
import translateBraille from "./translateBraille";

export const problem1 = "あい";

export default function judge(
  typedBrailleStrings: BrailleChar[],
  problem: string
) {
  let typedAnswer = translateBraille(typedBrailleStrings);
  if (typedAnswer == problem) {
    return "正解";
  } else {
    return "不正解";
  }
}
