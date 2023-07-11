import { SixDotBrailleString } from "@/models/BrailleString";
import { SixDotBraille } from "@/models/BrailleCharacter";

const reversedHiraganaTable = {
  "⠀": "　",
  "⠁": "あ",
  "⠃": "い",
  "⠉": "う",
  "⠋": "え",
  "⠊": "お",
  "⠡": "か",
  "⠣": "き",
  "⠩": "く",
  "⠫": "け",
  "⠪": "こ",
  "⠱": "さ",
  "⠳": "し",
  "⠹": "す",
  "⠻": "せ",
  "⠺": "そ",
  "⠕": "た",
  "⠗": "ち",
  "⠝": "つ",
  "⠟": "て",
  "⠞": "と",
  "⠅": "な",
  "⠇": "に",
  "⠍": "ぬ",
  "⠏": "ね",
  "⠎": "の",
  "⠥": "は",
  "⠧": "ひ",
  "⠭": "ふ",
  "⠯": "へ",
  "⠮": "ほ",
  "⠵": "ま",
  "⠷": "み",
  "⠽": "む",
  "⠿": "め",
  "⠾": "も",
  "⠌": "や",
  "⠬": "ゆ",
  "⠜": "よ",
  "⠑": "ら",
  "⠓": "り",
  "⠙": "る",
  "⠛": "れ",
  "⠚": "ろ",
  "⠄": "わ",
  "⠔": "を",
  "⠴": "ん",
  "⠒": "ー",
  "⠂": "っ",
};

function matchedBrailleChar(tableType: object, sumijiChar: string): string {
  let brailleChar: string = "";
  brailleChar = (Object.keys(tableType) as Array<keyof typeof tableType>)
    .filter((brailleChar) => tableType[brailleChar] === sumijiChar)
    .join("");
  return brailleChar;
}

export default function translateSumiji(sumijiString: string): SixDotBraille[] {
  const brailleString: SixDotBraille[] = [];

  Array.prototype.forEach.call(sumijiString, (sumijiChar) => {
    brailleString.push(
      new SixDotBraille(
        "unicode",
        matchedBrailleChar(reversedHiraganaTable, sumijiChar),
      ),
    );
  });

  return brailleString;
}
