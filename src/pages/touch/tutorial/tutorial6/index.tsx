import ReadMain from "@/components/ReadMain";
import { SixDotBraille } from "@/models/BrailleCharacter";

// export const vowelQuestions: SixDotBraille[] = ["⠁","⠃"];
export const vowelQuestions = ["あ", "い"];

export default function Practice1(): JSX.Element {
  return <ReadMain typeOfQuestions={vowelQuestions} />;
}
