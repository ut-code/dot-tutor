import TouchMain from "@/components/TouchMain";

export const advancedkanjiQuestions = ["福神づけ", "筆箱", "落葉"]; // 濁音、半濁音が含まれる言葉

export default function Practice4(): JSX.Element {
  return (
    <TouchMain typeOfQuestions={advancedkanjiQuestions} brailleDotCount={8} />
  );
}
