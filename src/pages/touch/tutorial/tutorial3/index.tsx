import TouchMain from "../../../../components/TouchMain";

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
]; // 濁音、半濁音が含まれる言葉

export default function Practice3({}): JSX.Element {
  return <TouchMain typeOfQuestions={dakuonHandakuonQuestions} />;
}
