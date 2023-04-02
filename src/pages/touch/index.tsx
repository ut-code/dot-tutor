import React from "react";
import Layout from "@/components/Layout";
import Tutorial1 from "./tutorial/tutorial1";
import Tutorial1Dialog1 from "./tutorial/tutorial1/dialog/dialog1.mdx";
import Tutorial1Dialog2 from "./tutorial/tutorial1/dialog/dialog2.mdx";

export default function Touch(): JSX.Element {
  return (
    <>
      <Layout
        tutorialSteps={[
          {
            dialog: [
              { title: "点字を打ってみよう", content: <Tutorial1Dialog1 /> },
              { title: "点字を打ってみよう", content: <Tutorial1Dialog2 /> },
            ],
            content: <Tutorial1 />,
          },
        ]}
      />
    </>
  );
}
