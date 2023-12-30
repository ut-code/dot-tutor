import Braille from "@/domain/Braille";
import { CharacterType } from "@/domain/types/CharacterType";

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

export default function translateSumiji(sumijiString: string): Braille[] {
  const brailleString: Braille[] = [];

  Array.prototype.forEach.call(sumijiString, (sumijiChar) => {
    brailleString.push(
      new Braille(
        matchedBrailleChar(reversedHiraganaTable, sumijiChar) as CharacterType,
        6,
      ),
    );
  });

  return brailleString;
}
