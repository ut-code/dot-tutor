import TouchMain from "@/components/TouchMain";

export const advancedkanjiQuestions = ["神"]; // 濁音、半濁音が含まれる言葉

export default function Practice3(): JSX.Element {
  return (
    <>
      <p>「祖」⡗⢼ 「申」⠡⢮</p>
      <TouchMain typeOfQuestions={advancedkanjiQuestions} />
    </>
  );
}
