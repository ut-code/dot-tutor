import { type SixDotBrailleString } from "@/models/BrailleString";

export const hiraganaTable = {
  "　": "⠀",
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

const alphabetTable = {
  a: "⠁",
  b: "⠃",
  c: "⠉",
  d: "⠙",
  e: "⠑",
  f: "⠋",
  g: "⠛",
  h: "⠓",
  i: "⠊",
  j: "⠚",
  k: "⠅",
  l: "⠇",
  m: "⠍",
  n: "⠝",
  o: "⠕",
  p: "⠏",
  q: "⠟",
  r: "⠗",
  s: "⠎",
  t: "⠞",
  u: "⠥",
  v: "⠧",
  w: "⠺",
  x: "⠭",
  y: "⠽",
  z: "⠵",
};

const alphabetCapitalTable = {
  A: "⠁",
  B: "⠃",
  C: "⠉",
  D: "⠙",
  E: "⠑",
  F: "⠋",
  G: "⠛",
  H: "⠓",
  I: "⠊",
  J: "⠚",
  K: "⠅",
  L: "⠇",
  M: "⠍",
  N: "⠝",
  O: "⠕",
  P: "⠏",
  Q: "⠟",
  R: "⠗",
  S: "⠎",
  T: "⠞",
  U: "⠥",
  V: "⠧",
  W: "⠺",
  X: "⠭",
  Y: "⠽",
  Z: "⠵",
};

// 一つの点字に対応する文字を返す関数
// |tableType|: 文字と点字を対応させるobject、hiraganaTable, dakutonHiraganaTableなど
// |brailleChar|: 対応させたい点字一つ
function matchedChar(tableType: object, brailleChar: string): string {
  let sumijiChar: string = "";
  sumijiChar = (Object.keys(tableType) as Array<keyof typeof tableType>)
    .filter((sumijiChar) => tableType[sumijiChar] === brailleChar)
    .join("");
  return sumijiChar;
}

export default function translateBraille(
  brailleStrings: SixDotBrailleString
): string {
  let sumijiStrings: string = "";
  let dakuon: boolean = false; // 濁音
  let handakuon: boolean = false; // 半濁音
  let contraction: boolean = false; // 拗音
  let dakuonContraction: boolean = false; // 濁音＋拗音
  let handakuonContraction: boolean = false; // 半濁音＋拗音
  let special: boolean = false; // 特殊音
  let special1: boolean = false; // ヴぁ、ヴぃ、ヴぇ、ヴぉ、どぅ、ぐぁ
  let special2: boolean = false; // でゅ
  let number: boolean = false; // 数符
  let alphabet: boolean = false; // アルファベット
  let alphabetCapital: boolean = false; // 大文字アルファベット

  brailleStrings.brailleArray.forEach((_, i) => {
    let sumijiChar: string = "";

    // 記号類
    if (brailleStrings.unicodeBrailleString[i] === "⠀") {
      if (special1) {
        sumijiChar = "。"; // 句点「。」の点字は特殊音を示す"⠲"と同じなので、"⠲"の次がスペースならば句点と判断する
        special1 = false;
      } else if (alphabet) {
        sumijiChar = "、"; // 読点「、」の点字は外字符"⠰"と同じなので、"⠰"の次がスペースならば読点と判断する
        alphabet = false;
      } else if (special) {
        sumijiChar = "？"; // クエスチョンマーク「？」の点字は特殊音を示す"⠢"と同じなので、"⠢"の次がスペースならばクエスチョンマークと判断する
        special = false;
      }

      sumijiStrings += sumijiChar + "　";
      return;
    }

    // 数符の後
    if (number) {
      sumijiChar = matchedChar(
        numberTable,
        brailleStrings.unicodeBrailleString[i]
      );
      if (sumijiChar === "") {
        number = false; // 対応する数字がなければ、数字の範囲は終了
      } else {
        sumijiStrings += sumijiChar;
        return;
      }
    }

    // 外字符の後
    if (alphabet) {
      if (alphabetCapital) {
        sumijiChar = matchedChar(
          alphabetCapitalTable,
          brailleStrings.unicodeBrailleString[i]
        ); // 大文字符の後の場合
        alphabetCapital = false;
      } else {
        sumijiChar = matchedChar(
          alphabetTable,
          brailleStrings.unicodeBrailleString[i]
        );
      }

      // 現在の点字が大文字符の場合
      if (brailleStrings.unicodeBrailleString[i] === "⠠") {
        alphabetCapital = true;
        alphabet = true;
        return;
      }

      if (sumijiChar === "") {
        alphabet = false; // 以上で対応する英字がなければ、英字の範囲は終了
      } else {
        sumijiStrings += sumijiChar;
        return;
      }
    }

    if (brailleStrings.unicodeBrailleString[i] === "⠐") {
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
    } else if (brailleStrings.unicodeBrailleString[i] === "⠰") {
      alphabet = true;
    } else if (dakuon) {
      sumijiChar = matchedChar(
        dakuonHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      dakuon = false;
    } else if (handakuon) {
      sumijiChar = matchedChar(
        handakuonHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      handakuon = false;
    } else if (contraction) {
      sumijiChar = matchedChar(
        contractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      contraction = false;
    } else if (dakuonContraction) {
      sumijiChar = matchedChar(
        dakuonContractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      dakuonContraction = false;
    } else if (handakuonContraction) {
      sumijiChar = matchedChar(
        handakuonContractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      handakuonContraction = false;
    } else if (special) {
      sumijiChar = matchedChar(
        specialHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      special = false;
    } else if (special1) {
      sumijiChar = matchedChar(
        specialHiraganaTable1,
        brailleStrings.unicodeBrailleString[i]
      );
      special1 = false;
    } else if (special2) {
      sumijiChar = matchedChar(
        specialHiraganaTable2,
        brailleStrings.unicodeBrailleString[i]
      );
      special2 = false;
    } else {
      sumijiChar = matchedChar(
        hiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
    }

    sumijiStrings += sumijiChar;
  });

  return sumijiStrings;
}
