import Tutorial from "@/components/Tutorial";
import Tutorial1, {
  questionList1,
  questionList2,
  questionList3,
  questionList4,
  questionList5,
} from "./tutorial/tutorial1";
import Tutorial1Dialog1 from "./tutorial/tutorial1/dialog/1_braille_6dots.mdx";
import Tutorial1Dialog2 from "./tutorial/tutorial1/dialog/2_write_hiragana.mdx";
import Tutorial1Dialog3 from "./tutorial/tutorial1/dialog/3_kanadukai.mdx";
import Tutorial1Dialog6 from "./tutorial/tutorial1/dialog/3_number.mdx";
import Tutorial1Dialog4 from "./tutorial/tutorial1/dialog/4_alphabet.mdx";
import Tutorial1Dialog5 from "./tutorial/tutorial1/dialog/5_symbol.mdx";

export default function Keyboard(): JSX.Element {
  return (
    <>
      <Tutorial
        tutorialSteps={[
          {
            dialog: [
              {
                title: "パソコンでの点字の入力方法",
                content: <Tutorial1Dialog1 />,
              },
              {
                title: "ひらがなを入力してみよう",
                content: <Tutorial1Dialog2 />,
              },
            ],
            content: <Tutorial1 questionList={questionList1} />,
            hasHintHiraganaTable: true,
          },
          {
            dialog: [
              {
                title: "かなづかいの例外ルール",
                content: <Tutorial1Dialog3 />,
              },
            ],
            content: <Tutorial1 questionList={questionList2} />,
            hasHintHiraganaTable: true,
          },
          {
            dialog: [
              {
                title: "数字の書き方",
                content: <Tutorial1Dialog6 />,
              },
            ],
            content: <Tutorial1 questionList={questionList3} />,
            hasHintHiraganaTable: true,
          },
          {
            dialog: [
              {
                title: "アルファベットの入力方法",
                content: <Tutorial1Dialog4 />,
              },
            ],
            content: <Tutorial1 questionList={questionList4} />,
            hasHintHiraganaTable: false,
          },
          {
            dialog: [
              { title: "記号を含む文字列", content: <Tutorial1Dialog5 /> },
            ],
            content: <Tutorial1 questionList={questionList5} />,
            hasHintHiraganaTable: true,
          },
        ]}
      />
    </>
  );
}
