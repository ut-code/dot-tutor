import { type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, Button, MobileStepper } from "@mui/material";

export default function BottomNavigationBar(props: {
  selectedStep: number;
  setSelectedStep: Dispatch<SetStateAction<number>>;
  tutorialLength: number;
}): JSX.Element {
  const router = useRouter();
  return (
    <>
      <BottomNavigation>
        <MobileStepper
          variant="progress"
          steps={props.tutorialLength}
          position="bottom"
          activeStep={props.selectedStep}
          backButton={
            <Button
              variant="contained"
              disabled={props.selectedStep === 0}
              onClick={() => {
                if (props.selectedStep > 0) {
                  props.setSelectedStep(props.selectedStep - 1);
                }
              }}
            >
              前へ
            </Button>
          }
          nextButton={
            <>
              {props.selectedStep !== props.tutorialLength - 1 ? (
                <Button
                  variant="contained"
                  disabled={props.selectedStep === props.tutorialLength - 1}
                  onClick={() => {
                    if (props.selectedStep < props.tutorialLength - 1) {
                      props.setSelectedStep(props.selectedStep + 1);
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
