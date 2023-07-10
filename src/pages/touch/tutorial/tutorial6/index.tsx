import ReadMain from "@/components/ReadMain";

export const vowelQuestions = ["あ", "い"];

export default function Practice1(): JSX.Element {
  return <ReadMain typeOfQuestions={vowelQuestions} />;
}
