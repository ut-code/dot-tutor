import TouchMain from "@/components/TouchMain";

export const questions = ["うぉーきんぐ", "せいめいかがく", "ぴゅーりたん"]; // 特殊音が含まれる言葉

export default function Practice5(): JSX.Element {
  return <TouchMain typeOfQuestions={questions} />;
}
