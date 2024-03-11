import { BrailleArray } from "@dot-tutor/braille";
import sixDotBrailleCharacterType from "@dot-tutor/braille";

interface ReverseBrailleTable {
  [key: string]: string;
}

export const reverseBrailleTable: ReverseBrailleTable = {
  "⠀": "⠀",
  "⠁": "⠈",
  "⠂": "⠐",
  "⠃": "⠘",
  "⠄": "⠠",
  "⠅": "⠨",
  "⠆": "⠰",
  "⠎": "⠱",
  "⠇": "⠸",
  "⠈": "⠁",
  "⠉": "⠉",
  "⠊": "⠑",
  "⠋": "⠙",
  "⠌": "⠡",
  "⠍": "⠩",
  "⠏": "⠹",
  "⠐": "⠂",
  "⠑": "⠊",
  "⠒": "⠒",
  "⠓": "⠚",
  "⠔": "⠢",
  "⠕": "⠪",
  "⠖": "⠲",
  "⠗": "⠺",
  "⠘": "⠃",
  "⠙": "⠋",
  "⠚": "⠓",
  "⠛": "⠛",
  "⠜": "⠣",
  "⠝": "⠫",
  "⠞": "⠳",
  "⠟": "⠻",
  "⠠": "⠄",
  "⠡": "⠌",
  "⠢": "⠔",
  "⠣": "⠜",
  "⠤": "⠤",
  "⠥": "⠬",
  "⠦": "⠴",
  "⠧": "⠼",
  "⠨": "⠅",
  "⠩": "⠍",
  "⠪": "⠕",
  "⠫": "⠝",
  "⠬": "⠥",
  "⠭": "⠭",
  "⠮": "⠵",
  "⠯": "⠽",
  "⠰": "⠆",
  "⠱": "⠎",
  "⠲": "⠖",
  "⠳": "⠞",
  "⠴": "⠦",
  "⠵": "⠮",
  "⠶": "⠶",
  "⠷": "⠾",
  "⠸": "⠇",
  "⠹": "⠏",
  "⠺": "⠗",
  "⠻": "⠟",
  "⠼": "⠧",
  "⠽": "⠯",
  "⠾": "⠷",
  "⠿": "⠿",
};

// export default function reverseBraille(brailleChar: string): string {
//     let reversedBrailleChar: string = "";
//     reversedBrailleChar = (Object.keys(reverseBrailleTable) as Array<keyof typeof reverseBrailleTable>)
//       .filter((brailleChar) => reverseBrailleTable[brailleChar] === brailleChar)
//       .join("");
//     return reversedBrailleChar;
// }

// 凸面から見た点字を凹面から見た点字に変換する
export default function reverseBraille(
  brailleString: BrailleArray,
): BrailleArray {
  // const reversedBrailleString = new BrailleArray('', 6);
  // for (let i = 0; i < brailleString.length; i++) {
  //     const brailleChar = brailleString[brailleString.length - 1 - i].getCharacter();
  //     reversedBrailleString.push(reverseBrailleTable[brailleChar]);
  // }
  // return reversedBrailleString;
  // const reversedBrailleString = new BrailleArray(
  //     [...Array(brailleString.length)].map((_) => "⠀").join(""),
  //     6,
  //   );
  let reversedBrailleString: string = "";
  brailleString.forEach((_, i) => {
    reversedBrailleString =
      reversedBrailleString +
      reverseBrailleTable[brailleString[i].getCharacter()];
    // const reversedBrailleChar = new BrailleArray(reverseBrailleTable[brailleString[i].getCharacter()], 6);
    // reversedBrailleString[i] = reversedBrailleChar;
    // reversedBrailleString.push(reverseBrailleTable[brailleString[i].getCharacter()]);
  });
  return new BrailleArray(reversedBrailleString, 6);
}
