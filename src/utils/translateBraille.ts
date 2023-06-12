import { type SixDotBrailleString } from "@/models/BrailleString";
import { alpha } from "@mui/material";

export const hiraganaTable = {
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
};

// 一つの点字に対応する文字を返す関数
// |tableType|: 文字と点字を対応させるobject、hiraganaTable, dakutenHiraganaTableなど
// |brailleChar|: 対応させたい点字一つ
function matchedChar(tableType: object, brailleChar: string): string {
  let hiragana: string = "";
  hiragana = (Object.keys(tableType) as Array<keyof typeof tableType>)
    .filter((hiragana) => tableType[hiragana] === brailleChar)
    .join("");
  return hiragana;
}

export default function translateBraille(
  brailleStrings: SixDotBrailleString
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
  let alphabet: boolean = false; //アルファベット
  let alphabetCapital: boolean = false; //大文字アルファベット

  brailleStrings.brailleArray.forEach((_, i) => {
    console.log(typeof numberTable);
    console.log(typeof brailleStrings.unicodeBrailleString[i]);
    let hiragana: string = "";

    if (number) {
      hiragana = matchedChar(
        numberTable,
        brailleStrings.unicodeBrailleString[i]
      );
      console.log("number", hiragana);
      if (hiragana === "") {
        number = false;
      } else {
        hiraganaStrings += hiragana;
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
    } else if (brailleStrings.unicodeBrailleString[i] === "⠠") {
      alphabetCapital = true;
      alphabet = true;
    } else if (dakuon) {
      hiragana = matchedChar(
        dakuonHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      dakuon = false;
    } else if (handakuon) {
      hiragana = matchedChar(
        handakuonHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      handakuon = false;
    } else if (contraction) {
      hiragana = matchedChar(
        contractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      contraction = false;
    } else if (dakuonContraction) {
      hiragana = matchedChar(
        dakuonContractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      dakuonContraction = false;
    } else if (handakuonContraction) {
      hiragana = matchedChar(
        handakuonContractionHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      handakuonContraction = false;
    } else if (special) {
      hiragana = matchedChar(
        specialHiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
      special = false;
    } else if (special1) {
      hiragana = matchedChar(
        specialHiraganaTable1,
        brailleStrings.unicodeBrailleString[i]
      );
      special1 = false;
    } else if (special2) {
      hiragana = matchedChar(
        specialHiraganaTable2,
        brailleStrings.unicodeBrailleString[i]
      );
      special2 = false;
    } else {
      hiragana = matchedChar(
        hiraganaTable,
        brailleStrings.unicodeBrailleString[i]
      );
    }

    hiraganaStrings += hiragana;
  });

  return hiraganaStrings;

  /*     if (hiragana !== "") {
      hiraganaStrings += hiragana;
    } else if (alphabet) {
      if(alphabetCapital) {
        hiragana = (Object.keys(alphabetCapitalTable) as Array<keyof typeof alphabetCapitalTable>)
          .filter(
            (hiragana) =>
              alphabetCapitalTable[hiragana] === brailleStrings.unicodeBrailleString[i]
          )
          .join("");
        alphabetCapital = false
      } else {
        hiragana = (Object.keys(alphabetTable) as Array<keyof typeof alphabetTable>)
          .filter(
            (hiragana) =>
              alphabetTable[hiragana] === brailleStrings.unicodeBrailleString[i]
          )
          .join("");
      }

      if(hiragana === "") {
        alphabet = false;
      }
      console.log("in alphabet", alphabet)
    } */

  /* if (hiragana !== "") {
      hiraganaStrings += hiragana;
    } else {
      console.log(i);
      console.log("in hiragana", brailleStrings.unicodeBrailleString[i])
      number = false;

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
      } else if (brailleStrings.unicodeBrailleString[i] === "⠠") {
        alphabetCapital = true;
        alphabet = true;
      } else if (dakuon) {
        hiragana = matchedChar(dakuonHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        dakuon = false;
      } else if (handakuon) {
        hiragana = matchedChar(handakuonHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        handakuon = false;
      } else if (contraction) {
        hiragana = matchedChar(contractionHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        contraction = false;
      } else if (dakuonContraction) {
        hiragana = matchedChar(dakuonContractionHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        dakuonContraction = false;
      } else if (handakuonContraction) {
        hiragana = matchedChar(handakuonContractionHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        handakuonContraction = false;
      } else if (special) {
        hiragana = matchedChar(specialHiraganaTable, brailleStrings.unicodeBrailleString[i]);
        special = false;
      } else if (special1) {
        hiragana = matchedChar(specialHiraganaTable1, brailleStrings.unicodeBrailleString[i]);
        special1 = false;
      } else if (special2) {
        hiragana = matchedChar(specialHiraganaTable2, brailleStrings.unicodeBrailleString[i]);
        special2 = false;
      } else {
        hiragana = matchedChar(hiraganaTable, brailleStrings.unicodeBrailleString[i]);
      }

      hiraganaStrings += hiragana;
    }
    hiraganaStrings += hiragana;
    console.log(alphabet);
    console.log(hiraganaStrings);
  });*/

  //return hiraganaStrings;
}
