import React from "react";
import Tutorial from "@/components/Tutorial";
import Practice6 from "./tutorial/tutorial6";
import Practice7 from "./tutorial/tutorial7";
import Tutorial1Dialog7 from "./tutorial/tutorial6/dialog/7_write_kanji.mdx";
import Tutorial1Dialog8 from "./tutorial/tutorial7/dialog/8_advanced_kanji.mdx";

export default function Touch(): JSX.Element {
  return (
    <Tutorial
      tutorialSteps={[
        {
          dialog: [
            {
              title: "簡単な漢点字の入力をしよう",
              content: <Tutorial1Dialog7 />,
            },
          ],
          content: <Practice6 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "構造を意識して漢点字を学習しよう",
              content: <Tutorial1Dialog8 />,
            },
          ],
          content: <Practice7 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
      ]}
    />
  );
}
