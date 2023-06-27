import React from "react";
import Tutorial from "@/components/Tutorial";
import Practice1 from "./tutorial/tutorial1";
import Practice2 from "./tutorial/tutorial2";
import Practice3 from "./tutorial/tutorial3";
import Practice4 from "./tutorial/tutorial4";
import Practice5 from "./tutorial/tutorial5";
import Practice6 from "./tutorial/tutorial6";
import Tutorial1Dialog1 from "./tutorial/tutorial1/dialog/1_braille_touch.mdx";
import Tutorial1Dialog2 from "./tutorial/tutorial1/dialog/2_write_vowel.mdx";
import Tutorial1Dialog3 from "./tutorial/tutorial2/dialog/3_write_gojyuon.mdx";
import Tutorial1Dialog4 from "./tutorial/tutorial3/dialog/4_write_dakuon_handakuon.mdx";
import Tutorial1Dialog5 from "./tutorial/tutorial4/dialog/5_write_contraction.mdx";
import Tutorial1Dialog6 from "./tutorial/tutorial5/dialog/6_write_special_hiragana.mdx";
import Tutorial1Dialog7 from "./tutorial/tutorial6/dialog/7_read_vowel.mdx";

export default function Touch(): JSX.Element {
  return (
    <>
      <Tutorial
        tutorialSteps={[
          {
            dialog: [
              { title: "点字を打ってみよう", content: <Tutorial1Dialog1 /> },
              { title: "母音を打ってみよう", content: <Tutorial1Dialog2 /> },
            ],
            content: <Practice1 />,
          },
          {
            dialog: [
              { title: "五十音を打ってみよう", content: <Tutorial1Dialog3 /> },
            ],
            content: <Practice2 />,
          },
          {
            dialog: [
              {
                title: "濁音、半濁音を打ってみよう",
                content: <Tutorial1Dialog4 />,
              },
            ],
            content: <Practice3 />,
          },
          {
            dialog: [
              {
                title: "拗音を打ってみよう",
                content: <Tutorial1Dialog5 />,
              },
            ],
            content: <Practice4 />,
          },
          {
            dialog: [
              {
                title: "その他のひらがなを学んで、色々な文字を打ってみよう",
                content: <Tutorial1Dialog6 />,
              },
            ],
            content: <Practice5 />,
          },
          {
            dialog: [
              {
                title: "点字を読んでみよう",
                content: <Tutorial1Dialog7 />,
              },
            ],
            content: <Practice6 />,
          },
        ]}
      />
    </>
  );
}
