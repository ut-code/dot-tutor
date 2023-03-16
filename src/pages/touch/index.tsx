import React, { useState } from "react";
import { type BrailleChar } from "../../components/brailleDefinitions";
import translateBraille from "../../components/translateBraille";
import EdittableBraille from "./EdittableBraille";
import Layout from "../../components/Layout";
import Tutorial1 from "./tutorial/tutorial1.mdx";
import Tutorial2 from "./tutorial/tutorial2.mdx";

export default function Touch(): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleChar[]>(
    [...Array(100)].map((_) => "⠀")
  );
  const [hiraganaStrings, setHiraganaStrings] = useState<string>();

  return (
    <>
      <Layout
        tutorialDialogSteps={[
          { title: "見出し 2", content: <Tutorial1 /> },
          { title: "見出し 2", content: <Tutorial2 /> },
        ]}
      >
        <button
          type="button"
          onClick={() => {
            setHiraganaStrings(translateBraille(brailleStrings));
          }}
        >
          翻訳
        </button>
        <p>{hiraganaStrings}</p>
        {brailleStrings.map((_, index) => (
          <EdittableBraille
            key={index}
            height={"100"}
            width={"60"}
            brailleStrings={brailleStrings}
            setBrailleStrings={setBrailleStrings}
            index={index}
          />
        ))}
      </Layout>
    </>
  );
}
