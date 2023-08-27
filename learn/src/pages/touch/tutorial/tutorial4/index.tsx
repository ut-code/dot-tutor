import TouchMain from "@/components/TouchMain";

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
]; // 拗音が含まれる言葉

export default function Practice4(): JSX.Element {
  return (
    <TouchMain typeOfQuestions={contractionQuestions} brailleDotCount={6} />
  );
}
