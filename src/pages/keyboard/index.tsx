import Layout from "@/components/Layout";
import useTypedBrailleStrings from "../../components/useTypedBrailleStrings";

export default function Keyboard(): JSX.Element {
  const [typedBrailleStrings] = useTypedBrailleStrings();
  return (
    <>
      <Layout
        tutorialDialogSteps={[
          { title: "Title", content: <>content</> },
          { title: "Title2", content: <>content2</> },
        ]}
      >
        {typedBrailleStrings}
      </Layout>
    </>
  );
}
