import React from "react";
import Tutorial from "@/components/Tutorial";
import Practice6 from "./tutorial/tutorial6";
import Practice7 from "./tutorial/tutorial7";
import Practice8 from "./tutorial/tutorial8";
import Practice9 from "./tutorial/tutorial9";
import Practice10 from "./tutorial/tutorial10";
import Tutorial1Dialog7 from "./tutorial/tutorial6/dialog/7_write_kanji.mdx";
import Tutorial1Dialog8 from "./tutorial/tutorial7/dialog/8_advanced_kanji_1.mdx";
import Tutorial1Dialog9 from "./tutorial/tutorial8/dialog/9_advanced_kanji_2.mdx";
import Tutorial1Dialog10 from "./tutorial/tutorial9/dialog/10_advanced_kanji_3.mdx";
import Tutorial1Dialog11 from "./tutorial/tutorial10/dialog/11_advanced_kanji_4.mdx";

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
              title: "構造を意識して漢点字を学習しよう①",
              content: <Tutorial1Dialog8 />,
            },
          ],
          content: <Practice7 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "構造を意識して漢点字を学習しよう②",
              content: <Tutorial1Dialog9 />,
            },
          ],
          content: <Practice8 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "構造を意識して漢点字を学習しよう③",
              content: <Tutorial1Dialog10 />,
            },
          ],
          content: <Practice9 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
        {
          dialog: [
            {
              title: "構造を意識して漢点字を学習しよう④",
              content: <Tutorial1Dialog11 />,
            },
          ],
          content: <Practice10 />,
          hasHintHiraganaTable: false,
          hasHintAlphabetTable: false,
        },
      ]}
    />
  );
}
