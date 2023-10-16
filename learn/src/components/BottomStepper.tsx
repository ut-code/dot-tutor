import { type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, Button, MobileStepper } from "@mui/material";

export default function BottomStepper({
  selectedStep,
  setSelectedStep,
  length,
}: {
  selectedStep: number;
  setSelectedStep: Dispatch<SetStateAction<number>>;
  length: number;
}): JSX.Element {
  const router = useRouter();
  return (
    <BottomNavigation>
      <MobileStepper
        variant="progress"
        steps={length}
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
            前のステップへ
          </Button>
        }
        nextButton={
          selectedStep !== length - 1 ? (
            <Button
              variant="contained"
              disabled={selectedStep === length - 1}
              onClick={() => {
                if (selectedStep < length - 1) {
                  setSelectedStep(selectedStep + 1);
                }
              }}
            >
              次のステップへ
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={async () => {
                await router.push("/");
              }}
            >
              終了
            </Button>
          )
        }
      />
    </BottomNavigation>
  );
}
