import Layout from "../../components/Layout";
import useTypedBrailleStrings from "../../components/useTypedBrailleStrings";
import Tutorial1 from "./tutorial/tutorial1.mdx";
import Tutorial2 from "./tutorial/tutorial2.mdx";

export default function Keyboard(): JSX.Element {
  const [typedBrailleStrings] = useTypedBrailleStrings();
  return (
    <>
      <Layout
        tutorialDialogSteps={[
          { title: "見出し 1", content: <Tutorial1 /> },
          { title: "見出し 1", content: <Tutorial2 /> },
        ]}
      >
        {typedBrailleStrings}
      </Layout>
    </>
  );
}
