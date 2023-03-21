import Layout from "../../components/Layout";
import useTypedBrailleStrings from "../../components/useTypedBrailleStrings";
import Tutorial1 from "./tutorial/tutorial1.mdx";
import Tutorial2 from "./tutorial/tutorial2.mdx";
import Tutorial3 from "./tutorial/1_braille_6dots.mdx";
import Tutorial4 from "./tutorial/2_write_hiragana.mdx";
import Tutorial5 from "./tutorial/3_kanadukai_number.mdx";
import Tutorial6 from "./tutorial/4_alphabet.mdx";
import Tutorial7 from "./tutorial/5_symbol.mdx";

export default function Keyboard(): JSX.Element {
  const [typedBrailleStrings] = useTypedBrailleStrings();
  return (
    <>
      <Layout
        tutorialDialogSteps={[
          { title: "パソコンでの点字の入力方法", content: <Tutorial3 /> },
          { title: "ひらがなを入力してみよう", content: <Tutorial4 /> },
          { title: "例外ルールと数字", content: <Tutorial5 /> },
          { title: "アルファベットの入力方法", content: <Tutorial6 /> },
          { title: "記号を含む文字列", content: <Tutorial7 /> },
          { title: "見出し 2", content: <Tutorial1 /> },
          { title: "見出し 2", content: <Tutorial2 /> },
        ]}
      >
        {typedBrailleStrings}
      </Layout>
    </>
  );
}
