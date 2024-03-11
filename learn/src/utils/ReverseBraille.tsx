import { BrailleArray } from "@dot-tutor/braille";

interface ReverseBrailleTableType {
  [key: string]: string;
}

export const ReverseBrailleTable: ReverseBrailleTableType = {
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
    reversedBrailleString +=
      ReverseBrailleTable[brailleString[i].getCharacter()];
  });
  return new BrailleArray(reversedBrailleString, 6);
}
