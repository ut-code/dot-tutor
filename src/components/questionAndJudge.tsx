import { type BrailleChar } from "../types/brailleDefinitions";
import translateBraille from "../utils/translateBraille";

export const vowelQuestions = [
  "あい",
  "あう",
  "あお",
  "いう",
  "いえ",
  "おい",
  "おう",
  "おお",
];
export const gojyuonQuestions1 = [
  "かき",
  "かこ",
  "かう",
  "かお",
  "きあい",
  "きおう",
  "きく",
  "くい",
  "くう",
  "くき",
  "くく",
  "こい",
  "こうくう",
]; // 「あいうえおかきくけこ」で構成される
export const dakuonHandakuonQuestions = [
  "がんばれ",
  "だんべる",
  "ざるそば",
  "どんぶり",
  "ずばり",
  "でこぼこ",
  "ばくだん",
  "どらやき",
  "ぷりん",
  "だんごむし",
]; //濁音、半濁音が含まれる言葉
export const contractionQuestions = [
  "ぎゅうにゅう",
  "ちゅうい",
  "じゃがいも",
  "しょうゆ",
  "きゅうり",
  "りゅう",
  "ぴょんぴょん",
  "きょうかしょ",
  "きょうじゅ",
  "ぎょうざ",
  "しゅくだい",
  "きょうりゅう",
  "きゅうりょう",
  "しょくよく",
  "りゅうこう",
  "しょくよく",
  "しゅうかん",
  "きゃらくたー",
  "にゅうしゃ",
  "しょうりゃく",
  "しょうたい",
  "しゅっぱつ",
  "しゅうまつ",
  "にゅうがく",
]; //拗音が含まれる言葉
export const questions = ["うぉーきんぐ", "せいめいかがく", "ぴゅーりたん"]; //特殊音が含まれる言葉

export function makeQuestion(questions: string[]): string {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function judge(
  typedBrailleStrings: BrailleChar[],
  question: string
): string {
  const typedAnswer = translateBraille(typedBrailleStrings);
  if (typedAnswer === question) {
    return "正解";
  } else {
    return "不正解";
  }
}

/*
export function NextQuestion(rightOrWrong, ): JSX.Element {
  if (rightOrWrong === "正解") {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setQuestion(makeQuestion(vowelQuestions));
          setHiraganaStrings("");
          judgeAnswer("");
        }}
      >
        次の問題
      </Button>
    );
  } else {
    return <></>;
  }
}
*/
