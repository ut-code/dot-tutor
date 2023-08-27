import React from "react";
import Tutorial from "@/components/Tutorial";
import Practice1 from "./tutorial/tutorial1";
import Tutorial1Dialog1 from "./tutorial/tutorial1/dialog/1_read.mdx";
import Tutorial1Dialog2 from "./tutorial/tutorial1/dialog/2_read_vowel.mdx";
import Tutorial1Dialog3 from "./tutorial/tutorial1/dialog/3_read_gojyuon.mdx";
import Tutorial1Dialog4 from "./tutorial/tutorial1/dialog/4_read_dakuon_handakuon.mdx";
import Tutorial1Dialog5 from "./tutorial/tutorial1/dialog/5_read_contraction.mdx";
import Tutorial1Dialog6 from "./tutorial/tutorial1/dialog/6_read_special_hiragana.mdx";

export default function Read(): JSX.Element {
  return (
    <Tutorial
      tutorialSteps={[
        {
          dialog: [
            { title: "点字を読んでみよう", content: <Tutorial1Dialog1 /> },
            { title: "母音を読んでみよう", content: <Tutorial1Dialog2 /> },
          ],
          content: <Practice1 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            { title: "五十音を読んでみよう", content: <Tutorial1Dialog3 /> },
          ],
          content: <Practice1 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "濁音、半濁音を読んでみよう",
              content: <Tutorial1Dialog4 />,
            },
          ],
          content: <Practice1 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            { title: "拗音を読んでみよう", content: <Tutorial1Dialog5 /> },
          ],
          content: <Practice1 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "その他のひらがなを学んで、色々な文字を読んでみよう",
              content: <Tutorial1Dialog6 />,
            },
          ],
          content: <Practice1 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
      ]}
    />
  );
}
