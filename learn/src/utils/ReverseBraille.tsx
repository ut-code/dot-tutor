import { BrailleArray } from "@dot-tutor/braille";

interface ReverseBrailleTable {
  [key: string]: string;
}

export const ReverseBrailleTable: ReverseBrailleTable = {
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

// 凸面から見た点字を凹面から見た点字に変換する
export default function ReverseBraille(
  brailleString: BrailleArray,
): BrailleArray {
  let reversedBrailleString: string = "";
  brailleString.forEach((_, i) => {
    reversedBrailleString =
      reversedBrailleString +
      ReverseBrailleTable[brailleString[i].getCharacter()];
  });
  return new BrailleArray(reversedBrailleString, 6);
}
