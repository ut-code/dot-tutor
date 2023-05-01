import React from "react";
import Tutorial from "../../components/Tutorial";
import Tutorial1 from "./tutorial/tutorial1";
import Tutorial1Dialog1 from "./tutorial/tutorial1/dialog/1_braille_touch.mdx";
import Tutorial1Dialog2 from "./tutorial/tutorial1/dialog/2_write_vowel.mdx";
import Tutorial1Dialog3 from "./tutorial/tutorial1/dialog/3_write_gojyuon.mdx";
import Tutorial1Dialog4 from "./tutorial/tutorial1/dialog/4_write_dakuon_handakuon.mdx";
import {
  vowelQuestions,
  gojyuonQuestions1,
  dakuonHandakuonQuestions,
} from "../../components/questionAndJudge";

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
            content: <Tutorial1 typeOfQuestions={vowelQuestions} />,
          },
          {
            dialog: [
              { title: "五十音を打ってみよう", content: <Tutorial1Dialog3 /> },
            ],
            content: <Tutorial1 typeOfQuestions={gojyuonQuestions1} />,
          },
          {
            dialog: [
              {
                title: "濁音、半濁音を打ってみよう",
                content: <Tutorial1Dialog4 />,
              },
            ],
            content: <Tutorial1 typeOfQuestions={dakuonHandakuonQuestions} />,
          },
        ]}
      />
    </>
  );
}
