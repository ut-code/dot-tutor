import { BrailleArray } from "@dot-tutor/braille";

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
  "。": "⠲",
  "、": "⠰",
  "？": "⠢",
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

export const alphabetTable = {
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

export default function translateBraille(brailleStrings: BrailleArray): string {
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
  let alphabetCapitalSuccession: boolean = false; // 二重大文字符

  function initialize(): void {
    dakuon = false; // 濁音
    handakuon = false; // 半濁音
    contraction = false; // 拗音
    dakuonContraction = false; // 濁音＋拗音
    handakuonContraction = false; // 半濁音＋拗音
    special = false; // 特殊音
    special1 = false; // ヴぁ、ヴぃ、ヴぇ、ヴぉ、どぅ、ぐぁ
    special2 = false; // でゅ
    number = false; // 数符
    alphabet = false; // アルファベット
    alphabetCapital = false; // 大文字アルファベット
    alphabetCapitalSuccession = false;
  }

  brailleStrings.forEach((_, i) => {
    let sumijiChar: string = "";

    // 分かち書きのスペースの場合、全てのフラグを初期化
    if (brailleStrings[i].getCharacter() === "⠀") {
      sumijiStrings += sumijiChar + "　";
      initialize();
      return;
    }

    // 数符の後の処理
    if (number) {
      sumijiChar = matchedChar(numberTable, brailleStrings[i].getCharacter());

      if (sumijiChar === "") {
        number = false; // 対応する数字がなければ、数字の範囲は終了
      } else {
        sumijiStrings += sumijiChar;
        return;
      }
    }

    // 外字符または外国語引用符の後の処理
    if (alphabet) {
      // 外字符と「、」は同じ点字"⠰"で表されるのでsumijiStringsの最後の文字である「、」を削除する
      if (sumijiStrings.slice(-1) === "、") {
        sumijiStrings = sumijiStrings.slice(0, -1);
      }

      if (brailleStrings[i].getCharacter() === "⠠" && alphabetCapital) {
        alphabetCapitalSuccession = true;
        return;
      }
      if (brailleStrings[i].getCharacter() === "⠠") {
        alphabetCapital = true;
        alphabet = true;
        return;
      }
      if (brailleStrings[i].getCharacter() === "⠴") {
        alphabet = false;
        alphabetCapital = false;
        alphabetCapitalSuccession = false;
        return;
      }
      if (alphabetCapitalSuccession) {
        // 二重大文字符の中の場合
        sumijiChar = matchedChar(
          alphabetCapitalTable,
          brailleStrings[i].getCharacter(),
        );
      } else if (alphabetCapital) {
        // 大文字符の中の場合
        sumijiChar = matchedChar(
          alphabetCapitalTable,
          brailleStrings[i].getCharacter(),
        );
        alphabetCapital = false;
      } else {
        // 外字符の中の場合
        sumijiChar = matchedChar(
          alphabetTable,
          brailleStrings[i].getCharacter(),
        );
      }

      // 以上で対応する英字がなければ、英字の範囲は終了
      // 対応する英字があればsumijiStringsに足して、次の文字へ
      if (sumijiChar === "") {
        alphabet = false;
        alphabetCapital = false;
        alphabetCapitalSuccession = false;
      } else {
        sumijiStrings += sumijiChar;
        return;
      }
    }

    if (dakuon) {
      sumijiChar = matchedChar(
        dakuonHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      dakuon = false;
    } else if (handakuon) {
      sumijiChar = matchedChar(
        handakuonHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      handakuon = false;
    } else if (contraction) {
      sumijiChar = matchedChar(
        contractionHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      contraction = false;
    } else if (dakuonContraction) {
      sumijiChar = matchedChar(
        dakuonContractionHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      dakuonContraction = false;
    } else if (handakuonContraction) {
      sumijiChar = matchedChar(
        handakuonContractionHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      handakuonContraction = false;
    } else if (special) {
      sumijiChar = matchedChar(
        specialHiraganaTable,
        brailleStrings[i].getCharacter(),
      );
      sumijiStrings = sumijiStrings.slice(0, -1); // 現在の点字が"⠀"でない場合は、特殊音なのでsumijiStringsの最後の文字である「？」を削除する
      special = false;
    } else if (special1) {
      sumijiChar = matchedChar(
        specialHiraganaTable1,
        brailleStrings[i].getCharacter(),
      );
      sumijiStrings = sumijiStrings.slice(0, -1); // 現在の点字が"⠀"でない場合は、特殊音なのでsumijiStringsの最後の文字である「。」を削除する
      special1 = false;
    } else if (special2) {
      sumijiChar = matchedChar(
        specialHiraganaTable2,
        brailleStrings[i].getCharacter(),
      );
      special2 = false;
    } else {
      sumijiChar = matchedChar(hiraganaTable, brailleStrings[i].getCharacter());
    }

    if (brailleStrings[i].getCharacter() === "⠐") {
      dakuon = true;
    } else if (brailleStrings[i].getCharacter() === "⠠") {
      handakuon = true;
    } else if (brailleStrings[i].getCharacter() === "⠈") {
      contraction = true;
    } else if (brailleStrings[i].getCharacter() === "⠘") {
      dakuonContraction = true;
    } else if (brailleStrings[i].getCharacter() === "⠨") {
      handakuonContraction = true;
    } else if (brailleStrings[i].getCharacter() === "⠢") {
      special = true;
    } else if (brailleStrings[i].getCharacter() === "⠲") {
      special1 = true;
    } else if (brailleStrings[i].getCharacter() === "⠸") {
      special2 = true;
    } else if (brailleStrings[i].getCharacter() === "⠼") {
      number = true;
    } else if (brailleStrings[i].getCharacter() === "⠤") {
      number = false;
    } else if (brailleStrings[i].getCharacter() === "⠰") {
      alphabet = true; // 外字符
    } else if (brailleStrings[i].getCharacter() === "⠦") {
      alphabet = true; // 外国語引用符（始まり）
    }

    sumijiStrings += sumijiChar;
  });

  return sumijiStrings;
}
