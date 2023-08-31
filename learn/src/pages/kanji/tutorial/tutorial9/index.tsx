import TouchMain from "@/components/TouchMain";

export const advancedkanjiQuestions = ["続編", "談話", "住宅", "安定"]; // 濁音、半濁音が含まれる言葉

export default function Practice4(): JSX.Element {
  return (
    <TouchMain typeOfQuestions={advancedkanjiQuestions} brailleDotCount={8} />
  );
}
