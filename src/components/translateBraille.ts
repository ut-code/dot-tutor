import { type BrailleChar } from "./brailleDefinitions";

const hiraganaTable = {
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
  ぎょ: "⠪",
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
};

// "⠼"の後
const numberTable = {
  1: "⠁",
  2: "⠃",
  3: "⠉",
  4: "⠙",
  5: "⠑",
  6: "⠋",
  7: "⠛",
  8: "⠓",
  9: "⠊",
  0: "⠚",
};

export default function translateBraille(
  brailleStrings: BrailleChar[]
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

  brailleStrings.forEach((_, i) => {
    let hiragana: string = "";

    if (number) {
      hiragana = Object.keys(numberTable) // @ts-expect-error とりあえず、エラーを無視
        .filter((hiragana) => numberTable[hiragana] === brailleStrings[i])
        .join("");
    }

    if (hiragana !== "") {
      hiraganaStrings += hiragana;
    } else {
      number = false;

      if (dakuon) {
        hiragana = Object.keys(dakuonHiraganaTable)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => dakuonHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        dakuon = false;
      } else if (handakuon) {
        hiragana = Object.keys(handakuonHiraganaTable)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => handakuonHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        handakuon = false;
      } else if (contraction) {
        hiragana = Object.keys(contractionHiraganaTable)
          .filter(
            (
              hiragana // @ts-expect-error とりあえず、エラーを無視
            ) => contractionHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        contraction = false;
      } else if (dakuonContraction) {
        hiragana = Object.keys(dakuonContractionHiraganaTable)
          .filter(
            (
              hiragana // @ts-expect-error とりあえず、エラーを無視
            ) => dakuonContractionHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        dakuonContraction = false;
      } else if (handakuonContraction) {
        hiragana = Object.keys(handakuonContractionHiraganaTable)
          .filter(
            // prettier-ignore
            (hiragana) => // @ts-expect-error エラーを無視
              handakuonContractionHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        handakuonContraction = false;
      } else if (special) {
        hiragana = Object.keys(specialHiraganaTable)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => specialHiraganaTable[hiragana] === brailleStrings[i]
          )
          .join("");
        special = false;
      } else if (special1) {
        hiragana = Object.keys(specialHiraganaTable1)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => specialHiraganaTable1[hiragana] === brailleStrings[i]
          )
          .join("");
        special1 = false;
      } else if (special2) {
        hiragana = Object.keys(specialHiraganaTable2)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => specialHiraganaTable2[hiragana] === brailleStrings[i]
          )
          .join("");
        special2 = false;
      } else if (special2) {
        hiragana = Object.keys(specialHiraganaTable2)
          .filter(
            // @ts-expect-error とりあえず、エラーを無視
            (hiragana) => specialHiraganaTable2[hiragana] === brailleStrings[i]
          )
          .join("");
        special2 = false;
      } else if (brailleStrings[i] === "⠐") {
        dakuon = true;
      } else if (brailleStrings[i] === "⠠") {
        handakuon = true;
      } else if (brailleStrings[i] === "⠈") {
        contraction = true;
      } else if (brailleStrings[i] === "⠘") {
        dakuonContraction = true;
      } else if (brailleStrings[i] === "⠨") {
        handakuonContraction = true;
      } else if (brailleStrings[i] === "⠢") {
        special = true;
      } else if (brailleStrings[i] === "⠲") {
        special1 = true;
      } else if (brailleStrings[i] === "⠸") {
        special2 = true;
      } else if (brailleStrings[i] === "⠼") {
        number = true;
      } else if (brailleStrings[i] === "⠤") {
        number = false;
      } else {
        hiragana = Object.keys(hiraganaTable) // @ts-expect-error とりあえず、エラーを無視
          .filter((hiragana) => hiraganaTable[hiragana] === brailleStrings[i])
          .join("");
      }

      hiraganaStrings += hiragana;
    }
  });

  return hiraganaStrings;
}
