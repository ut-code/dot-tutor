import { type BrailleString } from "@/models/Braille";

const hiraganaTable = {
  " ": "⠀",
  あ: "⠁",
  い: "⠃",
  う: "⠉",
  え: "⠋",
  お: "⠊",
  か: "⠡",
  き: "⠣",
  く: "⠩",
  け: "⠫",
  こ: "⠪",
  さ: "⠱",
  し: "⠳",
  す: "⠹",
  せ: "⠻",
  そ: "⠺",
  た: "⠕",
  ち: "⠗",
  つ: "⠝",
  て: "⠟",
  と: "⠞",
  な: "⠅",
  に: "⠇",
  ぬ: "⠍",
  ね: "⠏",
  の: "⠎",
  は: "⠥",
  ひ: "⠧",
  ふ: "⠭",
  へ: "⠯",
  ほ: "⠮",
  ま: "⠵",
  み: "⠷",
  む: "⠽",
  め: "⠿",
  も: "⠾",
  や: "⠌",
  ゆ: "⠬",
  よ: "⠜",
  ら: "⠑",
  り: "⠓",
  る: "⠙",
  れ: "⠛",
  ろ: "⠚",
  わ: "⠄",
  を: "⠔",
  ん: "⠴",
  ー: "⠒",
  っ: "⠂",
};

const dakuonHiraganaTable = {
  ヴ: "⠉",
  が: "⠡",
  ぎ: "⠣",
  ぐ: "⠩",
  げ: "⠫",
  ご: "⠪",
  ざ: "⠱",
  じ: "⠳",
  ず: "⠹",
  ぜ: "⠻",
  ぞ: "⠺",
  だ: "⠕",
  ぢ: "⠗",
  づ: "⠝",
  で: "⠟",
  ど: "⠞",
  ば: "⠥",
  び: "⠧",
  ぶ: "⠭",
  べ: "⠯",
  ぼ: "⠮",
};

const handakuonHiraganaTable = {
  ぱ: "⠥",
  ぴ: "⠧",
  ぷ: "⠭",
  ぺ: "⠯",
  ぽ: "⠮",
};

const contractionHiraganaTable = {
  いぇ: "⠋",
  きゃ: "⠡",
  きゅ: "⠩",
  きょ: "⠪",
  しゃ: "⠱",
  しゅ: "⠹",
  しょ: "⠺",
  ちゃ: "⠕",
  ちゅ: "⠝",
  ちょ: "⠞",
  ひゃ: "⠥",
  ひゅ: "⠭",
  ひょ: "⠮",
  みゃ: "⠵",
  みゅ: "⠽",
  みょ: "⠾",
  りゃ: "⠑",
  りゅ: "⠙",
  りょ: "⠚",
  しぇ: "⠻",
  ちぇ: "⠟",
  てぃ: "⠗",
};

const dakuonContractionHiraganaTable = {
  ぎゃ: "⠡",
  ぎゅ: "⠩",
  ぎょ: "⠪",
  じゃ: "⠱",
  じゅ: "⠹",
  じょ: "⠺",
  ぢゃ: "⠕",
  ぢゅ: "⠝",
  ぢょ: "⠞",
  びゃ: "⠥",
  びゅ: "⠭",
  びょ: "⠮",
  じぇ: "⠻",
  でぃ: "⠗",
};

const handakuonContractionHiraganaTable = {
  ぴゃ: "⠥",
  ぴゅ: "⠭",
  ぴょ: "⠮",
  てゅ: "⠝",
  ふゅ: "⠬",
};

// "⠢"の後
const specialHiraganaTable = {
  うぃ: "⠃",
  うぇ: "⠋",
  うぉ: "⠊",
  くぁ: "⠡",
  つぁ: "⠕",
  つぃ: "⠗",
  とぅ: "⠝",
  つぇ: "⠟",
  つぉ: "⠞",
  ふぁ: "⠥",
  ふぃ: "⠧",
  ふぇ: "⠯",
  ふぉ: "⠮",
};

// "⠲"の後
const specialHiraganaTable1 = {
  ヴぁ: "⠥",
  ヴぃ: "⠧",
  ヴぇ: "⠯",
  ヴぉ: "⠮",
  どぅ: "⠝",
  ぐぁ: "⠡",
};

// "⠸"の後
const specialHiraganaTable2 = {
  でゅ: "⠝",
  ヴュ: "⠬",
};

// "⠼"の後
const numberTable = {
  "1": "⠁",
  "2": "⠃",
  "3": "⠉",
  "4": "⠙",
  "5": "⠑",
  "6": "⠋",
  "7": "⠛",
  "8": "⠓",
  "9": "⠊",
  "0": "⠚",
};

export default function translateBraille(
  brailleStrings: BrailleString
): string {
  let hiraganaStrings: string = "";
  let dakuon: boolean = false; // 濁音
  let handakuon: boolean = false; // 半濁音
  let contraction: boolean = false; // 拗音
  let dakuonContraction: boolean = false; // 濁音＋拗音
  let handakuonContraction: boolean = false; // 半濁音＋拗音
  let special: boolean = false; // 特殊音
  let special1: boolean = false; // ヴぁ、ヴぃ、ヴぇ、ヴぉ、どぅ、ぐぁ
  let special2: boolean = false; // でゅ
  let number: boolean = false; // 数符

  brailleStrings.brailleArray.forEach((_, i) => {
    let hiragana: string = "";

    if (number) {
      hiragana = (Object.keys(numberTable) as Array<keyof typeof numberTable>)
        .filter(
          (hiragana) =>
            numberTable[hiragana] === brailleStrings.unicodeBrailleString[i]
        )
        .join("");
    }

    if (hiragana !== "") {
      hiraganaStrings += hiragana;
    } else {
      number = false;

      if (dakuon) {
        hiragana = (
          Object.keys(dakuonHiraganaTable) as Array<
            keyof typeof dakuonHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              dakuonHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        dakuon = false;
      } else if (handakuon) {
        hiragana = (
          Object.keys(handakuonHiraganaTable) as Array<
            keyof typeof handakuonHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              handakuonHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        handakuon = false;
      } else if (contraction) {
        hiragana = (
          Object.keys(contractionHiraganaTable) as Array<
            keyof typeof contractionHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              contractionHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        contraction = false;
      } else if (dakuonContraction) {
        hiragana = (
          Object.keys(dakuonContractionHiraganaTable) as Array<
            keyof typeof dakuonContractionHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              dakuonContractionHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        dakuonContraction = false;
      } else if (handakuonContraction) {
        hiragana = (
          Object.keys(handakuonContractionHiraganaTable) as Array<
            keyof typeof handakuonContractionHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              handakuonContractionHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        handakuonContraction = false;
      } else if (special) {
        hiragana = (
          Object.keys(specialHiraganaTable) as Array<
            keyof typeof specialHiraganaTable
          >
        )
          .filter(
            (hiragana) =>
              specialHiraganaTable[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        special = false;
      } else if (special1) {
        hiragana = (
          Object.keys(specialHiraganaTable1) as Array<
            keyof typeof specialHiraganaTable1
          >
        )
          .filter(
            (hiragana) =>
              specialHiraganaTable1[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        special1 = false;
      } else if (special2) {
        hiragana = (
          Object.keys(specialHiraganaTable2) as Array<
            keyof typeof specialHiraganaTable2
          >
        )
          .filter(
            (hiragana) =>
              specialHiraganaTable2[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        special2 = false;
      } else if (special2) {
        hiragana = (
          Object.keys(specialHiraganaTable2) as Array<
            keyof typeof specialHiraganaTable2
          >
        )
          .filter(
            (hiragana) =>
              specialHiraganaTable2[hiragana] ===
              brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        special2 = false;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠐") {
        dakuon = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠠") {
        handakuon = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠈") {
        contraction = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠘") {
        dakuonContraction = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠨") {
        handakuonContraction = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠢") {
        special = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠲") {
        special1 = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠸") {
        special2 = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠼") {
        number = true;
      } else if (brailleStrings.unicodeBrailleString[i] === "⠤") {
        number = false;
      } else {
        hiragana = (
          Object.keys(hiraganaTable) as Array<keyof typeof hiraganaTable>
        )
          .filter(
            (hiragana) =>
              hiraganaTable[hiragana] === brailleStrings.unicodeBrailleString[i]
          )
          .join("");
      }

      hiraganaStrings += hiragana;
    }
  });

  return hiraganaStrings;
}
