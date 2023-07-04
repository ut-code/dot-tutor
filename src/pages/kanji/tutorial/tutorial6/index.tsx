import EightTouchMain from "@/components/EightTouchMain";

export const kanjiQuestions = [
  "雨天",
  "山村",
  "名目",
  "本年",
  "出入口",
  "上下",
  "赤白",
  "男女",
  "正しい",
]; // 濁音、半濁音が含まれる言葉

export default function Practice3(): JSX.Element {
  return <EightTouchMain typeOfQuestions={kanjiQuestions} />;
}
