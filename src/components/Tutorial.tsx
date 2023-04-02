import { useState } from "react";
import Layout from "./Layout";
import { type TutorialDialogSteps } from "./TutorialDialog";
import { useRouter } from "next/router";
import { Button, BottomNavigation, MobileStepper } from "@mui/material";

interface TutorialStep {
  dialog: TutorialDialogSteps;
  content: JSX.Element;
}

export type TutorialSteps = TutorialStep[];

export default function Tutorial(props: {
  tutorialSteps: TutorialSteps;
}): JSX.Element {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const router = useRouter();
  return (
    <>
      <Layout tutorialDialogSteps={props.tutorialSteps[selectedStep].dialog}>
        {props.tutorialSteps[selectedStep].content}
      </Layout>
      <BottomNavigation>
        <MobileStepper
          variant="progress"
          steps={props.tutorialSteps.length}
          position="bottom"
          activeStep={selectedStep}
          backButton={
            <Button
              variant="contained"
              disabled={selectedStep === 0}
              onClick={() => {
                if (selectedStep > 0) {
                  setSelectedStep(selectedStep - 1);
                }
              }}
            >
              前へ
            </Button>
          }
          nextButton={
            <>
              {selectedStep !== props.tutorialSteps.length - 1 ? (
                <Button
                  variant="contained"
                  disabled={selectedStep === props.tutorialSteps.length - 1}
                  onClick={() => {
                    if (selectedStep < props.tutorialSteps.length - 1) {
                      setSelectedStep(selectedStep + 1);
                    }
                  }}
                >
                  次へ
                </Button>
              ) : (
                <Button
                  variant="contained"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={async () => await router.push("/")}
                >
                  終了
                </Button>
              )}
            </>
          }
        />
      </BottomNavigation>
    </>
  );
}
